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
          {/* Left E Symbol (Light Lavender-Blue) */}
          <path
            d="M 54 20 C 28 20 18 36 18 54 L 18 86 C 18 104 28 120 54 120 H 170 V 96 H 54 C 42 96 36 90 36 80 L 36 74 H 148 V 60 H 36 L 36 54 C 36 44 42 38 54 38 H 182 L 194 20 Z"
            fill="#DCE6F8"
          />

          {/* Lightning Bolt (Electric Orange) */}
          <polygon points="204,18 162,70 238,70 196,124 226,62 174,62" fill="#F15A24" />
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
