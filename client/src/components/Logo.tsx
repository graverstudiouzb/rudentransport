/**
 * RUDEN TRANSPORT Logo Component
 * Design: RT monogram (cyan gradient on dark rounded square) + RUDEN TRANSPORT text
 * Color scheme: #00e5ff cyan + white text, matching site dark theme
 */

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export default function Logo({ size = "md", showText = true, className = "" }: LogoProps) {
  const sizes = {
    sm: { icon: 28, name: "text-sm", sub: "text-[7px]", gap: "gap-1.5" },
    md: { icon: 38, name: "text-lg", sub: "text-[9px]", gap: "gap-2.5" },
    lg: { icon: 56, name: "text-2xl", sub: "text-xs", gap: "gap-3" },
  };

  const s = sizes[size];

  return (
    <div className={`flex items-center ${s.gap} ${className}`}>
      {/* RT Monogram Icon */}
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient id="rt-cg" x1="0" y1="64" x2="64" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00b8d4" />
            <stop offset="100%" stopColor="#00e5ff" />
          </linearGradient>
          <linearGradient id="rt-ag" x1="32" y1="40" x2="56" y2="4" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00e5ff" />
            <stop offset="100%" stopColor="#80ffff" />
          </linearGradient>
        </defs>

        {/* Dark rounded square background */}
        <rect x="0" y="0" width="64" height="64" rx="12" fill="#0d1117" stroke="#1c2535" strokeWidth="1" />

        {/* R letter - main body */}
        <path
          d="M12 52 L12 12 L30 12 C36 12 40 14.5 42 18 C44 21.5 43.5 26 40 29 L38.5 30.2 L46 52 L39 52 L32 32 L19 32 L19 52 Z M19 18 L19 27 L29 27 C33 27 35.5 24.5 36 21.5 C36.5 18.5 34.5 18 30 18 Z"
          fill="url(#rt-cg)"
        />

        {/* Arrow swoosh - dynamic upward motion */}
        <path
          d="M34 28 L44 16 L52 16 L52 10 L46 10 L46 14 L36 26 Z"
          fill="url(#rt-ag)"
          opacity="0.9"
        />

        {/* Arrow tip */}
        <polygon points="48,10 56,10 52,18 46,18" fill="#00e5ff" />
        <polygon points="52,10 56,10 56,14" fill="#ffffff" opacity="0.3" />
      </svg>

      {/* Text */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`${s.name} font-bold text-white tracking-wider`}
            style={{ letterSpacing: "0.08em" }}
          >
            RUDEN
          </span>
          <span
            className={`${s.sub} text-[#00e5ff] tracking-[0.25em] uppercase mt-0.5`}
          >
            TRANSPORT
          </span>
        </div>
      )}
    </div>
  );
}

/**
 * Standalone SVG icon for favicon / og:image usage
 * Export as data URL for use in meta tags
 */
export const logoSvgDataUrl = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"><defs><linearGradient id="cg" x1="0" y1="64" x2="64" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#00b8d4"/><stop offset="100%" stop-color="#00e5ff"/></linearGradient><linearGradient id="ag" x1="32" y1="40" x2="56" y2="4" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#00e5ff"/><stop offset="100%" stop-color="#80ffff"/></linearGradient></defs><rect x="0" y="0" width="64" height="64" rx="12" fill="#0d1117" stroke="#1c2535" stroke-width="1"/><path d="M12 52 L12 12 L30 12 C36 12 40 14.5 42 18 C44 21.5 43.5 26 40 29 L38.5 30.2 L46 52 L39 52 L32 32 L19 32 L19 52 Z M19 18 L19 27 L29 27 C33 27 35.5 24.5 36 21.5 C36.5 18.5 34.5 18 30 18 Z" fill="url(#cg)"/><path d="M34 28 L44 16 L52 16 L52 10 L46 10 L46 14 L36 26 Z" fill="url(#ag)" opacity="0.9"/><polygon points="48,10 56,10 52,18 46,18" fill="#00e5ff"/><polygon points="52,10 56,10 56,14" fill="#fff" opacity="0.3"/></svg>`)}`;
