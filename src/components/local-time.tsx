"use client";

import { useSyncExternalStore } from "react";

type LocalTimeProps = {
  label: string;
  timeZone: string;
};

const formatters = new Map<string, Intl.DateTimeFormat>();

function getFormatter(timeZone: string) {
  let formatter = formatters.get(timeZone);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    });
    formatters.set(timeZone, formatter);
  }
  return formatter;
}

function subscribe(onTick: () => void) {
  const id = window.setInterval(onTick, 1000);
  return () => window.clearInterval(id);
}

export function LocalTime({ label, timeZone }: LocalTimeProps) {
  // The server snapshot is null so the current time is never read during prerender.
  const time = useSyncExternalStore(
    subscribe,
    () => getFormatter(timeZone).format(new Date()),
    () => null,
  );
  const [hours, minutes] = (time ?? "00:00").split(":");

  return (
    <div>
      <p className="text-muted">{label}</p>
      <p className={time ? "tabular-nums" : "tabular-nums opacity-0"}>
        {hours}
        <span className="inline-block px-[0.35em] animate-blink motion-reduce:animate-none">
          .
        </span>
        {minutes}
      </p>
    </div>
  );
}
