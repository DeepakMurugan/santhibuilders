import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";

const plans = [
  {
    id: "standard",
    label: "Standard",
    rate: 2549,
    accent: "#6f9d55",
  },
  {
    id: "premium",
    label: "Premium",
    rate: 2649,
    accent: "#6f9d55",
  },
  {
    id: "luxury",
    label: "Luxury",
    rate: 2899,
    accent: "#6f9d55",
  },
] as const;

const lineItems = [
  { key: "builtUpArea", label: "Construction area in square feet?", unit: "Sqft" },
  { key: "parkingArea", label: "Car parking area in square feet?", unit: "Sqft" },
  { key: "septicCapacity", label: "How many ‘Litres’ of Septic Tank required?", unit: "Lit" },
  { key: "sumpCapacity", label: "How many ‘Litres’ of underground sump required?", unit: "Lit" },
] as const;

const comparisonPlans = [
  { label: "Standard", rate: 2549, accent: "#7854c9" },
  { label: "Premium", rate: 2649, accent: "#cb6b18" },
  { label: "Luxury", rate: 2899, accent: "#a78616" },
] as const;

type ComparisonCell = string | boolean | readonly string[];
type ComparisonRow = { label: string; note?: string; values: readonly ComparisonCell[] };
type ComparisonSection = { label: string; rows: readonly ComparisonRow[] };

