// Serves dist/ like Vercel does with cleanUrls: /about -> about.html, unknown paths -> 404.html with status 404.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const root = new URL('../dist/', import.meta.url).pathname;
const port = Number(process.env.PORT || 4322);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8', '.json': 'application/json' };

async function resolve(pathname) {
  const clean = normalize(decodeURIComponent(pathname)).replace(/^(\.\.[/\\])+/, '');
  const candidates = clean.endsWith('/') ? [join(clean, 'index.html')] : [clean, `${clean}.html`];
  for (const c of candidates) {
    const file = join(root, c);
    if (!file.startsWith(root)) continue;
    try { if ((await stat(file)).isFile()) return file; } catch {}
  }
  return null;
}

createServer(async (req, res) => {
  const { pathname } = new URL(req.url || '/', 'http://x');
  const file = await resolve(pathname);
  if (!file) {
    res.writeHead(404, { 'Content-Type': types['.html'] });
    return res.end(await readFile(join(root, '404.html')));
  }
  res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' });
  res.end(await readFile(file));
}).listen(port, () => console.log(`Serving dist on http://localhost:${port}`));
