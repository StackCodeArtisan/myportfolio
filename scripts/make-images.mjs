// Generates public/og.png, favicon-32.png and apple-touch-icon.png from HTML.
// Run with: node scripts/make-images.mjs  (needs Playwright and a local Chrome)
import { chromium } from '@playwright/test';
import { readFileSync } from 'node:fs';

const executablePath = process.env.CHROME_PATH || undefined;
const browser = await chromium.launch({ executablePath, channel: executablePath ? undefined : 'chrome' });
const fontDir = new URL('../node_modules/@fontsource-variable/', import.meta.url);
const serif = readFileSync(new URL('newsreader/files/newsreader-latin-opsz-normal.woff2', fontDir)).toString('base64');
const sans = readFileSync(new URL('instrument-sans/files/instrument-sans-latin-wdth-normal.woff2', fontDir)).toString('base64');
const fonts = `@font-face{font-family:S;src:url(data:font/woff2;base64,${serif})}@font-face{font-family:I;src:url(data:font/woff2;base64,${sans})}`;
const favicon = readFileSync(new URL('../public/favicon.svg', import.meta.url), 'utf8');

const og = `<html><head><style>${fonts}
body{margin:0;width:1200px;height:630px;background:#121417;color:#E8EAEF;font-family:I;position:relative;overflow:hidden}
.grid{position:absolute;inset:0;background-image:linear-gradient(#2A2F37 1px,transparent 1px),linear-gradient(90deg,#2A2F37 1px,transparent 1px);background-size:40px 40px;opacity:.45}
.c{position:absolute;left:80px;top:90px;right:80px}
.n{color:#8FB0FF;font-size:30px;margin-bottom:34px}
h1{font-family:S;font-weight:400;font-size:76px;line-height:1.05;margin:0;max-width:900px;letter-spacing:-1px}
.r{position:absolute;left:80px;bottom:70px;font-size:26px;color:#A3ABB8}
.bar{position:absolute;left:0;bottom:0;height:8px;width:100%;background:linear-gradient(90deg,#5B8CFF,#8B7CF6)}
</style></head><body><div class="grid"></div><div class="c"><div class="n">Joshua Olaoluwa Idowu</div>
<h1>Engineering digital products that solve real problems.</h1></div>
<div class="r">Full-Stack Software Engineer and Founder of Tesselix LTD, Lagos</div><div class="bar"></div></body></html>`;

const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(og); await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: 'public/og.png' });

for (const [file, size] of [['public/favicon-32.png', 32], ['public/apple-touch-icon.png', 180]]) {
  const p = await browser.newPage({ viewport: { width: size, height: size } });
  await p.setContent(`<html><body style="margin:0">${favicon.replace('<svg ', `<svg width="${size}" height="${size}" `)}</body></html>`);
  await p.screenshot({ path: file, omitBackground: true });
}
await browser.close();
console.log('images written');
