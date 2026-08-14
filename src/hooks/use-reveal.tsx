import { useEffect, type DependencyList } from "react";

/**
 * Ports the scroll-reveal + hero-slider behaviour from the original static pages.
 */
export function useReveal(deps: DependencyList = []) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    // Hero slider (home page)
    const slides = Array.from(document.querySelectorAll<HTMLElement>(".hero-slide"));
    const dots = Array.from(document.querySelectorAll<HTMLElement>(".slider-dot"));
    let current = 0;
    let timer: ReturnType<typeof setInterval> | undefined;

    const show = (index: number) => {
      slides.forEach((s, i) => {
        s.classList.toggle("opacity-100", i === index);
        s.classList.toggle("opacity-0", i !== index);
      });
      dots.forEach((d, i) => d.classList.toggle("active", i === index));
      current = index;
    };

    const onDot = (i: number) => () => show(i);
    const handlers = dots.map((d, i) => {
      const h = onDot(i);
      d.addEventListener("click", h);
      return h;
    });

    if (slides.length > 1) {
      show(0);
      timer = setInterval(() => show((current + 1) % slides.length), 5000);
    }

    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
      dots.forEach((d, i) => {
        const h = handlers[i];
        if (h) d.removeEventListener("click", h);
      });
    };
  }, deps);
}
