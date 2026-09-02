# Learning-track illustrations

Generic, topic-matched illustrations for the briefings at `/portal/learn`.

**Source:** [unDraw](https://undraw.co), obtained via the npm package
[`undraw-svg`](https://www.npmjs.com/package/undraw-svg) v2.0.0.

**Licence:** unDraw illustrations are free for commercial use without
attribution. The `undraw-svg` package that distributes them is MIT licensed;
its notice is kept alongside these files in `LICENCE-undraw-svg.md`, since the
MIT terms require the notice to travel with redistributed copies.

**Modification:** each file has been recoloured from unDraw's light-background
palette into the portal's dark-theme ramp. Colours are remapped by luminance
and saturation — dark line work becomes `#d2d7eb`, pale fills become `#4a5273`,
mid tones `#8b93b8`, and the pink accents `#a7aed0`. The geometry is unchanged.
The script that did it is not kept in the repo; the mapping is documented here
so the transformation can be reproduced or reversed.

Filenames map to briefing slugs via `src/data/imagery.js`.
