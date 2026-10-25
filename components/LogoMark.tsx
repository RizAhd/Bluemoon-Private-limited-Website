import { asset } from "@/lib/asset";

/** The Bluemoon mark drawn in the current text colour, so it suits light, dark and photo backgrounds. */
export function LogoMark({ className }: { className?: string }) {
  const url = `url(${asset("/logo-mark-white.png")})`;
  return (
    <span
      className={`logomark${className ? ` ${className}` : ""}`}
      aria-hidden="true"
      style={{ WebkitMaskImage: url, maskImage: url }}
    />
  );
}
