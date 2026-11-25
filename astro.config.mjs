// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical URLs, Open Graph and the sitemap need the public address.
// On Vercel this comes from the project's production domain automatically.
// To use a custom domain, set PUBLIC_SITE_URL in Vercel (for example https://joshuaidowu.com).
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site = process.env.PUBLIC_SITE_URL || (vercelHost ? `https://${vercelHost}` : 'http://localhost:4321');

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
});
