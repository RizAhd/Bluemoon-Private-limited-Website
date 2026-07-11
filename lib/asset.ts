// Prefixes public asset paths (raw <img src>, etc.) with the GitHub Pages base
// path. Next.js auto-prefixes <Link> and next/image, but NOT raw string src, so
// every hardcoded "/…" asset path must go through this helper.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
