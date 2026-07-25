import React, { useState } from 'react';
import { AuroraSettings } from './types';
import { NorthernLightsCanvas } from './components/NorthernLightsCanvas';
import { CinematicHeroSection } from './components/CinematicHeroSection';
import { Overview } from './components/Overview';
import { SubstationDiagram } from './components/SubstationDiagram';
import { Expertise } from './components/Expertise';
import { Projects } from './components/Projects';
import { Infrastructure } from './components/Infrastructure';
import { QualitySafety } from './components/QualitySafety';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EstimatorModal } from './components/EstimatorModal';
import { BrochureModal } from './components/BrochureModal';

export default function App() {
  const [auroraSettings, setAuroraSettings] = useState<AuroraSettings>({
    theme: 'emerald',
    speed: 1.0,
    waveCount: 3,
    sparkIntensity: 2,
    interactiveGlow: true,
  });

  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  const handleUpdateSettings = (newSettings: Partial<AuroraSettings>) => {
    setAuroraSettings((prev) => ({ ...prev, ...newSettings }));
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 relative font-sans selection:bg-orange-500 selection:text-slate-950">
      {/* Dynamic Northern Lights Motion Graphic Canvas */}
      <NorthernLightsCanvas settings={auroraSettings} />

      {/* Foreground Website Content */}
      <div className="relative z-10">
        {/* Full-Viewport Cinematic Hero with Looping Video & Liquid Glass Controls */}
        <CinematicHeroSection
          onOpenEstimator={() => setIsEstimatorOpen(true)}
          onOpenBrochure={() => setIsBrochureOpen(true)}
        />

        <main>
          <Overview />
          <SubstationDiagram />
          <Expertise />
          <Projects />
          <Infrastructure />
          <QualitySafety />
          <ContactSection />
        </main>

        <Footer />
      </div>

      {/* Interactive Modals */}
      <EstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
      />

      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />
    </div>
  );
}
