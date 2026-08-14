import { createFileRoute } from "@tanstack/react-router";
import { ConstructionEnquirySection } from "@/components/construction-enquiry-form";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/services/project-management")({
  head: () => ({
    meta: [
      { title: "Project Management Services | Santhi Builders" },
      { name: "description", content: "Cost, schedule and quality control managed end to end by certified construction project managers in Chennai." },
      { property: "og:title", content: "Project Management Services | Santhi Builders" },
      { property: "og:description", content: "Cost, schedule and quality control managed end to end by certified construction project managers in Chennai." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectManagement,
});

function ProjectManagement() {
  useReveal();
  return (
    <>
      <header className={"bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline shadow-sm dark:shadow-none docked full-width top-0 sticky z-50"}></header>
      <section className={"relative min-h-[819px] flex items-center overflow-hidden bg-on-surface"}>
        <div className={"absolute inset-0 z-0"}>
          <div className={"w-full h-full bg-cover bg-center opacity-40 mix-blend-overlay"} data-alt={"A professional civil engineer in a white hard hat and high-visibility vest stands on a modern architectural construction site. He is holding a digital tablet and gesturing toward a reinforced concrete structure under a clear blue sky. The scene is crisp and high-contrast, conveying structural authority and technical precision in a bright light-mode aesthetic with Tech Blue accents."} style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCeXx9HPgP3ruoB0pFYCeZgEQQhVUhzvmmUzTFhiMF6DLOiQZOlKiXFoXyg8BDDIb3rzt4b-oqKo34VvhEjUwdE6q-IpNtyMLZdPTyF-N4IUD1_wG4PiXKwZq4roidH6-3o7L3Ws9l0E0REkIxNYSvAjdFVD1fvdrmHIJabo1Z5tuYtWaTEQA666pt0RnlQhuxDuLYVdZZAYkPgPOBv7samCFA1wC9eIU70sxXqYWdMK6X3elBicT4ZO1dKZWHBqcKr2K-jLzM7RrWi')"}}></div>
        </div>
        <div className={"relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-gutter w-full"}>
          <div className={"max-w-3xl"}>
            <span className={"inline-block px-4 py-1 bg-primary text-white font-label-sm text-label-sm mb-6 rounded-full tracking-widest uppercase"}>
              Operational Excellence
            </span>
            <h1 className={"font-display-lg text-4xl md:text-display-lg text-white mb-6"}>
              Precision Management, Uncompromising Quality
            </h1>
            <p className={"font-body-lg text-body-lg text-surface-variant mb-10 leading-relaxed max-w-2xl"}>
              {" "}Beyond construction, we engineer certainty. Our project management framework ensures every weld, pour, and joint meets international benchmarks for structural integrity.{" "}
            </p>
            <div className={"flex flex-wrap gap-4"}>
              <button className={"bg-secondary-container text-on-secondary-container px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all flex items-center gap-2"}>
                {" "}View Quality Protocol{" "}
                <span className={"material-symbols-outlined"}>
                  arrow_forward
                </span>
              </button>
              <button className={"border border-outline-variant text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"}>
                {" "}Download Portfolio{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className={"py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-gutter"}>
        <div className={"flex flex-col md:flex-row justify-between items-end mb-16 gap-6"}>
          <div className={"max-w-2xl"}>
            <h2 className={"font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4"}>
              Quality Benchmarks
            </h2>
            <p className={"font-body-md text-body-md text-on-surface-variant"}>
              We employ a rigorous multi-tier inspection system that leaves no room for error. Our benchmarks are the industry gold standard.
            </p>
          </div>
          <div className={"flex gap-2"}>
            <div className={"w-12 h-1 bg-primary"}></div>
            <div className={"w-4 h-1 bg-outline-variant"}></div>
            <div className={"w-4 h-1 bg-outline-variant"}></div>
          </div>
        </div>
        <div className={"grid grid-cols-1 md:grid-cols-3 gap-6"}>
          <div className={"bg-surface-container-lowest border border-outline-variant p-8 rounded-xl hover:shadow-xl transition-all group"}>
            <div className={"w-14 h-14 bg-primary-container text-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"}>
              <span className={"material-symbols-outlined text-3xl"}>
                biotech
              </span>
            </div>
            <h3 className={"font-headline-md text-headline-md text-on-surface mb-4"}>
              Material Testing
            </h3>
            <ul className={"space-y-4"}>
              <li className={"flex items-start gap-3"}>
                <span className={"material-symbols-outlined text-secondary pt-1"}>
                  check_circle
                </span>
                <span className={"font-body-md text-body-md text-on-surface-variant"}>
                  Concrete compressive strength (NDT & Cube Tests)
                </span>
              </li>
              <li className={"flex items-start gap-3"}>
                <span className={"material-symbols-outlined text-secondary pt-1"}>
                  check_circle
                </span>
                <span className={"font-body-md text-body-md text-on-surface-variant"}>
                  Steel tensile strength and chemical composition
                </span>
              </li>
              <li className={"flex items-start gap-3"}>
                <span className={"material-symbols-outlined text-secondary pt-1"}>
                  check_circle
                </span>
                <span className={"font-body-md text-body-md text-on-surface-variant"}>
                  Soil bearing capacity and moisture analysis
                </span>
              </li>
            </ul>
          </div>
          <div className={"bg-primary text-white p-8 rounded-xl shadow-lg relative overflow-hidden"}>
            <div className={"relative z-10"}>
              <div className={"w-14 h-14 bg-white/20 text-white rounded-lg flex items-center justify-center mb-6"}>
                <span className={"material-symbols-outlined text-3xl"}>
                  visibility
                </span>
              </div>
              <h3 className={"font-headline-md text-headline-md mb-4"}>
                Site Inspections
              </h3>
              <p className={"font-body-md text-body-md text-primary-fixed mb-8"}>
                Continuous 24/7 onsite supervision by Grade-A certified engineers ensures adherence to architectural blueprints.
              </p>
              <div className={"bg-white/10 p-4 rounded-lg border border-white/20"}>
                <div className={"flex justify-between text-label-sm font-label-sm mb-2"}>
                  <span>
                    Inspection Accuracy
                  </span>
                  <span>
                    99.8%
                  </span>
                </div>
                <div className={"w-full bg-white/20 h-2 rounded-full overflow-hidden"}>
                  <div className={"bg-secondary-fixed w-[99.8%] h-full"}></div>
                </div>
              </div>
            </div>
            <span className={"material-symbols-outlined absolute -bottom-10 -right-10 text-[200px] opacity-10 rotate-12"}>
              architecture
            </span>
          </div>
          <div className={"bg-surface-container-lowest border border-outline-variant p-8 rounded-xl hover:shadow-xl transition-all group"}>
            <div className={"w-14 h-14 bg-tertiary-container text-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"}>
              <span className={"material-symbols-outlined text-3xl"}>
                health_and_safety
              </span>
            </div>
            <h3 className={"font-headline-md text-headline-md text-on-surface mb-4"}>
              Safety Audits
            </h3>
            <ul className={"space-y-4"}>
              <li className={"flex items-start gap-3"}>
                <span className={"material-symbols-outlined text-secondary pt-1"}>
                  shield
                </span>
                <span className={"font-body-md text-body-md text-on-surface-variant"}>
                  Zero-Accident Site Policy (ZASP) implementation
                </span>
              </li>
              <li className={"flex items-start gap-3"}>
                <span className={"material-symbols-outlined text-secondary pt-1"}>
                  shield
                </span>
                <span className={"font-body-md text-body-md text-on-surface-variant"}>
                  Weekly electrical and structural hazard scans
                </span>
              </li>
              <li className={"flex items-start gap-3"}>
                <span className={"material-symbols-outlined text-secondary pt-1"}>
                  shield
                </span>
                <span className={"font-body-md text-body-md text-on-surface-variant"}>
                  Full compliance with IS & NBC safety standards
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={"bg-surface-container-low py-section-gap"}>
        <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter"}>
          <div className={"grid grid-cols-1 md:grid-cols-2 gap-20 items-center"}>
            <div>
              <h2 className={"font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6"}>
                Engineered Management Flow
              </h2>
              <p className={"font-body-lg text-body-lg text-on-surface-variant mb-12"}>
                Our methodology transitions from macro-planning to micro-execution with surgical precision, ensuring projects stay on track and within budget.
              </p>
              <div className={"space-y-12 relative"}>
                <div className={"absolute left-6 top-4 bottom-4 w-0.5 bg-outline-variant z-0"}></div>
                <div className={"relative z-10 flex gap-8"}>
                  <div className={"w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0"}>
                    1
                  </div>
                  <div>
                    <h4 className={"font-headline-md text-2xl text-on-surface mb-2"}>
                      Timeline Tracking
                    </h4>
                    <p className={"font-body-md text-body-md text-on-surface-variant"}>
                      Using advanced Gantt-chart logistics and critical path analysis to prevent bottlenecks before they occur.
                    </p>
                  </div>
                </div>
                <div className={"relative z-10 flex gap-8"}>
                  <div className={"w-12 h-12 bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center font-bold flex-shrink-0"}>
                    2
                  </div>
                  <div>
                    <h4 className={"font-headline-md text-2xl text-on-surface mb-2"}>
                      Vendor Coordination
                    </h4>
                    <p className={"font-body-md text-body-md text-on-surface-variant"}>
                      Unified procurement and liaisoning with Tier-1 suppliers for seamless material flow and artisanal craftsmanship.
                    </p>
                  </div>
                </div>
                <div className={"relative z-10 flex gap-8"}>
                  <div className={"w-12 h-12 bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center font-bold flex-shrink-0"}>
                    3
                  </div>
                  <div>
                    <h4 className={"font-headline-md text-2xl text-on-surface mb-2"}>
                      Cost Control
                    </h4>
                    <p className={"font-body-md text-body-md text-on-surface-variant"}>
                      Real-time expenditure tracking against estimates to ensure 0% budget overruns for our clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={"relative"}>
              <div className={"rounded-2xl overflow-hidden shadow-2xl border-4 border-white"}>
                <img className={"w-full aspect-[4/5] object-cover"} data-alt={"A clean, high-tech architectural office showing a project manager pointing at a large digital screen displaying a complex construction timeline Gantt chart. The office is minimalist with floor-to-ceiling windows, soft daylight, and modern ergonomic furniture. The atmosphere is professional, focused, and highlights technological prowess in construction management."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuBAtfokY8rHXc1dy4CDagBnaZ9AzSWAujpbFpUyOsiGMWtzih3padNMfANhswl2WDCk6us2GR1-_ADUj3v60TIik2DV9emWVD3ogYBrgJ-2Q11exzwA2N0L2a64cUG17dmoSK6DS71sPPcW-n2c9xv4jJgBxpw6OmsUjfEYPVqBSR6_6WvCPuxXba8bABWSmOPWTPBkDLXQNRCFYCz_Tv4grOPxnljPOYC0ZZFxICDk-jLwM-7dkuweZSgnd_pRzeEA28eMlMLuUJvz"} />
              </div>
              <div className={"absolute -bottom-10 -left-10 bg-secondary-container p-8 rounded-xl shadow-xl floating-action hidden md:block"}>
                <div className={"text-white font-headline-lg text-4xl mb-1"}>
                  15%
                </div>
                <div className={"text-on-secondary-container font-label-sm uppercase tracking-wider"}>
                  Avg. Faster Delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"py-section-gap"}>
        <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter text-center mb-20"}>
          <h2 className={"font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4"}>
            Transparency In Your Pocket
          </h2>
          <p className={"font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto"}>
            Track your dream home's progress like a pizza delivery. Our proprietary app provides 24/7 visibility into your investment.
          </p>
        </div>
        <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter grid grid-cols-1 md:grid-cols-3 gap-12 items-center"}>
          <div className={"space-y-12 text-right order-2 md:order-1"}>
            <div>
              <span className={"material-symbols-outlined text-primary text-4xl mb-4"}>
                video_camera_front
              </span>
              <h4 className={"font-headline-md text-xl mb-2"}>
                Live Site Feeds
              </h4>
              <p className={"font-body-md text-on-surface-variant"}>
                Access encrypted high-definition CCTV feeds of your site from anywhere in the world.
              </p>
            </div>
            <div>
              <span className={"material-symbols-outlined text-primary text-4xl mb-4"}>
                description
              </span>
              <h4 className={"font-headline-md text-xl mb-2"}>
                Daily Progress Reports
              </h4>
              <p className={"font-body-md text-on-surface-variant"}>
                Automated logs detailing material consumption, labor count, and milestones achieved.
              </p>
            </div>
          </div>
          <div className={"order-1 md:order-2 flex justify-center"}>
            <div className={"relative w-72 h-[600px] bg-on-surface rounded-[40px] border-8 border-inverse-surface shadow-2xl p-4"}>
              <div className={"w-20 h-1.5 bg-inverse-surface absolute top-6 left-1/2 -translate-x-1/2 rounded-full"}></div>
              <div className={"bg-white h-full rounded-[30px] overflow-hidden flex flex-col"}>
                <div className={"bg-primary p-6 text-white"}>
                  <div className={"text-xs uppercase opacity-70"}>
                    Project Alpha
                  </div>
                  <div className={"font-bold"}>
                    Villa Grande
                  </div>
                </div>
                <div className={"p-4 flex-1"}>
                  <div className={"mb-4"}>
                    <div className={"text-[10px] uppercase font-bold text-on-surface-variant"}>
                      Current Status
                    </div>
                    <div className={"text-sm font-bold text-secondary"}>
                      Slab Casting in Progress
                    </div>
                  </div>
                  <div className={"w-full h-32 bg-surface-container rounded-lg mb-4 overflow-hidden"}>
                    <img className={"w-full h-full object-cover"} data-alt={"A smartphone screen mockup showing a modern construction tracking app interface with a blue and white color scheme. It displays a progress bar at 65 percent, a 'Live Feed' button, and a list of completed milestones like Foundation and Framing. The design is clean, intuitive, and high-energy."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuDAsnRAp-8qD8ltHrnmzOvJ5h87qPxXajBLDz9gLWxZvwiA9yQCKBUJ3qkz8NTNETFHwP0mWNb_M9FOPYY_Etqi4QMWQu6QTCXmJQrkXnXSpJLXJzxT_ulnfmWenqLQQP9ZZVOuRosv2cksncVjN6X1OzdJS0HqCQHlce_4GkaphANSh1_uIqk4doRBcGTQhKW2qQW170EEVeh3ZwcwK9Qq43iH4dyJzUQeGmZurnOqS1-gonPnbvZ0E8GryOtaINp-XO-1PjiUS2yR"} />
                  </div>
                  <div className={"space-y-2"}>
                    <div className={"h-4 w-full bg-surface-container rounded"}></div>
                    <div className={"h-4 w-2/3 bg-surface-container rounded"}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"space-y-12 text-left order-3"}>
            <div>
              <span className={"material-symbols-outlined text-primary text-4xl mb-4"}>
                account_balance_wallet
              </span>
              <h4 className={"font-headline-md text-xl mb-2"}>
                Financial Statements
              </h4>
              <p className={"font-body-md text-on-surface-variant"}>
                Transparent billing and payment schedules with instant invoice generation.
              </p>
            </div>
            <div>
              <span className={"material-symbols-outlined text-primary text-4xl mb-4"}>
                chat
              </span>
              <h4 className={"font-headline-md text-xl mb-2"}>
                Direct PM Access
              </h4>
              <p className={"font-body-md text-on-surface-variant"}>
                A dedicated chat channel to your Project Manager for instant queries and approvals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={"bg-on-surface py-24 relative overflow-hidden"}>
        <div className={"absolute top-0 right-0 w-1/3 h-full opacity-10"}></div>
        <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter text-center relative z-10"}>
          <span className={"material-symbols-outlined text-secondary-fixed-dim text-6xl mb-6"}>
            verified
          </span>
          <h2 className={"font-display-lg text-4xl md:text-display-lg text-white mb-6"}>
            Built for Structural Longevity
          </h2>
          <p className={"font-body-lg text-body-lg text-surface-variant max-w-2xl mx-auto mb-10"}>
            {" "}We don't just build for the present. Our quality control protocols are designed to ensure your structure withstands environmental stressors for generations to come.{" "}
          </p>
          <div className={"inline-flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"}>
            <div className={"text-left"}>
              <div className={"text-white font-bold text-xl"}>
                30-Year Warranty
              </div>
              <div className={"text-surface-variant text-sm"}>
                On structural integrity and RCC works
              </div>
            </div>
            <div className={"w-px h-12 bg-white/20"}></div>
            <button className={"bg-white text-on-surface px-8 py-3 rounded-lg font-bold hover:bg-secondary-fixed transition-colors"}>
              Start Your Project
            </button>
          </div>
        </div>
      </section>
      <ConstructionEnquirySection
        eyebrow="Project Management Enquiry"
        source="Service - Project Management"
        title="Need structured cost, timeline, and execution control?"
        description="Use the same structured project form to tell us what stage your project is in and where you need management support."
        theme="dark"
      />
    </>
  );
}
