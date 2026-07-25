import React, { useState } from 'react';
import { INFRASTRUCTURE_TOOLS } from '../data/companyData';
import { ShieldCheck, Wrench, Gauge, Cpu, CheckCircle2, Zap } from 'lucide-react';

export const Infrastructure: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('All');

  const categories = ['All', 'Cable Laying', 'Transformer Handling', 'Testing Instruments', 'Safety Equipment'];

  const filteredTools = INFRASTRUCTURE_TOOLS.filter(
    (t) => selectedTab === 'All' || t.category === selectedTab
  );

  return (
    <section id="infrastructure" className="py-20 bg-slate-950/60 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/80 border border-orange-500/30 text-orange-300 text-xs font-semibold">
            <Wrench className="w-3.5 h-3.5 text-orange-400" />
            <span>4. Machinery, Tools & Testing Instruments</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            High-Voltage Field Equipment & Vault
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Equipped with state-of-the-art diagnostic testing instruments, heavy transformer oil
            plants, and certified high-voltage safety gear for seamless project execution.
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                selectedTab === cat
                  ? 'bg-orange-400 text-slate-950 shadow-lg shadow-orange-500/20 font-bold'
                  : 'liquid-glass border border-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Equipment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="p-6 rounded-2xl liquid-glass border border-slate-800 hover:border-orange-500/40 hover:bg-white/5 transition-all duration-300 flex flex-col justify-between group shadow-xl space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-950 text-orange-400 border border-orange-500/30">
                    {tool.category}
                  </span>
                  {tool.isComplianceRequired && (
                    <span className="flex items-center gap-1 text-[10px] text-cyan-400 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      NABL / IS Calibrated
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-orange-300 transition">
                  {tool.name}
                </h3>

                <div className="p-3 rounded-xl liquid-glass border border-slate-800 text-xs space-y-1">
                  <p className="font-semibold text-slate-400 uppercase text-[10px]">Technical Spec:</p>
                  <p className="text-slate-200 font-mono text-[11px]">{tool.specifications}</p>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">{tool.purpose}</p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span>Status: Site Ready</span>
                <span className="text-orange-400 font-mono">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
