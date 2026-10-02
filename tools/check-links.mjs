import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '../dist');
const errors = [];
let count = 0;
function visit(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = resolve(dir, entry.name);
    if (entry.isDirectory()) visit(path);
    else if (entry.name.endsWith('.html')) {
      const html = readFileSync(path, 'utf8');
      for (const [, url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
        if (/^(https?:|mailto:|data:)/.test(url)) continue;
        count++;
        const [target, hash] = url.split('#');
        let dest = target ? resolve(dirname(path), target) : path;
        if (existsSync(dest) && statSync(dest).isDirectory()) dest = resolve(dest, 'index.html');
        if (!existsSync(dest)) errors.push(`${path}: missing ${url}`);
        else if (hash && dest.endsWith('.html') && !readFileSync(dest, 'utf8').includes(`id="${hash}"`)) errors.push(`${path}: missing anchor ${url}`);
      }
    }
  }
}
visit(root);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`Checked ${count} local links and assets across all pages.`);
