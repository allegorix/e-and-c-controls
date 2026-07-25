import React, { useState } from 'react';
import { COMPANY_INFO, EXPERTISE_LIST, MAJOR_PROJECTS, INFRASTRUCTURE_TOOLS, QUALITY_SAFETY_RULES } from '../data/companyData';
import { X, FileText, Copy, Check, Printer, Download, Zap, Award, ShieldCheck } from 'lucide-react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const fullTextProfile = `
==================================================
ELECTRICAL CONTRACTOR COMPANY PROFILE
E & C Controls (Class-1 Licensed)
==================================================

1. COMPANY OVERVIEW
-------------------
${COMPANY_INFO.overview}

2. OUR EXPERTISE
----------------
${EXPERTISE_LIST.map((e) => `• ${e.title} (${e.voltageGrade})\n  ${e.shortDesc}`).join('\n\n')}

3. KEY STRENGTHS
----------------
${COMPANY_INFO.keyStrengths.map((s) => `• ${s.title}: ${s.desc}`).join('\n')}

4. INFRASTRUCTURE & RESOURCES
-----------------------------
${INFRASTRUCTURE_TOOLS.map((i) => `• ${i.name} [${i.category}]: ${i.specifications}`).join('\n')}

5. MAJOR PROJECTS EXECUTED
--------------------------
${MAJOR_PROJECTS.map((p) => `1. ${p.client} - ${p.location}\n   Scope: ${p.scope}\n   Total Electrification Cost: ₹${p.costInLakhs} Lakhs`).join('\n\n')}

6. QUALITY & SAFETY
-------------------
${QUALITY_SAFETY_RULES.map((q) => `• ${q.title}\n  ${q.details}`).join('\n\n')}

7. OUR VISION
-------------
${COMPANY_INFO.vision}

8. OUR MISSION
--------------
${COMPANY_INFO.mission.map((m) => `• ${m}`).join('\n')}
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullTextProfile);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-4xl liquid-glass border border-orange-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto print:max-w-none print:p-0 print:border-none print:bg-white print:text-black">
        {/* Modal Controls */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 print:hidden">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                Official Document
              </span>
              <h3 className="text-2xl font-black text-white">Company Profile & Specs</h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition"
            >
              {copied ? <Check className="w-4 h-4 text-orange-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
              <span>{copied ? 'Copied!' : 'Copy Profile Text'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-orange-400 text-slate-950 text-xs font-bold hover:bg-orange-300 transition"
            >
              <Printer className="w-4 h-4" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              id="close-brochure"
              className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="space-y-8 text-xs sm:text-sm text-slate-200 print:text-black print:space-y-6">
          {/* Document Header */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-2 print:bg-gray-100 print:border-gray-300">
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest print:text-gray-800">
              Class-1 Licensed Electrical Contractor
            </p>
            <h1 className="text-2xl font-black text-white uppercase print:text-black">
              E & C Controls
            </h1>
            <p className="text-xs text-slate-400 print:text-gray-700">
              Extra High Tension (EHT), High Tension (HT) & Low Tension (LT) Installations • Substation Engineering
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-2">
            <h2 className="text-base font-bold text-orange-400 uppercase tracking-wider print:text-black">
              1. Company Overview
            </h2>
            <p className="leading-relaxed text-slate-300 print:text-gray-800">{COMPANY_INFO.overview}</p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-base font-bold text-orange-400 uppercase tracking-wider print:text-black">
              2. Our Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 print:grid-cols-1">
              {EXPERTISE_LIST.map((e) => (
                <div key={e.id} className="p-3 rounded-xl bg-slate-950 border border-slate-800 print:bg-white print:border-gray-200">
                  <p className="font-bold text-white print:text-black">{e.title}</p>
                  <p className="text-xs text-slate-400 mt-1 print:text-gray-700">{e.shortDesc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-2">
            <h2 className="text-base font-bold text-orange-400 uppercase tracking-wider print:text-black">
              3. Major Projects Executed
            </h2>
            <div className="space-y-3">
              {MAJOR_PROJECTS.map((p, idx) => (
                <div key={p.id} className="p-3 rounded-xl bg-slate-950 border border-slate-800 print:bg-white print:border-gray-200">
                  <p className="font-bold text-white print:text-black">
                    {idx + 1}. {p.client} — ₹{p.costInLakhs} Lakhs
                  </p>
                  <p className="text-xs text-slate-300 mt-1 print:text-gray-700">{p.scope}</p>
                  <p className="text-[11px] text-slate-400 italic print:text-gray-600">Location: {p.location}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4 */}
          <div className="space-y-2">
            <h2 className="text-base font-bold text-orange-400 uppercase tracking-wider print:text-black">
              4. Quality & Safety Protocols
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-slate-300 print:text-gray-800">
              {QUALITY_SAFETY_RULES.map((q, idx) => (
                <li key={idx}>
                  <strong className="text-white print:text-black">{q.title}:</strong> {q.details}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
