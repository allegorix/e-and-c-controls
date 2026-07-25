import React, { useEffect, useRef } from 'react';
import { AuroraSettings } from '../types';

interface NorthernLightsCanvasProps {
  settings: AuroraSettings;
}

export const NorthernLightsCanvas: React.FC<NorthernLightsCanvasProps> = ({ settings }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean; radius: number }>({
    x: -1000,
    y: -1000,
    active: false,
    radius: 200,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Resize Handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse handlers
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
        mouseRef.current.active = true;
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Color Palettes
    const getThemeColors = () => {
      switch (settings.theme) {
        case 'violet':
          return {
            bg: ['#090514', '#110a26', '#030108'],
            aurora: [
              ['rgba(168, 85, 247, 0.45)', 'rgba(236, 72, 153, 0.25)', 'rgba(6, 182, 212, 0)'],
              ['rgba(192, 132, 252, 0.5)', 'rgba(129, 140, 248, 0.3)', 'rgba(15, 23, 42, 0)'],
              ['rgba(236, 72, 153, 0.4)', 'rgba(168, 85, 247, 0.2)', 'rgba(2, 6, 23, 0)'],
            ],
            sparks: '#f472b6',
            arcs: 'rgba(216, 180, 254, ',
          };
        case 'arctic':
          return {
            bg: ['#03101c', '#082338', '#010811'],
            aurora: [
              ['rgba(56, 189, 248, 0.5)', 'rgba(16, 185, 129, 0.3)', 'rgba(3, 16, 28, 0)'],
              ['rgba(14, 165, 233, 0.45)', 'rgba(99, 102, 241, 0.25)', 'rgba(2, 6, 23, 0)'],
              ['rgba(52, 211, 153, 0.4)', 'rgba(56, 189, 248, 0.2)', 'rgba(3, 10, 18, 0)'],
            ],
            sparks: '#38bdf8',
            arcs: 'rgba(125, 211, 252, ',
          };
        case 'solar':
          return {
            bg: ['#170c02', '#2d1804', '#0a0501'],
            aurora: [
              ['rgba(251, 191, 36, 0.5)', 'rgba(239, 68, 68, 0.3)', 'rgba(23, 12, 2, 0)'],
              ['rgba(132, 204, 22, 0.45)', 'rgba(245, 158, 11, 0.25)', 'rgba(10, 5, 1, 0)'],
              ['rgba(249, 115, 22, 0.4)', 'rgba(234, 179, 8, 0.2)', 'rgba(23, 12, 2, 0)'],
            ],
            sparks: '#fde047',
            arcs: 'rgba(253, 224, 71, ',
          };
        case 'emerald':
        default:
          return {
            bg: ['#170b02', '#2a1204', '#0d0501'],
            aurora: [
              ['rgba(241, 90, 36, 0.5)', 'rgba(245, 158, 11, 0.3)', 'rgba(23, 11, 2, 0)'],
              ['rgba(255, 138, 0, 0.55)', 'rgba(217, 119, 6, 0.35)', 'rgba(13, 5, 1, 0)'],
              ['rgba(251, 146, 60, 0.45)', 'rgba(241, 90, 36, 0.25)', 'rgba(26, 10, 3, 0)'],
            ],
            sparks: '#f97316',
            arcs: 'rgba(251, 146, 60, ',
          };
      }
    };

    // Spark Particles
    const sparkCount = Math.min(80, Math.floor((width * height) / 18000));
    const sparks = Array.from({ length: sparkCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.8,
      speedY: -(Math.random() * 0.4 + 0.1),
      speedX: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.8 + 0.2,
      pulseSpeed: Math.random() * 0.03 + 0.01,
    }));

    let time = 0;

    // Main Render Loop
    const render = () => {
      time += 0.008 * settings.speed;
      const palette = getThemeColors();

      // Clear & Draw Midnight Sky Gradient Background
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, palette.bg[0]);
      bgGrad.addColorStop(0.5, palette.bg[1]);
      bgGrad.addColorStop(1, palette.bg[2]);
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw Aurora Waves
      const wavesCount = Math.min(4, Math.max(2, settings.waveCount));
      for (let w = 0; w < wavesCount; w++) {
        const colors = palette.aurora[w % palette.aurora.length];
        const waveYBase = height * (0.15 + w * 0.18);

        ctx.beginPath();
        ctx.moveTo(0, height);

        const step = Math.max(12, Math.floor(width / 80));
        for (let x = 0; x <= width + step; x += step) {
          // Multi-harmonic sine equation for natural liquid flow
          const sine1 = Math.sin(x * 0.002 + time * 1.2 + w * 1.5) * (height * 0.12);
          const sine2 = Math.cos(x * 0.005 - time * 0.8 + w * 0.7) * (height * 0.06);
          const sine3 = Math.sin(x * 0.0012 + time * 0.4) * (height * 0.08);

          let y = waveYBase + sine1 + sine2 + sine3;

          // Mouse Distortion Interaction
          if (mouseRef.current.active) {
            const dx = x - mouseRef.current.x;
            const dy = y - mouseRef.current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouseRef.current.radius) {
              const factor = (1 - dist / mouseRef.current.radius) * 60;
              y -= factor * (dy > 0 ? 1 : -1);
            }
          }

          if (x === 0) {
            ctx.lineTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        // Fill Aurora Wave Gradient
        const waveGrad = ctx.createLinearGradient(0, waveYBase - 100, 0, height);
        waveGrad.addColorStop(0, colors[0]);
        waveGrad.addColorStop(0.4, colors[1]);
        waveGrad.addColorStop(1, colors[2]);

        ctx.fillStyle = waveGrad;
        ctx.fill();
      }

      // Draw Spark Nodes & Electrical Grid
      ctx.fillStyle = palette.sparks;
      sparks.forEach((sp, idx) => {
        sp.y += sp.speedY * settings.speed;
        sp.x += sp.speedX * settings.speed;
        sp.alpha += Math.sin(time * 5 + idx) * sp.pulseSpeed;

        if (sp.y < -10) sp.y = height + 10;
        if (sp.x < -10) sp.x = width + 10;
        if (sp.x > width + 10) sp.x = -10;

        const currentAlpha = Math.max(0.1, Math.min(1, sp.alpha));
        ctx.globalAlpha = currentAlpha;
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, sp.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw Spark Glow Ring
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, sp.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = palette.sparks;
        ctx.globalAlpha = currentAlpha * 0.15;
        ctx.fill();

        // Connect nearby sparks with subtle electrical arcs
        if (settings.sparkIntensity > 1) {
          for (let j = idx + 1; j < sparks.length; j++) {
            const sp2 = sparks[j];
            const dx = sp.x - sp2.x;
            const dy = sp.y - sp2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 100) {
              ctx.beginPath();
              ctx.moveTo(sp.x, sp.y);
              // Slight random jitter for electrical feel
              const midX = (sp.x + sp2.x) / 2 + (Math.random() - 0.5) * 4;
              const midY = (sp.y + sp2.y) / 2 + (Math.random() - 0.5) * 4;
              ctx.lineTo(midX, midY);
              ctx.lineTo(sp2.x, sp2.y);
              ctx.strokeStyle = `${palette.arcs}${(1 - dist / 100) * 0.25})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
      });

      // Draw Mouse Cursor Energy Field
      if (mouseRef.current.active && settings.interactiveGlow) {
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;

        const mouseGlow = ctx.createRadialGradient(mx, my, 0, mx, my, 180);
        mouseGlow.addColorStop(0, `${palette.arcs}0.35)`);
        mouseGlow.addColorStop(0.5, `${palette.arcs}0.1)`);
        mouseGlow.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.globalAlpha = 1;
        ctx.fillStyle = mouseGlow;
        ctx.beginPath();
        ctx.arc(mx, my, 180, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [settings]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full transition-opacity duration-700"
      style={{ opacity: 0.95 }}
    />
  );
};
