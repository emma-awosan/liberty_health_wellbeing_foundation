import React from "react";

export function GenesisIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden rounded-xl relative flex items-center justify-center bg-gradient-to-br from-[#FDF9F3] via-[#F9F1E3] to-[#F3E5CC] border border-primary/15 shadow-inner p-4 ${className}`}>
      {/* Ambient background glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#AA7B2F]/10 rounded-full blur-2xl pointer-events-none" />

      <svg
        viewBox="0 0 320 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-[170px] select-none transition-transform duration-500 group-hover:scale-[1.03]"
      >
        <defs>
          <linearGradient id="genesis-heart-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D97706" />
            <stop offset="50%" stopColor="#C18E3C" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>

          <linearGradient id="genesis-leaf-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#48BB78" />
            <stop offset="100%" stopColor="#2F855A" />
          </linearGradient>

          <linearGradient id="genesis-leaf-right" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#68D391" />
            <stop offset="100%" stopColor="#38A169" />
          </linearGradient>

          <linearGradient id="genesis-hand-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E2BD82" />
            <stop offset="100%" stopColor="#C18E3C" />
          </linearGradient>

          <filter id="genesis-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#C18E3C" floodOpacity="0.2" />
          </filter>
        </defs>

        {/* Concentric radiating pulse aura */}
        <circle cx="160" cy="85" r="70" stroke="#C18E3C" strokeOpacity="0.08" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="160" cy="85" r="54" stroke="#C18E3C" strokeOpacity="0.14" strokeWidth="1.5" />
        <circle cx="160" cy="85" r="38" stroke="#C18E3C" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="4 2" />

        {/* Foundation Mound / Soil of Care */}
        <path
          d="M60 148 C100 138, 220 138, 260 148 C240 156, 80 156, 60 148 Z"
          fill="#E7DFC9"
          opacity="0.8"
        />

        {/* Supportive Cupped Hands */}
        {/* Left hand */}
        <path
          d="M105 138 C115 125, 130 118, 150 120 C155 120, 158 123, 155 127 C145 138, 130 144, 110 146 Z"
          fill="url(#genesis-hand-grad)"
          opacity="0.9"
        />
        {/* Right hand */}
        <path
          d="M215 138 C205 125, 190 118, 170 120 C165 120, 162 123, 165 127 C175 138, 190 144, 210 146 Z"
          fill="url(#genesis-hand-grad)"
          opacity="0.9"
        />

        {/* Sprouting Stems of Hope */}
        <path
          d="M160 130 Q160 105 160 88"
          stroke="#2F855A"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Left Leaf */}
        <path
          d="M160 110 C140 108, 130 96, 134 88 C144 88, 156 98, 160 106 Z"
          fill="url(#genesis-leaf-grad)"
        />

        {/* Right Leaf */}
        <path
          d="M160 102 C178 98, 188 88, 184 80 C174 80, 164 90, 160 98 Z"
          fill="url(#genesis-leaf-right)"
        />

        {/* Main Radiant Heart */}
        <g filter="url(#genesis-shadow)">
          <path
            d="M160 52 C154 44, 142 40, 132 46 C120 54, 120 70, 134 84 L160 108 L186 84 C200 70, 200 54, 188 46 C178 40, 166 44, 160 52 Z"
            fill="url(#genesis-heart-grad)"
          />
          {/* Medical cross inside the heart */}
          <rect x="156.5" y="62" width="7" height="22" rx="3.5" fill="#FFFFFF" opacity="0.95" />
          <rect x="149" y="69.5" width="22" height="7" rx="3.5" fill="#FFFFFF" opacity="0.95" />
        </g>

        {/* Sparkles / Empathy Radiance */}
        {/* Top-right sparkle */}
        <path
          d="M210 44 Q214 44 214 40 Q214 44 218 44 Q214 44 214 48 Q214 44 210 44 Z"
          fill="#D97706"
        />
        {/* Top-left small sparkle */}
        <path
          d="M106 58 Q109 58 109 55 Q109 58 112 58 Q109 58 109 61 Q109 58 106 58 Z"
          fill="#C18E3C"
        />
        {/* Soft floating golden orbs */}
        <circle cx="114" cy="42" r="2.5" fill="#C18E3C" opacity="0.6" />
        <circle cx="218" cy="70" r="3" fill="#D97706" opacity="0.5" />
        <circle cx="130" cy="132" r="2" fill="#C18E3C" opacity="0.5" />
        <circle cx="194" cy="130" r="2" fill="#C18E3C" opacity="0.5" />
      </svg>
    </div>
  );
}

