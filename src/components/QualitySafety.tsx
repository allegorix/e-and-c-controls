import React, { useState } from 'react';
import { QUALITY_SAFETY_RULES } from '../data/companyData';
import { ShieldAlert, CheckSquare, ShieldCheck, Zap, AlertTriangle, FileCheck, Lock } from 'lucide-react';

export const QualitySafety: React.FC = () => {
  const [activeChecklist, setActiveChecklist] = useState<Record<string, boolean>>({
    ptw: true,
    loto: true,
    megger: true,
    earth: true,
    oilBdv: true,
    ppe: true,
  });

  const toggleCheck = (key: string) => {
    setActiveChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const checklistItems = [
    { key: 'ptw', label: 'Permit To Work (PTW) Issued by High-Voltage Safety Officer' },
    { key: 'loto', label: 'Lock-Out Tag-Out (LOTO) Interlocks Enforced on Isolators' },
    { key: 'megger', label: '5kV Megger Dielectric Insulation Test Logged (> 100 MΩ)' },
    { key: 'earth', label: 'Earthing Resistance Verification (< 1.0 Ohm Target)' },
    { key: 'oilBdv', label: 'Transformer Oil BDV Test Approved (> 60kV)' },
    { key: 'ppe', label: 'Class-E Insulated Gloves, Arc Suits & Discharge Rods Deployed' },
  ];

  const totalChecked = Object.values(activeChecklist).filter(Boolean).length;

  return (
    <section id="quality" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/80 border border-orange-500/30 text-orange-300 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
            <span>7. Quality Assurance & Zero-Accident Safety</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Strict Standards & High-Voltage Compliance
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Zero-accident safety culture and strict adherence to IS standards, Central Electricity
            Authority regulations, and state electrical inspectorate protocols.
          </p>
        </div>

        {/* 2 Column Layout: Quality Protocols & Interactive Safety Audit Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Core Quality Protocols */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Core Quality & Safety Directives</h3>

            {QUALITY_SAFETY_RULES.map((rule, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl liquid-glass border border-slate-800 hover:border-orange-500/30 transition space-y-2"
              >
                <div className="flex items-center gap-2 text-orange-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>{rule.title}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-6">{rule.details}</p>
              </div>
            ))}
          </div>

          {/* Column 2: Interactive High-Voltage Pre-Energization Safety Audit */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl liquid-glass border border-orange-500/30 backdrop-blur-xl shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                  Site Audit Checklist
                </span>
                <h4 className="text-lg font-bold text-white">Pre-Energization Protocol</h4>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-orange-400 font-mono">
                  {totalChecked} / 6
                </span>
                <p className="text-[10px] text-slate-400">Verified</p>
              </div>
            </div>

            <p className="text-xs text-slate-300">
              Interactive high-voltage safety clearance checklist executed by our site engineers
              prior to charging any substation:
            </p>

            <div className="space-y-2.5">
              {checklistItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => toggleCheck(item.key)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition text-xs font-medium ${
                    activeChecklist[item.key]
                      ? 'bg-slate-950 border-orange-500/50 text-orange-300'
                      : 'bg-slate-950/40 border-slate-800 text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <span className="pr-2">{item.label}</span>
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center shrink-0 border ${
                      activeChecklist[item.key]
                        ? 'bg-orange-400 border-orange-400 text-slate-950'
                        : 'border-slate-700 bg-slate-900'
                    }`}
                  >
                    {activeChecklist[item.key] && <CheckSquare className="w-3.5 h-3.5" />}
                  </div>
                </button>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-orange-950/50 border border-orange-500/30 flex items-center gap-3">
              <Lock className="w-5 h-5 text-orange-400 shrink-0" />
              <div className="text-xs text-orange-200">
                <p className="font-bold">Inspectorate Sanction Status:</p>
                <p className="text-[11px] text-orange-300/80">
                  {totalChecked === 6
                    ? '100% Safety Verified — Cleared for Grid Energization'
                    : 'Pending Complete Clearance Verification'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
