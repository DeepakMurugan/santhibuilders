import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ConstructionEnquirySection } from "@/components/construction-enquiry-form";

const plans = [
  {
    id: "standard",
    label: "Standard",
    rate: 2499,
    accent: "#0b4ea2",
    description: "A disciplined package for quality-first residential construction with essential premium finishes.",
  },
  {
    id: "premium",
    label: "Premium",
    rate: 2599,
    accent: "#5d9c2b",
    description: "Balanced cost and finish selection for clients wanting elevated materials and tighter detailing.",
  },
  {
    id: "luxury",
    label: "Luxury",
    rate: 2799,
    accent: "#7a2fb6",
    description: "A flagship package for high-end residential builds, luxury finishes, and stronger design integration.",
  },
] as const;

const inclusionRows = [
  ["Architectural floor plans", true, true, true],
  ["Structural drawings", true, true, true],
  ["3D elevation concept", true, true, true],
  ["Dedicated site engineer", true, true, true],
  ["Premium tile package", false, true, true],
  ["Designer false ceiling", false, true, true],
  ["Smart home provisions", false, false, true],
  ["Branded fittings package", false, true, true],
] as const;

const lineItems = [
  { key: "builtUpArea", label: "Built-up area", unit: "Sq.ft", multiplier: true },
  { key: "parkingArea", label: "Car parking area", unit: "Sq.ft", multiplier: true },
  { key: "sumpCapacity", label: "Underground sump capacity", unit: "Litres", multiplier: false },
  { key: "septicCapacity", label: "Septic tank capacity", unit: "Litres", multiplier: false },
] as const;

