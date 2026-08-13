import React, { useState, useEffect } from 'react';
import { Zap, ShieldCheck, Phone, Calculator, Menu, X, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenEstimator: () => void;
  onOpenBrochure: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimator, onOpenBrochure }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Major Projects', href: '#projects' },
    { name: 'Infrastructure & Tools', href: '#infrastructure' },
    { name: 'Quality & Safety', href: '#quality' },
    { name: 'Cost Estimator', href: '#estimator' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-50/90 backdrop-blur-xl border-b border-orange-500/20 py-3 shadow-2xl shadow-slate-950/80'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" id="brand-logo" className="flex items-center gap-2 group">
            <Logo size="md" className="group-hover:scale-105 transition-transform duration-300" />
            <span className="hidden xl:inline-block px-1.5 py-0.5 text-[10px] font-bold uppercase rounded bg-orange-950/80 text-orange-300 border border-blue-200">
              Class 1
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-xs font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-lg hover:text-orange-300 hover:bg-white/60 transition"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBrochure}
              id="btn-brochure-nav"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-600 bg-white/80 border border-slate-200/60 hover:border-orange-500/40 hover:text-slate-900 transition"
            >
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              <span>Brochure</span>
            </button>

            <button
              onClick={onOpenEstimator}
              id="btn-estimator-nav"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 shadow-lg shadow-sm hover:brightness-110 hover:shadow-orange-500/30 transition active:scale-95"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Request Turnkey Quote</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            className="lg:hidden p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-50/98 border-b border-orange-500/20 px-4 py-6 space-y-3 animate-in fade-in slide-in-from-top-4">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:text-orange-300 hover:bg-white"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-200 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrochure();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-slate-800 bg-white border border-slate-200"
            >
              <FileText className="w-4 h-4 text-blue-600" />
              <span>Company Profile Summary</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-orange-400 to-amber-400 shadow-md"
            >
              <Calculator className="w-4 h-4" />
              <span>Turnkey Quote Estimator</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
