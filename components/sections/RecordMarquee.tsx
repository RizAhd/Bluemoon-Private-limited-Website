import { Icon } from "@/components/Icon";
import { trackRecord } from "@/lib/trackRecord";

const categoryIcon: Record<string, string> = {
  Education: "school",
  Health: "health",
  Commercial: "store",
  Renovation: "home",
  Building: "building",
  Finishing: "spark",
  "Civil Works": "wall",
};

/** Two rows of completed contracts drifting in opposite directions; pauses on hover. */
export function RecordMarquee() {
  const rows = [trackRecord.slice(0, Math.ceil(trackRecord.length / 2)), trackRecord.slice(Math.ceil(trackRecord.length / 2))];
  return (
    <div className="marquee" role="list" aria-label="Completed contracts">
      {rows.map((row, r) => (
        <div className={`marquee__row${r === 1 ? " is-reverse" : ""}`} key={r}>
          <div className="marquee__track">
            {[0, 1].map((copy) =>
              row.map((c) => (
                <article className="rcard" key={`${copy}-${c.project}`} role={copy === 0 ? "listitem" : undefined} aria-hidden={copy === 1 || undefined}>
                  <p className="rcard__tag">
                    <Icon name="check" />
                    Completed contract
                  </p>
                  <p className="rcard__project">{c.project}</p>
                  <div className="rcard__foot">
                    <span className="rcard__avatar">
                      <Icon name={categoryIcon[c.category] ?? "building"} />
                    </span>
                    <span>
                      <strong>{c.client}</strong>
                      <span>
                        {c.category} · {c.year}
                      </span>
                    </span>
                  </div>
                </article>
              )),
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
