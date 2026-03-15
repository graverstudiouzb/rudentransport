/**
 * RUDEN TRANSPORT Logo Component — Variante 2
 * Design: Cyan rounded square with dark "RT" letters + RUDEN TRANSPORT text
 * Color scheme: #00e5ff cyan block, #0d1117 dark text inside
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
      {/* RT Cyan Block Icon */}
      <svg
        width={s.icon}
        height={s.icon}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient id="rt-bg" x1="0" y1="64" x2="64" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00b8d4" />
            <stop offset="100%" stopColor="#00e5ff" />
          </linearGradient>
        </defs>

        {/* Cyan rounded square */}
        <rect x="0" y="0" width="64" height="64" rx="14" fill="url(#rt-bg)" />

        {/* R letter */}
        <path
          d="M11 50 L11 14 L26 14 C30.5 14 34 15.5 36 18 C38 20.5 38 24 36 27 C34.5 29.2 32 30.5 29 31 L37 50 L31 50 L23.5 31.5 L17.5 31.5 L17.5 50 Z M17.5 19 L17.5 27 L25.5 27 C28.5 27 30.5 26 31.5 24 C32.5 22 32 20 30 19.2 C29 18.8 27.5 19 25.5 19 Z"
          fill="#0d1117"
        />

        {/* T letter */}
        <path
          d="M36 14 L55 14 L55 19.5 L48.5 19.5 L48.5 50 L42.5 50 L42.5 19.5 L36 19.5 Z"
          fill="#0d1117"
        />
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
 */
export const logoSvgDataUrl = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"><defs><linearGradient id="bg" x1="0" y1="64" x2="64" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#00b8d4"/><stop offset="100%" stop-color="#00e5ff"/></linearGradient></defs><rect width="64" height="64" rx="14" fill="url(#bg)"/><path d="M11 50 L11 14 L26 14 C30.5 14 34 15.5 36 18 C38 20.5 38 24 36 27 C34.5 29.2 32 30.5 29 31 L37 50 L31 50 L23.5 31.5 L17.5 31.5 L17.5 50 Z M17.5 19 L17.5 27 L25.5 27 C28.5 27 30.5 26 31.5 24 C32.5 22 32 20 30 19.2 C29 18.8 27.5 19 25.5 19 Z" fill="#0d1117"/><path d="M36 14 L55 14 L55 19.5 L48.5 19.5 L48.5 50 L42.5 50 L42.5 19.5 L36 19.5 Z" fill="#0d1117"/></svg>`)}`;
