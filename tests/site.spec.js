// @ts-check
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = ['/', '/projects/vendoracrm', '/projects/tesselix-learn', '/projects/tesselix-website', '/projects/hh-marine'];

for (const path of pages) {
  test.describe(`page ${path}`, () => {
    test('loads with one h1, metadata and no console errors', async ({ page }) => {
      /** @type {string[]} */
      const errors = [];
      page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
      page.on('pageerror', (e) => errors.push(e.message));
      const res = await page.goto(path);
      expect(res?.status()).toBe(200);
      await expect(page.locator('h1')).toHaveCount(1);
      expect((await page.title()).length).toBeGreaterThan(10);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /.{50,}/);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(new URL(canonical ?? '').pathname).toBe(path);
      await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /\/og\.png$/);
      expect(errors).toEqual([]);
    });

    test('has no automated accessibility violations', async ({ page }) => {
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.goto(path);
      const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
      expect(results.violations.map((v) => `${v.id}: ${v.nodes.length}`)).toEqual([]);
    });

    test('has no horizontal overflow', async ({ page }) => {
      await page.goto(path);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow).toBeLessThanOrEqual(0);
    });

    test('every internal link and anchor resolves', async ({ page, request }) => {
      await page.goto(path);
      const hrefs = await page.locator('a[href]').evaluateAll((as) => as.map((a) => a.getAttribute('href')));
      for (const href of new Set(hrefs)) {
        if (!href || /^(https?:|mailto:)/.test(href)) continue;
        const [p, hash] = href.split('#');
        const target = p || path;
        const res = await request.get(target);
        expect(res.status(), href).toBe(200);
        if (hash) {
          const html = await res.text();
          expect(html.includes(`id="${hash}"`), href).toBe(true);
        }
      }
    });

    test('external links open safely', async ({ page }) => {
      await page.goto(path);
      const bad = await page.locator('a[target="_blank"]').evaluateAll((as) => as.filter((a) => !(a.getAttribute('rel') || '').includes('noopener')).length);
      expect(bad).toBe(0);
    });
  });
}

test('unknown pages return a real 404', async ({ request }) => {
  const res = await request.get('/does-not-exist');
  expect(res.status()).toBe(404);
});

test('robots.txt and sitemap are published', async ({ request }) => {
  const robots = await request.get('/robots.txt');
  expect(await robots.text()).toContain('Sitemap:');
  const sitemap = await request.get('/sitemap-0.xml');
  const xml = await sitemap.text();
  for (const p of pages.slice(1)) expect(xml).toContain(p);
  expect(xml).not.toContain('404');
});

test('home page shows verified product status, not invented metrics', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('60+ initial sign-ups', { exact: false }).first()).toBeVisible();
  await expect(page.getByText('No established paying customer base yet', { exact: false }).first()).toBeVisible();
  await expect(page.getByText('Not launched', { exact: false }).first()).toBeVisible();
  const body = await page.locator('body').innerText();
  for (const banned of ['Next.js', 'Convex', 'Clerk', 'shadcn', 'Radix', 'Jane Doe', 'testimonial']) expect(body).not.toContain(banned);
});

test.describe('navigation', () => {
  test('desktop nav links reach every section', async ({ page, isMobile }, info) => {
    test.skip(isMobile || info.project.name !== 'desktop', 'desktop only');
    await page.goto('/');
    for (const id of ['about', 'expertise', 'projects', 'experience', 'contact']) {
      await page.locator(`#site-nav ul a[href="/#${id}"]`).click();
      await expect(page).toHaveURL(new RegExp(`#${id}$`));
      await expect(page.locator(`#${id}`)).toBeInViewport();
    }
  });

  test('skip link moves focus to main content', async ({ page }, info) => {
    test.skip(info.project.name !== 'desktop', 'desktop only');
    await page.goto('/');
    await page.keyboard.press('Tab');
    await expect(page.locator('.skip-link')).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/#main$/);
  });
});

test.describe('contact form', () => {
  test('empty submission shows errors and does not open email', async ({ page }) => {
    await page.goto('/#contact');
    let navigated = false;
    page.on('framenavigated', (f) => { if (f.url().startsWith('mailto:')) navigated = true; });
    await page.getByRole('button', { name: 'Open in my email app' }).click();
    await expect(page.locator('#cf-name-err')).toBeVisible();
    await expect(page.locator('#cf-email-err')).toBeVisible();
    await expect(page.locator('#cf-message-err')).toBeVisible();
    await expect(page.locator('#cf-name')).toBeFocused();
    expect(navigated).toBe(false);
  });

  test('valid submission builds a correct mailto link', async ({ page }) => {
    await page.goto('/#contact');
    await page.evaluate(() => {
      // Record the mailto URL instead of leaving the page.
      Object.defineProperty(window, 'location', { value: { href: '' }, writable: true });
    }).catch(() => {});
    await page.fill('#cf-name', 'Ada Okafor');
    await page.fill('#cf-email', 'ada@example.com');
    await page.selectOption('#cf-topic', 'A client project');
    await page.fill('#cf-message', 'We need a booking system.');
    const [req] = await Promise.all([
      page.waitForEvent('framenavigated', { timeout: 3000 }).catch(() => null),
      page.getByRole('button', { name: 'Open in my email app' }).click(),
    ]);
    await expect(page.locator('.result')).toContainText('email app should now open');
    for (const id of ['#cf-name-err', '#cf-email-err', '#cf-message-err']) await expect(page.locator(id)).toBeHidden();
    void req;
  });
});

