import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showText = true }) => {
  const heightClasses = {
    sm: 'h-8',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
    custom: '',
  };

  return (
    <div className={`inline-flex items-center ${heightClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 540 140"
        className="h-full w-auto max-w-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Symbol Group */}
        <g id="logo-mark">
          {/* Left E Symbol (Light Blue) */}
          <path d="M 60 18 C 36 18 20 34 20 60 H 182 L 196 18 Z" fill="#DCE6F8" />
          <rect x="20" y="58" width="132" height="24" rx="4" fill="#DCE6F8" />
          <path d="M 20 80 H 184 V 122 H 60 C 36 122 20 106 20 80 Z" fill="#DCE6F8" />
          <path d="M 60 18 C 32 18 18 36 18 70 C 18 104 32 122 60 122 H 44 C 26 122 18 104 18 70 C 18 36 26 18 44 18 Z" fill="#DCE6F8" />

          {/* Lightning Bolt (Orange) */}
          <polygon points="198,18 156,70 232,70 192,124 222,62 170,62" fill="#F15A24" />
        </g>

        {showText && (
          <g id="logo-text">
            {/* E&C Text */}
            <text
              x="252"
              y="78"
              fontFamily="'Arial Black', 'Impact', 'Montserrat', system-ui, -apple-system, sans-serif"
              fontWeight="900"
              fontSize="64"
              fill="#F15A24"
              letterSpacing="-1.5"
            >
              E&amp;C
            </text>

            {/* CONTROLS Text */}
            <text
              x="254"
              y="112"
              fontFamily="'Segoe UI', 'Roboto', 'Helvetica Neue', system-ui, sans-serif"
              fontWeight="800"
              fontSize="27"
              fill="#98A5F8"
              letterSpacing="4"
            >
              CONTROLS
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
