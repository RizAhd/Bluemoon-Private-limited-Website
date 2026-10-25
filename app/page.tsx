import Link from "next/link";
import { asset } from "@/lib/asset";
import { IntroScreen } from "@/components/home/IntroScreen";
import { HomeHero } from "@/components/home/HomeHero";
import { ServiceSlider } from "@/components/home/ServiceSlider";
import { ScrollRevealText } from "@/components/home/ScrollRevealText";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { ProjectStack } from "@/components/home/ProjectStack";
import { AreaMap } from "@/components/home/AreaMap";
import { EnquiryForm } from "@/components/home/EnquiryForm";
import { Icon } from "@/components/Icon";
import { services } from "@/lib/services";
import { featuredProjects } from "@/lib/projects";
import { trackRecord } from "@/lib/trackRecord";
import { cidaGrades } from "@/lib/credentials";
import { contractCount, totalContractMillions } from "@/lib/currency";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Bluemoon Engineering | CIDA Building Contractor, Welimada",
  description:
    "CIDA-registered building and civil-engineering contractor in Welimada, Badulla. Schools, public buildings, roads, drainage and renovations across Uva Province.",
  path: "/",
});

const clientIcon: Record<string, string> = {
  Education: "school",
  Health: "health",
  Commercial: "store",
  Renovation: "home",
  Building: "building",
  Finishing: "spark",
  "Civil Works": "wall",
};

const faqs = [
  {
    q: "Are you a registered contractor?",
    a: `Yes. ${siteConfig.companyName} is registered with the Construction Industry Development Authority (Reg. ${siteConfig.cidaReg}) and the Registrar of Companies (${siteConfig.businessReg}). We hold CIDA grade C-6 in Building and C-7 in Highway, Bridge, Water Supply & Sewerage, Irrigation & Drainage Canals and Storm-water Disposal.`,
  },
  {
    q: "Which areas do you work in?",
    a: siteConfig.serviceArea + " Our office is in Silmiyapura, Welimada.",
  },
  {
    q: "Do you take on both government and private work?",
    a: "Yes. Our record covers provincial council, education, health and local government contracts, as well as private building, finishing, renovation, retaining wall and roofing work.",
  },
  {
    q: "How do I request a quote?",
    a: `Send the project type, location, budget range and preferred start date through the quote form, or call or WhatsApp ${siteConfig.phoneDisplay}. We review the brief and reply with the next step, which may be a site visit.`,
  },
  {
    q: "What happens after I send a brief?",
    a: "We review the scope, visit the site where needed, prepare a grounded estimate and quotation, plan the work, then build with close supervision and hand over after inspection.",
  },
  {
    q: "When can I reach the office?",
    a: `${siteConfig.hours}. Outside those hours, WhatsApp or email and we reply on the next working day.`,
  },
];

