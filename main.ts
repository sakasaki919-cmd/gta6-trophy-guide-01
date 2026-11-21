// gta6-trophy-guide-01 — entrypoint: hand the built guide in.
//
// The guide itself is static files under app/ (index.html, app.js, style.css,
// data/trophies.json) plus screenshots/ of the running app. This program copies
// both trees into the output directory, then asks make.fun's own dossier
// library to describe the entry and writes that description as dossier.json.
//
// Run it from the repository root:
//   MAKEFUN_OUTPUT_DIR=out node main.ts
// or without the variable, which writes to /output.

import { cpSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-frontend.ts';

// The repository root is the directory this file lives in.
const repoRoot = dirname(fileURLToPath(import.meta.url));

// The scorer hands the output directory in as an environment variable;
// fall back to /output when it is not set.
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR || '/output');

// The bounty's caps: the dossier text budget, at most 4 screenshots of at
// most 256 KiB each, and the app tree limits from the gate.
const caps = {
  text_max_bytes: 163840,
  screenshots: { max: 4, max_bytes: 262144 },
  app_max_files: 993,
  app_max_bytes: 50331648,
};

function copyEntry(name: string): void {
  const source = join(repoRoot, name);
  if (!existsSync(source)) return;
  cpSync(source, join(outDir, name), { recursive: true });
}

mkdirSync(outDir, { recursive: true });
copyEntry('app');
copyEntry('screenshots');

// buildDossier returns the dossier as canonical JSON bytes; write them out
// exactly as returned so the scorer's own copy agrees byte for byte.
const dossierBytes = buildDossier(outDir, caps);
writeFileSync(join(outDir, 'dossier.json'), dossierBytes);
console.log(`dossier written: ${join(outDir, 'dossier.json')} (${dossierBytes.length} bytes)`);