export function GrowthIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden rounded-xl relative flex items-center justify-center bg-gradient-to-br from-[#F0F7FD] via-[#E4EFFB] to-[#D6E6F8] border border-blue/15 shadow-inner p-4 ${className}`}>
      {/* Ambient background glow */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-sky/15 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue/10 rounded-full blur-2xl pointer-events-none" />

      <svg
        viewBox="0 0 320 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-[170px] select-none transition-transform duration-500 group-hover:scale-[1.03]"
      >
        <defs>
          <linearGradient id="growth-arc-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7BBBE6" />
            <stop offset="50%" stopColor="#3662A4" />
            <stop offset="100%" stopColor="#1F3354" />
          </linearGradient>

          <linearGradient id="growth-node-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#EBF2FA" />
          </linearGradient>

          <filter id="growth-node-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#1F3354" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* Background Network Mesh / Cross-Border Grid */}
        <line x1="50" y1="130" x2="140" y2="85" stroke="#3662A4" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="140" y1="85" x2="250" y2="45" stroke="#3662A4" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="140" y1="85" x2="190" y2="135" stroke="#3662A4" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="90" y1="55" x2="140" y2="85" stroke="#3662A4" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="2 2" />

        {/* Rising Milestone Trajectory Arc */}
        <path
          d="M 50 135 C 100 130, 130 95, 255 45"
          stroke="url(#growth-arc-grad)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Soft shadow stroke under arc */}
        <path
          d="M 50 137 C 100 132, 130 97, 255 47"
          stroke="#1F3354"
          strokeOpacity="0.08"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Auxiliary growth ripples */}
        <circle cx="70" cy="130" r="24" stroke="#7BBBE6" strokeOpacity="0.25" strokeWidth="1.5" />
        <circle cx="160" cy="90" r="28" stroke="#3662A4" strokeOpacity="0.18" strokeWidth="1.5" strokeDasharray="4 3" />
        <circle cx="245" cy="50" r="32" stroke="#314D79" strokeOpacity="0.2" strokeWidth="1.5" />

        {/* NODE 1 (Bottom Left): Mobile Clinic Unit & First Aid */}
        <g filter="url(#growth-node-shadow)">
          <circle cx="70" cy="130" r="20" fill="url(#growth-node-grad)" stroke="#3662A4" strokeWidth="2" />
          {/* Mobile Medical Cross */}
          <rect x="67.5" y="122" width="5" height="16" rx="2" fill="#3662A4" />
          <rect x="62" y="127.5" width="16" height="5" rx="2" fill="#3662A4" />
        </g>
        <text x="70" y="162" textAnchor="middle" fill="#314D79" fontSize="9" fontWeight="700" letterSpacing="0.02em">
          Pop-up Clinics
        </text>

        {/* NODE 2 (Center): Clean Water & Training Infrastructure */}
        <g filter="url(#growth-node-shadow)">
          <circle cx="160" cy="90" r="22" fill="url(#growth-node-grad)" stroke="#7BBBE6" strokeWidth="2" />
          {/* Water Droplet + Sprout Icon */}
          <path
            d="M 160 78 C 153 87, 151 94, 155 99 C 158 103, 162 103, 165 99 C 169 94, 167 87, 160 78 Z"
            fill="#7BBBE6"
          />
          <circle cx="157" cy="95" r="1.5" fill="#FFFFFF" />
        </g>
        <text x="160" y="124" textAnchor="middle" fill="#3662A4" fontSize="9" fontWeight="700" letterSpacing="0.02em">
          Clean Water &amp; Edu
        </text>

        {/* NODE 3 (Top Right): Scaled Regional Hubs & Milestone Flag */}
        <g filter="url(#growth-node-shadow)">
          <circle cx="245" cy="50" r="24" fill="url(#growth-node-grad)" stroke="#C18E3C" strokeWidth="2.5" />
          {/* Milestone Flag with Gold Spark */}
          <path d="M 239 40 L 239 62" stroke="#1F3354" strokeWidth="2" strokeLinecap="round" />
          <path d="M 240 40 L 253 46 L 240 52 Z" fill="#C18E3C" />
          <circle cx="240" cy="40" r="2" fill="#AA7B2F" />
        </g>
        <text x="245" y="86" textAnchor="middle" fill="#C18E3C" fontSize="9" fontWeight="700" letterSpacing="0.02em">
          Community Hubs
        </text>

        {/* Dynamic rising arrow at the crest */}
        <path
          d="M 264 42 L 274 38 L 270 48"
          stroke="#C18E3C"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Floating partner connection badges */}
        <circle cx="112" cy="74" r="3" fill="#7BBBE6" />
        <circle cx="204" cy="116" r="3.5" fill="#3662A4" opacity="0.6" />
        <circle cx="210" cy="35" r="2.5" fill="#C18E3C" opacity="0.7" />
      </svg>
    </div>
  );
}

