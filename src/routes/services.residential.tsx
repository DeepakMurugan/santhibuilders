import { createFileRoute } from "@tanstack/react-router";
import { ConstructionEnquiryForm } from "@/components/construction-enquiry-form";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/services/residential")({
  head: () => ({
    meta: [
      { title: "Residential Construction in Chennai | Santhi Builders" },
      { name: "description", content: "End-to-end residential construction: custom villas, apartments and joint ventures built to exacting engineering standards." },
      { property: "og:title", content: "Residential Construction in Chennai | Santhi Builders" },
      { property: "og:description", content: "End-to-end residential construction: custom villas, apartments and joint ventures built to exacting engineering standards." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Residential,
});

function Residential() {
  useReveal();
  return (
    <>
      <header className={"bg-surface sticky top-0 z-50 shadow-sm border-b border-outline-variant/30"}></header>
      <main>
        <section className={"relative min-h-[90vh] flex items-center overflow-hidden py-20"}>
          <div className={"absolute inset-0 z-0"}>
            <div className={"absolute inset-0 bg-gradient-to-r from-tertiary/95 via-tertiary/60 to-transparent z-10"}></div>
            <div className={"w-full h-full bg-cover bg-center transition-transform duration-[20000ms] scale-105"} style={{backgroundImage: "url('/images/excellence.jpg')"}}></div>
          </div>
          <div className={"relative z-20 max-w-container-max mx-auto px-margin-mobile md:px-gutter w-full"}>
            <div className={"max-w-2xl reveal active"}>
              <span className={"inline-block py-1.5 px-4 bg-primary text-on-primary font-label-sm rounded mb-6 uppercase tracking-[0.1em]"}>
                RESIDENTIAL EXPERTISE
              </span>
              <h1 className={"font-display-lg text-[42px] md:text-display-lg text-white mb-6 leading-[1.1]"}>
                {" "}Architectural Excellence in Residential Construction{" "}
              </h1>
              <p className={"font-body-lg text-body-lg text-white/80 mb-10 border-l-4 border-primary pl-6 max-w-xl"}>
                {" "}Building legacies, one home at a time. We blend engineering precision with aesthetic mastery to create homes that define the Chennai skyline.{" "}
              </p>
              <div className={"flex flex-col sm:flex-row gap-4"}>
                <button className={"bg-secondary-container text-on-secondary-container px-10 py-5 rounded font-headline-md text-[18px] font-bold hover:bg-secondary hover:shadow-xl hover:-translate-y-1 transition-all"}>
                  {" "}Get a Free Estimate{" "}
                </button>
                <button className={"border-2 border-white/30 text-white backdrop-blur-md px-10 py-5 rounded font-headline-md text-[18px] font-bold hover:bg-white/10 transition-all"}>
                  {" "}View Our Portfolio{" "}
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className={"py-section-gap bg-surface"}>
          <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter"}>
            <div className={"flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal"}>
              <div className={"max-w-xl"}>
                <h2 className={"font-headline-lg text-headline-lg-mobile md:text-headline-lg text-tertiary mb-4"}>
                  Engineering Superior Living Spaces
                </h2>
                <p className={"font-body-md text-body-md text-on-surface-variant"}>
                  We specialize in turning complex architectural blueprints into breathable, sustainable, and luxurious living environments.
                </p>
              </div>
              <div className={"text-primary font-bold flex items-center gap-2 cursor-pointer group"}>
                <span className={"font-label-sm tracking-widest uppercase"}>
                  View All Services
                </span>
                <span className={"material-symbols-outlined group-hover:translate-x-2 transition-transform"}>
                  arrow_forward
                </span>
              </div>
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-3 gap-8"}>
              <div className={"group p-10 bg-white border border-outline-variant/30 hover:border-primary/50 transition-all duration-500 reveal shadow-soft"} style={{transitionDelay: "100ms"}}>
                <div className={"w-16 h-16 bg-surface-container-low flex items-center justify-center rounded-xl mb-8 group-hover:bg-primary transition-colors"}>
                  <span className={"material-symbols-outlined text-[36px] text-primary group-hover:text-white"} data-weight={"fill"}>
                    domain
                  </span>
                </div>
                <h3 className={"font-headline-md text-[24px] mb-4 text-tertiary"}>
                  Custom Villas
                </h3>
                <p className={"font-body-md text-body-md text-on-surface-variant mb-8"}>
                  Bespoke single-family residences designed with unique spatial configurations and premium landscaping.
                </p>
                <ul className={"space-y-4"}>
                  <li className={"flex items-center gap-3 text-label-sm text-tertiary font-bold"}>
                    <span className={"material-symbols-outlined text-primary text-[18px]"}>
                      verified
                    </span>
                    {" "}ARCHITECTURAL BLUEPRINTING{" "}
                  </li>
                  <li className={"flex items-center gap-3 text-label-sm text-tertiary font-bold"}>
                    <span className={"material-symbols-outlined text-primary text-[18px]"}>
                      verified
                    </span>
                    {" "}SMART HOME INTEGRATION{" "}
                  </li>
                </ul>
              </div>
              <div className={"group p-10 bg-tertiary text-white border border-transparent reveal shadow-xl"} style={{transitionDelay: "200ms"}}>
                <div className={"w-16 h-16 bg-white/10 flex items-center justify-center rounded-xl mb-8"}>
                  <span className={"material-symbols-outlined text-[36px] text-primary"} data-weight={"fill"}>
                    apartment
                  </span>
                </div>
                <h3 className={"font-headline-md text-[24px] mb-4"}>
                  Luxury Apartments
                </h3>
                <p className={"font-body-lg text-body-md text-white/70 mb-8"}>
                  High-rise developments and boutique apartment complexes with focus on structural integrity and communal luxury.
                </p>
                <ul className={"space-y-4"}>
                  <li className={"flex items-center gap-3 text-label-sm text-white/90 font-bold"}>
                    <span className={"material-symbols-outlined text-primary text-[18px]"}>
                      verified
                    </span>
                    {" "}SEISMIC-ZONE ENGINEERING{" "}
                  </li>
                  <li className={"flex items-center gap-3 text-label-sm text-white/90 font-bold"}>
                    <span className={"material-symbols-outlined text-primary text-[18px]"}>
                      verified
                    </span>
                    {" "}PREMIUM AMENITIES{" "}
                  </li>
                </ul>
              </div>
              <div className={"group p-10 bg-white border border-outline-variant/30 hover:border-primary/50 transition-all duration-500 reveal shadow-soft"} style={{transitionDelay: "300ms"}}>
                <div className={"w-16 h-16 bg-surface-container-low flex items-center justify-center rounded-xl mb-8 group-hover:bg-primary transition-colors"}>
                  <span className={"material-symbols-outlined text-[36px] text-primary group-hover:text-white"} data-weight={"fill"}>
                    energy_savings_leaf
                  </span>
                </div>
                <h3 className={"font-headline-md text-[24px] mb-4 text-tertiary"}>
                  Sustainable Homes
                </h3>
                <p className={"font-body-md text-body-md text-on-surface-variant mb-8"}>
                  Eco-conscious construction utilizing green materials, solar optimization, and water recycling systems.
                </p>
                <ul className={"space-y-4"}>
                  <li className={"flex items-center gap-3 text-label-sm text-tertiary font-bold"}>
                    <span className={"material-symbols-outlined text-primary text-[18px]"}>
                      verified
                    </span>
                    {" "}SOLAR GRID READINESS{" "}
                  </li>
                  <li className={"flex items-center gap-3 text-label-sm text-tertiary font-bold"}>
                    <span className={"material-symbols-outlined text-primary text-[18px]"}>
                      verified
                    </span>
                    {" "}LEED GUIDELINES{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={"py-section-gap bg-surface-container-low relative overflow-hidden"}>
          <div className={"absolute top-0 right-0 w-1/4 h-full opacity-[0.03] pointer-events-none"}>
            <span className={"material-symbols-outlined text-[600px] text-primary rotate-12"}>
              architecture
            </span>
          </div>
          <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10"}>
            <div className={"text-center max-w-3xl mx-auto mb-20 reveal"}>
              <h2 className={"font-headline-lg text-headline-lg-mobile md:text-headline-lg text-tertiary mb-6"}>
                Build Your Home in 5 Simple Steps
              </h2>
              <p className={"font-body-lg text-on-surface-variant"}>
                A transparent, engineered workflow designed to take you from initial concept to your dream home without the stress.
              </p>
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-5 gap-6"}>
              <div className={"reveal"} style={{transitionDelay: "100ms"}}>
                <div className={"bg-white p-8 h-full rounded-xl shadow-soft border border-outline-variant/30 group hover:-translate-y-2 transition-transform duration-300"}>
                  <div className={"text-primary font-black text-[56px] opacity-10 mb-2 leading-none"}>
                    01
                  </div>
                  <div className={"mb-6"}>
                    <span className={"material-symbols-outlined text-primary text-[32px]"}>
                      chat
                    </span>
                  </div>
                  <h4 className={"font-headline-md text-[20px] mb-3 text-tertiary"}>
                    Consultation
                  </h4>
                  <p className={"text-body-md text-on-surface-variant leading-snug"}>
                    Defining vision, budget, and site feasibility analysis.
                  </p>
                </div>
              </div>
              <div className={"reveal"} style={{transitionDelay: "200ms"}}>
                <div className={"bg-white p-8 h-full rounded-xl shadow-soft border border-outline-variant/30 group hover:-translate-y-2 transition-transform duration-300"}>
                  <div className={"text-primary font-black text-[56px] opacity-10 mb-2 leading-none"}>
                    02
                  </div>
                  <div className={"mb-6"}>
                    <span className={"material-symbols-outlined text-primary text-[32px]"}>
                      draw
                    </span>
                  </div>
                  <h4 className={"font-headline-md text-[20px] mb-3 text-tertiary"}>
                    Design
                  </h4>
                  <p className={"text-body-md text-on-surface-variant leading-snug"}>
                    2D planning and 3D architectural visualization.
                  </p>
                </div>
              </div>
              <div className={"reveal"} style={{transitionDelay: "300ms"}}>
                <div className={"bg-white p-8 h-full rounded-xl shadow-soft border border-outline-variant/30 group hover:-translate-y-2 transition-transform duration-300"}>
                  <div className={"text-primary font-black text-[56px] opacity-10 mb-2 leading-none"}>
                    03
                  </div>
                  <div className={"mb-6"}>
                    <span className={"material-symbols-outlined text-primary text-[32px]"}>
                      fact_check
                    </span>
                  </div>
                  <h4 className={"font-headline-md text-[20px] mb-3 text-tertiary"}>
                    Approval
                  </h4>
                  <p className={"text-body-md text-on-surface-variant leading-snug"}>
                    Liaising with authorities for sanctions and permits.
                  </p>
                </div>
              </div>
              <div className={"reveal"} style={{transitionDelay: "400ms"}}>
                <div className={"bg-white p-8 h-full rounded-xl shadow-soft border border-outline-variant/30 group hover:-translate-y-2 transition-transform duration-300"}>
                  <div className={"text-primary font-black text-[56px] opacity-10 mb-2 leading-none"}>
                    04
                  </div>
                  <div className={"mb-6"}>
                    <span className={"material-symbols-outlined text-primary text-[32px]"}>
                      foundation
                    </span>
                  </div>
                  <h4 className={"font-headline-md text-[20px] mb-3 text-tertiary"}>
                    Execution
                  </h4>
                  <p className={"text-body-md text-on-surface-variant leading-snug"}>
                    Civil construction with rigorous quality monitoring.
                  </p>
                </div>
              </div>
              <div className={"reveal"} style={{transitionDelay: "500ms"}}>
                <div className={"bg-white p-8 h-full rounded-xl shadow-soft border border-outline-variant/30 group hover:-translate-y-2 transition-transform duration-300"}>
                  <div className={"text-primary font-black text-[56px] opacity-10 mb-2 leading-none"}>
                    05
                  </div>
                  <div className={"mb-6"}>
                    <span className={"material-symbols-outlined text-primary text-[32px]"}>
                      key
                    </span>
                  </div>
                  <h4 className={"font-headline-md text-[20px] mb-3 text-tertiary"}>
                    Handover
                  </h4>
                  <p className={"text-body-md text-on-surface-variant leading-snug"}>
                    Final finish check and ceremonial key delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"py-section-gap bg-surface"}>
          <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter"}>
            <div className={"grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"}>
              <div className={"reveal"}>
                <div className={"relative"}>
                  <div className={"w-full aspect-[4/5] bg-cover bg-center rounded-2xl shadow-2xl overflow-hidden"} style={{backgroundImage: "url('/images/living-room.jpg')"}}></div>
                  <div className={"absolute -bottom-10 -right-6 bg-tertiary p-10 rounded-xl shadow-2xl text-center min-w-[200px]"}>
                    <p className={"text-white font-display-lg text-[64px] mb-0 leading-none"}>
                      100%
                    </p>
                    <p className={"text-primary font-label-sm tracking-widest mt-2 uppercase font-black"}>
                      Transparency
                    </p>
                  </div>
                </div>
              </div>
              <div className={"reveal"}>
                <h2 className={"font-headline-lg text-headline-lg-mobile md:text-headline-lg text-tertiary mb-8"}>
                  Unyielding Engineering Standards
                </h2>
                <p className={"font-body-lg text-body-lg text-on-surface-variant mb-12"}>
                  We source only Tier-1 materials. Our site engineers perform over 150 quality checks from foundation to the final coat of paint.
                </p>
                <div className={"space-y-10"}>
                  <div className={"flex gap-6 items-start"}>
                    <div className={"w-14 h-14 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center"}>
                      <span className={"material-symbols-outlined text-primary text-[28px]"}>
                        verified_user
                      </span>
                    </div>
                    <div>
                      <h4 className={"font-headline-md text-[22px] mb-2 text-tertiary"}>
                        Premium Grade TMT Steel
                      </h4>
                      <p className={"font-body-md text-on-surface-variant"}>
                        We only use JSW or TATA Tiscon for maximum structural elasticity and lifespan.
                      </p>
                    </div>
                  </div>
                  <div className={"flex gap-6 items-start"}>
                    <div className={"w-14 h-14 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center"}>
                      <span className={"material-symbols-outlined text-primary text-[28px]"}>
                        foundation
                      </span>
                    </div>
                    <div>
                      <h4 className={"font-headline-md text-[22px] mb-2 text-tertiary"}>
                        M25 Grade Ready-Mix Concrete
                      </h4>
                      <p className={"font-body-md text-on-surface-variant"}>
                        Automated mixing ensures consistent compressive strength across the entire structure.
                      </p>
                    </div>
                  </div>
                  <div className={"flex gap-6 items-start"}>
                    <div className={"w-14 h-14 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center"}>
                      <span className={"material-symbols-outlined text-primary text-[28px]"}>
                        architecture
                      </span>
                    </div>
                    <div>
                      <h4 className={"font-headline-md text-[22px] mb-2 text-tertiary"}>
                        Architectural Supervision
                      </h4>
                      <p className={"font-body-md text-on-surface-variant"}>
                        Weekly site visits by lead architects to ensure design fidelity and detail precision.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"py-section-gap bg-tertiary text-white"}>
          <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter"}>
            <div className={"text-center mb-16 reveal"}>
              <h2 className={"font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4"}>
                Featured Residences
              </h2>
              <p className={"text-white/60 max-w-xl mx-auto"}>
                Explore some of our most prestigious home builds across Chennai's premier locations.
              </p>
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-12"}>
              <div className={"group reveal"} style={{transitionDelay: "100ms"}}>
                <div className={"relative overflow-hidden aspect-[16/10] mb-8 rounded-xl"}>
                  <div className={"absolute inset-0 bg-tertiary/20 group-hover:bg-transparent transition-all z-10"}></div>
                  <div className={"w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-1000"} style={{backgroundImage: "url('/images/excellence.jpg')"}}></div>
                </div>
                <div className={"flex justify-between items-start px-2"}>
                  <div>
                    <h3 className={"font-headline-md text-[28px] mb-1"}>
                      The Skyline Villa
                    </h3>
                    <p className={"text-white/60 font-body-md"}>
                      Adyar, Chennai
                    </p>
                  </div>
                  <div className={"text-right"}>
                    <p className={"font-display-lg text-[28px] mb-0 text-primary"}>
                      5,400 sq.ft
                    </p>
                    <p className={"text-white/40 text-[11px] uppercase tracking-[0.2em] font-bold"}>
                      Built Area
                    </p>
                  </div>
                </div>
              </div>
              <div className={"group reveal"} style={{transitionDelay: "200ms"}}>
                <div className={"relative overflow-hidden aspect-[16/10] mb-8 rounded-xl"}>
                  <div className={"absolute inset-0 bg-tertiary/20 group-hover:bg-transparent transition-all z-10"}></div>
                  <div className={"w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-1000"} style={{backgroundImage: "url('/images/living-room.jpg')"}}></div>
                </div>
                <div className={"flex justify-between items-start px-2"}>
                  <div>
                    <h3 className={"font-headline-md text-[28px] mb-1"}>
                      Azure Heights
                    </h3>
                    <p className={"text-white/60 font-body-md"}>
                      ECR Road, Chennai
                    </p>
                  </div>
                  <div className={"text-right"}>
                    <p className={"font-display-lg text-[28px] mb-0 text-primary"}>
                      3,200 sq.ft
                    </p>
                    <p className={"text-white/40 text-[11px] uppercase tracking-[0.2em] font-bold"}>
                      Built Area
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"py-section-gap bg-surface-container-low"}>
          <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter"}>
            <div className={"text-center mb-16 reveal"}>
              <h2 className={"font-headline-lg text-headline-lg-mobile md:text-headline-lg text-tertiary"}>
                Client Stories
              </h2>
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-3 gap-8"}>
              <div className={"bg-white p-10 flex flex-col justify-between reveal rounded-xl shadow-soft border border-outline-variant/30"} style={{transitionDelay: "100ms"}}>
                <div>
                  <div className={"flex text-primary mb-8"}>
                    <span className={"material-symbols-outlined"} style={{fontVariationSettings: "'FILL' 1"}}>
                      star
                    </span>
                    <span className={"material-symbols-outlined"} style={{fontVariationSettings: "'FILL' 1"}}>
                      star
                    </span>
                    <span className={"material-symbols-outlined"} style={{fontVariationSettings: "'FILL' 1"}}>
                      star
                    </span>
                    <span className={"material-symbols-outlined"} style={{fontVariationSettings: "'FILL' 1"}}>
                      star
                    </span>
                    <span className={"material-symbols-outlined"} style={{fontVariationSettings: "'FILL' 1"}}>
                      star
                    </span>
                  </div>
                  <p className={"font-body-md text-on-surface italic mb-10 leading-relaxed"}>
                    "Santhi Builders turned our dream of a custom villa into a reality. Their attention to structural detail and the quality of finish is unlike anything we saw with other builders in Chennai."
                  </p>
                </div>
                <div className={"flex items-center gap-4 pt-6 border-t border-outline-variant/20"}>
                  <div className={"w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg"}>
                    RK
                  </div>
                  <div>
                    <h5 className={"font-label-sm text-tertiary text-[14px]"}>
                      Rajesh Kumar
                    </h5>
                    <p className={"text-[12px] text-on-surface-variant font-medium"}>
                      Villa Owner, Anna Nagar
                    </p>
                  </div>
                </div>
              </div>
              <div className={"bg-white p-10 flex flex-col justify-between reveal rounded-xl shadow-soft border border-outline-variant/30"} style={{transitionDelay: "200ms"}}>
                <div>
                  <div className={"flex text-primary mb-8"}>
                    <span className={"material-symbols-outlined"} style={{fontVariationSettings: "'FILL' 1"}}>
                      star
                    </span>
                    <span className={"material-symbols-outlined"} style={{fontVariationSettings: "'FILL' 1"}}>
                      star
                    </span>
                    <span className={"material-symbols-outlined"} style={{fontVariationSettings: "'FILL' 1"}}>
                      star
                    </span>
                    <span className={"material-symbols-outlined"} style={{fontVariationSettings: "'FILL' 1"}}>
                      star
                    </span>
                    <span className={"material-symbols-outlined"} style={{fontVariationSettings: "'FILL' 1"}}>
                      star
                    </span>
                  </div>
                  <p className={"font-body-md text-on-surface italic mb-10 leading-relaxed"}>
                    "What impressed me most was their timeline management. Despite the monsoon delays, they handed over our luxury apartment right on schedule. Engineering transparency at its best."
                  </p>
                </div>
                <div className={"flex items-center gap-4 pt-6 border-t border-outline-variant/20"}>
                  <div className={"w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-white font-bold text-lg"}>
                    SM
                  </div>
                  <div>
                    <h5 className={"font-label-sm text-tertiary text-[14px]"}>
                      Shanti Mehra
                    </h5>
                    <p className={"text-[12px] text-on-surface-variant font-medium"}>
                      Luxury Apt Resident, OMR
                    </p>
                  </div>
                </div>
              </div>
              <div className={"bg-white p-10 flex flex-col justify-between reveal rounded-xl shadow-soft border border-outline-variant/30"} style={{transitionDelay: "300ms"}}>
                <div>
                  <div className={"flex text-primary mb-8"}>
                    <span className={"material-symbols-outlined"} style={{fontVariationSettings: "'FILL' 1"}}>
                      star
                    </span>
                    <span className={"material-symbols-outlined"} style={{fontVariationSettings: "'FILL' 1"}}>
                      star
                    </span>
                    <span className={"material-symbols-outlined"} style={{fontVariationSettings: "'FILL' 1"}}>
                      star
                    </span>
                    <span className={"material-symbols-outlined"} style={{fontVariationSettings: "'FILL' 1"}}>
                      star
                    </span>
                    <span className={"material-symbols-outlined"} style={{fontVariationSettings: "'FILL' 1"}}>
                      star
                    </span>
                  </div>
                  <p className={"font-body-md text-on-surface italic mb-10 leading-relaxed"}>
                    "The sustainable home they built for us is incredibly cool even in Chennai peak summer. The solar integration and cross-ventilation design were masterfully executed."
                  </p>
                </div>
                <div className={"flex items-center gap-4 pt-6 border-t border-outline-variant/20"}>
                  <div className={"w-12 h-12 rounded-full bg-tertiary flex items-center justify-center text-white font-bold text-lg"}>
                    AV
                  </div>
                  <div>
                    <h5 className={"font-label-sm text-tertiary text-[14px]"}>
                      Anand Varma
                    </h5>
                    <p className={"text-[12px] text-on-surface-variant font-medium"}>
                      Green Homeowner, Perungudi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"py-section-gap bg-white relative overflow-hidden"} id={"contact-form"}>
          <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter"}>
            <div className={"grid grid-cols-1 lg:grid-cols-2 gap-0 bg-tertiary rounded-3xl overflow-hidden shadow-2xl relative"}>
              <div className={"p-12 md:p-20 relative z-10 flex flex-col justify-center"}>
                <div className={"absolute inset-0 bg-primary opacity-5 pointer-events-none"}>
                  <svg className={"w-full h-full"} preserveAspectRatio={"none"} viewBox={"0 0 100 100"}>
                    <path d={"M0 100 L100 0"} fill={"none"} stroke={"white"} strokeWidth={"0.2"} />
                    <path d={"M0 80 L80 0"} fill={"none"} stroke={"white"} strokeWidth={"0.2"} />
                    <path d={"M20 100 L100 20"} fill={"none"} stroke={"white"} strokeWidth={"0.2"} />
                  </svg>
                </div>
                <div className={"reveal relative z-10"}>
                  <h2 className={"font-display-lg text-[36px] md:text-headline-lg text-white mb-6 leading-tight"}>
                    Start Your Architectural Journey
                  </h2>
                  <p className={"font-body-lg text-white/80 mb-10 text-[20px]"}>
                    Ready to build? Share your vision with our expert engineering team for a detailed project estimation and feasibility study.
                  </p>
                  <div className={"space-y-6"}>
                    <div className={"flex items-center gap-5 text-white group"}>
                      <div className={"w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary transition-colors"}>
                        <span className={"material-symbols-outlined"}>
                          call
                        </span>
                      </div>
                      <span className={"font-headline-md text-[20px]"}>
                        +91 44 2450 6789
                      </span>
                    </div>
                    <div className={"flex items-center gap-5 text-white group"}>
                      <div className={"w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary transition-colors"}>
                        <span className={"material-symbols-outlined"}>
                          mail
                        </span>
                      </div>
                      <span className={"font-headline-md text-[20px]"}>
                        build@santhibuilders.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"bg-white p-10 md:p-16 flex flex-col justify-center reveal relative z-10"}>
                <ConstructionEnquiryForm
                  description="Tell us about your land, preferred built-up area, and finish expectations for a practical residential construction response."
                  source="Service - Residential"
                  submitLabel="Send Residential Enquiry"
                  title="Start your residential construction enquiry"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
