import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck, Clock, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    scope: 'EHT Substation',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#00f5a0', '#00d2ff', '#a855f7'],
    });
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/80 border border-orange-500/30 text-orange-300 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5 text-orange-400" />
            <span>Turnkey Project Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Connect With Our Engineering Team
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Ready to initiate single-line drawings, substation erection, or annual maintenance
            audits? Send your inquiry or request a site visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl liquid-glass border border-orange-500/30 backdrop-blur-xl space-y-6 shadow-2xl">
            <div>
              <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">
                Headquarters & Contracting Office
              </span>
              <h3 className="text-2xl font-black text-white mt-1">E & C Controls</h3>
              <p className="text-xs text-slate-400 mt-1">
                Class-1 Licensed Electrical Contracting Firm
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3 p-3.5 rounded-xl liquid-glass border border-slate-800">
                <MapPin className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Central Operations Office</p>
                  <p className="text-slate-300 mt-0.5">
                    Substation House, Main Highway Corridor, Trivandrum - Alappuzha Region, Kerala, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl liquid-glass border border-slate-800">
                <Phone className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Chief Engineer Direct Lines</p>
                  <p className="text-orange-300 font-mono mt-0.5">+91 98470 XXXXX / +91 484 2XXXXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl liquid-glass border border-slate-800">
                <Mail className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Project Tenders & RFQs</p>
                  <p className="text-cyan-300 font-mono mt-0.5">projects@eccontrols.in</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl liquid-glass border border-slate-800">
                <ShieldCheck className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Electrical Inspectorate License</p>
                  <p className="text-purple-300 font-mono mt-0.5">Class-1 EHT / HT / LT Validated</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-orange-950/40 border border-orange-500/30 flex items-center gap-3 text-xs text-orange-200">
              <Clock className="w-5 h-5 text-orange-400 shrink-0" />
              <span>24/7 Technical Response & Breakdown Hotline for AMC Contract Holders</span>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7 p-8 rounded-3xl liquid-glass border border-slate-800 backdrop-blur-xl shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-extrabold text-white mb-2">Send Project Inquiry</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Er. Suresh Kumar"
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Infrastructure Developers Ltd"
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="suresh@company.com"
                      className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Primary Electrical Scope
                  </label>
                  <select
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-orange-500"
                  >
                    <option value="EHT Substation">EHT Substation (110kV / 66kV / 33kV)</option>
                    <option value="HT / LT Industrial">HT & LT Industrial Electrification</option>
                    <option value="Transformer Commissioning">Transformer Erection & Oil Testing</option>
                    <option value="DG Synchronization">DG Set Installation & AMF Sync</option>
                    <option value="Annual Maintenance Contract">Annual Service Contract (AMC)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Project Details & Site Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe load capacity, site location, timeline, or tender specifications..."
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <button
                  type="submit"
                  id="btn-submit-contact"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-400 to-orange-400 text-slate-950 font-extrabold text-xs shadow-xl shadow-orange-500/20 hover:brightness-110 transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Project Inquiry To Engineering Team</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-3xl bg-orange-500/20 border border-orange-400/40 text-orange-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white">Inquiry Received</h4>
                  <p className="text-slate-300 text-sm mt-2 max-w-md mx-auto">
                    Thank you, <span className="text-orange-400 font-bold">{formData.name}</span>.
                    Our technical engineering team has logged your query for{' '}
                    <span className="text-cyan-400 font-bold">{formData.scope}</span> and will reach out
                    within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs hover:text-white"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
