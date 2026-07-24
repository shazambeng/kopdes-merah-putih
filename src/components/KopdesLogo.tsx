import React from 'react';

interface KopdesLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const KopdesLogo: React.FC<KopdesLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true
}) => {
  const heights = {
    sm: 'h-8',
    md: 'h-11',
    lg: 'h-16',
    xl: 'h-24'
  };

  return (
    <div className={`inline-flex items-center gap-3 font-sans select-none ${heights[size]} ${className}`}>
      {/* Red Circular Badge / Emblem with Indonesian Flag */}
      <div className="relative h-full aspect-[1/1] shrink-0 flex items-center justify-center rounded-xl bg-[#CE2029] text-white p-2 shadow-xs border border-red-700/20">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Flag Pole */}
          <rect x="28" y="15" width="4" height="70" fill="#FFFFFF" opacity="0.9" rx="2" />
          {/* Flag Red */}
          <path d="M 32 18 C 50 14 65 24 82 18 L 82 38 C 65 44 50 34 32 38 Z" fill="#FFFFFF" />
          {/* Flag White with Red Accent */}
          <path d="M 32 38 C 50 34 65 44 82 38 L 82 58 C 65 64 50 54 32 58 Z" fill="#F8FAFC" opacity="0.95" />
          {/* Rice/Grain sustainability arc in green at bottom */}
          <circle cx="50" cy="50" r="42" stroke="#2D5A27" strokeWidth="6" strokeDasharray="180" opacity="0.8" />
        </svg>
      </div>

      {/* Editorial Typography */}
      <div className="flex flex-col justify-center leading-none">
        <div 
          className="font-extrabold tracking-tight text-[#CE2029] dark:text-red-500 font-serif-editorial" 
          style={{ fontSize: size === 'sm' ? '1.05rem' : size === 'md' ? '1.35rem' : size === 'lg' ? '1.85rem' : '2.5rem' }}
        >
          Koperasi Merah Putih
        </div>
        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span
              className="font-bold tracking-widest text-[#2D5A27] dark:text-emerald-400 uppercase"
              style={{ fontSize: size === 'sm' ? '0.55rem' : size === 'md' ? '0.65rem' : size === 'lg' ? '0.85rem' : '1rem' }}
            >
              Kec. Soreang • Kab. Bandung
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

