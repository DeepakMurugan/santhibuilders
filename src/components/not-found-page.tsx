import { Link } from "@tanstack/react-router";

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#08111f_0%,#0f2f58_45%,#f8fbff_180%)] px-4 py-12 text-white">
      <div className="mx-auto flex min-h-[80vh] max-w-5xl items-center justify-center">
        <div className="grid gap-8 rounded-[2.5rem] border border-white/10 bg-white/8 p-8 md:p-12 lg:grid-cols-[0.9fr_1.1fr] backdrop-blur-xl shadow-2xl">
          <div className="rounded-[2rem] bg-white/6 p-6 md:p-8">
            <p className="text-[72px] md:text-[110px] font-black leading-none text-secondary-container">404</p>
            <p className="mt-4 text-sm md:text-base uppercase tracking-[0.24em] text-white/60 font-black">Wrong Turn</p>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">This page does not exist in the current Santhi Builders site map.</h1>
            <p className="mt-5 max-w-2xl text-base md:text-lg text-white/75 leading-relaxed">The URL may be incorrect, outdated, or moved during the recent site restructure. Use one of the primary actions below to get back to a working page.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-black text-[#0f1f36] transition-all hover:bg-secondary-container hover:text-white" to="/">
                Go to Home
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
              <Link className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-black text-white transition-all hover:bg-white/10" to="/contact-us">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}