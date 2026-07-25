import React, { useState } from 'react';
import { Zap, ArrowRight, ShieldCheck, Cpu, Box, Grid, Factory, Building, CheckCircle2 } from 'lucide-react';

export const SubstationDiagram: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      id: 0,
      name: 'EHT Grid Supply',
      voltage: '110kV / 66kV',
      icon: <Zap className="w-5 h-5 text-orange-400" />,
      desc: 'Utility transmission lines enter outdoor switchyard gantries equipped with SF6 circuit breakers & lightning arresters.',
      components: ['110kV Isolators', 'SF6 Breakers', 'Surge Arresters', 'CT / PT Metering'],
    },
    {
      id: 1,
      name: 'Primary Step-Down',
      voltage: '33kV / 11kV',
      icon: <Box className="w-5 h-5 text-cyan-400" />,
      desc: 'Power Transformers step down voltage to 33kV or 11kV for high tension distribution.',
      components: ['Oil Immersed Transformers', 'Buchholz Relays', 'OLTC Controllers', 'Vacuum Oil Filtration'],
    },
    {
      id: 2,
      name: 'HT Switchgear',
      voltage: '11kV VCB',
      icon: <Grid className="w-5 h-5 text-teal-400" />,
      desc: 'Vacuum Circuit Breakers (VCB) with numerical protection relays feed distribution sub-stations.',
      components: ['Vacuum Circuit Breakers', 'Overcurrent Protection Relays', 'Busbar Chambers', 'APFC Panels'],
    },
    {
      id: 3,
      name: 'LT Distribution',
      voltage: '415V / 230V',
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      desc: 'Power Control Centers (PCC) and Motor Control Centers (MCC) distribute low tension power.',
      components: ['Main PCC Switchboards', 'MCC Motor Starter Panels', 'AMF DG Sync Panels', 'Sandwich Busducts'],
    },
    {
      id: 4,
      name: 'End User Plant Load',
      voltage: 'Industrial / Commercial',
      icon: <Factory className="w-5 h-5 text-amber-400" />,
      desc: 'Power delivered to Japanese printing presses, hospital OTs, dairy processing plants, and factories.',
      components: ['Printing Press Drives', 'Cleanroom Panels', 'Hospital IPS Isolation', 'Motor Conveyor Lines'],
    },
  ];

  return (
    <section className="py-16 bg-slate-950/80 border-y border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
            Interactive Electrical Architecture
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Single Line Diagram (SLD) Power Flow
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Click through stages to explore how high-voltage power cascades safely from EHT grid to industrial load
          </p>
        </div>

        {/* Horizontal Flow Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {stages.map((st, idx) => (
            <button
              key={st.id}
              onClick={() => setActiveStage(idx)}
              className={`p-4 rounded-2xl border text-left transition duration-300 relative ${
                activeStage === idx
                  ? 'liquid-glass border-orange-400 shadow-lg shadow-orange-500/20'
                  : 'liquid-glass border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                  {st.icon}
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-orange-300 border border-orange-500/30">
                  {st.voltage}
                </span>
              </div>
              <h4 className="text-xs font-bold text-white truncate">{st.name}</h4>
              <p className="text-[10px] text-slate-500 mt-1">Stage 0{idx + 1}</p>
            </button>
          ))}
        </div>

        {/* Selected Stage Detail Panel */}
        <div className="p-6 sm:p-8 rounded-3xl liquid-glass border border-orange-500/30 grid grid-cols-1 md:grid-cols-12 gap-6 items-center shadow-2xl">
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-orange-400 uppercase">
                Stage 0{activeStage + 1} Selected
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-ping" />
            </div>
            <h4 className="text-2xl font-black text-white">{stages[activeStage].name}</h4>
            <p className="text-sm text-slate-300 leading-relaxed">{stages[activeStage].desc}</p>
          </div>

          <div className="md:col-span-7 liquid-glass p-5 rounded-2xl border border-slate-800 space-y-3">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Installed Equipment & Turnkey Sub-Assemblies:
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              {stages[activeStage].components.map((comp, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xl liquid-glass border border-slate-800 text-xs text-slate-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                  <span className="truncate">{comp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
