import { credentialBadges } from "@/lib/credentials";

export function CredentialBand({ light = false }: { light?: boolean }) {
  return (
    <div className="credential-band" role="list" aria-label="Company credentials">
      {credentialBadges.map((b) => (
        <span
          key={b.label}
          className={`credential-chip${light ? " credential-chip--light" : ""}`}
          role="listitem"
        >
          <span className="credential-chip__label">{b.label}</span>
          <span className="credential-chip__value">{b.value}</span>
        </span>
      ))}
    </div>
  );
}
