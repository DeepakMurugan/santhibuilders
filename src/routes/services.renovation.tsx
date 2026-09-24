import { createFileRoute } from "@tanstack/react-router";
import { ConstructionEnquirySection } from "@/components/construction-enquiry-form";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/services/renovation")({
  head: () => ({
    meta: [
      { title: "Renovation & Restoration Services | Santhi Builders" },
      { name: "description", content: "Structural retrofits, heritage restoration and full home renovation delivered with minimal disruption." },
      { property: "og:title", content: "Renovation & Restoration Services | Santhi Builders" },
      { property: "og:description", content: "Structural retrofits, heritage restoration and full home renovation delivered with minimal disruption." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Renovation,
});

function Renovation() {
  useReveal();
  return (
    <>
     
      <main>


        <section className={"relative min-h-[90vh] flex items-center overflow-hidden py-20"}>
          <div className={"absolute inset-0 z-0"}>
            <div className={"absolute inset-0 bg-gradient-to-r from-tertiary/95 via-tertiary/60 to-transparent z-10"}></div>
            <div
              className={"w-full h-full bg-cover bg-center transition-transform duration-[20000ms] scale-105"}
              style={{ backgroundImage: "url('/images/renova.png')" }}
            ></div>
          </div>
          <div className={"relative z-20 max-w-container-max mx-auto px-margin-mobile md:px-gutter w-full"}>
            <div className={"max-w-2xl reveal active"}>
              <span className={"inline-block py-1.5 px-4 bg-primary text-on-primary font-label-sm rounded mb-6 uppercase tracking-[0.1em]"}>
                RENOVATION & RESTORATION
              </span>
              <h1 className={"font-display-lg text-[42px] md:text-display-lg text-white mb-6 leading-[1.1]"}>
                Reimagining Spaces, Preserving Legacies
              </h1>
              <p className={"font-body-lg text-body-lg text-white mb-10 border-l-4 border-primary pl-6 max-w-xl"}>
                Modernizing Chennai's structures with architectural sensitivity. We combine heritage structural integrity with 21st-century technology to breathe new life into existing foundations.
              </p>
              <div className={"flex flex-col sm:flex-row gap-4"}>
                <a className={"bg-secondary-container text-on-secondary-container px-10 py-5 rounded font-headline-md text-[18px] font-bold text-center hover:bg-secondary hover:shadow-xl hover:-translate-y-1 transition-all"} href={"#quote"}>
                  Request a Structural Evaluation
                </a>
                <a className={"border-2 border-white/30 text-white backdrop-blur-md px-10 py-5 rounded font-headline-md text-[18px] font-bold text-center hover:bg-white/10 transition-all"} href={"#gallery"}>
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </section>



        <section className={"py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto"}>
          <div className={"flex flex-col md:flex-row justify-between items-end mb-16 gap-6"}>
            <div className={"max-w-2xl"}>
              <h2 className={"font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4"}>
                Precision Engineering for Every Structure
              </h2>
              <p className={"text-on-surface-variant font-body-lg text-body-lg"}>
                Our multi-disciplinary approach ensures that modernization never comes at the cost of structural longevity.
              </p>
            </div>
          </div>
          <div className={"grid grid-cols-1 md:grid-cols-3 gap-gutter"}>
            <div className={"group bg-surface-container-low p-10 rounded-2xl border border-outline-variant hover:border-primary hover:shadow-xl transition-all duration-300"}>
              <div className={"bg-primary-container text-on-primary-container w-16 h-16 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform"}>
                <span className={"material-symbols-outlined text-4xl"}>
                  architecture
                </span>
              </div>
              <h3 className={"font-headline-md text-headline-md mb-4"}>
                Structural Strengthening
              </h3>
              <p className={"text-on-surface-variant mb-6"}>
                Utilizing carbon fiber wrapping and micro-concrete injection to reinforce aging pillars and beams without adding excessive weight.
              </p>
              <ul className={"space-y-3"}>
                <li className={"flex items-center gap-2 text-on-surface font-semibold"}>
                  <span className={"material-symbols-outlined text-secondary"} style={{fontVariationSettings: "'FILL' 1"}}>
                    check_circle
                  </span>
                  {" "}Column Jacketing{" "}
                </li>
                <li className={"flex items-center gap-2 text-on-surface font-semibold"}>
                  <span className={"material-symbols-outlined text-secondary"} style={{fontVariationSettings: "'FILL' 1"}}>
                    check_circle
                  </span>
                  {" "}Slab Reinforcement{" "}
                </li>
              </ul>
            </div>
            <div className={"group bg-surface-container-low p-10 rounded-2xl border border-outline-variant hover:border-primary hover:shadow-xl transition-all duration-300"}>
              <div className={"bg-primary-container text-on-primary-container w-16 h-16 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform"}>
                <span className={"material-symbols-outlined text-4xl"}>
                  floor_lamp
                </span>
              </div>
              <h3 className={"font-headline-md text-headline-md mb-4"}>
                Interior Modernization
              </h3>
              <p className={"text-on-surface-variant mb-6"}>
                Converting traditional floor plans into contemporary open-concept layouts while optimizing for lighting and smart-home integration.
              </p>
              <ul className={"space-y-3"}>
                <li className={"flex items-center gap-2 text-on-surface font-semibold"}>
                  <span className={"material-symbols-outlined text-secondary"} style={{fontVariationSettings: "'FILL' 1"}}>
                    check_circle
                  </span>
                  {" "}Open Floor Planning{" "}
                </li>
                <li className={"flex items-center gap-2 text-on-surface font-semibold"}>
                  <span className={"material-symbols-outlined text-secondary"} style={{fontVariationSettings: "'FILL' 1"}}>
                    check_circle
                  </span>
                  {" "}Smart MEP Integration{" "}
                </li>
              </ul>
            </div>
            <div className={"group bg-surface-container-low p-10 rounded-2xl border border-outline-variant hover:border-primary hover:shadow-xl transition-all duration-300"}>
              <div className={"bg-primary-container text-on-primary-container w-16 h-16 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform"}>
                <span className={"material-symbols-outlined text-4xl"}>
                  domain
                </span>
              </div>
              <h3 className={"font-headline-md text-headline-md mb-4"}>
                Facade Redesign
              </h3>
              <p className={"text-on-surface-variant mb-6"}>
                Revitalizing the exterior identity of buildings using sustainable cladding, high-efficiency glass, and architectural lighting.
              </p>
              <ul className={"space-y-3"}>
                <li className={"flex items-center gap-2 text-on-surface font-semibold"}>
                  <span className={"material-symbols-outlined text-secondary"} style={{fontVariationSettings: "'FILL' 1"}}>
                    check_circle
                  </span>
                  {" "}Sustainable Cladding{" "}
                </li>
                <li className={"flex items-center gap-2 text-on-surface font-semibold"}>
                  <span className={"material-symbols-outlined text-secondary"} style={{fontVariationSettings: "'FILL' 1"}}>
                    check_circle
                  </span>
                  {" "}Solar Glazing{" "}
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className={"bg-inverse-surface py-section-gap text-white overflow-hidden"}>
          <div className={"px-margin-mobile md:px-gutter max-w-container-max mx-auto"}>
            <div className={"grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"}>
              <div>
                <h2 className={"font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-12"}>
                  The Restoration Blueprint
                </h2>
                <div className={"space-y-12"}>
                  <div className={"flex gap-6 relative"}>
                    <div className={"flex-shrink-0 w-12 h-12 bg-secondary text-on-secondary flex items-center justify-center rounded-full font-bold z-10"}>
                      01
                    </div>
                    <div className={"h-full w-px bg-outline absolute left-6 top-12"}></div>
                    <div>
                      <h4 className={"font-headline-md text-headline-md mb-2"}>
                        Structural Assessment
                      </h4>
                      <p className={"text-surface-variant/80 font-body-md text-body-md"}>
                        Advanced non-destructive testing (NDT) to analyze existing concrete health, rebar corrosion, and load-bearing capacity.
                      </p>
                    </div>
                  </div>
                  <div className={"flex gap-6 relative"}>
                    <div className={"flex-shrink-0 w-12 h-12 bg-secondary text-on-secondary flex items-center justify-center rounded-full font-bold z-10"}>
                      02
                    </div>
                    <div className={"h-full w-px bg-outline absolute left-6 top-12"}></div>
                    <div>
                      <h4 className={"font-headline-md text-headline-md mb-2"}>
                        Core Reinforcement
                      </h4>
                      <p className={"text-surface-variant/80 font-body-md text-body-md"}>
                        Precision strengthening of the fundamental skeleton to ensure the building meets current seismic and safety codes.
                      </p>
                    </div>
                  </div>
                  <div className={"flex gap-6 relative"}>
                    <div className={"flex-shrink-0 w-12 h-12 bg-secondary text-on-secondary flex items-center justify-center rounded-full font-bold z-10"}>
                      03
                    </div>
                    <div className={"h-full w-px bg-outline absolute left-6 top-12"}></div>
                    <div>
                      <h4 className={"font-headline-md text-headline-md mb-2"}>
                        Modernization Overlay
                      </h4>
                      <p className={"text-surface-variant/80 font-body-md text-body-md"}>
                        Implementation of new spatial designs, MEP services, and smart systems while preserving character-defining elements.
                      </p>
                    </div>
                  </div>
                  <div className={"flex gap-6"}>
                    <div className={"flex-shrink-0 w-12 h-12 bg-secondary text-on-secondary flex items-center justify-center rounded-full font-bold"}>
                      04
                    </div>
                    <div>
                      <h4 className={"font-headline-md text-headline-md mb-2"}>
                        Architectural Finishing
                      </h4>
                      <p className={"text-surface-variant/80 font-body-md text-body-md"}>
                        Meticulous surface treatments, high-end materials, and quality checks that deliver a 'brand new' experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"relative"}>
                <div className={"rounded-3xl overflow-hidden border-8 border-white/5 shadow-2xl"}>
                  <img className={"w-full aspect-[4/5] object-cover"} data-alt={"A split screen image showing an architectural technical blueprint overlaying a high-detail close-up of a construction site. On the left, a weathered brick wall is being reinforced with modern metal beams. On the right, the completed version features smooth white plaster and warm wooden slats. The lighting is bright and clean, emphasizing technical precision."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuC1uP7k4NScGMXchgx3hzwlctiAsYdhDuYlYxm_YQmY2O1_urV3Qo1fcy6Bg6-33yT9ly_0j7ZvDLj9J9tGgcLlbs5r2jJFslZLs7xYMlLu77svPDZcf5ADDblLxD19RJq2D-IFP3o9gKVpvqjoCIhis1WNCF1-JI3JzjSm8eOF-sLazokHNWSlvoYwN4gYcGNfW5g6jPjhbgB0hUf93iTlKBpo_ZDsv7mAJ-pkkGLWEcDn1GLXGSCEShW4OhdyoDmc6LTKbwhrwODE"} />
                </div>
                <div className={"absolute -bottom-10 -right-10 bg-primary p-8 rounded-2xl shadow-2xl hidden md:block"}>
                  <p className={"font-display-lg text-[48px] text-white leading-none"}>
                    25+
                  </p>
                  <p className={"font-label-sm text-label-sm text-on-primary-container tracking-widest mt-2 uppercase"}>
                    Years Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto"} id={"gallery"}>
          <div className={"text-center mb-16"}>
            <h2 className={"font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4"}>
              Transformations in Progress
            </h2>
            <p className={"text-on-surface-variant font-body-lg text-body-lg max-w-2xl mx-auto"}>
              Slide to explore how we've modernized structures across Chennai, preserving their soul while enhancing their functionality.
            </p>
          </div>
          <div className={"grid grid-cols-1 md:grid-cols-2 gap-10"}>
            <div className={"space-y-6"}>
              <div className={"before-after-container aspect-[16/9] rounded-2xl group shadow-lg"}>
                <div className={"absolute inset-0"}>
                  <img className={"w-full h-full object-cover"} data-alt={"A photo of a dilapidated, old Chennai bungalow with chipped paint, overgrown vines, and cracked facade. The lighting is overcast and moody, highlighting the structural decay. The style is raw documentary photography."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuC5R43yEk0b48ViXP4TYK15s7Kdq98Wc1wOjddSCbFLZzGncSbZ1lInQSzEV9rrYKXNcYatWXgKdiV-3kKl3C3pxDqGtIRDjt5Rn1U8qycRk9LLzkUR5LPHZNrSvEr2AOmUjzdhwQhW9hk9XrepUlfiVwY-3RMeaK0kuj-O4G4iLTjXS2PMmI2JhnKzNQGrqn4SHRPj0WhMiNu8XbeKcsVKbfBvEtv1vOLggZhiTj4x3i4gqqTUMCtUk4Apc1kp5mGINtOZFqYgNeSr"} />
                  <div className={"absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-md text-xs font-bold backdrop-blur-sm"}>
                    BEFORE
                  </div>
                </div>
                <div className={"absolute inset-0 w-1/2 overflow-hidden after-image"} style={{width: "50%"}}>
                  <img className={"absolute inset-0 w-[200%] h-full object-cover max-w-none"} data-alt={"The same Chennai bungalow fully restored into a luxury boutique office. It features crisp white walls, restored teak wood windows, lush landscaping, and a modern glass entryway. The lighting is warm and inviting morning sun. High-end architectural style."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuCmNHSxGjNuaVaaN0_we4uQXB-XDzE7lfEpv1jel08HNnh_UJctL8tTsFHpFBIUXEkZia_pDhqe0M6Ib-oqhi0QpCfF33rofJ8qMcX_yYYepFTbM79ImfjVECoQunU25mqnNvCBzFuf4coLAeOXse0v61jipGJLijN0m13xBLv9VGrklm6UTxBtCM9wo4mc-DkENFvvczDu9qKlCZDnGyBZCcRUxq4IrEfgh35Bj_6gYPMH6O3z7qo3SypCBOzsy7t0tSVmLCfgfuAM"} />
                  <div className={"absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-md text-xs font-bold"}>
                    AFTER
                  </div>
                </div>
                <div className={"comparison-slider"} style={{left: "50%"}}></div>
              </div>
              <div>
                <h4 className={"font-headline-md text-headline-md"}>
                  Mylapore Heritage Residence
                </h4>
                <p className={"text-on-surface-variant"}>
                  Converting a 60-year-old traditional home into a high-tech modern office space while maintaining its Chettinad architectural roots.
                </p>
              </div>
            </div>
            <div className={"space-y-6"}>
              <div>
                <h4 className={"font-headline-md text-headline-md"}>
                  Adyar Luxury Apartment
                </h4>
                <p className={"text-on-surface-variant"}>
                  A complete structural overhaul to merge three small units into one sprawling luxury penthouse with panoramic city views.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={"px-margin-mobile md:px-gutter max-w-container-max mx-auto py-section-gap"} id={"quote"}>
          <div className={"bg-primary rounded-[2rem] p-10 md:p-20 text-center relative overflow-hidden"}>
            <div className={"absolute inset-0 opacity-10 pointer-events-none"}>
              <svg height={"100%"} preserveAspectRatio={"none"} viewBox={"0 0 100 100"} width={"100%"}>
                <defs>
                  <pattern height={10} id={"grid"} patternUnits={"userSpaceOnUse"} width={10}>
                    <path d={"M 10 0 L 0 0 0 10"} fill={"none"} stroke={"white"} strokeWidth={"0.5"} />
                  </pattern>
                </defs>
                <rect fill={"url(#grid)"} height={100} width={100} />
              </svg>
            </div>
            <div className={"relative z-10"}>
              <h2 className={"font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white mb-6"}>
                Ready to Modernize Your Property?
              </h2>
              <p className={"text-on-primary-container text-body-lg font-body-lg max-w-2xl mx-auto mb-12"}>
                Every restoration starts with a precise evaluation. Our experts will assess your building's structural health and provide a roadmap for its future.
              </p>
              <div className={"bg-white p-2 rounded-2xl max-w-xl mx-auto flex flex-col md:flex-row gap-2"}>
                <input className={"flex-grow border-none focus:ring-0 px-6 py-4 rounded-xl text-on-surface"} placeholder={"Enter your email address"} type={"email"} />
                <button className={"bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-bold hover:bg-secondary-fixed-dim transition-all"}>
                  Request Evaluation
                </button>
              </div>
              <p className={"mt-6 text-white/70 text-label-sm font-label-sm"}>
                No commitment required. Structural audit takes 48-72 hours.
              </p>
            </div>
          </div>
        </section>
        <ConstructionEnquirySection
          eyebrow="Renovation Enquiry"
          source="Service - Renovation"
          title="Planning a remodel, retrofit, or full restoration?"
          description="Use our standard project form so we can understand the current structure, desired outcome, and scope constraints before we respond."
        />
      </main>
    </>
  );
}