const comparisonSections: readonly ComparisonSection[] = [
  {
    label: "1. Design and Drawings",
    rows: [{
      label: "Included Plans",
      values: [
        ["Site Plans", "Floor Plan", "Section", "Elevation"],
        ["Site Plans", "Floor Plan", "3D Views", "Section", "Elevation"],
        ["Site Plan", "Floor Plan", "3D Views", "Sections & Elevations", "3D Internal Walkthrough (Addl. Fees)", "Boundary Wall Design"],
      ],
    }],
  },
  {
    label: "2. Architectural Designs",
    rows: [{ label: "Architectural Scope", values: [["Working Drawings", "Elevation"], ["Working Drawings", "Elevation", "Visualization - 3D"], ["Working Drawings", "Visualization - 3D", "Electrical & Plumbing Layouts", "Elevation Finishing Details", "Terrace Plan"]] }],
  },
  {
    label: "3. Structural Drawings",
    rows: [{ label: "Engineering Details", values: ["Working Drawings", ["Centre Line Drawing", "Footing & Column Drawings", "Plinth Beam Drawing", "Roof Beams & Roof Slab Drawing"], ["Centre Line Drawing", "Footing & Column Drawings", "Plinth Beam Drawing", "Roof Beams & Roof Slab Drawing", "Other Element Drawings"]] }],
  },
  {
    label: "4. Civil Construction",
    rows: [
      { label: "Excavation & Basement", values: ["Hard soil up to 5'0\" (excl. chiselling/blasting).\nBasement: 2'6\" from Ground Level (gravel fill + country bricks).", "Hard soil up to 5'0\" (excl. chiselling/blasting).\nBasement: 3'0\" from Ground Level (gravel fill + country/fly ash bricks).", "Hard soil up to 5'0\" (excl. chiselling/blasting).\nBasement: 3'0\" from Ground Level (gravel fill + country/fly ash bricks)."] },
      { label: "Ceiling Height", values: ["10'0\" from FFL", "10'6\" from FFL", "10'0\" to 11'0\" from FFL (or per design, whichever is less)"] },
      { label: "Steel (Fe 550)", values: ["Sumangala-CRS", "Pulkit or Suryadev", "Tata Tiscon / JSW"] },
      { label: "Masonry & Walls", values: ["Blocks: 6\" Exterior & 4\" Interior\nBricks: 9\" Exterior & 4.5\" Interior", "Blocks: 6\" Exterior & 4\" Interior\nBricks: 9\" Exterior & 4.5\" Interior", "Blocks: 6\" Exterior & 4\" Interior\nBricks: 9\" Exterior & 4.5\" Interior"] },
      { label: "Cement Brands", values: ["Chettinad & Dalmia", "Ramco & Coromandel", "UltraTech / Ramco"] },
      { label: "Aggregates & Mix", values: ["Sand: M-sand (Masonry/Concrete), P-sand (Plastering)\nCoarse: 20mm & 40mm\nRCC: M20 Grade", "Sand: M-sand (Masonry/Concrete), P-sand (Plastering)\nCoarse: 20mm & 40mm\nRCC: M20 & M25 Grade", "Sand: M-sand (Masonry/Concrete), P-sand (Plastering)\nCoarse: 20mm & 40mm\nRCC: M20, M25 & M30 Grade"] },
      { label: "Waterproofing", values: ["Not Included", "Fosroc", "Fosroc"] },
    ],
  },
  {
    label: "5. Electrical",
    rows: [
      { label: "Brands & Materials", values: ["Wires: Kundan / Fybros\nPipes: Allva\nSwitches: GM\nBoxes: Concealed Metal", "Wires: Finolex / Orbit\nPipes: Allva\nSwitches: Legrand (Mylinc) / Anchor Roma\nBoxes: Concealed Metal", "Wires: Polycab / Havells\nPipes: Allva\nSwitches: Legrand / Equivalent\nBoxes: Concealed Metal"] },
      { label: "Bedrooms", values: ["1 door switch box (1 fan, 2 lights, 1 5A socket) + 2-way bed control box; 1 AC, 1 fan, 2 lights (1 night lamp).", "Door box + 2-way bed control box + 1 TV Amps socket; 1 AC, 1 fan, 2 lights (1 night lamp).", "Door box (1 fan, 2 lights, 1 TV, 3 5A sockets) + 2-way bed box; 1 AC, 1 computer, 1 fan, 3 lights (2 dressing)."] },
      { label: "Bathrooms", values: ["1 door box (light, exhaust, heater) + 1 15A heater socket, 1 5A mirror socket, 1 5A exhaust socket.", "1 door box (light, exhaust, heater) + 1 15A heater socket, 1 5A mirror socket, 1 5A exhaust socket.", "1 door box (light, exhaust, heater) + 1 15A heater socket, 1 5A mirror socket, 1 5A exhaust socket."] },
      { label: "Living / Hall", values: ["Door box (2 fans, 2 lights, 1 5A socket) + duplicate sofa box + TV box (3 5A sockets + cable).", "Door box (2 fans, 2 lights, 1 5A) + sofa box + TV box (4 5A sockets + cable) + 1 Home Theatre point (w/o cable).", "Door box (3 fans, 8 lights, 4 5A) + sofa box + TV box (4 5A sockets + cable) + 1 Home Theatre point (w/o cable)."] },
      { label: "Dining & Pooja", values: ["Dining: 1 fan, 1 light.\nPooja: 2 lights, 1 5A socket + 1 5A external device box.", "Dining: 1 fan, 1 light + mirror light.\nPooja: 1 light, 1 5A socket + 1 5A external device box.", "Dining: 1 fan, 3 lights + mirror light.\nPooja: 3 lights, 2 5A sockets + 1 5A external device box."] },
      { label: "Kitchen & Service", values: ["Kitchen: 2 lights, 1 exhaust, 1 15A fridge, two 15A mixie/oven.\nService: 1 light, 1 15A washing machine.", "Kitchen: 2 lights, 1 exhaust, chimney point, 1 15A fridge, two 15A mixie/oven.\nService: 1 light, 1 15A washing machine.", "Kitchen: 3 lights, 1 fan, 1 exhaust, chimney, 1 15A fridge, three 15A points (mixie/oven/grinder).\nService: 1 light, two 15A sockets (top/bottom)."] },
      { label: "Extras & Portico", values: ["Portico: 5 Points", "2 computer 5A points.\nPortico: 12 Light Points + 1 15A point.", "Mobile charging socket in each room, computer point.\nPortico: 12 Light Points + 2 15A points."] },
    ],
  },
  {
    label: "6. Plumbing",
    rows: [
      { label: "Pipes & Sanitaryware", values: ["Pipes: Bhavani & Supreme\nCP/Sanitary: Johnson / Hindware", "Pipes: Aashirvad / Astral\nCP/Sanitary: Parryware", "Pipes: Aashirvad / Supreme / Astral\nCP/Sanitary: Astral / Jaquar / Parryware"] },
      { label: "Fixtures & Sink", values: ["EWC, health faucet, standard washbasin, 2-in-1 wall mixer, shower.\nKitchen: 1 tap.\nSink: 10\" deep SS (24\"x18\").", "EWC, faucet, table-top dining basin, 2-in-1 mixer/diverter, shower.\nKitchen: 1 tap + 1 RO point.\nSink: 10\" deep SS (24\"x18\").", "EWC, faucet, table-top dining basin, 2-in-1 mixer/diverter, shower.\nKitchen: 2 taps + 1 RO point.\nSink: 10\" deep SS (24\"x18\")."] },
    ],
  },
  {
    label: "7. Doors and Windows",
    rows: [
      { label: "Main Door", values: ["Country teak frame (4\"x5\"), door 3'6\"x7', side frame (3\"x1.5\") with surya palagai or Steel Door.", "Ghana teak frame (4\"x5\"), door 3'6\"x7', side frame (3\"x1.5\") with surya palagai or Steel Door.", "Colombia teak frame (4\"x5\"), door 3'6\"x7', side frame (3\"x1.5\") with surya palagai or Steel Door."] },
      { label: "Internal & Toilet Doors", values: ["Flush door + laminate with Country teak frame (3'x7'). Plain WPC door (2'6\"x7').", "Flush door + laminate with Country teak frame (3'x7'). Plain PVC door (2'6\"x7').", "Flush door + laminate with Country teak frame (3'x7'). Plain WPC door (2'6\"x7')."] },
      { label: "Windows & Ventilators", values: ["UPVC sliding/openable with 4mm glass or Country teak wooden windows. Louvered glass ventilators with 16mm guard bars.", "UPVC sliding/openable with 4mm glass or Country teak wooden windows. Louvered glass ventilators with 16mm guard bars.", "UPVC sliding/openable with 4mm glass or Country teak wooden windows. Louvered glass ventilators with 16mm guard bars."] },
    ],
  },
  {
    label: "8. Flooring and Wall Tiling",
    rows: [
      { label: "Wall Tiles Dadoing", values: ["Kitchen: Up to 4'0\" above counter\nBathroom: Up to 7'0\" height", "Kitchen: Up to 4'0\" above counter\nBathroom: Up to 7'6\" height", "Kitchen: Up to 4'0\" to 5'0\" above counter\nBathroom: Up to 7'0\" to 8'0\" height"] },
      { label: "Flooring & Countertop", values: ["Vitrified tiles (Living/Bed/Kitchen). Granite counter (18mm).\nStairs: Nosing tiles.\nParking: Parking tiles.", "Vitrified tiles (Living/Bed/Kitchen). Granite counter (18mm).\nStairs: Wooden tiles with nosing.\nParking: Parking tiles.", "Vitrified tiles (Living/Bed/Kitchen). Granite counter (18mm).\nStairs & Foyer: Wooden tiles with nosing.\nParking: Parking tiles."] },
    ],
  },
  {
    label: "9. Painting",
    rows: [
      { label: "Interior Paint", values: ["2 coats ISI putty, 1 coat ISI primer, 2 coats ISI emulsion (walls), 1 primer + 1 emulsion (ceiling).", "2 coats Asian putty, 1 coat Asian primer, 2 coats Asian Tractor emulsion (walls), 1 primer + 2 Tractor emulsion (ceiling).", "2 coats Asian/JK putty, 1 coat Asian primer, 2 coats Asian Premium emulsion (walls & ceiling)."] },
      { label: "Exterior & Polish", values: ["1 coat ISI primer + 2 coats ISI emulsion. Main door hand-polished (melamine).", "1 coat Asian primer + 2 coats Asian Ace emulsion + elevation putty. Main/Puja doors melamine spray polished.", "Weatherproof primer, 1 coat white cement, 2 coats weatherproof emulsion + elevation putty. Main/Puja doors PU finish spray polished."] },
    ],
  },
  {
    label: "10. Other Inclusives",
    rows: [
      { label: "Tanks & Railing", values: ["1000L ISI overhead tank.\nGrills: 18x6mm flat or 12mm square.\nParapet 3'0\" (excl. if headroom built).", "1000L Astral overhead tank.\n2000L Septic tank.\nSS Staircase Railing.\nParapet 3'0\" (excl. if headroom built).", "1000L Astral/Sintex overhead tank.\n3000L Septic tank.\nSS Staircase Railing.\nParapet 3'0\" (included even if headroom built)."] },
      { label: "Lofts, Shelves & Weathering", values: ["1 loft/room, 1 Cuddapah shelf (1 coat paint). Standard roof weathering.", "1 loft/room, 1 Cuddapah shelf (2 coats paint). Roof weathering with Cool Tiles.", "1 loft/room, 1 stone shelf with edge nosing in rooms + store room. Roof weathering with Cool Tiles."] },
    ],
  },
  {
    label: "11. Extra Charges (Applicable Across Packages)",
    rows: [{ label: "Non-Standard Scope", values: [["Electrical & Plumbing Drawings", "Septic Tank", "Compound Wall / Gate & Lift", "Permanent EB Connection", "Underground Sump & Concrete OHT", "Water Recycling Tank", "Additional Foundation Height", "Soil Testing & Rainwater Harvesting", "Outer Setback Area Development", "Solar Systems"], ["Electrical & Plumbing Drawings", "Compound Wall / Gate & Lift", "EB Connections", "Underground Sump & Concrete OHT", "Water Recycling Tank", "Additional Foundation Height", "Soil Testing & Rainwater Harvesting", "Outer Setback Area Development", "Solar Systems"], ["Compound Wall / Gate & Lift", "Permanent EB Connections", "Underground Sump & Concrete OHT", "Water Recycling Tank", "Additional Foundation Height", "Soil Testing & Rainwater Harvesting", "Outer Setback Area Development", "Solar Systems"]] }],
  },
] as const;

