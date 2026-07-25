import React from 'react';
import { Zap, ShieldCheck, ArrowRight, Award, CheckCircle2, Activity, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimator }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow overlay */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[250px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Top Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-orange-500/40 text-orange-300 text-xs font-semibold backdrop-blur-md shadow-lg shadow-orange-950/40 animate-in fade-in slide-in-from-top-3">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400"></span>
            </span>
            <span className="tracking-wide uppercase text-[11px]">
              EHT Class-1 Licensed Electrical Contracting Firm
            </span>
            <span className="w-1 h-1 rounded-full bg-orange-500/50" />
            <span className="text-amber-300 font-mono">110kV / 66kV / 33kV / 11kV</span>
          </div>

          {/* Main Display Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
            Powering High-Voltage{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 drop-shadow-sm">
              Infrastructure
            </span>{' '}
            With Precision.
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            Specializing in Extra High Tension (EHT) Substations, High & Low Tension (HT/LT)
            installations, heavy industrial electrification, and turnkey infrastructure projects from
            design to final inspectorate charging.
          </p>

          {/* Key Feature Bullets */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-slate-300 pt-2">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-orange-400" />
              <span>Turnkey EHT Substations</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-orange-400" />
              <span>Transformer Testing & Commissioning</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-orange-400" />
              <span>IS & CEA Safety Norms</span>
            </div>
          </div>

          {/* Hero Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenEstimator}
              id="btn-hero-quote"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] transition active:scale-95 flex items-center justify-center gap-2 group"
            >
              <Zap className="w-4 h-4 fill-slate-950" />
              <span>Request Turnkey Project Estimate</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#projects"
              id="btn-hero-projects"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900/80 border border-slate-700/80 text-slate-200 hover:text-white hover:border-orange-500/50 hover:bg-slate-800/80 font-bold text-sm backdrop-blur-md transition flex items-center justify-center gap-2"
            >
              <span>Explore Executed Major Projects</span>
            </a>
          </div>
        </div>

        {/* Hero Metrics Showcase Grid */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-orange-500/20 backdrop-blur-xl relative overflow-hidden group hover:border-orange-500/40 transition">
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center gap-2 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Award className="w-4 h-4" />
              <span>Executed Value</span>
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              ₹2,031+ <span className="text-base font-bold text-orange-400">Lakhs</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Major industrial, press, hospital & govt projects
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-orange-500/20 backdrop-blur-xl relative overflow-hidden group hover:border-orange-500/40 transition">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Zap className="w-4 h-4" />
              <span>Substation Capacity</span>
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              110 <span className="text-base font-bold text-cyan-400">kV</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              110kV / 66kV / 33kV / 11kV turnkey EHT switchyards
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-orange-500/20 backdrop-blur-xl relative overflow-hidden group hover:border-orange-500/40 transition">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Safety & Statutory</span>
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              100% <span className="text-base font-bold text-amber-400">IS / CEA</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Strict Electrical Inspectorate compliance & safety
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-orange-500/20 backdrop-blur-xl relative overflow-hidden group hover:border-orange-500/40 transition">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Activity className="w-4 h-4" />
              <span>Turnkey Solutions</span>
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              End-to-End
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Design, Erection, Testing, Commissioning & AMC
            </p>
          </div>
        </div>
      </div>

      {/* Down Chevron Anchor */}
      <div className="mt-12 text-center">
        <a
          href="#overview"
          id="scroll-to-overview"
          className="inline-flex items-center justify-center p-2 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-orange-300 hover:border-orange-500/40 transition animate-bounce"
        >
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
