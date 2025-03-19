import { cn } from "@/lib/utils"

export function Logo({
  className = "",
  size = "default",
}: { className?: string; size?: "default" | "large" | "small" }) {
  const dimensions = {
    small: { width: 24, height: 24 },
    default: { width: 32, height: 32 },
    large: { width: 48, height: 48 },
  }

  const { width, height } = dimensions[size]

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-primary", className)}
    >
      {/* Graduation cap */}
      <path d="M16 4L2 10L16 16L30 10L16 4Z" fill="currentColor" />

      {/* Book pages */}
      <path
        d="M7 12V20C7 20 11.5 23 16 23C20.5 23 25 20 25 20V12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Tassel */}
      <path d="M16 16V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      {/* Upward arrow */}
      <path
        d="M20 14L23 11M23 11L26 14M23 11V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Laptop base (simplified) */}
      <rect x="10" y="24" width="12" height="2" rx="1" fill="currentColor" />

      {/* Person silhouette */}
      <circle cx="8" cy="14" r="2" fill="currentColor" />
      <path
        d="M5 19C5 17.3431 6.34315 16 8 16C9.65685 16 11 17.3431 11 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