// The menu fix: run the header checks at every width the site must support.
const widths = [320, 375, 430, 768, 1024, 1440];
for (const width of widths) {
  test.describe(`header at ${width}px`, () => {
    test.use({ viewport: { width, height: width <= 430 ? 740 : 900 } });
    const isMobileWidth = width <= 960;

    test('shows the right navigation without overflow or overlap', async ({ page }, info) => {
      test.skip(info.project.name !== 'desktop', 'viewport is set explicitly; run once');
      await page.goto('/');
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow).toBeLessThanOrEqual(0);
      // The frosted header must keep its blur (it lives on ::before so it cannot trap the mobile panel).
      expect(await page.evaluate(() => getComputedStyle(document.querySelector('.site-header') ?? document.body, '::before').backdropFilter)).toBe('blur(10px)');
      const toggle = page.locator('.menu-toggle');
      const logo = page.locator('.mark');
      if (isMobileWidth) {
        await expect(toggle).toBeVisible();
        await expect(page.locator('#site-nav')).toBeHidden();
        const t = await toggle.boundingBox();
        const l = await logo.boundingBox();
        expect(t && l).toBeTruthy();
        if (!t || !l) return;
        expect(t.width).toBeGreaterThanOrEqual(44);
        expect(t.height).toBeGreaterThanOrEqual(44);
        expect(t.x + t.width).toBeLessThanOrEqual(width);       // inside the screen
        expect(width - (t.x + t.width)).toBeGreaterThanOrEqual(8); // space from the edge
        expect(t.x - (l.x + l.width)).toBeGreaterThanOrEqual(16); // no overlap with the logo
      } else {
        await expect(toggle).toBeHidden();
        for (const label of ['Home', 'About', 'Expertise', 'Projects', 'Experience', 'Contact']) {
          await expect(page.locator('#site-nav').getByRole('link', { name: label, exact: true })).toBeVisible();
        }
        await expect(page.locator('#site-nav .cta')).toBeVisible();
      }
    });

    test('mobile menu covers the screen, works by touch and keyboard', async ({ page }, info) => {
      test.skip(info.project.name !== 'desktop' || !isMobileWidth, 'mobile widths only; run once');
      await page.goto('/');
      await page.mouse.wheel(0, 1500);
      const toggle = page.locator('.menu-toggle');
      const panel = page.locator('#site-nav');
      await expect(toggle).toHaveAttribute('aria-expanded', 'false');
      await expect(toggle).toHaveAttribute('aria-label', 'Open menu');

      await toggle.click();
      await expect(toggle).toHaveAttribute('aria-expanded', 'true');
      await expect(toggle).toHaveAttribute('aria-label', 'Close menu');
      await expect(panel).toBeVisible();
      // The original bug: the panel was trapped inside the 68px header.
      const vh = page.viewportSize()?.height ?? 0;
      // Measure after the 0.2s open transition has settled.
      await expect.poll(async () => { const b = await panel.boundingBox(); return b ? Math.round(b.y + b.height) : 0; }).toBeGreaterThanOrEqual(vh - 1);
      expect((await panel.boundingBox())?.width).toBe(width);
      // Every link is visible, tappable and on top of the page.
      for (const label of ['Home', 'About', 'Expertise', 'Projects', 'Experience', 'Contact']) {
        const link = panel.getByRole('link', { name: label, exact: true });
        await expect(link).toBeInViewport();
        const lb = await link.boundingBox();
        expect(lb && lb.height).toBeGreaterThanOrEqual(44);
        const onTop = await link.evaluate((el) => {
          const r = el.getBoundingClientRect();
          return el.contains(document.elementFromPoint(r.left + 10, r.top + r.height / 2));
        });
        expect(onTop, label).toBe(true);
      }
      // Background does not scroll while open.
      expect(await page.evaluate(() => getComputedStyle(document.documentElement).overflow)).toBe('hidden');
      // Accessibility with the menu open.
      const results = await new AxeBuilder({ page }).include('.site-header').analyze();
      expect(results.violations.map((v) => v.id)).toEqual([]);

      // Escape closes and returns focus.
      await page.keyboard.press('Escape');
      await expect(panel).toBeHidden();
      await expect(toggle).toBeFocused();
      expect(await page.evaluate(() => getComputedStyle(document.documentElement).overflow)).not.toBe('hidden');

      // The close icon closes.
      await toggle.click();
      await expect(panel).toBeVisible();
      await toggle.click();
      await expect(panel).toBeHidden();

      // Choosing a section closes the menu and scrolls there.
      await toggle.click();
      await panel.getByRole('link', { name: 'Experience', exact: true }).click();
      await expect(panel).toBeHidden();
      await expect(page).toHaveURL(/#experience$/);
      await expect(page.locator('#experience')).toBeInViewport();
      await expect(toggle).toHaveAttribute('aria-expanded', 'false');

      // Keyboard: Enter opens, focus stays inside the menu.
      await toggle.focus();
      await page.keyboard.press('Enter');
      await expect(panel).toBeVisible();
      for (let i = 0; i < 10; i++) await page.keyboard.press('Tab');
      const inside = await page.evaluate(() => !!document.activeElement?.closest('.site-header'));
      expect(inside).toBe(true);
    });

    test('menu closes when the screen widens to desktop', async ({ page }, info) => {
      test.skip(info.project.name !== 'desktop' || width !== 768, 'once');
      await page.goto('/');
      await page.locator('.menu-toggle').click();
      await page.setViewportSize({ width: 1280, height: 900 });
      await expect(page.locator('.site-header')).toHaveAttribute('data-open', 'false');
      await expect(page.locator('#site-nav')).toBeVisible();
    });
  });
}
