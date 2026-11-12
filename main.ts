// "The Moonflower Gardener" — coolest-art-01 entry (Node 22, standard library only).
// The art is entry.png beside this file: a paper-cut night garden.
// A tiny gardener waters a giant glowing moonflower whose heart is a small
// full moon, in dark green and gold. He waters light into the flower.
// The program copies it to /output/entry.png.
// The gate takes a whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels,
// and the judge sees exactly the bytes copied. Deterministic: a plain copy,
// so running the program twice writes identical bytes every time.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
if (!existsSync(source)) {
  throw new Error('entry.png is missing beside main.ts');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));
