import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'monochrome-gold';
  size?: 'sm' | 'md' | 'lg';
  iconOnly?: boolean;
  className?: string;
  id?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  iconOnly = false,
  className = '',
  id,
}) => {
  const isLight = variant === 'light'; // Used on dark navy backgrounds
  const isGold = variant === 'monochrome-gold';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-base leading-tight',
    md: 'text-lg md:text-xl leading-tight',
    lg: 'text-2xl md:text-3xl leading-tight',
  };

  const subTextSizes = {
    sm: 'text-[9px] tracking-[0.25em]',
    md: 'text-[10px] md:text-[11px] tracking-[0.28em]',
    lg: 'text-xs tracking-[0.32em]',
  };

  // Color tokens for Sophisticated Dark aesthetic
  const primaryColor = isLight ? '#F5F5F7' : isGold ? '#D4AF37' : '#F5F5F7';
  const accentColor = '#D4AF37';
  const secondaryColor = isLight ? '#E5C158' : '#7E9F8E';
  const subtextColor = isLight ? '#9CA3AF' : '#8E8E93';

  return (
    <div
      id={id}
      className={`inline-flex items-center gap-3 select-none group cursor-pointer transition-opacity duration-200 hover:opacity-95 ${className}`}
    >
      {/* Abstract Architectural/Longevity Monogram */}
      <div className={`relative flex items-center justify-center ${iconSizes[size]} flex-shrink-0`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
        >
          {/* Subtle Outer Geometric Alignment Ring */}
          <circle
            cx="24"
            cy="24"
            r="22"
            stroke={accentColor}
            strokeWidth="1.2"
            strokeDasharray="2 3"
            opacity="0.5"
          />

          {/* Biological Progression Spiral / Arc */}
          <path
            d="M 24 6 A 18 18 0 0 1 42 24 A 18 18 0 0 1 24 42"
            stroke={primaryColor}
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Blueprint Axis Guide */}
          <path
            d="M 24 10 L 24 38 M 10 24 L 38 24"
            stroke={accentColor}
            strokeWidth="1"
            strokeDasharray="1.5 2.5"
            opacity="0.6"
          />

          {/* Golden Core Nucleus - Vitality point */}
          <circle cx="24" cy="24" r="5" fill={accentColor} />
          <circle cx="24" cy="24" r="9" stroke={secondaryColor} strokeWidth="1.5" opacity="0.8" />
          
          {/* Directional Progression Node */}
          <circle cx="24" cy="6" r="2.5" fill={accentColor} />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-serif tracking-tight font-semibold uppercase ${textSizes[size]}`}
              style={{ color: primaryColor }}
            >
              AgeWell
            </span>
            <span
              className={`font-sans tracking-widest font-light uppercase text-[#D4AF37] ${
                size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-lg' : 'text-sm'
              }`}
            >
              Blueprint
            </span>
          </div>
          <span
            className={`font-sans font-medium uppercase transition-colors duration-200 ${subTextSizes[size]}`}
            style={{ color: subtextColor }}
          >
            By Denise Forner
          </span>
        </div>
      )}
    </div>
  );
};
