import { processSteps } from "@/lib/process";

export function ProcessTimeline() {
  return (
    <ol className="timeline">
      {processSteps.map((step) => (
        <li className="timeline__item" key={step.step} data-reveal>
          <span className="timeline__num">{step.step}</span>
          <div className="timeline__body">
            <span className="timeline__eyebrow">{step.eyebrow}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
