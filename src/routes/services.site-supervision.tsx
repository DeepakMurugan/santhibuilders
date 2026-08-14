import { createFileRoute } from "@tanstack/react-router";
import { ConstructionEnquirySection } from "@/components/construction-enquiry-form";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/services/site-supervision")({
  head: () => ({
    meta: [
      { title: "Site Supervision Services | Santhi Builders" },
      { name: "description", content: "Daily site supervision, labour coordination and progress reporting for construction projects in Chennai." },
      { property: "og:title", content: "Site Supervision Services | Santhi Builders" },
      { property: "og:description", content: "Daily site supervision, labour coordination and progress reporting for construction projects in Chennai." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SiteSupervision,
});

function SiteSupervision() {
  useReveal();
  return (
    <>
      <section className={"relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48 blueprint-bg"}>
        <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter flex flex-col md:flex-row items-center gap-16"}>
          <div className={"w-full md:w-1/2 z-10"}>
            <div className={"inline-flex items-center gap-2 bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full mb-6"}>
              <span className={"material-symbols-outlined text-[18px]"} style={{fontVariationSettings: "'FILL' 1"}}>
                verified_user
              </span>
              <span className={"font-label-sm text-label-sm uppercase tracking-widest"}>
                Premium Site Supervision
              </span>
            </div>
            <h1 className={"font-display-lg text-[40px] md:text-display-lg leading-tight mb-6"}>
              {" "}On-Site Vigilance,{" "}
              <br />
              <span className={"text-primary"}>
                Zero-Deviation
              </span>
              {" "}Execution{" "}
            </h1>
            <p className={"font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-10"}>
              {" "}Expert oversight for every square foot of your dream project. We ensure architectural integrity through rigorous structural verification and absolute safety compliance.{" "}
            </p>
            <div className={"flex flex-wrap gap-4"}>
              <button className={"bg-primary text-on-primary px-8 py-4 font-bold rounded-lg shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2 group"}>
                {" "}Hire Expert Supervision{" "}
                <span className={"material-symbols-outlined group-hover:translate-x-1 transition-transform"}>
                  arrow_forward
                </span>
              </button>
              <button className={"border-2 border-outline text-on-surface px-8 py-4 font-bold rounded-lg hover:bg-surface-container transition-all"}>
                {" "}View Methodology{" "}
              </button>
            </div>
          </div>
          <div className={"w-full md:w-1/2 relative"}>
            <div className={"relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-square"}>
              <img className={"w-full h-full object-cover"} data-alt={"A professional site supervisor in a white hard hat and high-visibility vest standing in front of a modern construction site. He is holding a digital tablet displaying architectural blueprints with a focused, diligent expression. The background shows steel scaffolding and a clear blue sky, capturing a sense of architectural precision and safety-focused oversight."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuDnNk9jejbOxAO-WymziDDYpW0nEPyzqwFSCx7LlFxUdGzvCoE_i5UTgn4tdBBFUFnV3dl2lFWEl7HgtYNcpE_d98CEHohRvy_JPoF_58x9fggbDdK2fIreEcVm2f0nBC6_z5NOrBUiZVtymFILTMKOTMWohYILSrNH6LPg0xcHQ_WQAmzBps8OQ639E--kdKkXLSXNhBpjDFEdHvmqgdY8yyJSZHgCL_oEiCJ_y7dJP6dp1fOPoerd8ls4RfzYYjKLBqxYXww_eWSQ"} />
            </div>
            <div className={"absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-outline-variant max-w-[240px] hidden md:block"}>
              <div className={"flex items-center gap-4 mb-3"}>
                <div className={"w-12 h-12 bg-secondary-fixed flex items-center justify-center rounded-full"}>
                  <span className={"material-symbols-outlined text-secondary"} style={{fontVariationSettings: "'FILL' 1"}}>
                    timer
                  </span>
                </div>
                <div>
                  <p className={"font-label-sm text-label-sm text-on-surface-variant"}>
                    Active Monitor
                  </p>
                  <p className={"font-bold text-primary"}>
                    24/7 Precision
                  </p>
                </div>
              </div>
              <div className={"w-full bg-surface-variant h-1.5 rounded-full overflow-hidden"}>
                <div className={"bg-primary w-3/4 h-full"}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"py-section-gap bg-surface-container-low"}>
        <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter"}>
          <div className={"mb-16 text-center max-w-2xl mx-auto"}>
            <h2 className={"font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4"}>
              Precision Oversight Scope
            </h2>
            <p className={"font-body-md text-body-md text-on-surface-variant"}>
              Our supervision protocols leave no room for error, maintaining the thin line between a blueprint and a masterpiece.
            </p>
          </div>
          <div className={"grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]"}>
            <div className={"md:col-span-1 md:row-span-2 bg-surface-container-lowest p-8 rounded-xl border border-outline-variant flex flex-col justify-between hover:border-primary transition-colors"}>
              <div>
                <span className={"material-symbols-outlined text-primary text-4xl mb-6"}>
                  description
                </span>
                <h3 className={"font-headline-md text-headline-md mb-4"}>
                  Daily Logs
                </h3>
                <p className={"font-body-md text-on-surface-variant mb-6"}>
                  Comprehensive digital documentation of every material arrival, labor milestone, and site condition recorded in real-time.
                </p>
              </div>
              <ul className={"space-y-3"}>
                <li className={"flex items-center gap-2 text-label-sm font-label-sm"}>
                  <span className={"material-symbols-outlined text-secondary text-lg"}>
                    check_circle
                  </span>
                  {" "}Material Inventory Tracking
                </li>
                <li className={"flex items-center gap-2 text-label-sm font-label-sm"}>
                  <span className={"material-symbols-outlined text-secondary text-lg"}>
                    check_circle
                  </span>
                  {" "}Daily Progress Reports
                </li>
                <li className={"flex items-center gap-2 text-label-sm font-label-sm"}>
                  <span className={"material-symbols-outlined text-secondary text-lg"}>
                    check_circle
                  </span>
                  {" "}Workforce Management
                </li>
              </ul>
            </div>
            <div className={"md:col-span-2 md:row-span-1 bg-primary text-on-primary p-8 rounded-xl flex flex-col md:flex-row items-center gap-8 relative overflow-hidden"}>
              <div className={"z-10 relative"}>
                <h3 className={"font-headline-md text-headline-md mb-4 text-white"}>
                  Safety Compliance
                </h3>
                <p className={"font-body-md opacity-90 mb-6 max-w-md"}>
                  Strict adherence to IS codes and OSHA standards. We maintain a zero-accident record across all premium projects.
                </p>
                <div className={"flex gap-4"}>
                  <span className={"bg-white/20 px-3 py-1 rounded text-label-sm"}>
                    ISO Certified
                  </span>
                  <span className={"bg-white/20 px-3 py-1 rounded text-label-sm"}>
                    OSHA Compliant
                  </span>
                </div>
              </div>
              <div className={"absolute right-0 top-0 opacity-10"}>
                <span className={"material-symbols-outlined text-[200px]"} style={{fontVariationSettings: "'wght' 700"}}>
                  engineering
                </span>
              </div>
            </div>
            <div className={"bg-surface-container-lowest p-8 rounded-xl border border-outline-variant hover:shadow-xl transition-all"}>
              <span className={"material-symbols-outlined text-secondary text-4xl mb-4"}>
                architecture
              </span>
              <h3 className={"font-bold text-xl mb-2"}>
                Structural Verification
              </h3>
              <p className={"text-on-surface-variant text-sm"}>
                Rigorous reinforcement checks and slab monitoring to ensure lifelong durability.
              </p>
            </div>
            <div className={"bg-surface-container-lowest p-8 rounded-xl border border-outline-variant hover:shadow-xl transition-all"}>
              <span className={"material-symbols-outlined text-primary text-4xl mb-4"}>
                event_repeat
              </span>
              <h3 className={"font-bold text-xl mb-2"}>
                Timeline Management
              </h3>
              <p className={"text-on-surface-variant text-sm"}>
                Proactive bottleneck identification to keep your project moving at peak efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={"py-section-gap"}>
        <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter"}>
          <div className={"flex flex-col md:flex-row gap-16 items-center"}>
            <div className={"w-full md:w-1/2 grid grid-cols-2 gap-4"}>
              <div className={"bg-surface-container p-1 rounded-2xl rotate-2"}>
                <img className={"w-full aspect-[4/5] object-cover rounded-xl"} data-alt={"A senior structural engineer with graying hair and glasses, wearing a safety vest and carrying a hard hat under his arm. He is gesturing toward a large blueprint laid out on a site table. The style is professional editorial photography, soft afternoon lighting, high contrast and sharp focus, emphasizing 15 plus years of experience and wisdom."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuAlnWalK0IcOZEaTPWvVhFexr1-vIgITOGAS5yjjywlF726ym48Md0MDK_Evp3Fx7KO_mYOEe3SYENHi_mq3J_bczuKmyu2anu--QBe33btRE2qjdh4u9S7TQgJfqJ41ZayoStacv1AuT7wBX0jrNtcloom10cAqrTHjVO7q2w2XqjlQx6qxW2-6G82SgmoZf3hBxgHKsWkV0XqfAnwe7rrwhah1dL8-222mSSWhiOuerNzmyba6-F3hqUvyhU7hDeUdB2TNwdGEenZ"} />
              </div>
              <div className={"bg-surface-container p-1 rounded-2xl -rotate-2 translate-y-8"}>
                <img className={"w-full aspect-[4/5] object-cover rounded-xl"} data-alt={"Close up of an engineer's hands using a laser measuring tool against a perfectly laid brick wall at a construction site. The lighting is crisp and natural, showcasing industrial precision and high-tech tools. The color palette features cool blues and warm earth tones, reflecting Santhi Builders' professional brand identity."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuDVNCBPlVI7H5CS5XMq8Qy3c5NVs8W1QsGLbNvopA31UDcPYkqb4Bs7_V2xa1PDjP_iKxSxYHm42Kl9VSQTU5GDBszGVXKEbxLp28x8UH0C5thBW9dy-LVh-GLob4kZvsEVqo9J9ICkVu9k1nncEkI-R9B9qA4XH04xMBkWHvP0kYzQ3cineCkCckfnrajglbK8uCwOGCF8d5r5K-Kr_O6gqjVkjLaoIwfOKcwYKeOrJo9Bi7Mc-LThIBGzWp6i_qczJf9lXmGo269e"} />
              </div>
            </div>
            <div className={"w-full md:w-1/2"}>
              <h2 className={"font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8"}>
                Veterans of the Field
              </h2>
              <div className={"space-y-8"}>
                <div className={"flex gap-6"}>
                  <div className={"text-display-lg text-primary font-black opacity-20 leading-none"}>
                    15+
                  </div>
                  <div>
                    <h4 className={"font-headline-md text-xl font-bold mb-2"}>
                      Years on On-Site Experience
                    </h4>
                    <p className={"font-body-md text-on-surface-variant"}>
                      Our senior engineers aren't just managers; they are masters of structural integrity with over 1.5 million square feet supervised collectively.
                    </p>
                  </div>
                </div>
                <div className={"p-6 bg-surface-container-low rounded-lg border-l-4 border-secondary"}>
                  <p className={"italic text-on-surface-variant"}>
                    "Construction is 10% design and 90% supervision. We ensure that 90% is handled with absolute architectural honesty."
                  </p>
                  <p className={"font-bold mt-4"}>
                    — Lead Site Supervisor, Santhi Builders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"py-section-gap bg-inverse-surface text-inverse-on-surface overflow-hidden"}>
        <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter"}>
          <div className={"flex flex-col md:flex-row justify-between items-end mb-12 gap-6"}>
            <div className={"max-w-xl"}>
              <h2 className={"font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white mb-4"}>
                Transparent Progress
              </h2>
              <p className={"font-body-lg text-surface-variant"}>
                Access your project's heartbeat from anywhere in the world. Our digital-first approach brings the site to your screen.
              </p>
            </div>
            <div className={"flex items-center gap-4 bg-white/10 px-6 py-3 rounded-full border border-white/20"}>
              <div className={"w-3 h-3 bg-red-500 rounded-full animate-pulse"}></div>
              <span className={"font-label-sm text-white uppercase tracking-widest"}>
                Live Portal Active
              </span>
            </div>
          </div>
          <div className={"grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"}>
            <div className={"lg:col-span-8 bg-[#0b1c30] rounded-2xl p-4 md:p-8 border border-white/10 shadow-2xl relative"}>
              <div className={"flex items-center justify-between mb-6 border-b border-white/5 pb-4"}>
                <div className={"flex items-center gap-4"}>
                  <span className={"material-symbols-outlined text-primary-fixed"}>
                    videocam
                  </span>
                  <span className={"font-bold"}>
                    Live Feed: North Tower Slab
                  </span>
                </div>
                <div className={"flex gap-2"}>
                  <div className={"w-2 h-2 rounded-full bg-white/20"}></div>
                  <div className={"w-2 h-2 rounded-full bg-white/20"}></div>
                  <div className={"w-2 h-2 rounded-full bg-white/20"}></div>
                </div>
              </div>
              <div className={"relative aspect-video rounded-lg overflow-hidden group"}>
                <img className={"w-full h-full object-cover"} data-alt={"A wide-angle high-definition camera perspective of an active construction site during the golden hour. Workers are moving with purpose around a large structural framework. The image has a digital overlay interface with date, time, and camera labels, simulating a high-end client monitoring portal. The scene is clean, organized, and technologically advanced."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuDzndN9GR7SalxIiBgm3BIceJO6elmRg2JKbp7AOiIfBxOXhfAYJwUvNddhpaLn2ynOowK_ktHuFa6_RLK_aEiCUVTsvjIn0krj7vj9j-_udM8G9_loHQWQjG2PTuiQ-wVcOiORtHPPsSjxVvVXAdfQiThPJEalGfkpotWRf6T_lBt5JsOz_EFn4DTHKiZNSDwRSTvjs3j9AAsm5PdAc3rg_uC8qh_pGSNc5tc6CLPOg045u6oG56jwy7fzeNFZzrdSK9A6Ft-MdD7t"} />
                <div className={"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6"}>
                  <div className={"flex gap-6 text-xs text-white uppercase tracking-tighter"}>
                    <span>
                      CAM 01: EXTERIOR
                    </span>
                    <span>
                      1080P | 60FPS
                    </span>
                    <span>
                      LAT: 13.0827° N
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={"lg:col-span-4 space-y-4"}>
              <div className={"bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all cursor-pointer"}>
                <div className={"flex justify-between items-start mb-4"}>
                  <span className={"font-label-sm text-primary-fixed"}>
                    TODAY, 09:15 AM
                  </span>
                  <span className={"material-symbols-outlined text-green-400"}>
                    check_circle
                  </span>
                </div>
                <h4 className={"font-bold mb-2"}>
                  Concrete Pour Analysis
                </h4>
                <p className={"text-sm text-surface-variant"}>
                  Batch M35 verified. Temperature and slump tests passed within parameters.
                </p>
              </div>
              <div className={"bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all cursor-pointer"}>
                <div className={"flex justify-between items-start mb-4"}>
                  <span className={"font-label-sm text-primary-fixed"}>
                    YESTERDAY
                  </span>
                  <span className={"material-symbols-outlined text-green-400"}>
                    check_circle
                  </span>
                </div>
                <h4 className={"font-bold mb-2"}>
                  Safety Audit Report
                </h4>
                <p className={"text-sm text-surface-variant"}>
                  Weekly comprehensive safety check completed. Zero hazards identified.
                </p>
              </div>
              <button className={"w-full py-4 border border-primary text-primary-fixed rounded-xl font-bold hover:bg-primary/10 transition-all"}>
                {" "}Login to Full Portal{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className={"py-section-gap relative"}>
        <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter"}>
          <div className={"bg-primary-container rounded-[2rem] p-8 md:p-16 flex flex-col items-center text-center text-on-primary-container relative overflow-hidden"}>
            <div className={"absolute -top-24 -right-24 w-64 h-64 bg-secondary-container rounded-full blur-3xl opacity-30"}></div>
            <div className={"absolute -bottom-24 -left-24 w-64 h-64 bg-primary rounded-full blur-3xl opacity-30"}></div>
            <h2 className={"font-display-lg text-headline-lg-mobile md:text-display-lg text-white mb-8 relative z-10"}>
              Protect Your Investment with Professional Oversight.
            </h2>
            <p className={"font-body-lg text-body-lg mb-10 max-w-2xl text-on-primary-container opacity-90 relative z-10"}>
              Don't leave your structural integrity to chance. Engage our senior site supervision team for a project that lasts generations.
            </p>
            <button className={"bg-secondary-container text-on-secondary-container px-12 py-5 font-black text-xl rounded-xl shadow-2xl hover:scale-105 transition-transform active:scale-95 relative z-10"}>
              {" "}Hire Expert Supervision{" "}
            </button>
          </div>
        </div>
      </section>
      <ConstructionEnquirySection
        eyebrow="Site Supervision Enquiry"
        source="Service - Site Supervision"
        title="Bring daily supervision and reporting into one disciplined system."
        description="Share the project stage, site size, and execution concerns so our supervision team can align the right oversight model."
      />
    </>
  );
}
