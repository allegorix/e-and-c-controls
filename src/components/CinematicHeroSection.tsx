import React, { useState, useRef } from 'react';
import { Logo } from './Logo';
import {
  Star,
  Clock,
  Calendar,
  Play,
  Search,
  User,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Zap,
  CheckCircle2,
  FileText
} from 'lucide-react';

interface CinematicHeroSectionProps {
  onOpenEstimator: () => void;
  onOpenBrochure: () => void;
}

const CINEMATIC_SLIDES = [
  {
    id: 1,
    rating: "8.7/10 IMDB",
    subRating: "Class-1 Licensed • EHT Grade",
    duration: "132 min",
    date: "April, 2025",
    title: "Step Through. Work Smarter.",
    description: "A voyage through forgotten realms, where past and future intertwine.",
    videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4",
  },
  {
    id: 2,
    rating: "9.9/10 Safety",
    subRating: "110kV / 66kV / 33kV Switchyards",
    duration: "Turnkey",
    date: "Established 2008",
    title: "Powering High-Voltage Infrastructure.",
    description: "Complete turnkey electrical engineering, EHT substation installation, and inspectorate charging.",
    videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4",
  },
  {
    id: 3,
    rating: "100% IS Compliant",
    subRating: "PLC, SCADA & Power Distribution",
    duration: "ISO 9001",
    date: "Kerala Inspectorate",
    title: "Industrial Automation & Controls.",
    description: "Precision control panels, automated SCADA systems, heavy HT/LT cable laying, and sub-station testing.",
    videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4",
  }
];

