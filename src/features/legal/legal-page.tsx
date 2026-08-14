type LegalSection = {
  title: string;
  body: readonly string[];
};

export function LegalPage({
  intro,
  lastUpdated,
  sections,
  title,
}: {
  intro: string;
  lastUpdated: string;
  sections: readonly LegalSection[];
  title: string;
}) {
  return (
    <main className="bg-surface-container-low/30">
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-14 md:py-18 lg:py-20">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 px-4 py-2 text-[10px] md:text-xs font-black uppercase tracking-[0.22em] text-primary">
            <span className="material-symbols-outlined text-sm">gavel</span>
            Legal Information
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-on-surface">{title}</h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-on-surface-variant max-w-3xl leading-relaxed">{intro}</p>
          <p className="mt-4 text-sm md:text-base font-semibold text-on-surface-variant">Last updated: {lastUpdated}</p>
        </div>
      </section>
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pb-14 md:pb-18 lg:pb-20">
        <div className="grid gap-5">
          {sections.map((section) => (
            <article className="rounded-[2rem] border border-outline-variant/25 bg-white p-6 md:p-8 shadow-sm" key={section.title}>
              <h2 className="text-2xl md:text-3xl font-black text-on-surface">{section.title}</h2>
              <div className="mt-5 space-y-4 text-base md:text-lg text-on-surface-variant leading-relaxed">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
