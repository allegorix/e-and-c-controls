import React, { useState } from 'react';
import { Logo } from './Logo';
import { Search, User, Menu, X, ChevronRight, CheckCircle2 } from 'lucide-react';
import bgImage from '../assets/bg-technology.jpg';

interface HeroSectionProps {
  onOpenEstimator: () => void;
  onOpenBrochure: () => void;
}

export const CinematicHeroSection: React.FC<HeroSectionProps> = ({
  onOpenEstimator,
  onOpenBrochure,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { label: "Overview", target: "overview" },
    { label: "Substation Diagram", target: "diagram" },
    { label: "Expertise", target: "expertise" },
    { label: "Projects", target: "projects" },
    { label: "Contact Us", target: "contact" },
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen h-screen w-full flex flex-col bg-slate-50 font-sans">
      
      {/* NAVBAR */}
      <header className="relative z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 bg-white shadow-sm border-b border-gray-100">
        {/* Left Logo */}
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-2">
            <Logo size="md" />
          </a>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={`#${link.target}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.target);
              }}
              className="text-sm text-slate-700 hover:text-blue-600 font-semibold transition-colors uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm text-slate-600 font-medium hover:text-blue-600 transition"
          >
            <Search className="w-5 h-5" />
            <span>Search</span>
          </button>

          <button
            onClick={onOpenBrochure}
            className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition shadow-md"
            title="E & C Controls Corporate Profile"
          >
            <User className="w-4 h-4" />
            <span>Profile</span>
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-slate-800 hover:text-blue-600 transition"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Quick Search Bar */}
      {isSearchOpen && (
        <div className="absolute top-[80px] left-0 w-full z-40 bg-white border-b border-gray-200 shadow-md p-4 flex justify-center animate-in fade-in slide-in-from-top-2">
          <div className="w-full max-w-3xl flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-md border border-gray-300">
            <Search className="w-5 h-5 text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Search services, projects, or certifications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent w-full text-sm text-slate-800 focus:outline-none placeholder:text-gray-400"
              autoFocus
            />
            <button onClick={() => setIsSearchOpen(false)} className="text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* MOBILE DROPDOWN MENU */}
      {isMobileMenuOpen && (
        <div className="absolute top-[72px] left-0 w-full z-40 bg-white border-b border-gray-200 shadow-xl px-6 py-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={`#${link.target}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.target);
                }}
                className="py-3 px-2 border-b border-gray-100 last:border-0 text-slate-700 hover:text-blue-600 font-semibold uppercase tracking-wide text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* HERO CONTENT */}
      <div className="relative flex-1 flex flex-col items-center justify-center pt-10">
        {/* Background Image with Corporate Blue Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={bgImage} alt="Engineering Infrastructure" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-blue-950/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 text-center md:text-left flex flex-col md:flex-row items-center md:items-end justify-between gap-12 pb-20">
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200 text-xs font-bold uppercase tracking-wider mb-6">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              Class-1 EHT Grade & ISO 9001 Certified
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Powering High-Voltage <br className="hidden md:block" />
              <span className="text-yellow-400">Infrastructure.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 font-medium mb-10 max-w-2xl leading-relaxed">
              Complete turnkey electrical engineering, EHT substation installation, PLC & SCADA industrial automation, and inspectorate charging across India.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center md:justify-start justify-center gap-4">
              <button
                onClick={onOpenEstimator}
                className="w-full sm:w-auto px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold rounded-md shadow-lg transition flex items-center justify-center gap-2"
              >
                Request a Quote
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('expertise')}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-md transition flex items-center justify-center"
              >
                Explore Capabilities
              </button>
            </div>
          </div>
          
          {/* Quick Stats / Corporate Trust Badges */}
          <div className="hidden lg:flex flex-col gap-6 text-right pb-4">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg w-64 text-left">
              <h3 className="text-3xl font-black text-yellow-400 mb-1">16+</h3>
              <p className="text-sm font-semibold text-blue-100 uppercase tracking-wide">Years of Excellence</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg w-64 text-left">
              <h3 className="text-3xl font-black text-yellow-400 mb-1">Turnkey</h3>
              <p className="text-sm font-semibold text-blue-100 uppercase tracking-wide">Substation Solutions</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