export const CinematicHeroSection: React.FC<CinematicHeroSectionProps> = ({
  onOpenEstimator,
  onOpenBrochure,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const currentSlide = CINEMATIC_SLIDES[currentSlideIndex];

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % CINEMATIC_SLIDES.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + CINEMATIC_SLIDES.length) % CINEMATIC_SLIDES.length);
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

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
    <div className="relative min-h-screen h-screen w-full flex flex-col justify-between overflow-hidden bg-black text-white font-sans">
      {/* 1. BACKGROUND VIDEO (Fixed, Loop, Muted, Autoplay, z-0) */}
      <video
        ref={videoRef}
        src={currentSlide.videoUrl}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {/* 2. BOTTOM BLUR OVERLAY (No gradient darkening, pure backdrop-blur-xl with mask) */}
      <div
        className="fixed inset-0 backdrop-blur-xl bottom-blur-overlay pointer-events-none z-1"
        style={{
          WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 45%)',
          maskImage: 'linear-gradient(to top, black 0%, transparent 45%)',
        }}
      />

      {/* Audio toggle button removed as requested */}

      {/* 3. NAVBAR (z-index 50) */}
      <header className="relative z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 md:py-6">
        {/* Left Logo */}
        <div
          className="flex items-center animate-blur-fade-up"
          style={{ animationDelay: '0ms' }}
        >
          <a href="#" className="flex items-center gap-2 group transition transform hover:scale-105">
            <Logo size="md" />
          </a>
        </div>

        {/* Center Nav Links (Desktop LG only) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, idx) => {
            const delay = 100 + idx * 50;

            return (
              <a
                key={link.label}
                href={`#${link.target}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.target);
                }}
                className="text-sm text-gray-200 hover:text-gray-300 transition-colors animate-blur-fade-up font-medium"
                style={{ animationDelay: `${delay}ms` }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Search Button (sm and up) */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="hidden sm:flex items-center gap-2 rounded-full liquid-glass px-4 md:px-6 py-2 text-sm text-white font-medium hover:bg-white/10 transition animate-blur-fade-up"
            style={{ animationDelay: '350ms' }}
          >
            <Search className="w-4 h-4 text-orange-400" />
            <span>Search</span>
          </button>

          {/* User Profile Circle (sm and up) */}
          <button
            onClick={onOpenBrochure}
            className="hidden sm:flex w-10 h-10 rounded-full liquid-glass items-center justify-center text-white hover:bg-white/10 transition animate-blur-fade-up"
            style={{ animationDelay: '400ms' }}
            title="E & C Controls Corporate Profile"
          >
            <User className="w-4 h-4 text-cyan-300" />
          </button>

          {/* Hamburger Menu Toggle (below lg) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-white hover:bg-white/10 transition animate-blur-fade-up relative overflow-hidden"
            style={{ animationDelay: '350ms' }}
            aria-label="Toggle Navigation Menu"
          >
            <div
              className={`transition-all duration-500 ease-out transform ${
                isMobileMenuOpen ? 'rotate-180 opacity-0 scale-50 absolute' : 'rotate-0 opacity-100 scale-100'
              }`}
            >
              <Menu className="w-5 h-5 text-white" />
            </div>
            <div
              className={`transition-all duration-500 ease-out transform ${
                isMobileMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-180 opacity-0 scale-50 absolute'
              }`}
            >
              <X className="w-5 h-5 text-white" />
            </div>
          </button>
        </div>
      </header>

      {/* Quick Search Bar Dropdown Overlay */}
      {isSearchOpen && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-xl z-50 p-4 rounded-2xl bg-slate-900/95 border border-orange-500/30 backdrop-blur-2xl shadow-2xl animate-in fade-in slide-in-from-top-4">
          <div className="flex items-center gap-3 bg-slate-950 px-4 py-3 rounded-xl border border-slate-800">
            <Search className="w-5 h-5 text-orange-400 shrink-0" />
            <input
              type="text"
              placeholder="Search major projects, 110kV substations, SCADA, or ISO certifications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent w-full text-sm text-white focus:outline-none placeholder:text-slate-500"
              autoFocus
            />
            <button
              onClick={() => setIsSearchOpen(false)}
              className="text-xs text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          {searchQuery && (
            <div className="mt-3 space-y-2 text-xs text-slate-300 max-h-48 overflow-y-auto">
              <p className="font-semibold text-orange-400 uppercase text-[10px] tracking-wider px-1">Search Results for "{searchQuery}"</p>
              <a href="#projects" onClick={() => setIsSearchOpen(false)} className="block p-2 rounded hover:bg-slate-800/80 transition">
                ⚡ 110kV Substation Turnkey Electrification
              </a>
              <a href="#expertise" onClick={() => setIsSearchOpen(false)} className="block p-2 rounded hover:bg-slate-800/80 transition">
                ⚙️ PLC, SCADA & Industrial Control Panels
              </a>
              <a href="#infrastructure" onClick={() => setIsSearchOpen(false)} className="block p-2 rounded hover:bg-slate-800/80 transition">
                📜 Class-1 EHT Inspectorate License Details
              </a>
            </div>
          )}
        </div>
      )}

      {/* 4. MOBILE DROPDOWN MENU (below lg breakpoint) */}
      <div
        className={`absolute top-[72px] left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-lg border-t border-b border-gray-800 shadow-2xl px-6 py-6 transition-all duration-500 ease-out ${
          isMobileMenuOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link, idx) => {
            return (
              <a
                key={link.label}
                href={`#${link.target}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.target);
                }}
                className="py-3 px-3 rounded-lg hover:bg-gray-800/50 text-base text-gray-200 hover:text-white font-medium transition transform hover:translate-x-1"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Below sm search/profile section */}
        <div className="sm:hidden mt-6 pt-6 border-t border-gray-800 flex items-center justify-between gap-4">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsSearchOpen(true);
            }}
            className="flex-1 rounded-full liquid-glass py-2.5 px-4 text-sm font-medium text-white flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4 text-orange-400" />
            <span>Search</span>
          </button>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenBrochure();
            }}
            className="rounded-full liquid-glass p-2.5 text-white flex items-center justify-center"
          >
            <User className="w-4 h-4 text-cyan-300" />
          </button>
        </div>
      </div>


    </div>
  );
};
