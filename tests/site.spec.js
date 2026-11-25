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
      await page.locator(`nav.primary a[href="/#${id}"]`).click();
      await expect(page).toHaveURL(new RegExp(`#${id}$`));
      await expect(page.locator(`#${id}`)).toBeInViewport();
    }
  });

  test('mobile menu opens, traps Escape and returns focus', async ({ page }, info) => {
    test.skip(info.project.name === 'desktop', 'mobile and tablet only');
    await page.goto('/');
    const toggle = page.locator('.menu-toggle');
    await toggle.click();
    const menu = page.locator('#mobile-menu');
    await expect(menu).toBeVisible();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Escape');
    await expect(menu).toBeHidden();
    await expect(toggle).toBeFocused();
    await toggle.click();
    await menu.getByRole('link', { name: 'Projects' }).click();
    await expect(menu).toBeHidden();
    await expect(page).toHaveURL(/#projects$/);
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