export function FutureIllustration({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden rounded-xl relative flex items-center justify-center bg-gradient-to-br from-[#09182B] via-[#0E243F] to-[#163355] border border-white/10 shadow-inner p-4 ${className}`}>
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-32 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky/15 rounded-full blur-2xl pointer-events-none" />

      <svg
        viewBox="0 0 320 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-[170px] select-none transition-transform duration-500 group-hover:scale-[1.03]"
      >
        <defs>
          <linearGradient id="future-sun-grad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#C18E3C" />
            <stop offset="50%" stopColor="#E59A18" />
            <stop offset="100%" stopColor="#FDE68A" />
          </linearGradient>

          <linearGradient id="future-building-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E385B" />
            <stop offset="100%" stopColor="#10233B" />
          </linearGradient>

          <linearGradient id="future-wave-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7BBBE6" />
            <stop offset="100%" stopColor="#3662A4" />
          </linearGradient>

          <filter id="future-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="glow" />
            <feComposite in="SourceGraphic" in2="glow" operator="over" />
          </filter>
        </defs>

        {/* Horizon Grid / Generational Dawn */}
        <ellipse cx="160" cy="148" rx="140" ry="24" fill="#0A1828" />

        {/* Rising Horizon Sun of Health Equity */}
        <circle cx="160" cy="120" r="36" fill="url(#future-sun-grad)" opacity="0.35" filter="url(#future-glow)" />
        <circle cx="160" cy="120" r="26" fill="url(#future-sun-grad)" opacity="0.75" />

        {/* Sunbeams of Generational Impact */}
        <line x1="160" y1="84" x2="160" y2="72" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
        <line x1="132" y1="94" x2="124" y2="84" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <line x1="188" y1="94" x2="196" y2="84" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <line x1="110" y1="118" x2="98" y2="116" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <line x1="210" y1="118" x2="222" y2="116" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

        {/* Modern Sustainable Health Hub Facility */}
        {/* Main clinic building block */}
        <rect x="115" y="108" width="90" height="42" rx="6" fill="url(#future-building-grad)" stroke="#385F8F" strokeWidth="1.5" />
        
        {/* Modern solar canopy roof */}
        <path d="M 108 108 L 160 92 L 212 108 Z" fill="#1A3A5E" stroke="#7BBBE6" strokeWidth="1.5" />
        {/* Solar panel grid lines on roof */}
        <line x1="134" y1="100" x2="186" y2="100" stroke="#7BBBE6" strokeWidth="1" opacity="0.7" />
        <line x1="160" y1="92" x2="160" y2="108" stroke="#7BBBE6" strokeWidth="1" opacity="0.7" />

        {/* Clinic Entrance & Illuminated Windows */}
        <rect x="150" y="126" width="20" height="24" rx="3" fill="#081422" stroke="#7BBBE6" strokeWidth="1" />
        <circle cx="160" cy="133" r="1.5" fill="#7BBBE6" />
        {/* Left window bank */}
        <rect x="123" y="116" width="18" height="12" rx="2" fill="#FDE68A" opacity="0.85" />
        {/* Right window bank */}
        <rect x="179" y="116" width="18" height="12" rx="2" fill="#FDE68A" opacity="0.85" />

        {/* Glowing Medical Cross Emblem above entrance */}
        <g filter="url(#future-glow)">
          <rect x="157.5" y="113" width="5" height="9" rx="1.5" fill="#C18E3C" />
          <rect x="154.5" y="115.5" width="11" height="4" rx="1.5" fill="#C18E3C" />
        </g>

        {/* Telemedicine Satellite Antenna with Broadcast Waves */}
        <path d="M 160 92 L 160 68" stroke="#7BBBE6" strokeWidth="2" strokeLinecap="round" />
        <path d="M 152 70 Q 160 62 168 70" stroke="#7BBBE6" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="160" cy="64" r="2.5" fill="#FFFFFF" />

        {/* Telemedicine Digital Signal Broadcast Waves */}
        <path d="M 144 54 Q 160 44 176 54" stroke="#7BBBE6" strokeWidth="1.5" strokeDasharray="3 3" fill="none" opacity="0.8" />
        <path d="M 134 44 Q 160 30 186 44" stroke="#7BBBE6" strokeWidth="1.5" strokeDasharray="4 3" fill="none" opacity="0.5" />
        <path d="M 124 34 Q 160 18 196 34" stroke="#7BBBE6" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.3" />

        {/* 100+ Permanent Hubs Vision Callout Badge */}
        <g>
          <rect x="224" y="24" width="76" height="24" rx="12" fill="#1F3354" stroke="#C18E3C" strokeWidth="1" opacity="0.9" />
          <text x="262" y="39.5" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700" letterSpacing="0.04em">
            100+ HUBS
          </text>
        </g>

        {/* Ambient Stars in Night Sky */}
        <circle cx="60" cy="40" r="1.5" fill="#FFFFFF" opacity="0.7" />
        <circle cx="85" cy="65" r="1" fill="#7BBBE6" opacity="0.6" />
        <circle cx="230" cy="68" r="1.5" fill="#FFFFFF" opacity="0.8" />
        <circle cx="280" cy="85" r="1" fill="#FDE68A" opacity="0.7" />
        <circle cx="45" cy="100" r="1.5" fill="#7BBBE6" opacity="0.5" />
      </svg>
    </div>
  );
}

{/* Responsive Horizontal Milestone Connector for Desktop (> md) */}
export function StoryArrowDesktop({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center w-full ${className}`}>
      {/* Background connecting track line spanning the gap */}
      <div className="absolute inset-x-0 w-full h-[2px] bg-gradient-to-r from-slate-200 via-primary/35 to-slate-200" />
      
      {/* Floating circular milestone badge */}
      <div className="relative z-10 w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-white border border-slate-200/90 text-primary ring-4 ring-canvas flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:text-primary group-hover:scale-110 shrink-0">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </div>
  );
}

{/* Responsive Vertical Milestone Connector for Mobile (< md) */}
export function StoryArrowMobile({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center py-2 ${className}`}>
      {/* Vertical connecting track line */}
      <div className="absolute inset-y-0 w-[2px] bg-gradient-to-b from-slate-200 via-primary/30 to-slate-200" />
      
      {/* Floating circular milestone badge */}
      <div className="relative z-10 w-7 h-7 rounded-full bg-white border border-slate-200 text-primary ring-4 ring-canvas flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3.5 h-3.5"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </div>
    </div>
  );
}
