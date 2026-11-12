// "The Potter's Elephant" — coolest-art-01 entry (Node 22, standard library only).
// The art is entry.png beside this file: a Bauhaus poster in daylight.
// A potter shapes a tiny clay elephant; its imagined spirit looms huge behind
// him as a flat teal silhouette against a terracotta sunburst. Terracotta,
// teal and cream only. The program copies it to /output/entry.png.
// The gate takes a whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels,
// and the judge sees exactly the bytes copied. Deterministic: a plain copy.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
