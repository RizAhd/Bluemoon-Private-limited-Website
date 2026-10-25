import { Btn } from "@/components/ui/Btn";

export default function NotFound() {
  return (
    <section className="top-pad nf">
      <div className="container nf__inner">
        <p className="nf__code mono" aria-hidden="true">
          404
        </p>
        <p className="eyebrow">Page not found</p>
        <h1>This Page Could Not Be Found</h1>
        <p>The page may have moved or no longer exists. Let’s get you back on track.</p>
        <div className="nf__btns">
          <Btn href="/">Back to Home</Btn>
          <Btn href="/contact" variant="dark">
            Contact Us
          </Btn>
        </div>
      </div>
    </section>
  );
}
