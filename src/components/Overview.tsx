import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { ShieldCheck, Compass, Target, Users, Zap, CheckCircle2, Award, FileCode2, Clock, Sparkles } from 'lucide-react';

export const Overview: React.FC = () => {
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  const workflowSteps = [
    {
      step: '01',
      title: 'Design & Single-Line Engineering',
      desc: 'Preparation of single line diagrams (SLD), fault level calculations, HT/LT cable schedule, earthing grid design, and substation equipment layouts as per IS/IEC standards.',
      details: ['SLD & Schematic Design', 'Earth Resistance Calculations', 'Inspectorate Drawings Submission'],
    },
    {
      step: '02',
      title: 'Procurement & Erection',
      desc: 'Sourcing CPRI/NABL tested equipment, civil foundations for switchyard gantries, transformer positioning, HT VCB panels, and heavy cable laying.',
      details: ['Transformer Positioning & Oil Filling', 'Gantry & Structural Erection', 'HT/LT Panel Alignment'],
    },
    {
      step: '03',
      title: 'Testing & Diagnostics',
      desc: 'Comprehensive diagnostic checks including 5kV/10kV insulation resistance, transformer oil breakdown voltage (BDV), relay secondary injection, and micro-ohm contact resistance.',
      details: ['Transformer Oil BDV & DGA', 'Secondary Relay Injection Tests', 'Cable Hi-Pot Testing'],
    },
    {
      step: '04',
      title: 'Inspectorate Sanction & Charging',
      desc: 'Liaison with State Electrical Inspectorate, obtaining energization permits, safety audit verification, and final energized charging of substations.',
      details: ['Electrical Inspectorate Clearance', 'Safety Audit Certificate', 'Energized Grid Commissioning'],
    },
  ];

  return (
    <section id="overview" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/80 border border-orange-500/30 text-orange-300 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5 text-orange-400" />
            <span>1. Company Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Professionally Managed Turnkey Electrical Engineering
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Delivering uncompromised quality, safety, and operational excellence across Extra High
            Tension, High Tension, and Low Tension installations.
          </p>
        </div>

        {/* Narrative Card */}
        <div className="p-8 sm:p-10 rounded-3xl liquid-glass border border-orange-500/20 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-orange-400 animate-pulse" />
                End-to-End High-Voltage Electrical Contracting
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                {COMPANY_INFO.overview}
              </p>
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-3.5 rounded-xl liquid-glass border border-slate-800">
                  <p className="text-xs text-slate-400 font-medium">License Grade</p>
                  <p className="text-xs font-bold text-orange-300 mt-1">Class-1 EHT Inspectorate</p>
                </div>
                <div className="p-3.5 rounded-xl liquid-glass border border-slate-800">
                  <p className="text-xs text-slate-400 font-medium">Substation Class</p>
                  <p className="text-xs font-bold text-cyan-300 mt-1">110kV / 66kV / 33kV / 11kV</p>
                </div>
                <div className="p-3.5 rounded-xl liquid-glass border border-slate-800 col-span-2 sm:col-span-1">
                  <p className="text-xs text-slate-400 font-medium">Turnkey Scope</p>
                  <p className="text-xs font-bold text-amber-300 mt-1">Design to Charging</p>
                </div>
              </div>
            </div>

            {/* Northern Lights Quick Badge */}
            <div className="lg:col-span-4 p-6 rounded-2xl liquid-glass border border-orange-500/30 text-center space-y-4">
              <div className="mx-auto w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-400/30 flex items-center justify-center text-orange-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-orange-400 uppercase tracking-wider">
                  Operational Philosophy
                </p>
                <p className="text-lg font-extrabold text-white mt-1">Quality • Safety • On-Time</p>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Adhering to strict IS standards, CEA safety norms, and zero-downtime commissioning
                practices for state utilities and top industrial leaders.
              </p>
            </div>
          </div>
        </div>

        {/* Turnkey Execution Lifecycle (Interactive Tabs) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-extrabold text-white">Turnkey Execution Lifecycle</h3>
              <p className="text-xs text-slate-400">Our 4-phase systematic project delivery workflow</p>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
              {workflowSteps.map((s, idx) => (
                <button
                  key={s.step}
                  onClick={() => setActiveWorkflowStep(idx)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                    activeWorkflowStep === idx
                      ? 'bg-orange-400 text-slate-950 shadow-lg shadow-orange-500/20'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  Phase {s.step}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-3 text-center md:text-left space-y-2">
              <span className="text-4xl font-black text-orange-400 font-mono">
                {workflowSteps[activeWorkflowStep].step}
              </span>
              <h4 className="text-lg font-bold text-white">
                {workflowSteps[activeWorkflowStep].title}
              </h4>
            </div>
            <div className="md:col-span-9 space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                {workflowSteps[activeWorkflowStep].desc}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {workflowSteps[activeWorkflowStep].details.map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950 border border-orange-500/30 text-orange-300 text-xs font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Vision Card */}
          <div className="p-8 rounded-3xl liquid-glass border border-cyan-500/30 backdrop-blur-xl relative overflow-hidden space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
                  8. Our Vision
                </span>
                <h3 className="text-2xl font-black text-white">Strategic Vision</h3>
              </div>
            </div>
            <p className="text-slate-200 text-base leading-relaxed italic">
              "{COMPANY_INFO.vision}"
            </p>
          </div>

          {/* Mission Card */}
          <div className="p-8 rounded-3xl liquid-glass border border-orange-500/30 backdrop-blur-xl relative overflow-hidden space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-orange-500/10 border border-orange-400/30 text-orange-400">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-orange-400 uppercase tracking-widest">
                  9. Our Mission
                </span>
                <h3 className="text-2xl font-black text-white">Core Commitments</h3>
              </div>
            </div>
            <ul className="space-y-3">
              {COMPANY_INFO.mission.map((m, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Strengths Grid (Section 3 of Prompt) */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">
              3. Key Strengths
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why Premier Clients Trust E & C Controls
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.keyStrengths.map((ks, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl liquid-glass border border-slate-800 hover:border-orange-500/40 hover:bg-white/5 transition group space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-orange-300 transition">
                  {ks.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">{ks.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