const comparisonNotes = [
  "Boundary problems if any to be settled by owner.",
  "Price may vary depending on number of floors & site location.",
  "We construct customized houses (framed or load-bearing structures) using client-selected materials and brands outside standard packages at an agreed rate.",
  "Water & electricity connections remain strictly under the client's scope.",
  "Specification changes modify overall construction cost. Modifications requested after completion incur additional charges for demolition, clearance, removal, and re-installation.",
];

export function EstimateCalculatorPage() {
  const [activePlan, setActivePlan] = useState<(typeof plans)[number]["id"]>("standard");
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [highlightDifferences, setHighlightDifferences] = useState(false);
  const [lead, setLead] = useState({ name: "", number: "", location: "", building: "", budget: "" });
  const [values, setValues] = useState({
    builtUpArea: 0,
    parkingArea: 0,
    sumpCapacity: 0,
    septicCapacity: 0,
  });

  const plan = plans.find((item) => item.id === activePlan) ?? plans[0];
  const hasRequiredValues = values.builtUpArea > 0 && values.parkingArea > 0 && values.sumpCapacity > 0 && (activePlan === "standard" ? values.septicCapacity > 0 : true);
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
        <div className="mx-auto max-w-container-max px-margin-mobile py-12 md:px-gutter md:py-16 lg:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-2 text-[10px] md:text-xs font-black uppercase tracking-[0.22em] text-primary">
                <span className="material-symbols-outlined text-sm">calculate</span>
                Estimate Calculator
              </span>
              <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.02] text-on-surface sm:text-5xl md:text-6xl lg:text-7xl">Budget your build with clearer package logic and live cost guidance.</h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-on-surface-variant sm:text-lg md:text-xl">Compare package bands, review what is included, and estimate your project cost before speaking to the team. When you are ready, send the same details through our standard construction enquiry form.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-black text-white transition-all hover:bg-primary/90" to="/contact-us">
                  Talk to Our Team
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
                <Link className="inline-flex items-center gap-2 rounded-full border border-outline-variant/30 bg-white px-6 py-3.5 font-black text-on-surface transition-all hover:border-primary hover:text-primary" to="/projects">
                  View Project References
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-outline-variant/25 bg-white shadow-xl">
              <img alt="Santhi Builders estimate calculator visual" className="aspect-4/3 h-full w-full object-cover sm:aspect-16/10 lg:aspect-4/3" src="/images/excellence.jpg" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden bg-[linear-gradient(180deg,#f2f5ff_0%,#fafbff_42%,#f4f6fb_100%)] py-12 md:py-20">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-gutter">
          <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-4xl font-black tracking-tight text-on-surface sm:text-5xl">Our <span className="text-secondary">Package</span></h2>
              <p className="mt-2 text-sm text-on-surface-variant">All prices GST exclusive · No hidden costs</p>
            </div>
            <button
              aria-pressed={highlightDifferences}
              className="inline-flex w-fit items-center gap-3 rounded-xl border border-outline-variant/40 bg-white px-4 py-3 text-sm font-bold text-on-surface shadow-[0_8px_20px_rgba(19,27,46,0.08)] transition-all hover:-translate-y-0.5 hover:border-secondary"
              onClick={() => setHighlightDifferences((current) => !current)}
              type="button"
            >
              Highlight differences
              <span className={`relative h-5 w-9 rounded-full transition-colors ${highlightDifferences ? "bg-secondary" : "bg-outline-variant"}`}>
                <span className={`absolute top-0.5 size-4 rounded-full bg-white shadow-sm transition-transform ${highlightDifferences ? "translate-x-4" : "translate-x-0.5"}`} />
              </span>
            </button>
          </div>

          <div className="w-full max-w-full overflow-x-auto overscroll-x-contain rounded-[1.5rem] border border-white/80 bg-white/90 shadow-[0_20px_55px_rgba(19,27,46,0.12)] backdrop-blur-sm">
            <div className="min-w-270">
              <div className="grid grid-cols-[1.3fr_repeat(3,1fr)] border-b border-outline-variant/35 bg-white">
                <div className="flex items-end bg-white px-5 pb-6 pt-8 text-xs font-black uppercase tracking-[0.13em] text-outline md:sticky md:left-0 md:z-10 md:shadow-[8px_0_16px_-16px_rgba(19,27,46,0.35)]">Specification</div>
                {comparisonPlans.map((item) => (
                  <div className={`border-l border-outline-variant/35 px-4 py-6 text-center ${item.label === "Premium" ? "bg-secondary-fixed/25" : "bg-white"}`} key={item.label}>
                    {item.label === "Premium" && <span className="mb-2 inline-block rounded-full bg-secondary-container px-3 py-1 text-[10px] font-black uppercase tracking-[0.08em] text-on-secondary-container">Most Popular</span>}
                    <span className="block text-lg font-black" style={{ color: item.accent }}>{item.label}</span>
                    <span className={`mt-1 block text-sm text-on-surface-variant ${highlightDifferences ? "font-bold text-on-surface" : ""}`}>₹{item.rate.toLocaleString("en-IN")} / sqft</span>
                  </div>
                ))}
              </div>
              {comparisonSections.map((section) => (
                <div key={section.label}>
                  <div className="border-b border-outline-variant/25 bg-surface-container-lowest px-5 py-4 text-xs font-black uppercase tracking-[0.14em] text-secondary"><span className="mr-2 inline-block h-1 w-7 rounded-full bg-secondary align-middle" />{section.label}</div>
                  {section.rows.map((row) => {
                    const hasDifference = new Set(row.values.map(String)).size > 1;
                    return (
                      <div className={`group grid grid-cols-[1.3fr_repeat(3,1fr)] border-b border-outline-variant/25 transition-colors hover:bg-primary-fixed/20 ${highlightDifferences && hasDifference ? "bg-secondary-fixed/35" : ""}`} key={row.label}>
                        <div className="flex min-h-16 items-center gap-3 bg-white px-5 py-4 group-hover:bg-primary-fixed/20 md:sticky md:left-0 md:z-10 md:shadow-[8px_0_16px_-16px_rgba(19,27,46,0.35)]">
                          <span><strong className="block text-sm font-bold text-on-surface md:text-base">{row.label}</strong>{row.note && <small className="block text-xs text-on-surface-variant">{row.note}</small>}</span>
                        </div>
                        {row.values.map((value, index) => (
                          <div className={`flex min-h-16 items-center justify-center border-l border-outline-variant/25 px-5 py-4 text-center text-sm leading-relaxed text-on-surface-variant md:text-base ${index === 1 ? "bg-secondary-fixed/20" : ""}`} key={`${row.label}-${index}`}>
                            {value === true ? <span className="text-xl font-black text-[#3b9a67]">✓</span> : value === false ? <span className="text-lg text-outline-variant">-</span> : Array.isArray(value) ? <ul className="list-disc space-y-1.5 pl-5 text-left">{value.map((item) => <li className={highlightDifferences ? "font-bold text-on-surface" : undefined} key={item}>{item}</li>)}</ul> : typeof value === "string" && value.includes("\n") ? <ul className={`list-disc space-y-1.5 pl-5 text-left ${highlightDifferences ? "font-bold text-on-surface" : ""}`}>{value.split("\n").map((item) => <li key={item}>{item}</li>)}</ul> : <span className={highlightDifferences ? "font-bold text-on-surface" : ""}>{value}</span>}
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          <p className="mt-3 text-xs text-on-surface-variant sm:hidden">Swipe sideways to view all packages.</p>
          <div className="mt-5 rounded-2xl border border-outline-variant/30 bg-white p-5 shadow-sm md:p-6">
            <h3 className="text-sm font-black uppercase tracking-[0.12em] text-on-surface">12. General Notes & Terms</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-on-surface-variant">
              {comparisonNotes.map((note) => <li key={note}>{note}</li>)}
            </ol>
          </div>
        </div>
      </section>

      <section className="w-full overflow-hidden bg-surface-container-lowest px-margin-mobile py-12 md:px-gutter md:py-20 lg:py-24">
        <div className="mx-auto max-w-container-max">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-primary">Plan your build</div>
          <h2 className="text-4xl font-black text-on-surface sm:text-5xl">Construction cost calculator</h2>
          <p className="mt-3 text-base text-on-surface-variant">Select a package and enter the details to calculate your estimate.</p>
        </div>
        <div className="rounded-[2rem] border border-outline-variant/30 bg-white p-4 shadow-[0_20px_60px_rgba(20,28,40,0.08)] sm:p-5 md:p-8">
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:flex-wrap sm:items-center">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.18em] text-secondary">House construction cost calculator</span>
              <h3 className="mt-2 text-2xl font-black text-on-surface">{plan.label}:</h3>
            </div>
            <div className="grid w-full grid-cols-3 gap-2 sm:w-auto sm:flex sm:flex-wrap sm:gap-3">
              {plans.map((item) => (
                <button
                  className={`rounded-xl border px-2 py-2.5 text-[10px] font-black uppercase tracking-[0.08em] transition-all sm:px-4 sm:text-sm sm:tracking-[0.14em] ${item.id === activePlan ? "text-white border-transparent" : "border-outline-variant/25 text-on-surface"}`}
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

          <div className="mt-6 w-full max-w-full overflow-x-auto overscroll-x-contain rounded-xl">
            <table className="w-full min-w-170 border-collapse overflow-hidden rounded-xl border border-outline-variant/50">
              <thead className="bg-surface-container-low text-primary">
                <tr>
                  <th className="border border-outline-variant/50 px-3 py-3 text-left text-xs font-black sm:px-4">Sl.no</th>
                  <th className="border border-outline-variant/50 px-3 py-3 text-left text-xs font-black sm:px-4">House construction cost calculator</th>
                  <th className="border border-outline-variant/50 px-3 py-3 text-left text-xs font-black sm:px-4">Area</th>
                  <th className="border border-outline-variant/50 px-3 py-3 text-left text-xs font-black sm:px-4">Unit</th>
                  <th className="border border-outline-variant/50 px-3 py-3 text-left text-xs font-black sm:px-4">Rate</th>
                  <th className="border border-outline-variant/50 px-3 py-3 text-left text-xs font-black sm:px-4">Cost</th>
                </tr>
              </thead>
              <tbody>
                {lineItems.filter((item) => activePlan === "standard" || item.key !== "septicCapacity").map((item, index) => {
                  const rate = item.key === "builtUpArea" || item.key === "parkingArea" ? plan.rate : 22;
                  const value = values[item.key];
                  const cost = value * rate;

                  return (
                    <tr className="text-sm" key={item.key}>
                      <td className="border border-outline-variant/50 px-3 py-4 text-center font-bold sm:px-4">{index + 1}</td>
                      <td className="border border-outline-variant/50 px-3 py-4 font-bold text-on-surface sm:px-4">{item.label}</td>
                      <td className="border border-outline-variant/50 px-3 py-4">
                        <input
                          className="w-20 rounded-md border border-outline-variant/40 bg-white px-2 py-2 outline-none focus:border-primary sm:w-24"
                          min={0}
                          onChange={(event) => setValues((current) => ({ ...current, [item.key]: Number(event.target.value) || 0 }))}
                          type="number"
                          value={value || ""}
                        />
                      </td>
                      <td className="border border-outline-variant/50 px-3 py-4 font-bold text-on-surface-variant sm:px-4">{item.unit}</td>
                      <td className="border border-outline-variant/50 px-3 py-4 font-bold text-on-surface sm:px-4">{rate}</td>
                      <td className="border border-outline-variant/50 px-3 py-4 font-black text-on-surface sm:px-4">{isSubmitted ? `₹${cost.toLocaleString("en-IN")}` : "-"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <button className="mt-7 w-full rounded-xl bg-primary px-5 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-45" disabled={!hasRequiredValues} onClick={() => setIsLeadFormOpen(true)} type="button">Submit details to see your estimate</button>
          {isSubmitted && <div className="mt-6 rounded-2xl bg-primary-fixed/40 p-5"><p className="text-xs font-black uppercase tracking-[0.16em] text-primary">Estimated cost</p><p className="mt-2 text-4xl font-black text-on-surface">₹{total.toLocaleString("en-IN")}</p></div>}
        </div>
        </div>
      </section>

      {isLeadFormOpen && <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#111827]/55 p-4" role="dialog" aria-modal="true">
        <div className="my-auto max-h-[calc(100vh-2rem)] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-6 md:p-8">
          <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-[0.16em] text-primary">Almost there</p><h2 className="mt-2 text-2xl font-black text-on-surface">Tell us about your project</h2></div><button aria-label="Close form" className="rounded-full p-2 text-on-surface-variant hover:bg-surface-container-low" onClick={() => setIsLeadFormOpen(false)} type="button"><X className="size-5" /></button></div>
          <form className="mt-6 grid gap-4" onSubmit={(event) => { event.preventDefault(); setIsSubmitted(true); setIsLeadFormOpen(false); }}>
            {[{ key: "name", label: "Client name", type: "text" }, { key: "number", label: "Number", type: "tel" }, { key: "location", label: "Location", type: "text" }, { key: "building", label: "What are you planning to build?", type: "text" }, { key: "budget", label: "Your budget", type: "text" }].map((field) => <label className="grid gap-1.5 text-sm font-bold text-on-surface" key={field.key}>{field.label}<input required className="rounded-lg border border-outline-variant/40 px-3 py-2.5 font-normal outline-none focus:border-primary" type={field.type} value={lead[field.key as keyof typeof lead]} onChange={(event) => setLead((current) => ({ ...current, [field.key]: event.target.value }))} /></label>)}
            <button className="mt-2 rounded-xl bg-primary px-5 py-3.5 font-black text-white hover:bg-primary/90" type="submit">Submit and view estimate</button>
          </form>
        </div>
      </div>}
    </main>
  );
}
