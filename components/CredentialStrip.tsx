import { cidaGrades } from "@/lib/credentials";

export function CredentialStrip() {
  return (
    <div className="credstrip">
      <div className="container credstrip__inner">
        <span className="credstrip__label">Registered &amp; graded by CIDA</span>
        <span className="credstrip__grades">
          {cidaGrades.map((g) => (
            <span key={g.field}>
              <strong>{g.grade}</strong>
              {g.field}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
