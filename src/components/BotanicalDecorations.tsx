import React from 'react';

export function FernSprig({ className = 'w-12 h-12 text-[#1E3723]' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 85 C 35 65, 55 45, 80 15" strokeWidth="2.5" />
      <path d="M30 73 C 25 66, 26 58, 33 55 C 38 62, 38 68, 30 73 Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M42 62 C 48 56, 56 57, 57 65 C 50 69, 44 68, 42 62 Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M43 51 C 36 45, 37 38, 46 37 C 50 44, 49 48, 43 51 Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M56 42 C 63 36, 71 39, 70 47 C 63 49, 58 48, 56 42 Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M57 32 C 52 26, 54 20, 62 20 C 65 26, 64 30, 57 32 Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M70 24 C 76 19, 82 22, 80 29 C 74 31, 70 29, 70 24 Z" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}

export function TerracottaPotIcon({ className = 'w-10 h-10 text-[#C85A32]' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 26 L64 26 L60 34 L20 34 Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M22 34 L27 68 L53 68 L58 34" fill="currentColor" fillOpacity="0.12" />
      <path d="M40 10 C 40 18, 36 24, 32 26" stroke="#2E5034" strokeWidth="2" />
      <path d="M40 12 C 45 18, 49 22, 47 26" stroke="#2E5034" strokeWidth="2" />
      <path d="M40 8 C 40 3, 45 4, 43 8" stroke="#C85A32" strokeWidth="1.8" />
    </svg>
  );
}

export function OliveSprig({ className = 'w-12 h-12 text-[#2E5034]' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M10 30 Q 50 15, 90 30" strokeWidth="2" />
      <ellipse cx="32" cy="20" rx="9" ry="5" transform="rotate(-25 32 20)" fill="currentColor" fillOpacity="0.2" />
      <ellipse cx="50" cy="36" rx="9" ry="5" transform="rotate(25 50 36)" fill="currentColor" fillOpacity="0.2" />
      <ellipse cx="68" cy="18" rx="8" ry="4.5" transform="rotate(-30 68 18)" fill="currentColor" fillOpacity="0.2" />
      <ellipse cx="82" cy="34" rx="7" ry="4" transform="rotate(20 82 34)" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

export function BotanicalStamp({ text = "CAMPASCIO • SUISSE", className = "w-24 h-24" }: { text?: string; className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 120 120" className="w-full h-full animate-[spin_40s_linear_infinite]" aria-hidden="true">
        <path
          id="textRing"
          d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
          fill="none"
        />
        <text className="text-[9.5px] uppercase tracking-[0.24em] font-medium fill-[#C85A32]">
          <textPath href="#textRing" startOffset="0%">
            {text} • COMPAGNONI GIARDINERIA •
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-9 h-9 rounded-full bg-[#F4E7B5]/60 flex items-center justify-center border border-[#C85A32]/30">
          <span className="text-[#1E3723] font-serif text-sm italic font-semibold">C</span>
        </div>
      </div>
    </div>
  );
}
