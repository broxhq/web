export function Logo({ size = 56 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="brox"
    >
      <rect width="256" height="256" rx="48" fill="#FFFFFF" />
      <rect x="60" y="48" width="30" height="160" rx="3" fill="#0A0A0A" />
      <circle
        cx="142"
        cy="154"
        r="39"
        fill="none"
        stroke="#0A0A0A"
        strokeWidth="30"
      />
    </svg>
  );
}
