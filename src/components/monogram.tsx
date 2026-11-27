type MonogramProps = {
  label: string;
  className?: string;
};

export function Monogram({ label, className }: MonogramProps) {
  return (
    <svg
      viewBox="0 0 50 30"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.1}
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label={label}
      className={className}
    >
      <path d="M3.5 9.5C6 5.5 10.5 3.6 12.4 5.2C13.9 6.6 11 17 8.2 27.4" />
      <path d="M10.2 18C14.6 17.1 19.4 16.3 23.6 14.8C26.6 10.4 26.9 4.6 24.9 4.4C22.8 4.3 21.6 14.6 19.8 27.2C21 23.4 24 20.6 27.3 19.8C29.2 19.4 30 20.8 29.4 23.2C28.7 26 29.5 28 31.9 27.4C34.1 26.8 35.9 24.6 37.2 22.4" />
      <path d="M30.3 13.8L31.4 13" />
      <path d="M42.2 26.9L43.2 26.1" />
    </svg>
  );
}
