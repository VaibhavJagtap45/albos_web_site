import { useEffect } from "react";

/**
 * Attaches an IntersectionObserver to all .reveal elements
 * and adds .visible when they enter the viewport.
 */
export function useScrollReveal(deps = []) {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}

export default useScrollReveal;