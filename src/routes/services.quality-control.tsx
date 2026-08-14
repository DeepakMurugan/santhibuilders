import { createFileRoute } from "@tanstack/react-router";
import { ConstructionEnquirySection } from "@/components/construction-enquiry-form";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/services/quality-control")({
  head: () => ({
    meta: [
      { title: "Quality Control & Assurance | Santhi Builders" },
      { name: "description", content: "Rigorous material testing, stage inspections and documented quality assurance on every Santhi Builders site." },
      { property: "og:title", content: "Quality Control & Assurance | Santhi Builders" },
      { property: "og:description", content: "Rigorous material testing, stage inspections and documented quality assurance on every Santhi Builders site." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QualityControl,
});

function QualityControl() {
  useReveal();
  return (
    <>
      <header className={"relative min-h-[80vh] flex items-center overflow-hidden bg-inverse-surface"}>
        <div className={"absolute inset-0 z-0 opacity-40"}>
          <div className={"w-full h-full bg-cover bg-center"} data-alt={"A high-angle architectural photograph of a massive construction site at dusk, featuring towering cranes and steel frameworks glowing under warm industrial lights. The scene is shot with a shallow depth of field, highlighting the intricate engineering details. The overall color palette is dominated by deep tech blues and vibrant orange light streaks, conveying a sense of rigorous structural integrity and modern innovation."} style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAweTfPNvaLY8g__DiMJwVYy6n0CFMXD7GvGNCXZaJdS2D8lATa4aLtA-8wnwp8v1u4rwprxg7LLL8G8QIqSQC48kKTZFx3OBdjwU5qAqw5hQ_itosua2uLqZmZ8rZ6dB5WmIvRLToeAgSXqxP3KSGgiIwdnybRFjCvI5exEOUjBA9tJCQWO3yks02C8-5YS_akK_aKNmt6eDi_I-cskYubU9pIaIfA9L5J2IITcZs_bGUZ4kFv_SK1EbEeHZ7YNLC4LLEVPyi-Om51')"}}></div>
        </div>
        <div className={"relative z-10 w-full px-gutter max-w-container-max mx-auto py-section-gap"}>
          <div className={"max-w-3xl"}>
            <span className={"inline-block py-1 px-3 bg-primary-container text-on-primary-container text-label-sm font-label-sm uppercase mb-6 tracking-widest"}>
              Precision Engineered
            </span>
            <h1 className={"font-display-lg text-display-lg text-white mb-8 md:text-display-lg text-headline-lg-mobile"}>
              {" "}Engineering Precision: Our Quality & Management Framework{" "}
            </h1>
            <p className={"text-body-lg font-body-lg text-surface-variant max-w-2xl mb-10"}>
              {" "}At Santhi Builders, quality is not a checklist—it’s our structural foundation. We integrate advanced technological tracking with rigorous engineering audits to ensure every millimetre meets global standards.{" "}
            </p>
            <div className={"flex flex-wrap gap-4"}>
              <button className={"bg-primary text-white px-8 py-4 rounded-DEFAULT font-semibold flex items-center gap-2 hover:translate-y-[-2px] transition-transform"}>
                {" "}Explore Framework{" "}
                <span className={"material-symbols-outlined"}>
                  arrow_downward
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <section className={"py-section-gap bg-surface"}>
        <div className={"px-gutter max-w-container-max mx-auto"}>
          <div className={"flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"}>
            <div className={"max-w-2xl"}>
              <h2 className={"font-headline-lg text-headline-lg text-primary mb-4 md:text-headline-lg text-headline-lg-mobile"}>
                The Pillars of Santhi Quality
              </h2>
              <p className={"text-on-surface-variant font-body-md"}>
                Our technical framework is built on international benchmarks and verified through exhaustive internal validation protocols.
              </p>
            </div>
            <div className={"h-px flex-grow bg-outline-variant mx-8 mb-4 hidden md:block"}></div>
          </div>
          <div className={"grid grid-cols-1 md:grid-cols-12 gap-6"}>
            <div className={"md:col-span-4 bg-white border border-outline-variant p-10 flex flex-col justify-between hover:shadow-xl transition-shadow group"}>
              <div>
                <div className={"w-12 h-12 bg-primary-container rounded-DEFAULT flex items-center justify-center mb-6 text-on-primary-container group-hover:scale-110 transition-transform"}>
                  <span className={"material-symbols-outlined"}>
                    verified
                  </span>
                </div>
                <h3 className={"font-headline-md text-headline-md mb-4"}>
                  ISO 9001:2015 Compliance
                </h3>
                <p className={"text-on-surface-variant"}>
                  Adhering to international quality management systems to ensure consistency and continuous improvement in every project phase.
                </p>
              </div>
            </div>
            <div className={"md:col-span-8 bg-surface-container border border-outline-variant p-10 flex flex-col md:flex-row gap-10 hover:shadow-xl transition-shadow"}>
              <div className={"flex-1"}>
                <div className={"w-12 h-12 bg-secondary-container rounded-DEFAULT flex items-center justify-center mb-6 text-on-secondary-container"}>
                  <span className={"material-symbols-outlined"}>
                    fact_check
                  </span>
                </div>
                <h3 className={"font-headline-md text-headline-md mb-4"}>
                  350+ Quality Checkpoints
                </h3>
                <p className={"text-on-surface-variant mb-6"}>
                  From soil testing to final electrical insulation, our comprehensive audit trail covers every critical structural and aesthetic detail.
                </p>
                <ul className={"grid grid-cols-2 gap-2 text-label-sm font-label-sm text-primary uppercase tracking-tighter"}>
                  <li className={"flex items-center gap-2"}>
                    <span className={"w-1.5 h-1.5 bg-secondary rounded-full"}></span>
                    {" "}Structural Audits
                  </li>
                  <li className={"flex items-center gap-2"}>
                    <span className={"w-1.5 h-1.5 bg-secondary rounded-full"}></span>
                    {" "}Finishing QC
                  </li>
                  <li className={"flex items-center gap-2"}>
                    <span className={"w-1.5 h-1.5 bg-secondary rounded-full"}></span>
                    {" "}Safety Clearance
                  </li>
                  <li className={"flex items-center gap-2"}>
                    <span className={"w-1.5 h-1.5 bg-secondary rounded-full"}></span>
                    {" "}MEP Inspections
                  </li>
                </ul>
              </div>
              <div className={"hidden lg:block w-1/3 bg-white border border-outline-variant p-6 relative overflow-hidden"}>
                <div className={"absolute -top-10 -right-10 opacity-10"}>
                  <span className={"material-symbols-outlined text-[120px]"}>
                    architecture
                  </span>
                </div>
                <p className={"text-display-lg text-primary font-bold mb-0"}>
                  350
                </p>
                <p className={"text-label-sm font-label-sm text-on-surface-variant uppercase"}>
                  Critical Checks
                </p>
              </div>
            </div>
            <div className={"md:col-span-7 bg-inverse-surface text-white p-10 flex flex-col justify-center relative overflow-hidden"}>
              <div className={"relative z-10"}>
                <div className={"w-12 h-12 bg-primary-container rounded-DEFAULT flex items-center justify-center mb-6 text-on-primary-container"}>
                  <span className={"material-symbols-outlined"}>
                    track_changes
                  </span>
                </div>
                <h3 className={"font-headline-md text-headline-md mb-4"}>
                  Real-time Project Tracking
                </h3>
                <p className={"text-surface-variant mb-8"}>
                  Our proprietary ERP systems allow stakeholders to monitor construction milestones, material arrivals, and site progress with minute-by-minute updates.
                </p>
                <button className={"text-secondary-fixed-dim flex items-center gap-2 font-bold hover:gap-4 transition-all"}>
                  {" "}View Dashboard Features{" "}
                  <span className={"material-symbols-outlined"}>
                    arrow_forward
                  </span>
                </button>
              </div>
              <div className={"absolute right-0 bottom-0 opacity-20 transform translate-x-10 translate-y-10 scale-150"}>
                <span className={"material-symbols-outlined text-[300px]"}>
                  monitoring
                </span>
              </div>
            </div>
            <div className={"md:col-span-5 bg-white border border-outline-variant p-10 hover:shadow-xl transition-shadow"}>
              <div className={"w-12 h-12 bg-secondary-container rounded-DEFAULT flex items-center justify-center mb-6 text-on-secondary-container"}>
                <span className={"material-symbols-outlined"}>
                  biotech
                </span>
              </div>
              <h3 className={"font-headline-md text-headline-md mb-4"}>
                Material Testing & Validation
              </h3>
              <p className={"text-on-surface-variant"}>
                Every bag of cement and ton of steel is batch-tested in NABL accredited labs before it enters our sites. No compromises.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={"py-section-gap bg-surface-container-low overflow-hidden"}>
        <div className={"px-gutter max-w-container-max mx-auto"}>
          <div className={"text-center mb-20"}>
            <span className={"text-secondary font-label-sm text-label-sm uppercase tracking-widest mb-4 inline-block"}>
              The Santhi Method
            </span>
            <h2 className={"font-headline-lg text-headline-lg text-on-surface md:text-headline-lg text-headline-lg-mobile"}>
              The Management Lifecycle
            </h2>
          </div>
          <div className={"relative grid grid-cols-1 md:grid-cols-5 gap-0"}>
            <div className={"relative p-8 group border-b md:border-b-0 md:border-r border-outline-variant bg-surface-lowest hover:bg-white transition-colors"}>
              <div className={"text-display-lg text-surface-container-highest font-bold absolute top-4 right-4 leading-none select-none"}>
                01
              </div>
              <div className={"relative z-10"}>
                <h4 className={"font-headline-md text-[20px] mb-4 text-primary"}>
                  Pre-construction Audit
                </h4>
                <p className={"text-on-surface-variant text-body-md"}>
                  Feasibility studies, structural design verification, and resource mapping before a single stone is laid.
                </p>
              </div>
            </div>
            <div className={"relative p-8 group border-b md:border-b-0 md:border-r border-outline-variant bg-surface-lowest hover:bg-white transition-colors"}>
              <div className={"text-display-lg text-surface-container-highest font-bold absolute top-4 right-4 leading-none select-none"}>
                02
              </div>
              <div className={"relative z-10"}>
                <h4 className={"font-headline-md text-[20px] mb-4 text-primary"}>
                  On-site Quality Inspections
                </h4>
                <p className={"text-on-surface-variant text-body-md"}>
                  Daily site walkthroughs by our QA/QC engineers to ensure adherence to technical specifications.
                </p>
              </div>
            </div>
            <div className={"relative p-8 group border-b md:border-b-0 md:border-r border-outline-variant bg-surface-lowest hover:bg-white transition-colors"}>
              <div className={"text-display-lg text-surface-container-highest font-bold absolute top-4 right-4 leading-none select-none"}>
                03
              </div>
              <div className={"relative z-10"}>
                <h4 className={"font-headline-md text-[20px] mb-4 text-primary"}>
                  Structural Integrity Testing
                </h4>
                <p className={"text-on-surface-variant text-body-md"}>
                  Non-destructive testing (NDT) of concrete and structural steel under peak load simulation.
                </p>
              </div>
            </div>
            <div className={"relative p-8 group border-b md:border-b-0 md:border-r border-outline-variant bg-surface-lowest hover:bg-white transition-colors"}>
              <div className={"text-display-lg text-surface-container-highest font-bold absolute top-4 right-4 leading-none select-none"}>
                04
              </div>
              <div className={"relative z-10"}>
                <h4 className={"font-headline-md text-[20px] mb-4 text-primary"}>
                  Milestone Tracking
                </h4>
                <p className={"text-on-surface-variant text-body-md"}>
                  Data-driven analysis of timelines and budgets to ensure the project remains on schedule.
                </p>
              </div>
            </div>
            <div className={"relative p-8 group bg-surface-lowest hover:bg-white transition-colors"}>
              <div className={"text-display-lg text-surface-container-highest font-bold absolute top-4 right-4 leading-none select-none"}>
                05
              </div>
              <div className={"relative z-10"}>
                <h4 className={"font-headline-md text-[20px] mb-4 text-primary"}>
                  Final Handover
                </h4>
                <p className={"text-on-surface-variant text-body-md"}>
                  Comprehensive snagging, testing of all utilities, and handover of quality certifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"py-section-gap bg-surface"}>
        <div className={"px-gutter max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"}>
          <div className={"relative"}>
            <div className={"aspect-square bg-surface-container relative overflow-hidden rounded-lg"}>
              <div className={"w-full h-full bg-cover bg-center"} data-alt={"A detailed macro shot of high-quality construction materials, focusing on the texture of reinforced steel bars and high-grade concrete samples in a technical laboratory setting. The lighting is crisp and sterile, emphasizing the silver-grey metallics and industrial textures. A subtle blue overlay adds a professional, architectural feel consistent with the Santhi Builders brand."} style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB3FAnIWCoEiKKo01JDMWdCQ6I_QT-nkGr2-P90w6ulKU0rwA4QuJSAxLLeRqGL-XdPq3QGdHM1pM7n5M5Bgf3pQ4vEoxpUOepE-V7TOavV5OSdMcUIIZo5jQKD46owf1-LiD7alOQyHPOwFayEa6jTuKOphT5pty7fFr8GMIkmZsfMfYrsgKs2Jgl68om_ij6G2_NqXOZHuA8T7jXbY1vHrPVCacjsNzWy7LFvSzD7qTS8VUKN_d1mN24_bmjO7J11DYRuGMk7l1oC')"}}></div>
            </div>
            <div className={"absolute -bottom-10 -right-10 bg-white border border-outline-variant p-8 hidden md:block max-w-[240px] shadow-xl"}>
              <p className={"text-headline-md font-bold text-primary mb-2"}>
                100%
              </p>
              <p className={"text-body-md text-on-surface-variant"}>
                Compliance with BIS & National Building Codes.
              </p>
            </div>
          </div>
          <div>
            <h2 className={"font-headline-lg text-headline-lg text-on-surface mb-8 md:text-headline-lg text-headline-lg-mobile"}>
              Zero Compromise on Safety & Standards
            </h2>
            <div className={"space-y-8"}>
              <div className={"flex gap-6"}>
                <div className={"mt-1 flex-shrink-0 text-secondary"}>
                  <span className={"material-symbols-outlined text-4xl"}>
                    gavel
                  </span>
                </div>
                <div>
                  <h4 className={"font-bold text-body-lg mb-2"}>
                    BIS Compliance
                  </h4>
                  <p className={"text-on-surface-variant"}>
                    Stringent adherence to Bureau of Indian Standards (BIS) for all structural and electrical components.
                  </p>
                </div>
              </div>
              <div className={"flex gap-6"}>
                <div className={"mt-1 flex-shrink-0 text-secondary"}>
                  <span className={"material-symbols-outlined text-4xl"}>
                    engineering
                  </span>
                </div>
                <div>
                  <h4 className={"font-bold text-body-lg mb-2"}>
                    NBC 2016 Protocols
                  </h4>
                  <p className={"text-on-surface-variant"}>
                    Implementation of the latest National Building Code guidelines for fire safety, earthquake resistance, and plumbing.
                  </p>
                </div>
              </div>
              <div className={"flex gap-6"}>
                <div className={"mt-1 flex-shrink-0 text-secondary"}>
                  <span className={"material-symbols-outlined text-4xl"}>
                    health_and_safety
                  </span>
                </div>
                <div>
                  <h4 className={"font-bold text-body-lg mb-2"}>
                    Occupational Health & Safety
                  </h4>
                  <p className={"text-on-surface-variant"}>
                    Rigorous on-site safety training and PPE mandates for all laborers and engineers to ensure an accident-free workspace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"py-section-gap bg-primary overflow-hidden relative"}>
        <div className={"absolute inset-0 opacity-10"}></div>
        <div className={"px-gutter max-w-container-max mx-auto relative z-10 text-white"}>
          <div className={"text-center mb-16"}>
            <h2 className={"font-headline-lg text-headline-lg md:text-headline-lg text-headline-lg-mobile mb-4"}>
              The Transparency Portal
            </h2>
            <p className={"text-primary-fixed max-w-2xl mx-auto"}>
              Track your project's health, milestones, and financial summaries in real-time through our client dashboard.
            </p>
          </div>
          <div className={"perspective-1000"}>
            <div className={"glass-card rounded-xl p-8 max-w-5xl mx-auto rotate-y-12 shadow-2xl transition-transform hover:rotate-y-0 duration-700"}>
              <div className={"flex items-center justify-between border-b border-outline-variant pb-6 mb-8"}>
                <div className={"flex items-center gap-4"}>
                  <div className={"w-10 h-10 bg-primary-container rounded-full flex items-center justify-center"}>
                    <span className={"material-symbols-outlined text-white"}>
                      dashboard
                    </span>
                  </div>
                  <span className={"font-bold text-on-surface"}>
                    Client Portal v2.0
                  </span>
                </div>
                <div className={"flex gap-2"}>
                  <div className={"w-3 h-3 bg-red-400 rounded-full"}></div>
                  <div className={"w-3 h-3 bg-yellow-400 rounded-full"}></div>
                  <div className={"w-3 h-3 bg-green-400 rounded-full"}></div>
                </div>
              </div>
              <div className={"grid grid-cols-1 md:grid-cols-3 gap-8"}>
                <div className={"space-y-6"}>
                  <div className={"p-4 bg-surface-container rounded-lg"}>
                    <p className={"text-label-sm font-label-sm text-on-surface-variant uppercase mb-1"}>
                      Project Status
                    </p>
                    <p className={"text-headline-md text-primary"}>
                      84% Complete
                    </p>
                    <div className={"w-full bg-white h-2 rounded-full mt-2"}>
                      <div className={"bg-primary h-full rounded-full"} style={{width: "84%"}}></div>
                    </div>
                  </div>
                  <div className={"p-4 bg-surface-container rounded-lg"}>
                    <p className={"text-label-sm font-label-sm text-on-surface-variant uppercase mb-1"}>
                      Structural Integrity
                    </p>
                    <div className={"flex items-center gap-2 text-secondary font-bold"}>
                      <span className={"material-symbols-outlined"}>
                        check_circle
                      </span>
                      <span>
                        Verified
                      </span>
                    </div>
                  </div>
                </div>
                <div className={"md:col-span-2 bg-surface rounded-lg border border-outline-variant p-6"}>
                  <div className={"flex justify-between items-center mb-6"}>
                    <h5 className={"font-bold text-on-surface"}>
                      Construction Velocity
                    </h5>
                    <span className={"text-label-sm text-primary"}>
                      +12% vs Schedule
                    </span>
                  </div>
                  <div className={"flex items-end gap-2 h-40"}>
                    <div className={"bg-primary-container w-full"} style={{height: "40%"}}></div>
                    <div className={"bg-primary-container w-full"} style={{height: "60%"}}></div>
                    <div className={"bg-primary-container w-full"} style={{height: "55%"}}></div>
                    <div className={"bg-primary w-full"} style={{height: "80%"}}></div>
                    <div className={"bg-primary w-full"} style={{height: "95%"}}></div>
                    <div className={"bg-secondary w-full"} style={{height: "70%"}}></div>
                  </div>
                  <div className={"flex justify-between mt-4 text-[10px] text-outline uppercase font-bold"}>
                    <span>
                      Jan
                    </span>
                    <span>
                      Feb
                    </span>
                    <span>
                      Mar
                    </span>
                    <span>
                      Apr
                    </span>
                    <span>
                      May
                    </span>
                    <span>
                      Jun
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"py-section-gap bg-surface"}>
        <div className={"px-gutter max-w-container-max mx-auto"}>
          <div className={"bg-surface-container rounded-lg p-12 md:p-20 text-center relative overflow-hidden"}>
            <div className={"relative z-10"}>
              <h2 className={"font-headline-lg text-headline-lg text-on-surface mb-6 md:text-headline-lg text-headline-lg-mobile"}>
                Build with Precision
              </h2>
              <p className={"text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto"}>
                Our technical experts are ready to walk you through our quality protocols. Get a technical consultation today.
              </p>
              <div className={"flex flex-col sm:flex-row justify-center gap-4"}>
                <button className={"bg-secondary-container text-on-secondary-container px-10 py-5 rounded-DEFAULT font-bold text-lg hover:shadow-xl transition-all"}>
                  {" "}Book Technical Consult{" "}
                </button>
                <button className={"bg-white text-primary border border-primary px-10 py-5 rounded-DEFAULT font-bold text-lg hover:bg-primary hover:text-white transition-all"}>
                  {" "}Download Quality Brochure{" "}
                </button>
              </div>
            </div>
            <div className={"absolute top-0 right-0 p-10 opacity-5"}>
              <span className={"material-symbols-outlined text-[200px]"}>
                engineering
              </span>
            </div>
          </div>
        </div>
      </section>
      <ConstructionEnquirySection
        eyebrow="Quality Assurance Enquiry"
        source="Service - Quality Control"
        title="Want tighter site quality checks and stage-wise verification?"
        description="Send your scope through our standard enquiry form and we will align the right quality-control process for your site."
      />
    </>
  );
}
