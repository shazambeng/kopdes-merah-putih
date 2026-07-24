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
    lg: 'h-14',
    xl: 'h-20'
  };

  return (
    <div className={`inline-flex items-center gap-3 font-sans select-none ${heights[size]} ${className}`}>
      {/* Uploaded Logo Image */}
      <img 
        src="/logo.png" 
        alt="Logo Koperasi Merah Putih" 
        className="h-full w-auto object-contain"
        onError={(e) => {
          // Fallback if logo.png is not yet uploaded
          (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Kopdes+Merah+Putih&background=CE2029&color=fff&rounded=true&bold=true';
        }}
      />

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


