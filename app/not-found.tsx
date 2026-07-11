import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: "center" }}>
      <div className="container" style={{ maxWidth: "52ch" }}>
        <p className="eyebrow" style={{ justifyContent: "center" }}>
          Error 404
        </p>
        <h1>This page could not be found.</h1>
        <p className="lead" style={{ marginInline: "auto" }}>
          The page may have moved or no longer exists. Let&apos;s get you back on track.
        </p>
        <div
          style={{
            display: "flex",
            gap: "0.9rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "1.5rem",
          }}
        >
          <Link className="btn btn--primary" href="/">
            Back to Home
          </Link>
          <Link className="btn btn--ghost" href="/contact">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
