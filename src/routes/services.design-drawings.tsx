import { createFileRoute } from "@tanstack/react-router";
import { ConstructionEnquiryForm } from "@/components/construction-enquiry-form";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/services/design-drawings")({
  head: () => ({
    meta: [
      { title: "Architectural Design & Drawings | Santhi Builders" },
      { name: "description", content: "Concept design, structural drawings, MEP and approval documentation prepared by our in-house design studio." },
      { property: "og:title", content: "Architectural Design & Drawings | Santhi Builders" },
      { property: "og:description", content: "Concept design, structural drawings, MEP and approval documentation prepared by our in-house design studio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DesignDrawings,
});

function DesignDrawings() {
  useReveal();
  return (
    <>
      <header className={"relative overflow-hidden bg-surface-container-low pt-12 md:pt-24 pb-32 md:pb-48 hero-clip blueprint-grid"}>
        <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center relative z-10"}>
          <div>
            <span className={"inline-block bg-primary-container text-on-primary-container px-4 py-1 rounded-full font-label-sm text-label-sm mb-6 uppercase tracking-widest"}>
              Architectural precision
            </span>
            <h1 className={"font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-8"}>
              {" "}Architectural{" "}
              <br />
              <span className={"text-primary"}>
                Drafting
              </span>
              {" "}&{" "}
              <br />
              {" "}2D/3D Design{" "}
            </h1>
            <p className={"font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-10"}>
              {" "}Visualizing your vision before the first brick is laid. High-precision technical drawings and immersive 3D walkthroughs designed for the future of Chennai's skyline.{" "}
            </p>
            <div className={"flex flex-wrap gap-4"}>
              <button className={"bg-primary text-on-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-primary-container transition-colors"}>
                {" "}Explore Our Portfolio{" "}
                <span className={"material-symbols-outlined"}>
                  arrow_forward
                </span>
              </button>
              <button className={"bg-surface border border-outline px-8 py-4 rounded-xl font-bold hover:bg-surface-variant transition-colors"}>
                {" "}View Sample Plans{" "}
              </button>
            </div>
          </div>
          <div className={"relative mt-12 lg:mt-0"}>
            <div className={"absolute -top-12 -left-12 w-48 h-48 bg-primary opacity-10 rounded-full blur-3xl"}></div>
            <div className={"absolute -bottom-12 -right-12 w-64 h-64 bg-secondary opacity-10 rounded-full blur-3xl"}></div>
            <div className={"relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-surface"}>
              <img className={"w-full h-full object-cover aspect-[4/3]"} data-alt={"A detailed close-up shot of technical architectural blueprints on a drafting table, with a high-end 3D building model visible on a computer monitor in the background. The scene is lit with bright, crisp natural studio light, creating a clean light-mode aesthetic. Technical precision instruments like a drafting scale and a mechanical pencil are neatly arranged. The style is professional and modern, focusing on architectural drafting detail."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuAE9VG1lxiOvYdYpdyohoe5IxlkGlwE4297Bwza41IvnqqC8li3rh5zZFs5fiYP_A3XW7PbZi5sdk1JmfDhAK5iFihpTotHCSjiw7gg3Ags5cOBNFccGb5toAcRpjpLr99ZDTH__nMeuIHLJ0sHE8XOJCDWzvVza-1mGt374BXVqz_Lm1-JYhco0YUnd089FXGlAmEwvrP67lIuQasXmuuY7iH1O0hTJWp7tusq9smj1CR4it38pGuUuj248amYsyfg0OGTajuZreIz"} />
              <div className={"absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent"}></div>
              <div className={"absolute bottom-6 left-6 right-6 p-6 glass-panel rounded-xl"}>
                <div className={"flex items-center gap-4"}>
                  <div className={"w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white"}>
                    <span className={"material-symbols-outlined"} style={{fontVariationSettings: "'FILL' 1"}}>
                      precision_manufacturing
                    </span>
                  </div>
                  <div>
                    <p className={"text-on-surface font-bold"}>
                      Millimeter Accuracy
                    </p>
                    <p className={"text-on-surface-variant text-sm"}>
                      Industry-standard BIM compliance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className={"py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-gutter"}>
        <div className={"text-center mb-16"}>
          <h2 className={"font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4"}>
            Comprehensive Design Solutions
          </h2>
          <p className={"text-on-surface-variant font-body-lg max-w-2xl mx-auto"}>
            From conceptual sketches to legal approvals, we handle every dimension of your project's design phase.
          </p>
        </div>
        <div className={"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"}>
          <div className={"md:col-span-2 lg:col-span-2 bg-surface-container-lowest border border-outline-variant p-8 rounded-2xl hover:shadow-xl transition-all group"}>
            <div className={"w-16 h-16 bg-primary-fixed mb-6 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform"}>
              <span className={"material-symbols-outlined text-4xl"}>
                floor_lamp
              </span>
            </div>
            <h3 className={"font-headline-md text-headline-md mb-4"}>
              Floor Plans
            </h3>
            <p className={"text-on-surface-variant mb-6"}>
              Meticulously detailed 2D architectural layouts optimized for space utilization, natural lighting, and Vastu compliance.
            </p>
            <div className={"grid grid-cols-2 gap-4"}>
              <img className={"rounded-lg h-32 w-full object-cover"} data-alt={"A clean, minimalist 2D architectural floor plan of a modern residential villa. The drawing uses crisp black lines on a white background with subtle blue highlighting for structural walls. The layout shows living spaces, bedrooms, and landscape areas in an editorial architectural style. Soft ambient shadows give the blueprint a professional depth."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuB89CuEkURzlpPQRVPxt2_5NftKGNUnHddogrx3mcVfsIM_UnKstoCNDfrhYFx07T4WNz9Jxham6aHu1Tm_aBefodnZTKBb_kc3wDnrSV5nqgB6x4A6nH8-8HxBptN6CBvmyiPnyiPOYP_scyItaH8ofjIamo-m38UkFh-BXxP7HNY6tkQ7uSkvTalb9dAntYc_gA52FU3-HTHdnWhXf6FjQ2nLej2HfHQL8DnDh3fS4u0RKT2nvHCpivpvPXC6yd0TRsD1fhnrlcWJ"} />
              <div className={"flex flex-col justify-center gap-2"}>
                <span className={"flex items-center gap-2 text-primary font-bold text-sm"}>
                  <span className={"material-symbols-outlined text-lg"}>
                    check_circle
                  </span>
                  {" "}Vastu Compliant{" "}
                </span>
                <span className={"flex items-center gap-2 text-primary font-bold text-sm"}>
                  <span className={"material-symbols-outlined text-lg"}>
                    check_circle
                  </span>
                  {" "}Space Optimization{" "}
                </span>
              </div>
            </div>
          </div>
          <div className={"bg-surface-container-lowest border border-outline-variant p-8 rounded-2xl hover:shadow-xl transition-all group"}>
            <div className={"w-16 h-16 bg-secondary-fixed mb-6 rounded-xl flex items-center justify-center text-secondary group-hover:scale-110 transition-transform"}>
              <span className={"material-symbols-outlined text-4xl"}>
                view_in_ar
              </span>
            </div>
            <h3 className={"font-headline-md text-headline-md mb-4"}>
              3D Elevations
            </h3>
            <p className={"text-on-surface-variant mb-6"}>
              Photorealistic exterior renderings that bring your building's aesthetics to life before construction.
            </p>
            <img className={"rounded-lg w-full h-40 object-cover"} data-alt={"A high-end 3D architectural rendering of a contemporary luxury home with large glass windows and wooden accents. The lighting is early morning sun, casting long soft shadows and creating a vibrant, inviting atmosphere. The building is surrounded by minimal landscaping. The render is photorealistic and polished."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuA1b-HJ1m-N0c-0e8xTyLRv4T2bfummnDhlEQXLHgGzbXJbK82BFRmsWP0EshD3V1AKnSv8JcocmZDnhA7X8hVDQFT1fBN_nGmSLStIRD6dXymUbPFiM0liYaO5AXtPayoaLpEz2dhp0UTQFm7LEWynRbr7qtmjaIYomTKDW9sLU11oi6sTRlXfFUvv0Lw1l3QFHdmpybmRhRGFP3kDGfiGCJy2nI6AVxCAm4WrIZjVkZfyUEEOxGGmJ0aCXrEKpC2MhFJCsgCW9WUB"} />
          </div>
          <div className={"bg-inverse-surface text-inverse-on-surface p-8 rounded-2xl hover:shadow-xl transition-all flex flex-col justify-between group"}>
            <div>
              <div className={"w-16 h-16 bg-surface-variant mb-6 rounded-xl flex items-center justify-center text-primary group-hover:rotate-12 transition-transform"}>
                <span className={"material-symbols-outlined text-4xl"}>
                  foundation
                </span>
              </div>
              <h3 className={"font-headline-md text-headline-md mb-4"}>
                Structural Drawings
              </h3>
              <p className={"text-surface-variant"}>
                The backbone of your project. Precise engineering for beams, columns, and foundations using BIM technology.
              </p>
            </div>
            <div className={"mt-6 pt-6 border-t border-outline flex justify-between items-center"}>
              <span className={"text-label-sm uppercase tracking-widest text-primary-fixed"}>
                Safe & Secure
              </span>
              <span className={"material-symbols-outlined"}>
                engineering
              </span>
            </div>
          </div>
          <div className={"md:col-span-3 lg:col-span-4 bg-surface-container border border-outline-variant p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-center"}>
            <div className={"flex-1"}>
              <div className={"flex items-center gap-3 mb-4"}>
                <span className={"bg-secondary text-white px-3 py-1 rounded text-xs font-bold uppercase"}>
                  Regulatory
                </span>
                <h3 className={"font-headline-md text-headline-md"}>
                  CMDA & Corporation Approvals
                </h3>
              </div>
              <p className={"text-on-surface-variant font-body-lg mb-6"}>
                {" "}We handle the entire bureaucratic process, ensuring your designs meet all legal requirements for Chennai Metropolitan Development Authority and local corporation norms.{" "}
              </p>
              <div className={"flex flex-wrap gap-4"}>
                <span className={"bg-surface px-4 py-2 rounded-full border border-outline-variant font-bold text-primary flex items-center gap-2"}>
                  <span className={"material-symbols-outlined"}>
                    gavel
                  </span>
                  {" "}Building Permits{" "}
                </span>
                <span className={"bg-surface px-4 py-2 rounded-full border border-outline-variant font-bold text-primary flex items-center gap-2"}>
                  <span className={"material-symbols-outlined"}>
                    description
                  </span>
                  {" "}Patta Verification{" "}
                </span>
                <span className={"bg-surface px-4 py-2 rounded-full border border-outline-variant font-bold text-primary flex items-center gap-2"}>
                  <span className={"material-symbols-outlined"}>
                    verified
                  </span>
                  {" "}DTCP Approval{" "}
                </span>
              </div>
            </div>
            <div className={"w-full md:w-64 h-64 bg-primary-container rounded-2xl flex items-center justify-center overflow-hidden relative"}>
              <span className={"material-symbols-outlined text-white text-9xl relative z-10"} style={{fontVariationSettings: "'FILL' 1"}}>
                task_alt
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className={"bg-on-surface py-section-gap relative overflow-hidden"}>
        <div className={"absolute inset-0 opacity-10 blueprint-grid"}></div>
        <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10"}>
          <div className={"flex flex-col md:flex-row justify-between items-end mb-16 gap-8"}>
            <div className={"max-w-xl"}>
              <h2 className={"font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white mb-6"}>
                The Architect's Tech Stack
              </h2>
              <p className={"text-surface-variant font-body-lg"}>
                We leverage the most advanced software tools in the AEC industry to deliver error-free, highly collaborative design solutions.
              </p>
            </div>
            <div className={"flex gap-4"}>
              <div className={"w-12 h-12 border border-outline flex items-center justify-center rounded-full text-white"}>
                <span className={"material-symbols-outlined"}>
                  hardware
                </span>
              </div>
              <div className={"w-12 h-12 border border-outline flex items-center justify-center rounded-full text-white"}>
                <span className={"material-symbols-outlined"}>
                  memory
                </span>
              </div>
              <div className={"w-12 h-12 border border-outline flex items-center justify-center rounded-full text-white"}>
                <span className={"material-symbols-outlined"}>
                  cloud_done
                </span>
              </div>
            </div>
          </div>
          <div className={"grid grid-cols-1 md:grid-cols-3 gap-8"}>
            <div className={"p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md"}>
              <h4 className={"text-primary-fixed-dim font-black text-4xl mb-4"}>
                AutoCAD
              </h4>
              <p className={"text-surface-variant"}>
                The global standard for 2D drafting. Every line, arc, and dimension is crafted with mathematical precision.
              </p>
            </div>
            <div className={"p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md"}>
              <h4 className={"text-secondary-fixed-dim font-black text-4xl mb-4"}>
                Revit
              </h4>
              <p className={"text-surface-variant"}>
                Intelligent 3D modeling that synchronizes architectural drawings with structural and MEP components in real-time.
              </p>
            </div>
            <div className={"p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md"}>
              <h4 className={"text-tertiary-fixed-dim font-black text-4xl mb-4"}>
                BIM
              </h4>
              <p className={"text-surface-variant"}>
                Building Information Modeling for seamless collaboration between designers, engineers, and site managers.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={"py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-gutter"}>
        <div className={"flex flex-col md:flex-row items-center justify-between gap-8 mb-16"}>
          <div>
            <h2 className={"font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-2"}>
              From Blueprint to Reality
            </h2>
            <p className={"text-on-surface-variant font-body-lg"}>
              Witness the transformation from technical line-work to physical masterpieces.
            </p>
          </div>
          <a className={"text-primary font-bold flex items-center gap-2 hover:underline"} href={"#"}>
            {" "}View Full Portfolio{" "}
            <span className={"material-symbols-outlined"}>
              open_in_new
            </span>
          </a>
        </div>
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-12"}>
          <div className={"group cursor-pointer"}>
            <div className={"relative overflow-hidden rounded-3xl mb-6"}>
              <img className={"w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"} data-alt={"A split-screen visual showing a technical architectural blueprint on the left and a completed modern residential apartment building on the right. The lighting is crisp and the transition is seamless, illustrating the journey from plan to completion. The building features large balconies and a white and blue color scheme, matching the brand aesthetic."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuBdwBs8hujHOoTl9awDWHjvtZMjNLmWe0jhtGQtIUbvD75RrBLiARsrjJQnUIWFPBA2U2nVPZuAmtUToD1pwwhJdUuxc2tVmgsl8CAlKCwwv1yf6tHNGM-MZae7vt4oddvUFWL6Lx3O9DXumBpYdLd4vr80Bbq-bfmwE0IwtwOWdegbX0J5JHnaXwG4RmYO2GLAZfmkQl-EGO_U6QURCkAn50S7g6D3X7jvOkIkiuAChYVM63K6EXZzgzilCU9xP36arvqCIf0G92bu"} />
              <div className={"absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"}>
                <span className={"bg-white text-primary p-4 rounded-full shadow-xl"}>
                  <span className={"material-symbols-outlined"}>
                    visibility
                  </span>
                </span>
              </div>
            </div>
            <div className={"flex justify-between items-start"}>
              <div>
                <span className={"text-label-sm font-bold text-secondary uppercase tracking-tighter"}>
                  Villas • OMR
                </span>
                <h4 className={"text-2xl font-bold mt-1"}>
                  The Azure Residency
                </h4>
              </div>
              <span className={"material-symbols-outlined text-outline"}>
                east
              </span>
            </div>
          </div>
          <div className={"group cursor-pointer"}>
            <div className={"relative overflow-hidden rounded-3xl mb-6"}>
              <img className={"w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"} data-alt={"A 3D architectural model of a futuristic commercial office complex with intricate facade patterns and rooftop gardens. The scene is set in an urban environment during the golden hour, with warm light reflecting off the glass surfaces. The model is presented as a high-fidelity rendering, highlighting the detail of the structural design and landscaping."} src={"https://lh3.googleusercontent.com/aida-public/AB6AXuDjxei5dqbSpXvLzccFRF4VgtFS6VQAFi8J5xjeE2Nj_Ol4LGJeY0qbYwERfdzkvs8SbQb7uA2UIWwRmXsckeQ51OApzC9vgrgpWN-OfPkpdwKfqR6b-ZRInA2gKKHPwOd91XdJdJokeuGVSxQaCL91Kc1F4aBU0zCHF_ulqMKcGdhnt22LANZbQp3bu_If_E2zKrvA17KNtuMu1RAjc6RTiZcvYQHQ_RDYhlilGK35yH1tK8R3mepMrLyMiJPIgEl3VvRkvNU6tBV1"} />
              <div className={"absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"}>
                <span className={"bg-white text-primary p-4 rounded-full shadow-xl"}>
                  <span className={"material-symbols-outlined"}>
                    visibility
                  </span>
                </span>
              </div>
            </div>
            <div className={"flex justify-between items-start"}>
              <div>
                <span className={"text-label-sm font-bold text-secondary uppercase tracking-tighter"}>
                  Commercial • Guindy
                </span>
                <h4 className={"text-2xl font-bold mt-1"}>
                  Skyline Tech Park
                </h4>
              </div>
              <span className={"material-symbols-outlined text-outline"}>
                east
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className={"mb-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto"}>
        <div className={"bg-primary rounded-[3rem] p-8 md:p-16 text-on-primary relative overflow-hidden"}>
          <div className={"absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"}></div>
          <div className={"relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"}>
            <div>
              <h2 className={"font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6"}>
                Expert Design Advice
              </h2>
              <p className={"text-primary-container font-body-lg mb-10 text-on-primary-container"}>
                {" "}Unsure where to start? Our lead architects offer a 30-minute free consultation to review your plot and discuss preliminary design concepts.{" "}
              </p>
              <ul className={"space-y-4 mb-10"}>
                <li className={"flex items-center gap-4"}>
                  <span className={"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"}>
                    <span className={"material-symbols-outlined text-sm"}>
                      check
                    </span>
                  </span>
                  <span>
                    Site Potential Analysis
                  </span>
                </li>
                <li className={"flex items-center gap-4"}>
                  <span className={"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"}>
                    <span className={"material-symbols-outlined text-sm"}>
                      check
                    </span>
                  </span>
                  <span>
                    Regulatory Feasibility Check
                  </span>
                </li>
                <li className={"flex items-center gap-4"}>
                  <span className={"w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"}>
                    <span className={"material-symbols-outlined text-sm"}>
                      check
                    </span>
                  </span>
                  <span>
                    Cost-Effective Design Alternatives
                  </span>
                </li>
              </ul>
              <button className={"bg-secondary-container text-on-secondary-container px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 transition-transform"}>
                {" "}Book Your Design Consult{" "}
              </button>
            </div>
            <ConstructionEnquiryForm
              description="Share your plot, drawing requirements, and approval stage for a faster architectural response."
              source="Service - Design & Drawings"
              submitLabel="Request Design Consultation"
              title="Book your design consultation"
            />
          </div>
        </div>
      </section>
    </>
  );
}
