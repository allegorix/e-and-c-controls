import React from 'react';
import { Logo } from './Logo';
import { ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <a href="#" className="inline-block transition transform hover:scale-105">
                <Logo size="md" />
              </a>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Class-1 Licensed Electrical Contracting Firm specializing in Extra High Tension (EHT)
              Substations, HT & LT installations, industrial electrification, and infrastructure works.
            </p>
            <div className="flex items-center gap-2 pt-1 text-[11px] text-orange-400 font-mono">
              <ShieldCheck className="w-4 h-4" />
              <span>License: {COMPANY_INFO.licenseNo}</span>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="md:col-span-3 space-y-2">
            <p className="font-bold uppercase tracking-wider text-white text-xs">Core Expertise</p>
            <ul className="space-y-1.5 text-slate-400">
              <li>• EHT Substations (110kV/33kV)</li>
              <li>• HT & LT Electrical Works</li>
              <li>• Transformer Commissioning</li>
              <li>• Switchyard Development</li>
              <li>• Underground Cable Laying</li>
              <li>• Industrial Electrification</li>
              <li>• DG Set Synchronization</li>
              <li>• AMC & Safety Audits</li>
            </ul>
          </div>

          {/* Key Major Clients */}
          <div className="md:col-span-4 space-y-2">
            <p className="font-bold uppercase tracking-wider text-white text-xs">Major Executed Clients</p>
            <ul className="space-y-1.5 text-slate-400">
              <li>• Malayala Manorama Co Pvt Ltd (800 Lakhs)</li>
              <li>• HOMCO Ltd Alappuzha (577 Lakhs)</li>
              <li>• NSS Medical Mission Hospitals (500 Lakhs)</li>
              <li>• MILMA Palakkad Cattle Feed Plant (154 Lakhs)</li>
              <li>• ISRO, Indian Railways & Govt Projects</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© {new Date().getFullYear()} E & C Controls. All Rights Reserved.</p>
          <p className="flex items-center gap-1 text-[11px]">
            <span>Styled with Northern Lights Motion Graphics & IS Standard Engineering</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
