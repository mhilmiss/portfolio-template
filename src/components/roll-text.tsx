import type { CSSProperties, ReactNode } from "react";

type RollTextProps = {
  children: ReactNode;
  delayMs?: number;
};

/** Parent must carry the `group` class; hover or keyboard focus on it triggers the roll. */
export function RollText({ children, delayMs = 0 }: RollTextProps) {
  const style: CSSProperties | undefined = delayMs
    ? { transitionDelay: `${delayMs}ms` }
    : undefined;

  return (
    <span className="relative block overflow-hidden">
      <span
        style={style}
        className="relative block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full group-focus-visible:-translate-y-full motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 motion-reduce:group-focus-visible:translate-y-0"
      >
        {children}
        <span aria-hidden className="absolute top-full left-0">
          {children}
        </span>
      </span>
    </span>
  );
}
