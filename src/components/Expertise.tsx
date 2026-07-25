import React, { useState } from 'react';
import { EXPERTISE_LIST } from '../data/companyData';
import { ExpertiseCategory } from '../types';
import {
  Zap,
  Cpu,
  Box,
  Grid,
  Workflow,
  Factory,
  Building2,
  Power,
  ShieldAlert,
  Layers,
  Wrench,
  Search,
  CheckCircle,
  ArrowUpRight,
  X,
  Sparkles,
} from 'lucide-react';

export const Expertise: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<ExpertiseCategory | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap':
        return <Zap className="w-5 h-5 text-orange-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Box':
        return <Box className="w-5 h-5 text-teal-400" />;
      case 'Grid':
        return <Grid className="w-5 h-5 text-purple-400" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-amber-300" />;
      case 'Factory':
        return <Factory className="w-5 h-5 text-amber-400" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-blue-400" />;
      case 'Power':
        return <Power className="w-5 h-5 text-orange-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-rose-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-indigo-400" />;
      case 'Wrench':
      default:
        return <Wrench className="w-5 h-5 text-cyan-300" />;
    }
  };

  const categories = [
    { id: 'all', label: 'All 11 Core Capabilities' },
    { id: 'eht-ht', label: 'EHT / HT Substations & Grid' },
    { id: 'industrial', label: 'Industrial & Panels' },
    { id: 'transformer', label: 'Transformer & Testing' },
    { id: 'cabling-amc', label: 'Cabling, Earthing & AMC' },
  ];

  const filteredList = EXPERTISE_LIST.filter((item) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'eht-ht')
      return (
        item.id === 'eht-substations' ||
        item.id === 'ht-lt-installations' ||
        item.id === 'switchyard-development'
      );
    if (selectedCategory === 'industrial')
      return (
        item.id === 'industrial-electrification' ||
        item.id === 'panel-installation' ||
        item.id === 'dg-installation' ||
        item.id === 'commercial-residential'
      );
    if (selectedCategory === 'transformer') return item.id === 'transformer-erection';
    if (selectedCategory === 'cabling-amc')
      return (
        item.id === 'cable-laying' ||
        item.id === 'earthing-lightning' ||
        item.id === 'maintenance-amc'
      );
    return true;
  });

  return (
    <section id="expertise" className="py-20 bg-slate-950/60 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/80 border border-orange-500/30 text-orange-300 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5 text-orange-400" />
            <span>2. Comprehensive Engineering Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our 11 Electrical Work Domains
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From 110kV EHT Substations and Transformer Commissioning to Industrial Heavy Power & AMC
            Servicing.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                selectedCategory === c.id
                  ? 'bg-orange-400 text-slate-950 shadow-lg shadow-orange-500/20'
                  : 'liquid-glass border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* 11 Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredList.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl liquid-glass border border-slate-800/80 hover:border-orange-500/40 hover:bg-white/5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 group-hover:scale-105 transition-transform">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-orange-950/90 text-orange-300 border border-orange-500/30">
                    {item.voltageGrade}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-white group-hover:text-orange-300 transition line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-3">
                    {item.shortDesc}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2">
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Key Deliverables:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.keyDeliverables.slice(0, 2).map((kd, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded liquid-glass text-slate-300 border border-slate-800"
                      >
                        • {kd}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">IS Compliant Works</span>
                <button
                  onClick={() => setActiveModalItem(item)}
                  id={`btn-view-${item.id}`}
                  className="flex items-center gap-1 text-xs font-bold text-orange-400 hover:text-orange-300 group-hover:translate-x-0.5 transition"
                >
                  <span>Technical Scope</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Modal / Drawer */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="w-full max-w-2xl liquid-glass border border-orange-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setActiveModalItem(null)}
                id="close-expertise-modal"
                className="absolute top-6 right-6 p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-orange-500/10 border border-orange-400/30 text-orange-400">
                  {getIcon(activeModalItem.iconName)}
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-orange-400 uppercase">
                    Grade: {activeModalItem.voltageGrade}
                  </span>
                  <h3 className="text-2xl font-black text-white">{activeModalItem.title}</h3>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <p className="leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  {activeModalItem.fullDetails}
                </p>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                    Core Technical Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalItem.keyDeliverables.map((kd, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 text-xs"
                      >
                        <CheckCircle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <span>{kd}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                    Typical Sector Applications
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalItem.applications.map((app, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="px-6 py-2.5 rounded-xl bg-orange-400 text-slate-950 font-bold text-xs hover:bg-orange-300 transition"
                >
                  Close Specification
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
