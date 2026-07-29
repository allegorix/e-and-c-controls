import React from 'react';

export interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  showText?: boolean;
  variant?: 'color' | 'white' | 'black' | 'current';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  variant = 'color',
}) => {
  const heightClasses = {
    sm: 'h-8',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
    custom: '',
  };

  // Color fills based on variant
  const getFills = () => {
    switch (variant) {
      case 'white':
        return {
          symbol: '#FFFFFF',
          bolt: '#FFFFFF',
          ecText: '#FFFFFF',
          controlsText: '#FFFFFF',
        };
      case 'black':
        return {
          symbol: '#1A1A1A',
          bolt: '#1A1A1A',
          ecText: '#1A1A1A',
          controlsText: '#1A1A1A',
        };
      case 'current':
        return {
          symbol: 'currentColor',
          bolt: 'currentColor',
          ecText: 'currentColor',
          controlsText: 'currentColor',
        };
      case 'color':
      default:
        return {
          symbol: '#DCE6F8',
          bolt: '#F15A24',
          ecText: '#F15A24',
          controlsText: '#98A5F8',
        };
    }
  };

  const fills = getFills();

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
          {/* Top Bar of 'E' Symbol (Light Lavender/Ice Blue) */}
          <path
            d="M 50 20 C 30 20 18 30 18 44 H 194 L 182 20 Z"
            fill={fills.symbol}
          />

          {/* Middle Bar & Bottom Ribbon Loop of 'E' Symbol */}
          <path
            d="M 50 60 H 148 V 80 H 50 C 38 80 34 84 34 90 C 34 96 38 100 50 100 H 170 V 120 H 54 C 26 120 18 104 18 90 C 18 74 28 60 50 60 Z"
            fill={fills.symbol}
          />

          {/* Lightning Bolt (Electric Orange) */}
          <polygon
            points="204,18 162,70 238,70 196,124 226,62 174,62"
            fill={fills.bolt}
          />
        </g>

        {showText && (
          <g id="logo-text">
            {/* E&C Text */}
            <text
              x="252"
              y="78"
              fontFamily="'Montserrat', 'Arial Black', 'Impact', system-ui, -apple-system, sans-serif"
              fontWeight="900"
              fontSize="64"
              fill={fills.ecText}
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
              fill={fills.controlsText}
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

