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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/80 border border-blue-200 text-orange-300 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            <span>1. Company Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Professionally Managed Turnkey Electrical Engineering
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Delivering uncompromised quality, safety, and operational excellence across Extra High
            Tension, High Tension, and Low Tension installations.
          </p>
        </div>

        {/* Narrative Card - Split Image Design */}
        <div className="rounded-2xl bg-white shadow-md border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
          {/* Left Side: High Quality Image */}
          <div className="w-full lg:w-5/12 min-h-[300px] lg:h-auto relative">
            <img 
              src="https://images.unsplash.com/photo-1473625247510-8ceb1760e4e7?auto=format&fit=crop&q=80" 
              alt="Substation infrastructure" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          {/* Right Side: Content */}
          <div className="w-full lg:w-7/12 p-8 sm:p-10 lg:p-12 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-blue-600" />
              End-to-End High-Voltage Electrical Contracting
            </h3>
            <p className="text-slate-600 text-base leading-relaxed">
              {COMPANY_INFO.overview}
            </p>
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">License Grade</p>
                <p className="text-sm font-bold text-slate-900 mt-1">Class-1 EHT Inspectorate</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Substation Class</p>
                <p className="text-sm font-bold text-slate-900 mt-1">110kV / 66kV / 33kV / 11kV</p>
              </div>
            </div>
          </div>
        </div>
        {/* Turnkey Execution Lifecycle (Interactive Tabs) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-extrabold text-slate-900">Turnkey Execution Lifecycle</h3>
              <p className="text-xs text-slate-500">Our 4-phase systematic project delivery workflow</p>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
              {workflowSteps.map((s, idx) => (
                <button
                  key={s.step}
                  onClick={() => setActiveWorkflowStep(idx)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                    activeWorkflowStep === idx
                      ? 'bg-orange-400 text-slate-950 shadow-lg shadow-sm'
                      : 'bg-white border border-slate-200 text-slate-500 hover:text-white'
                  }`}
                >
                  Phase {s.step}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white/60 border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-3 text-center md:text-left space-y-2">
              <span className="text-4xl font-black text-blue-600 font-mono">
                {workflowSteps[activeWorkflowStep].step}
              </span>
              <h4 className="text-lg font-bold text-slate-900">
                {workflowSteps[activeWorkflowStep].title}
              </h4>
            </div>
            <div className="md:col-span-9 space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed">
                {workflowSteps[activeWorkflowStep].desc}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {workflowSteps[activeWorkflowStep].details.map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-50 border border-blue-200 text-orange-300 text-xs font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
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
          <div className="p-8 rounded-3xl bg-white shadow-md border border-gray-100 border border-cyan-500/30 backdrop-blur-xl relative overflow-hidden space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-blue-600">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
                  8. Our Vision
                </span>
                <h3 className="text-2xl font-black text-slate-900">Strategic Vision</h3>
              </div>
            </div>
            <p className="text-slate-800 text-base leading-relaxed italic">
              "{COMPANY_INFO.vision}"
            </p>
          </div>

          {/* Mission Card */}
          <div className="p-8 rounded-3xl bg-white shadow-md border border-gray-100 border border-blue-200 backdrop-blur-xl relative overflow-hidden space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-blue-50 border border-orange-400/30 text-blue-600">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
                  9. Our Mission
                </span>
                <h3 className="text-2xl font-black text-slate-900">Core Commitments</h3>
              </div>
            </div>
            <ul className="space-y-3">
              {COMPANY_INFO.mission.map((m, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Strengths Grid (Section 3 of Prompt) */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
              3. Key Strengths
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Why Premier Clients Trust E & C Controls
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.keyStrengths.map((ks, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white shadow-md border border-gray-100 border border-slate-200 hover:border-orange-500/40 hover:bg-slate-50 border border-slate-200 shadow-sm transition group space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-orange-300 transition">
                  {ks.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">{ks.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
