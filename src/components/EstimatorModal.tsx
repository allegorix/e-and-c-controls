import React, { useState } from 'react';
import { X, Calculator, Zap, CheckCircle2, Send, Download, Sparkles, Building, Phone, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EstimatorModal: React.FC<EstimatorModalProps> = ({ isOpen, onClose }) => {
  const [projectType, setProjectType] = useState<string>('ht-lt-factory');
  const [voltageGrade, setVoltageGrade] = useState<string>('11kv');
  const [capacityKva, setCapacityKva] = useState<number>(1000);
  const [isAmc, setIsAmc] = useState<boolean>(false);

  // Client info
  const [clientName, setClientName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  // Estimate logic
  const calculateBudget = () => {
    let baseMinLakhs = 50;
    let baseMaxLakhs = 90;

    if (projectType === 'eht-substation') {
      baseMinLakhs = 400;
      baseMaxLakhs = 900;
    } else if (projectType === 'ht-lt-factory') {
      baseMinLakhs = 150;
      baseMaxLakhs = 600;
    } else if (projectType === 'hospital-grid') {
      baseMinLakhs = 200;
      baseMaxLakhs = 550;
    } else if (projectType === 'amc-only') {
      baseMinLakhs = 5;
      baseMaxLakhs = 25;
    }

    // Capacity multiplier
    const capacityFactor = Math.max(0.5, capacityKva / 1000);
    let minEst = Math.round(baseMinLakhs * (0.8 + capacityFactor * 0.2));
    let maxEst = Math.round(baseMaxLakhs * (0.8 + capacityFactor * 0.25));

    if (isAmc && projectType !== 'amc-only') {
      minEst += 10;
      maxEst += 20;
    }

    return { minEst, maxEst, estimatedWeeks: Math.max(4, Math.round(capacityFactor * 8)) };
  };

  const { minEst, maxEst, estimatedWeeks } = calculateBudget();

  const handleSubmitRFQ = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff6b00', '#ff9e00', '#ffa500'],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-3xl liquid-glass border border-orange-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          id="close-estimator"
          className="absolute top-6 right-6 p-2 rounded-xl liquid-glass border border-slate-800 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-orange-500/10 border border-orange-400/30 text-orange-400">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">
              Turnkey Cost Calculator
            </span>
            <h3 className="text-2xl font-black text-white">Electrical Project Estimator</h3>
          </div>
        </div>

        {!isSubmitted ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Input Parameters */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">
                  1. Work Scope Category
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-orange-500 focus:outline-none"
                >
                  <option value="eht-substation">EHT Substation (110kV / 66kV / 33kV)</option>
                  <option value="ht-lt-factory">Industrial Factory HT/LT Electrification</option>
                  <option value="hospital-grid">Healthcare Hospital Complex HT/LT Grid</option>
                  <option value="amc-only">Annual Service Contract (AMC) & Testing</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">
                  2. Voltage Class
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['110kV EHT', '33kV HT', '11kV / LT'].map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setVoltageGrade(v)}
                      className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition ${
                        voltageGrade === v
                          ? 'bg-orange-400 text-slate-950 border-orange-400'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-slate-300 mb-1.5">
                  <span>3. Approximate Electrical Load / Capacity</span>
                  <span className="text-orange-400 font-mono">{capacityKva} kVA</span>
                </div>
                <input
                  type="range"
                  min="250"
                  max="10000"
                  step="250"
                  value={capacityKva}
                  onChange={(e) => setCapacityKva(parseInt(e.target.value, 10))}
                  className="w-full accent-orange-400 bg-slate-950 h-2 rounded-lg cursor-pointer"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="include-amc"
                  checked={isAmc}
                  onChange={(e) => setIsAmc(e.target.checked)}
                  className="accent-orange-400 rounded"
                />
                <label htmlFor="include-amc" className="text-xs text-slate-300 cursor-pointer">
                  Include 3-Year Comprehensive AMC & Inspectorate Audit Coverage
                </label>
              </div>

              {/* Client Details Form */}
              <form onSubmit={handleSubmitRFQ} className="pt-4 space-y-3 border-t border-slate-800">
                <p className="text-xs font-bold text-cyan-400 uppercase">
                  Request Official RFQ Proposal
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name *"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Company / Entity *"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                  />
                  <input
                    type="text"
                    placeholder="Project Site Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <button
                  type="submit"
                  id="btn-submit-rfq"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 via-amber-400 to-orange-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-orange-500/20 hover:brightness-110 transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Generate Detailed Turnkey Quotation</span>
                </button>
              </form>
            </div>

            {/* Live Calculated Estimate Output */}
            <div className="md:col-span-5 p-6 rounded-2xl bg-slate-950 border border-orange-500/40 space-y-5 text-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400">
                Estimated Project Budget
              </span>

              <div>
                <div className="text-3xl font-black text-white tracking-tight">
                  ₹{minEst} - ₹{maxEst}{' '}
                  <span className="text-base font-bold text-orange-400">Lakhs</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Includes supply, erection, testing & inspectorate approval
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 text-left space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Estimated Timeline:</span>
                  <span className="font-mono text-cyan-400 font-bold">{estimatedWeeks} Weeks</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>License Class:</span>
                  <span className="text-orange-400 font-bold">Class-1 EHT</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Standards:</span>
                  <span className="text-slate-200">IS 3043 / CEA Safety</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-orange-950/40 border border-orange-500/30 text-left text-[11px] text-orange-300 space-y-1">
                <p className="font-bold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-orange-400" /> What's Included:
                </p>
                <p className="text-[10px] text-orange-300/80">
                  • Single Line Engineering • Equipment Sourcing & Erection • High Voltage Megger & Oil BDV Testing • State Electrical Inspectorate Clearance
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Confirmation Success View */
          <div className="py-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-3xl bg-orange-500/20 border border-orange-400/40 text-orange-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h4 className="text-2xl font-black text-white">Quotation Proposal Generated!</h4>
              <p className="text-slate-300 text-sm mt-2 max-w-md mx-auto">
                Thank you, <span className="text-orange-400 font-bold">{clientName}</span> ({company}).
                Our chief electrical engineer will contact you shortly at{' '}
                <span className="text-cyan-400 font-mono">{phone}</span> to finalize site drawings.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 max-w-md mx-auto text-left text-xs space-y-1">
              <p className="font-bold text-orange-400">Estimated Budget Range:</p>
              <p className="text-lg font-black text-white">₹{minEst} - ₹{maxEst} Lakhs</p>
              <p className="text-slate-400 text-[11px]">Ref: EC-RFQ-{Math.floor(10000 + Math.random() * 90000)}</p>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 rounded-xl bg-orange-400 text-slate-950 font-bold text-xs hover:bg-orange-300 transition"
            >
              Done & Return
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