export default function HomePage() {
  const rows = [trackRecord.slice(0, 6), trackRecord.slice(6)];

  return (
    <>
      <IntroScreen />
      <HomeHero />

      {/* Services */}
      <section className="hs hs--white" aria-labelledby="h-services">
        <div className="container">
          <div className="hs-head hs-head--center" data-reveal>
            <p className="eyebrow">Services</p>
            <h2 id="h-services">Construction services built to last</h2>
            <p>From schools and public buildings to roads, drainage and renovations, registered and supervised from start to handover.</p>
          </div>
          <ServiceSlider items={services} />
          <div className="hs-cta" data-reveal>
            <Link className="btn btn--secondary btn--large" href="/quote">
              Request a Service
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m9 6 6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="panel panel--navy on-dark" aria-labelledby="h-about">
        <div className="container">
          <div className="about2">
            <p className="eyebrow" id="h-about">About us</p>
            <ScrollRevealText
              className="about2__text"
              segments={[
                { text: "At Bluemoon Engineering, we deliver CIDA-registered building and civil-engineering work for" },
                { text: "government departments and private clients.", accent: true },
                { text: "Our site teams pair careful planning with close supervision to build schools, public buildings, roads, drainage and renovations that last in the Uva hill country." },
              ]}
            />
          </div>
          <div className="about2__grid">
            <div className="about2__card" data-reveal>
              <h3>Trusted local construction experts</h3>
              <p>
                Registered in {siteConfig.established} and based in Welimada, we deliver durable construction for public
                and private clients, backed by disciplined site supervision.
              </p>
              <Link className="btn btn--secondary" href="/about">
                More About Us
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m9 6 6 6-6 6" />
                </svg>
              </Link>
            </div>
            <div className="about2__photo" data-reveal>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/images/home/about-scaffold-bw.jpg")} alt="Construction crew working on scaffolding at night" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="hs hs--white" aria-labelledby="h-why">
        <div className="container">
          <div className="hs-head hs-head--split" data-reveal>
            <div>
              <p className="eyebrow">Why choose us</p>
              <h2 id="h-why">Why clients pick Bluemoon</h2>
            </div>
            <p>A registered contractor, a record you can check, and site leadership that plans for hill-country conditions.</p>
          </div>
          <div className="bento2">
            <div className="bento2__a" data-reveal>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/images/home/why-scaffold-crew.jpg")} alt="" loading="lazy" decoding="async" />
              <p className="bento2__a-title">Trusted by public departments and private clients</p>
              <div className="ticker" aria-label="Clients">
                <div className="ticker__track">
                  {[0, 1].map((k) => (
                    <span key={k} aria-hidden={k === 1}>
                      <span>Uva Provincial Council</span>
                      <span>Ministry of Health</span>
                      <span>Provincial Dept. of Education</span>
                      <span>Local Government, Badulla</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="bento2__b" data-reveal>
              <p className="bento2__num">
                <span data-counter={contractCount}>{contractCount}</span>
              </p>
              <p className="bento2__label">Completed contracts on record</p>
              <div className="bento2__icons" aria-hidden="true">
                {["school", "health", "landmark", "home"].map((n) => (
                  <span key={n}>
                    <Icon name={n} />
                  </span>
                ))}
              </div>
            </div>
            <div className="bento2__c" data-reveal>
              <svg className="contours" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <path d="M-20 160C40 120 90 170 150 140S260 60 330 90 430 60 430 60" />
                <path d="M-20 185C50 150 100 196 160 168S270 92 340 118 430 92 430 92" />
                <path d="M-20 208C60 176 110 220 172 194S280 122 350 146 430 124 430 124" />
                <path d="M-20 130C30 92 80 140 140 112S250 30 320 62 430 30 430 30" />
                <path d="M-20 100C26 66 72 110 130 86S240 2 312 34 430 0 430 0" />
                <path d="M210 120c20-26 64-30 86-8s4 58-30 60-76-24-56-52Z" />
                <path d="M226 122c14-16 42-18 56-4s2 36-20 38-48-16-36-34Z" />
              </svg>
              <p className="bento2__c-title">
                Graded by CIDA and <em>accountable</em> on every contract
              </p>
            </div>
            <div className="bento2__d" data-reveal>
              <div>
                <h3>Registered and verifiable</h3>
                <p>
                  CIDA Reg. {siteConfig.cidaReg}, graded in {cidaGrades.length} construction fields.
                </p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/images/home/why-inspectors.jpg")} alt="" loading="lazy" decoding="async" />
            </div>
            <div className="bento2__e" data-reveal>
              <p className="bento2__num">
                Rs <span data-counter={totalContractMillions}>{totalContractMillions}</span>M+
              </p>
              <p className="bento2__label">Contract value delivered</p>
              <p className="bento2__small">From school blocks and clinics to commercial builds, every contract on record.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="hs hs--tint hs--process" aria-labelledby="h-process">
        <div className="container">
          <div className="hs-head hs-head--center" data-reveal>
            <p className="eyebrow">Our process</p>
            <h2 id="h-process">A simple, proven construction process</h2>
            <p>Four clear stages keep every project organised, from the first call to a clean handover.</p>
          </div>
        </div>
        <div className="container">
          <ProcessSteps />
        </div>
        <div className="container hs-cta">
          <a className="btn-call" href={`tel:${siteConfig.phoneHref}`}>
            <span className="btn-call__icon">
              <Icon name="phone" />
            </span>
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </section>

      {/* Projects */}
      <section className="panel panel--navy on-dark" aria-labelledby="h-projects">
        <div className="container">
          <div className="hs-head hs-head--split" data-reveal>
            <div>
              <p className="eyebrow">Featured projects</p>
              <h2 id="h-projects">Construction projects we delivered</h2>
            </div>
            <Link className="btn btn--secondary" href="/projects">
              All Projects
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m9 6 6 6-6 6" />
              </svg>
            </Link>
          </div>
          <ProjectStack projects={featuredProjects} />
        </div>
      </section>

      {/* Record of work */}
      <section className="hs hs--white hs--flush" aria-labelledby="h-record">
        <div className="container">
          <div className="hs-head hs-head--center" data-reveal>
            <p className="record-badge">
              <strong>{contractCount} contracts</strong> · Rs {totalContractMillions}M+ on record
            </p>
            <h2 id="h-record">Trusted by departments and private clients</h2>
            <p>A sample of completed contracts from our record of work across Uva Province.</p>
          </div>
        </div>
        <div className="marquee2">
          {rows.map((row, r) => (
            <div className={`marquee2__row${r === 1 ? " is-reverse" : ""}`} key={r}>
              <div className="marquee2__track">
                {[0, 1].map((copy) =>
                  row.map((c) => (
                    <article className="record-card" key={`${copy}-${c.project}`} aria-hidden={copy === 1}>
                      <span className="record-card__icon">
                        <Icon name={clientIcon[c.category] ?? "building"} />
                      </span>
                      <p className="record-card__project">{c.project}</p>
                      <p className="record-card__client">
                        <strong>{c.client}</strong>
                        <span>
                          {c.category} · {c.year}
                        </span>
                      </p>
                    </article>
                  )),
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Areas */}
      <section className="panel panel--tint" aria-labelledby="h-areas">
        <div className="container areas">
          <div className="hs-head hs-head--center" data-reveal>
            <p className="eyebrow">Areas we serve</p>
            <h2 id="h-areas">Rooted in the hill country, working island-wide</h2>
            <p>Based in Welimada, serving Badulla, Bandarawela, Nuwara Eliya and projects across Uva Province and Sri Lanka.</p>
          </div>
          <div className="areas__map" data-reveal>
            <AreaMap />
          </div>
          <div className="hs-cta">
            <Link className="btn btn--secondary btn--large" href="/contact">
              Contact the Office
            </Link>
          </div>
        </div>
      </section>

      {/* Registration */}
      <section className="hs hs--white" aria-labelledby="h-grades">
        <div className="container">
          <div className="hs-head hs-head--split" data-reveal>
            <div>
              <p className="eyebrow">CIDA registration</p>
              <h2 id="h-grades">Graded across six construction fields</h2>
            </div>
            <Link className="btn btn--ghost" href="/about">
              About Our Registration
            </Link>
          </div>
          <div className="grades" data-reveal>
            {cidaGrades.map((g) => (
              <div className="grade" key={g.field}>
                <span className="grade__code">{g.grade}</span>
                <span className="grade__field">{g.field}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="hs hs--tint" aria-labelledby="h-faq">
        <div className="container">
          <div className="hs-head hs-head--center" data-reveal>
            <p className="eyebrow">FAQs</p>
            <h2 id="h-faq">Answers to common questions</h2>
          </div>
          <div className="faq">
            {faqs.map((f, i) => (
              <details key={f.q} className="faq__item" open={i === 0}>
                <summary>
                  {f.q}
                  <span className="faq__icon" aria-hidden="true" />
                </summary>
                <div className="faq__a">
                  <p>{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section className="cta-photo on-dark" aria-labelledby="h-start">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="cta-photo__bg" src={asset("/images/home/cta-tower.jpg")} alt="" loading="lazy" decoding="async" />
        <div className="container cta-photo__inner">
          <div className="hs-head hs-head--center" data-reveal>
            <p className="eyebrow">Get started</p>
            <h2 id="h-start">Let’s plan your next build</h2>
            <p>Tell us what you need and we will reply with a clear next step and a grounded quotation.</p>
          </div>
          <div className="cta-photo__form" data-reveal>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