export function EstimateCalculatorPage() {
  const [activePlan, setActivePlan] = useState<(typeof plans)[number]["id"]>("standard");
  const [values, setValues] = useState({
    builtUpArea: 0,
    parkingArea: 0,
    sumpCapacity: 0,
    septicCapacity: 0,
  });

  const plan = plans.find((item) => item.id === activePlan) ?? plans[0];
  const costRows = [
    { label: "Built-up construction", cost: values.builtUpArea * plan.rate, unitRate: plan.rate },
    { label: "Parking construction", cost: values.parkingArea * Math.round(plan.rate * 0.65), unitRate: Math.round(plan.rate * 0.65) },
    { label: "Sump provision", cost: values.sumpCapacity * 22, unitRate: 22 },
    { label: "Septic provision", cost: values.septicCapacity * 22, unitRate: 22 },
  ] as const;
  const total = costRows.reduce((sum, row) => sum + row.cost, 0);

  return (
    <main className="bg-surface-container-lowest">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f7fbff_0%,#ffffff_42%,#eef5ff_100%)]">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-12 md:py-16 lg:py-20">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 md:gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-2 text-[10px] md:text-xs font-black uppercase tracking-[0.22em] text-primary">
                <span className="material-symbols-outlined text-sm">calculate</span>
                Estimate Calculator
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.02] text-on-surface">Budget your build with clearer package logic and live cost guidance.</h1>
              <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-on-surface-variant">Compare package bands, review what is included, and estimate your project cost before speaking to the team. When you are ready, send the same details through our standard construction enquiry form.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-black text-white transition-all hover:bg-primary/90" to="/contact-us">
                  Talk to Our Team
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
                <Link className="inline-flex items-center gap-2 rounded-full border border-outline-variant/30 bg-white px-6 py-3.5 font-black text-on-surface transition-all hover:border-primary hover:text-primary" to="/projects">
                  View Project References
                </Link>
              </div>
            </div>
            <div className="rounded-[2rem] border border-outline-variant/25 bg-white shadow-xl overflow-hidden">
              <img alt="Santhi Builders estimate calculator visual" className="h-full w-full object-cover" src="/images/excellence.jpg" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-12 md:py-16 lg:py-20">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-on-surface">Choose your pricing package</h2>
          <p className="mt-4 text-base md:text-lg text-on-surface-variant">Use the pricing bands as a planning baseline. Final estimation varies based on soil, scope, structural spans, and finish selections.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((item) => (
            <button
              className={`text-left rounded-[2rem] border bg-white p-5 md:p-6 shadow-sm transition-all hover:-translate-y-1 ${item.id === activePlan ? "border-primary shadow-lg" : "border-outline-variant/25"}`}
              key={item.id}
              onClick={() => setActivePlan(item.id)}
              type="button"
            >
              <span className="inline-flex rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-white" style={{ backgroundColor: item.accent }}>{item.label}</span>
              <p className="mt-6 text-4xl font-black" style={{ color: item.accent }}>₹{item.rate}/-</p>
              <p className="mt-1 text-sm font-bold uppercase tracking-[0.14em] text-on-surface-variant">Per sq.ft</p>
              <p className="mt-5 text-base text-on-surface-variant leading-relaxed">{item.description}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="bg-surface-container-low/40 py-12 md:py-16 lg:py-20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter overflow-x-auto">
          <div className="min-w-[760px] rounded-[2rem] border border-outline-variant/25 bg-white shadow-sm overflow-hidden">
            <div className="grid grid-cols-4 bg-[#0f2f58] text-white text-sm md:text-base font-black uppercase tracking-[0.14em]">
              <div className="px-5 py-4">Inclusions</div>
              {plans.map((item) => (
                <div className="px-5 py-4 text-center" key={item.id}>{item.label}</div>
              ))}
            </div>
            {inclusionRows.map((row) => (
              <div className="grid grid-cols-4 border-t border-outline-variant/15 text-sm md:text-base" key={row[0]}>
                <div className="px-5 py-4 text-on-surface">{row[0]}</div>
                {row.slice(1).map((value, index) => (
                  <div className="px-5 py-4 text-center" key={`${row[0]}-${index}`}>
                    {value ? <span className="material-symbols-outlined text-primary">done</span> : <span className="text-on-surface-variant/30">-</span>}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-12 md:py-16 lg:py-20">
        <div className="rounded-[2rem] border border-outline-variant/25 bg-white p-5 md:p-7 lg:p-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.22em] text-primary">Construction Cost Calculator</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-black text-on-surface">Live estimate for the {plan.label.toLowerCase()} package</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {plans.map((item) => (
                <button
                  className={`rounded-xl border px-4 py-2.5 text-sm font-black uppercase tracking-[0.14em] transition-all ${item.id === activePlan ? "text-white border-transparent" : "border-outline-variant/25 text-on-surface"}`}
                  key={item.id}
                  onClick={() => setActivePlan(item.id)}
                  style={item.id === activePlan ? { backgroundColor: item.accent } : undefined}
                  type="button"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[760px] border-separate border-spacing-0 overflow-hidden rounded-2xl border border-outline-variant/20">
              <thead className="bg-[#0f2f58] text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-black uppercase tracking-[0.14em]">Description</th>
                  <th className="px-4 py-3 text-left text-sm font-black uppercase tracking-[0.14em]">Quantity</th>
                  <th className="px-4 py-3 text-left text-sm font-black uppercase tracking-[0.14em]">Unit</th>
                  <th className="px-4 py-3 text-left text-sm font-black uppercase tracking-[0.14em]">Rate</th>
                  <th className="px-4 py-3 text-left text-sm font-black uppercase tracking-[0.14em]">Cost</th>
                </tr>
              </thead>
              <tbody>
                {lineItems.map((item, index) => {
                  const rate = index === 0 ? plan.rate : index === 1 ? Math.round(plan.rate * 0.65) : 22;
                  const value = values[item.key];
                  const cost = value * rate;

                  return (
                    <tr className="border-t border-outline-variant/15" key={item.key}>
                      <td className="px-4 py-4 text-on-surface">{item.label}</td>
                      <td className="px-4 py-4">
                        <input
                          className="w-full rounded-lg border border-outline-variant/25 bg-surface-container-low px-3 py-2 outline-none focus:border-primary"
                          min={0}
                          onChange={(event) => setValues((current) => ({ ...current, [item.key]: Number(event.target.value) || 0 }))}
                          type="number"
                          value={value || ""}
                        />
                      </td>
                      <td className="px-4 py-4 text-on-surface-variant">{item.unit}</td>
                      <td className="px-4 py-4 text-on-surface-variant">₹{rate}</td>
                      <td className="px-4 py-4 font-black text-on-surface">₹{cost.toLocaleString("en-IN")}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {costRows.map((row) => (
              <div className="rounded-2xl border border-outline-variant/20 bg-surface-container-low/60 px-5 py-4" key={row.label}>
                <p className="text-sm font-black uppercase tracking-[0.14em] text-on-surface-variant">{row.label}</p>
                <p className="mt-2 text-2xl font-black text-on-surface">₹{row.cost.toLocaleString("en-IN")}</p>
                <p className="mt-1 text-sm text-on-surface-variant">Rate used: ₹{row.unitRate.toLocaleString("en-IN")}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 rounded-2xl bg-[#08111f] px-6 py-5 text-white md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-white/60">Estimated Total Construction Cost</p>
              <p className="mt-2 text-3xl md:text-4xl font-black">₹{total.toLocaleString("en-IN")}</p>
            </div>
            <p className="max-w-xl text-sm md:text-base text-white/75">This is a planning estimate only. Soil condition, design complexity, facade treatment, and local authority requirements can change the final BOQ.</p>
          </div>
        </div>
      </section>

      <ConstructionEnquirySection
        description="Share the same estimate details with our team so we can validate the package, refine the scope, and guide the next step."
        eyebrow="Estimator Follow-up"
        source="Estimate Calculator"
        title="Want a refined BOQ and package recommendation?"
      />
    </main>
  );
}
