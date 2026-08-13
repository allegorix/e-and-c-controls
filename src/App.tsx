import React, { useState } from 'react';
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
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 relative font-sans selection:bg-blue-600 selection:text-white">
      {/* Foreground Website Content */}
      <div className="relative z-10">
        {/* Full-Viewport Hero Section */}
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
