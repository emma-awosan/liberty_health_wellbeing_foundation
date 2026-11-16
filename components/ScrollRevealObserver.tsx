"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * 100% Hydration-Safe, Zero-Layout-Shift Scroll Reveal Observer (Web & Mobile).
 * - Uses the native Web Animations API (`Element.prototype.animate`) + `WeakSet` / `WeakMap`
 *   so ZERO DOM attributes (`data-*`, `class`, `style`) are ever added or mutated on React nodes.
 * - Eliminates any possibility of Next.js / React 19 hydration mismatches.
 * - Runs once per route navigation (`pathname`) so interactive tab/deck switches are never intercepted.
 */
export default function ScrollRevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observedElements = new WeakSet<HTMLElement>();
    const pendingAnimations = new WeakMap<HTMLElement, Animation>();
    const activeAnimations: Animation[] = [];

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const anim = pendingAnimations.get(target);
            if (anim) {
              anim.play();
              pendingAnimations.delete(target);
            }
            intersectionObserver.unobserve(target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -28px 0px",
      }
    );

    const shouldSkipElement = (el: HTMLElement): boolean => {
      if (!el || typeof el.animate !== "function") return true;
      if (el.hasAttribute("data-no-sr") || el.closest("[data-no-sr]") !== null) {
        return true;
      }
      // Skip accordion collapse wrappers or hidden overflow containers
      if (
        el.classList.contains("overflow-hidden") &&
        !el.classList.contains("rounded-xl") &&
        !el.classList.contains("rounded-2xl")
      ) {
        return true;
      }
      // Skip absolute background/avatar decorations
      if (el.classList.contains("absolute")) {
        return true;
      }
      // Never apply transform to sticky/fixed elements or ancestors of sticky elements
      if (
        el.classList.contains("sticky") ||
        el.classList.contains("fixed") ||
        el.querySelector(".sticky") !== null
      ) {
        return true;
      }
      if (el.tagName.toLowerCase() === "svg") return true;
      return false;
    };

    const registerTargets = () => {
      const main = document.querySelector("main");
      if (!main) return;

      const selectorList = [
        "section > div > .text-center",
        "section > div > .flex.flex-col.md\\:flex-row",
        "section > div > .flex.flex-col.lg\\:flex-row",
        "section .grid > div",
        "section .grid > article",
        "section .grid > a",
        "section .divide-y > div",
        "section form",
        "[data-sr]",
      ];

      const candidates = main.querySelectorAll<HTMLElement>(
        selectorList.join(", ")
      );

      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      const parentCounter = new Map<Element, number>();

      candidates.forEach((el) => {
        if (observedElements.has(el)) return;
        if (shouldSkipElement(el)) return;

        observedElements.add(el);

        let delayMs = 0;
        const parent = el.parentElement;
        if (parent) {
          const siblingIndex = parentCounter.get(parent) ?? 0;
          parentCounter.set(parent, siblingIndex + 1);
          delayMs = Math.min(siblingIndex, 4) * 65;
        }

        const rect = el.getBoundingClientRect();
        // Only animate elements that start below the initial viewport fold
        if (rect.top >= viewportHeight * 0.92) {
          const anim = el.animate(
            [
              { opacity: 0, transform: "translate3d(0, 26px, 0)" },
              { opacity: 1, transform: "translate3d(0, 0, 0)" },
            ],
            {
              duration: 650,
              delay: delayMs,
              easing: "cubic-bezier(0.16, 1, 0.3, 1)",
              fill: "backwards",
            }
          );
          anim.pause();
          pendingAnimations.set(el, anim);
          activeAnimations.push(anim);
          intersectionObserver.observe(el);
        }
      });
    };

    registerTargets();

    return () => {
      intersectionObserver.disconnect();
      activeAnimations.forEach((anim) => {
        try {
          anim.cancel();
        } catch {
          // ignore
        }
      });
    };
  }, [pathname]);

  return null;
}
