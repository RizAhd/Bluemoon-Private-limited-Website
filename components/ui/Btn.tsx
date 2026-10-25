import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Icon } from "@/components/Icon";

/**
 * Text whose letters roll up one after another when the parent link or button
 * is hovered. Screen readers get the plain label once.
 */
export function Roll({ text }: { text: string }) {
  return (
    <>
      <span className="roll" aria-hidden="true">
        {Array.from(text).map((ch, i) => (
          <span key={i} style={{ "--i": i } as CSSProperties}>
            {ch}
          </span>
        ))}
      </span>
      <span className="sr-only">{text}</span>
    </>
  );
}

export const Chevron = () => (
  <svg className="b__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m9 6 6 6-6 6" />
  </svg>
);

type Variant = "primary" | "dark" | "outline" | "light";

type BtnProps = {
  children: string;
  href?: string;
  variant?: Variant;
  size?: "sm" | "lg";
  /** Leading white tile with an icon, as on the call buttons. */
  icon?: string;
  chevron?: boolean;
  block?: boolean;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  newTab?: boolean;
  label?: string;
};

/** The one button used across the site: rolling label, optional icon tile, chevron. */
export function Btn({
  children,
  href,
  variant = "primary",
  size,
  icon,
  chevron = !icon,
  block,
  className,
  type = "button",
  disabled,
  newTab,
  label,
}: BtnProps) {
  const cls = [
    "b",
    `b--${variant}`,
    size && `b--${size}`,
    icon && "b--tile",
    block && "b--block",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inner: ReactNode = (
    <>
      {icon && (
        <span className="b__tile" aria-hidden="true">
          <Icon name={icon} />
        </span>
      )}
      <Roll text={children} />
      {chevron && <Chevron />}
    </>
  );

  if (!href) {
    return (
      <button className={cls} type={type} disabled={disabled} aria-label={label}>
        {inner}
      </button>
    );
  }
  if (href.startsWith("/")) {
    return (
      <Link className={cls} href={href} aria-label={label}>
        {inner}
      </Link>
    );
  }
  return (
    <a className={cls} href={href} aria-label={label} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {inner}
    </a>
  );
}
