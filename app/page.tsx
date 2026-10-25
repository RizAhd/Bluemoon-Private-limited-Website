import { asset } from "@/lib/asset";
import { IntroScreen } from "@/components/home/IntroScreen";
import { HomeHero } from "@/components/home/HomeHero";
import { ServiceSlider } from "@/components/home/ServiceSlider";
import { ScrollRevealText } from "@/components/home/ScrollRevealText";
import { ProjectStack } from "@/components/home/ProjectStack";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Odometer } from "@/components/sections/Odometer";
import { Faq } from "@/components/sections/Faq";
import { CtaForm } from "@/components/sections/CtaForm";
import { Icon } from "@/components/Icon";
import { Btn } from "@/components/ui/Btn";
import { services } from "@/lib/services";
import { featuredProjects } from "@/lib/projects";
import { contractCount, totalContractMillions } from "@/lib/currency";
import { generalFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Bluemoon Engineering | CIDA Building Contractor, Welimada",
  description:
    "CIDA-registered building and civil-engineering contractor in Welimada, Badulla. Schools, public buildings, roads, drainage and renovations across Uva Province.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <IntroScreen />
      <HomeHero />

      {/* Services */}
      <section className="sec" aria-labelledby="h-services">
        <div className="container">
          <div className="head head--center" data-reveal>
            <p className="eyebrow">Services</p>
            <h2 id="h-services">
              Construction Services
              <br /> Built to Last
            </h2>
            <p>From schools and public buildings to roads, drainage and renovations, we plan, build and supervise to the last detail.</p>
          </div>
          <div data-reveal="tilt">
            <ServiceSlider items={services} />
          </div>
          <div className="center-cta">
            <Btn href="/quote">Request a Service</Btn>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="panel sec" aria-labelledby="h-about">
        <div className="container">
          <div className="about">
            <p className="eyebrow" id="h-about">About us</p>
            <ScrollRevealText
              className="about__text"
              segments={[
                { text: "At Bluemoon Engineering, we deliver registered building and civil-engineering work for government departments and private clients." },
                { text: "Our site teams pair careful planning with close supervision", accent: true },
                { text: "to build schools, public buildings, roads and drainage that last in the Uva hill country." },
              ]}
            />
          </div>
          <div className="about__grid">
            <div className="gcard" data-reveal="tilt">
              <h3>
                Trusted Local
                <br /> Construction Experts
              </h3>
              <div>
                <p>Registered in {siteConfig.established} and based in Welimada, backed by disciplined crews and careful site supervision.</p>
                <Btn href="/about">More About Us</Btn>
              </div>
            </div>
            <div className="about__photo pz" data-reveal="tilt">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/images/home/about-scaffold-bw.jpg")} alt="Construction crew working on scaffolding" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="sec" aria-labelledby="h-why">
        <div className="container">
          <div className="head head--split" data-reveal>
            <div>
              <p className="eyebrow">Why choose us</p>
              <h2 id="h-why">Why Clients Pick Bluemoon</h2>
            </div>
            <p>A registered contractor, a record you can check, and site leadership that plans for hill-country conditions.</p>
          </div>
          <div className="bento">
            <div className="bento__a" data-reveal="tilt">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/images/home/why-scaffold-crew.jpg")} alt="" loading="lazy" decoding="async" />
              <p className="bento__title">Trusted by public departments, schools and private clients</p>
              <div className="ticker" aria-label="Clients">
                <div className="ticker__track">
                  {[0, 1].map((k) => (
                    <span key={k} aria-hidden={k === 1 || undefined}>
                      <span>Uva Provincial Council</span>
                      <span>Ministry of Health</span>
                      <span>Provincial Dept. of Education</span>
                      <span>Local Government, Badulla</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="bento__b" data-reveal="tilt">
              <p className="bento__num">
                <Odometer value={String(contractCount)} suffix="+" />
              </p>
              <p className="bento__label">Contracts completed</p>
              <div className="bento__icons" aria-hidden="true">
                {["school", "health", "landmark", "store"].map((n) => (
                  <span key={n}>
                    <Icon name={n} />
                  </span>
                ))}
                <span className="bento__plus">
                  <Icon name="plus" />
                </span>
              </div>
            </div>
            <div className="bento__c" data-reveal="tilt">
              <svg className="contours" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <path d="M-20 160C40 120 90 170 150 140S260 60 330 90 430 60 430 60" />
                <path d="M-20 185C50 150 100 196 160 168S270 92 340 118 430 92 430 92" />
                <path d="M-20 208C60 176 110 220 172 194S280 122 350 146 430 124 430 124" />
                <path d="M-20 130C30 92 80 140 140 112S250 30 320 62 430 30 430 30" />
                <path d="M-20 100C26 66 72 110 130 86S240 2 312 34 430 0 430 0" />
                <path d="M210 120c20-26 64-30 86-8s4 58-30 60-76-24-56-52Z" />
                <path d="M226 122c14-16 42-18 56-4s2 36-20 38-48-16-36-34Z" />
              </svg>
              <p className="bento__c-title">
                Graded by CIDA and <em>accountable</em> on every contract
              </p>
            </div>
            <div className="bento__d" data-reveal="tilt">
              <p className="bento__title">Fully registered</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/images/home/why-inspectors.jpg")} alt="" loading="lazy" decoding="async" />
              <p className="bento__small">CIDA Reg. {siteConfig.cidaReg} · {siteConfig.businessReg}</p>
            </div>
            <div className="bento__e" data-reveal="tilt">
              <p className="bento__num">
                <Odometer value={String(totalContractMillions)} prefix="Rs " suffix="M+" />
              </p>
              <p className="bento__label">Contract value delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="sec sec--process" aria-labelledby="h-process">
        <div className="container">
          <div className="head head--center" data-reveal>
            <p className="eyebrow">Our process</p>
            <h2 id="h-process">A Simple, Proven Construction Process</h2>
            <p>Four clear stages keep every project organised and stress-free, from the first call to a clean handover.</p>
          </div>
          <ProcessSteps />
          <div className="center-cta">
            <Btn href={`tel:${siteConfig.phoneHref}`} icon="phone">
              {siteConfig.phoneDisplay}
            </Btn>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="panel sec" aria-labelledby="h-projects">
        <div className="container">
          <div className="head head--split" data-reveal>
            <div>
              <p className="eyebrow">Featured projects</p>
              <h2 id="h-projects">Featured Construction Projects We Delivered</h2>
            </div>
            <Btn href="/projects">All Projects</Btn>
          </div>
          <ProjectStack projects={featuredProjects} />
        </div>
      </section>

      <Faq items={generalFaqs.slice(0, 4)} />

      <CtaForm />
    </>
  );
}
