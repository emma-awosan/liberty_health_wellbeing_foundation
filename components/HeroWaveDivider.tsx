import React from "react";

interface HeroWaveDividerProps {
  fillColor?: string;
  showAccentLine?: boolean;
  className?: string;
}

export default function HeroWaveDivider({
  fillColor = "#ffffff",
  showAccentLine = true,
  className = "",
}: HeroWaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-none -mb-px select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 block"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Layer 1: Ambient background wave with soft opacity */}
        <path
          d="M0,32 C320,96 640,16 960,72 C1200,116 1360,28 1440,52 L1440,120 L0,120 Z"
          fill={fillColor}
          fillOpacity="0.12"
        />

        {/* Layer 2: Mid-tier undulating wave */}
        <path
          d="M0,54 C280,108 580,26 880,76 C1140,118 1320,40 1440,64 L1440,120 L0,120 Z"
          fill={fillColor}
          fillOpacity="0.32"
        />

        {/* Subtle Brand Gold Accent Line along wave crest */}
        {showAccentLine && (
          <path
            d="M0,54 C280,108 580,26 880,76 C1140,118 1320,40 1440,64"
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="2"
            strokeOpacity="0.6"
          />
        )}

        {/* Layer 3: Solid foreground wave connecting seamlessly to next section */}
        <path
          d="M0,76 C300,122 620,48 920,92 C1180,126 1340,58 1440,76 L1440,120 L0,120 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
