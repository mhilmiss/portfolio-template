"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export function MagneticDot() {
  const areaRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLSpanElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference) and (hover: hover)", () => {
        const area = areaRef.current;
        if (!area) return;

        const tween = { duration: 0.4, ease: "power3.out" };
        const ringX = gsap.quickTo(ringRef.current, "x", tween);
        const ringY = gsap.quickTo(ringRef.current, "y", tween);
        const dotX = gsap.quickTo(dotRef.current, "x", tween);
        const dotY = gsap.quickTo(dotRef.current, "y", tween);

        const onMove = (event: PointerEvent) => {
          const rect = area.getBoundingClientRect();
          const dx = event.clientX - (rect.left + rect.width / 2);
          const dy = event.clientY - (rect.top + rect.height / 2);
          ringX(dx * 0.25);
          ringY(dy * 0.25);
          dotX(dx * 0.5);
          dotY(dy * 0.5);
        };

        const onLeave = () => {
          ringX(0);
          ringY(0);
          dotX(0);
          dotY(0);
        };

        area.addEventListener("pointermove", onMove);
        area.addEventListener("pointerleave", onLeave);
        return () => {
          area.removeEventListener("pointermove", onMove);
          area.removeEventListener("pointerleave", onLeave);
        };
      });
    },
    { scope: areaRef },
  );

  return (
    <div ref={areaRef} aria-hidden className="-m-3 grid size-13 place-items-center">
      <span
        ref={ringRef}
        className="grid size-7 place-items-center rounded-full border border-accent"
      >
        <span ref={dotRef} className="size-1 rounded-full bg-accent" />
      </span>
    </div>
  );
}
