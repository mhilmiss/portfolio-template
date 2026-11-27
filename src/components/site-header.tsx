import Link from "next/link";
import { site } from "@/content/site";
import { LocalTime } from "@/components/local-time";
import { MagneticDot } from "@/components/magnetic-dot";
import { Monogram } from "@/components/monogram";
import { RollText } from "@/components/roll-text";

const focusRing =
  "outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-gold";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 grid grid-cols-[1fr_auto_1fr] items-center gap-x-6 p-4 text-[10px] leading-[1.15] tracking-[0.04em] text-gold uppercase md:grid-cols-4 md:items-start md:p-6 md:text-[11px]">
      <Link href="/" className={`group justify-self-start ${focusRing}`}>
        {site.name.map((line, index) => (
          <RollText key={line} delayMs={index * 40}>
            {line}
          </RollText>
        ))}
      </Link>

      <Monogram
        label={site.monogramLabel}
        className="hidden w-15 text-gold md:block"
      />

      <nav aria-label="Primary" className="contents md:flex md:flex-col md:items-start">
        <button
          type="button"
          className={`group justify-self-center uppercase ${focusRing}`}
        >
          <RollText>Menu</RollText>
        </button>
        <button
          type="button"
          className={`group col-start-3 row-start-1 mr-11 justify-self-end uppercase md:mr-0 ${focusRing}`}
        >
          <RollText>Contact</RollText>
        </button>
      </nav>

      <div className="col-start-3 row-start-1 flex items-start justify-self-end md:col-start-auto md:row-start-auto md:justify-self-stretch md:justify-between">
        <div className="hidden md:block">
          <LocalTime label={site.timeLabel} timeZone={site.timeZone} />
        </div>
        <MagneticDot />
      </div>
    </header>
  );
}
