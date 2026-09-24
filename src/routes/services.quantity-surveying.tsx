import { createFileRoute } from "@tanstack/react-router";
import { ConstructionEnquirySection } from "@/components/construction-enquiry-form";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/services/quantity-surveying")({
  head: () => ({
    meta: [
      { title: "Quantity Surveying & Cost Estimation | Santhi Builders" },
      { name: "description", content: "Accurate BOQs, tender analysis and cost control that keep your construction budget predictable." },
      { property: "og:title", content: "Quantity Surveying & Cost Estimation | Santhi Builders" },
      { property: "og:description", content: "Accurate BOQs, tender analysis and cost control that keep your construction budget predictable." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QuantitySurveying,
});

function QuantitySurveying() {
  useReveal();
  return (
    <>
      
      




      <main>


            
        <section className={"relative min-h-[90vh] flex items-center overflow-hidden py-20"}>
          <div className={"absolute inset-0 z-0"}>
            <div className={"absolute inset-0 bg-gradient-to-r from-tertiary/95 via-tertiary/60 to-transparent z-10"}></div>
            <div className={"w-full h-full bg-cover bg-center transition-transform duration-[20000ms] scale-105"} data-alt={"A high-rise construction project representing precise quantity surveying, budgeting, and cost control."} style={{backgroundImage: "url('/images/highrise.jpg')"}}></div>
          </div>
          <div className={"relative z-20 max-w-container-max mx-auto px-margin-mobile md:px-gutter w-full"}>
            <div className={"max-w-2xl reveal active"}>
              <span className={"inline-block py-1.5 px-4 bg-primary text-on-primary font-label-sm rounded mb-6 uppercase tracking-[0.1em]"}>
                Quantity Surveying Expert
              </span>
              <h1 className={"font-display-lg text-[42px] md:text-display-lg text-white mb-6 leading-[1.1]"}>
                Financial Precision in Construction
              </h1>
              <p className={"font-body-lg text-body-lg text-white/80 mb-10 border-l-4 border-primary pl-6 max-w-xl"}>
                {" "}Optimizing costs without compromising structural integrity. We bridge the gap between architectural ambition and fiscal reality through rigorous data analysis.{" "}
              </p>
              <div className={"flex flex-col sm:flex-row gap-4"}>
                <button className={"bg-secondary-container text-on-secondary-container px-10 py-5 rounded font-headline-md text-[18px] font-bold hover:bg-secondary hover:shadow-xl hover:-translate-y-1 transition-all"}>
                  {" "}Request Audit{" "}
                </button>
                <button className={"border-2 border-white/30 text-white backdrop-blur-md px-10 py-5 rounded font-headline-md text-[18px] font-bold hover:bg-white/10 transition-all"}>
                  {" "}View Case Studies{" "}
                </button>
              </div>
            </div>
          </div>
        </section>



          <section className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter pt-8 md:pt-12"}>
                <div className={"service-highlight-banner rounded-3xl p-6 sm:p-8 md:p-10"}>
                  <div className={"service-highlight-content grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center"}>
                    <div>
                      <span className={"inline-flex items-center gap-2 bg-white/80 text-primary px-4 py-1.5 rounded-full text-label-sm uppercase tracking-[0.2em] font-semibold"}>
                        <span className={"material-symbols-outlined text-[16px]"}>
                          monitoring
                        </span>
                        Budget Intelligence
                      </span>
                      <h2 className={"mt-5 text-headline-lg-mobile md:text-headline-lg text-on-surface"}>
                        Cost certainty from concept to completion.
                      </h2>
                      <p className={"mt-4 text-on-surface-variant max-w-2xl"}>
                        Our quantity surveying framework combines BOQ discipline, market-rate validation,
                        and live spend tracking so every project decision remains financially controlled.
                      </p>
                    </div>
                    <div className={"grid grid-cols-2 gap-4"}>
                      <div className={"rounded-2xl bg-white/90 border border-primary/20 p-5"}>
                        <p className={"text-3xl font-extrabold text-primary"}>
                          98%
                        </p>
                        <p className={"text-body-md text-on-surface-variant mt-1"}>
                          Estimate accuracy
                        </p>
                      </div>
                      <div className={"rounded-2xl bg-white/90 border border-primary/20 p-5"}>
                        <p className={"text-3xl font-extrabold text-primary"}>
                          10-15%
                        </p>
                        <p className={"text-body-md text-on-surface-variant mt-1"}>
                          Cost savings range
                        </p>
                      </div>
                      <div className={"col-span-2 rounded-2xl bg-[#131b2e] text-white p-5"}>
                        <p className={"text-body-md text-white/80"}>
                          Want a full budget baseline?
                        </p>
                        <p className={"mt-1 text-lg md:text-xl font-extrabold"}>
                          Request a quantity audit before work starts.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>



        <section className={"p-section-gap bg-surface-container-lowest"}>
          <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter"}>
            <div className={"text-center mb-16"}>
              <h2 className={"font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4"}>
                Core Surveying Competencies
              </h2>
              <p className={"text-on-surface-variant max-w-2xl mx-auto"}>
                Deploying advanced mathematical modeling to ensure every brick is accounted for and every rupee is optimized.
              </p>
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-3 gap-6"}>
              <div className={"md:col-span-2 bento-item bg-white p-10 border border-outline-variant rounded-2xl flex flex-col justify-between"}>
                <div>
                  <div className={"w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6"}>
                    <span className={"material-symbols-outlined"}>
                      calculate
                    </span>
                  </div>
                  <h3 className={"font-headline-md mb-4"}>
                    Detailed Cost Estimation
                  </h3>
                  <p className={"text-on-surface-variant mb-6"}>
                    Multi-dimensional analysis of material costs, labor trends, and logistical overheads to provide bulletproof pre-construction estimates.
                  </p>
                </div>
                <ul className={"grid grid-cols-2 gap-4 text-label-sm font-semibold text-primary uppercase tracking-tight"}>
                  <li className={"flex items-center gap-2"}>
                    <span className={"w-1.5 h-1.5 bg-secondary-container rounded-full"}></span>
                    {" "}Preliminary Estimates
                  </li>
                  <li className={"flex items-center gap-2"}>
                    <span className={"w-1.5 h-1.5 bg-secondary-container rounded-full"}></span>
                    {" "}Detailed Take-offs
                  </li>
                  <li className={"flex items-center gap-2"}>
                    <span className={"w-1.5 h-1.5 bg-secondary-container rounded-full"}></span>
                    {" "}Material Forecasting
                  </li>
                  <li className={"flex items-center gap-2"}>
                    <span className={"w-1.5 h-1.5 bg-secondary-container rounded-full"}></span>
                    {" "}Cash Flow Projection
                  </li>
                </ul>
              </div>
              <div className={"bento-item bg-inverse-surface p-10 rounded-2xl text-inverse-on-surface"}>
                <div className={"w-12 h-12 bg-primary-container text-on-primary-container rounded-lg flex items-center justify-center mb-6"}>
                  <span className={"material-symbols-outlined"}>
                    description
                  </span>
                </div>
                <h3 className={"font-headline-md mb-4 text-white"}>
                  Bill of Quantities
                </h3>
                <p className={"text-surface-variant/80"}>
                  Standardized BOQ documents that eliminate ambiguity during the bidding process, ensuring fair and transparent competition.
                </p>
              </div>
              <div className={"bento-item bg-surface-container-low p-10 border border-outline-variant rounded-2xl"}>
                <div className={"w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mb-6"}>
                  <span className={"material-symbols-outlined"}>
                    gavel
                  </span>
                </div>
                <h3 className={"font-headline-md mb-4"}>
                  Tender Management
                </h3>
                <p className={"text-on-surface-variant"}>
                  From pre-qualification to final adjudication, we manage the entire procurement cycle with forensic attention to detail.
                </p>
              </div>
              <div className={"md:col-span-2 bento-item bg-white p-10 border border-outline-variant rounded-2xl relative overflow-hidden"}>
                <div className={"relative z-10"}>
                  <div className={"w-12 h-12 bg-tertiary/10 text-tertiary rounded-lg flex items-center justify-center mb-6"}>
                    <span className={"material-symbols-outlined"}>
                      account_balance_wallet
                    </span>
                  </div>
                  <h3 className={"font-headline-md mb-4"}>
                    Budget Auditing
                  </h3>
                  <p className={"text-on-surface-variant max-w-md"}>
                    Real-time financial health checks during the construction phase to prevent cost overruns and maintain margin integrity.
                  </p>
                </div>
                <div className={"absolute right-0 bottom-0 opacity-10 p-10"}>
                  <span className={"material-symbols-outlined !text-[120px]"}>
                    fact_check
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"py-section-gap overflow-hidden"}>
          <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter grid md:grid-cols-2 gap-24 items-center"}>
            <div className={"relative h-[500px] rounded-3xl overflow-hidden group"}>
              <div className={"absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-500 z-10"}></div>
              <div className={"w-full h-full scale-110 group-hover:scale-100 transition-transform duration-700"} data-alt={"A clean, top-down architectural photograph of a construction site office. On a white minimalist desk sits a set of crisp building plans, a modern smartphone showing a financial dashboard with green growth charts, and a high-end luxury pen. The scene is bright and airy, flooded with morning sunlight, emphasizing a professional atmosphere of transparency and organization."} style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuADni6BNlpvR1nQYbUdd4R1fNZ50L5WgyMizOT7RnLW1LRsS9EepkR7KAhx-kp_I8ZLLWDi-lIJmL9lWVMAQh6h8q3TxHx7q5ZEdZq19--Noa1U84BYcUpWyaiFokaAF38XhnTv4rKl_DnA-fmv0ifvArobFYuaiynMCRVa3LagZcUGUpx5g8fha29CBBTS6eEBrFTRgtZn7Z9xuXDlDJuYoWRXhLKEyoUtkBO9ZoQRTxzHZkrRJHFq-bao4Fhog-4s_4ligfouekAG')"}}></div>
            </div>
            <div>
              <h2 className={"font-headline-lg mb-8"}>
                Transparency in every{" "}
                <span className={"text-secondary"}>
                  rupee spent
                </span>
                .
              </h2>
              <p className={"text-body-lg text-on-surface-variant mb-12"}>
                {" "}Our survey reports are more than just numbers; they are a commitment to ethical construction. By providing granular visibility into every line item, we eliminate the 'hidden costs' that typically plague construction projects.{" "}
              </p>
              <div className={"space-y-8"}>
                <div className={"flex gap-6"}>
                  <div className={"flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center"}>
                    <span className={"material-symbols-outlined text-primary"}>
                      verified_user
                    </span>
                  </div>
                  <div>
                    <h4 className={"font-bold text-on-surface mb-2"}>
                      Zero-Tolerance for Waste
                    </h4>
                    <p className={"text-on-surface-variant text-body-md"}>
                      We identify inefficiencies in material procurement that account for up to 5% of total waste.
                    </p>
                  </div>
                </div>
                <div className={"flex gap-6"}>
                  <div className={"flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center"}>
                    <span className={"material-symbols-outlined text-primary"}>
                      visibility
                    </span>
                  </div>
                  <div>
                    <h4 className={"font-bold text-on-surface mb-2"}>
                      Real-time Visibility
                    </h4>
                    <p className={"text-on-surface-variant text-body-md"}>
                      Clients get access to a live digital dashboard tracking project spend against estimated BOQ.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"py-section-gap bg-inverse-surface text-white"}>
          <div className={"max-w-container-max mx-auto px-margin-mobile md:px-gutter"}>
            <div className={"grid md:grid-cols-2 gap-16 items-center"}>
              <div>
                <h2 className={"font-headline-lg mb-6"}>
                  Professional Surveying: The ROI Advantage
                </h2>
                <p className={"text-surface-variant text-body-lg mb-8"}>
                  Investing in precision surveying isn't a cost—it's a high-yield financial strategy. Our data shows a consistent reduction in final project expenditure through preemptive conflict resolution.
                </p>
                <div className={"bg-surface/10 p-8 rounded-xl border border-white/10"}>
                  <div className={"flex items-baseline gap-2 mb-2"}>
                    <span className={"text-5xl font-black text-secondary-fixed-dim"}>
                      10-15%
                    </span>
                    <span className={"text-xl font-semibold uppercase"}>
                      Savings
                    </span>
                  </div>
                  <p className={"text-surface-variant font-body-md"}>
                    Average project cost reduction achieved through our Tender Management and Budget Auditing services.
                  </p>
                </div>
              </div>
              <div className={"grid grid-cols-1 gap-4"}>
                <div className={"bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-colors"}>
                  <h4 className={"font-bold mb-2 flex items-center gap-2"}>
                    <span className={"material-symbols-outlined text-primary-fixed"}>
                      check_circle
                    </span>
                    {" "}Optimized Procurement{" "}
                  </h4>
                  <p className={"text-sm text-surface-variant"}>
                    We leverage our network to secure materials at 3-5% below market retail through bulk adjudication.
                  </p>
                </div>
                <div className={"bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-colors"}>
                  <h4 className={"font-bold mb-2 flex items-center gap-2"}>
                    <span className={"material-symbols-outlined text-primary-fixed"}>
                      check_circle
                    </span>
                    {" "}Error Mitigation{" "}
                  </h4>
                  <p className={"text-sm text-surface-variant"}>
                    Early detection of measurement errors in architectural drawings prevents costly on-site reworks.
                  </p>
                </div>
                <div className={"bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-colors"}>
                  <h4 className={"font-bold mb-2 flex items-center gap-2"}>
                    <span className={"material-symbols-outlined text-primary-fixed"}>
                      check_circle
                    </span>
                    {" "}Contractual Safety{" "}
                  </h4>
                  <p className={"text-sm text-surface-variant"}>
                    Rigorous contract administration protects you from unwarranted claim variations by contractors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"py-section-gap"}>
          <div className={"max-w-4xl mx-auto px-margin-mobile text-center"}>
            <div className={"inline-flex items-center gap-2 bg-secondary-container/10 text-secondary px-4 py-2 rounded-full mb-8"}>
              <span className={"material-symbols-outlined text-sm"}>
                precision_manufacturing
              </span>
              <span className={"font-label-sm uppercase"}>
                Secure Your Project's Future
              </span>
            </div>
            <h2 className={"font-headline-lg mb-8"}>
              Stop Guessing. Start Measuring.
            </h2>
            <p className={"text-body-lg text-on-surface-variant mb-12"}>
              Every large-scale construction failure begins with a miscalculated budget. Let our certified surveyors build the financial foundation your vision deserves.
            </p>
            <div className={"flex flex-col sm:flex-row gap-6 justify-center"}>
              <a className={"bg-primary text-on-primary px-10 py-5 rounded-lg font-bold text-lg hover:shadow-2xl transition-all hover:-translate-y-1"} href={"#"}>
                {" "}Get a Detailed Cost Audit{" "}
              </a>
              <a className={"border-2 border-outline-variant px-10 py-5 rounded-lg font-bold text-lg hover:bg-surface-container transition-all"} href={"#"}>
                {" "}Download Sample Report{" "}
              </a>
            </div>
          </div>
        </section>
        <ConstructionEnquirySection
          eyebrow="Quantity Surveying Enquiry"
          source="Service - Quantity Surveying"
          title="Need a sharper BOQ, tender comparison, or cost audit?"
          description="Share your project values, stage, and budget concerns so our surveying team can guide the right next step."
        />
      </main>
    </>
  );
}
