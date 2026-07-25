import React, { useState } from 'react';
import { AuroraSettings, AuroraTheme } from '../types';
import { Sliders, Sparkles, Zap, Sun, Shield, Layers, RefreshCw, Eye } from 'lucide-react';

interface NorthernLightsControlsProps {
  settings: AuroraSettings;
  onUpdate: (newSettings: Partial<AuroraSettings>) => void;
}

export const NorthernLightsControls: React.FC<NorthernLightsControlsProps> = ({
  settings,
  onUpdate,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const themes: { id: AuroraTheme; name: string; gradient: string; accent: string }[] = [
    {
      id: 'emerald',
      name: 'Cosmic Sunset',
      gradient: 'from-orange-400 via-amber-300 to-orange-500',
      accent: 'border-orange-400 text-orange-400',
    },
    {
      id: 'violet',
      name: 'Substation Violet',
      gradient: 'from-purple-500 via-fuchsia-400 to-indigo-500',
      accent: 'border-purple-400 text-purple-400',
    },
    {
      id: 'arctic',
      name: 'Arctic Glacier',
      gradient: 'from-sky-400 via-blue-400 to-teal-300',
      accent: 'border-sky-400 text-sky-400',
    },
    {
      id: 'solar',
      name: 'Solar Flare',
      gradient: 'from-amber-400 via-orange-400 to-emerald-400',
      accent: 'border-amber-400 text-amber-400',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          id="open-aurora-controls"
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-slate-900/90 border border-emerald-500/40 text-emerald-300 shadow-xl shadow-emerald-950/50 backdrop-blur-md hover:border-emerald-400 hover:scale-105 transition-all duration-300"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <Sparkles className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform" />
          <span className="text-xs font-semibold tracking-wider uppercase">Aurora FX Controls</span>
        </button>
      )}

      {/* Expanded Controls Drawer Card */}
      {isOpen && (
        <div className="w-80 p-5 rounded-2xl bg-slate-950/95 border border-emerald-500/30 text-slate-100 shadow-2xl shadow-black/80 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-300">
                Northern Lights Engine
              </h4>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              id="close-aurora-controls"
              className="text-slate-400 hover:text-slate-100 p-1 rounded-lg hover:bg-slate-800 transition"
            >
              ✕
            </button>
          </div>

          <div className="space-y-4 text-xs">
            {/* Color Palette Selector */}
            <div>
              <label className="block text-slate-400 mb-2 font-medium">Aurora Color Palette</label>
              <div className="grid grid-cols-2 gap-2">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => onUpdate({ theme: t.id })}
                    className={`flex items-center gap-2 p-2 rounded-xl border text-left transition ${
                      settings.theme === t.id
                        ? `${t.accent} bg-slate-800/80 font-semibold shadow-sm`
                        : 'border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <span
                      className={`w-3.5 h-3.5 rounded-full bg-gradient-to-r ${t.gradient} shrink-0`}
                    />
                    <span className="truncate">{t.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Wave Motion Speed Slider */}
            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span className="flex items-center gap-1.5">
                  <RefreshCw className="w-3.5 h-3.5 text-cyan-400" /> Wave Speed
                </span>
                <span className="font-mono text-cyan-400">{settings.speed.toFixed(1)}x</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="3.0"
                step="0.1"
                value={settings.speed}
                onChange={(e) => onUpdate({ speed: parseFloat(e.target.value) })}
                className="w-full accent-cyan-400 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
              />
            </div>

            {/* Wave Layer Density */}
            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-emerald-400" /> Aurora Wave Layers
                </span>
                <span className="font-mono text-emerald-400">{settings.waveCount}</span>
              </div>
              <input
                type="range"
                min="2"
                max="4"
                step="1"
                value={settings.waveCount}
                onChange={(e) => onUpdate({ waveCount: parseInt(e.target.value, 10) })}
                className="w-full accent-emerald-400 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
              />
            </div>

            {/* Electrical Spark Intensity */}
            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" /> Voltage Spark Arcs
                </span>
                <span className="font-mono text-amber-400">{settings.sparkIntensity}</span>
              </div>
              <input
                type="range"
                min="1"
                max="3"
                step="1"
                value={settings.sparkIntensity}
                onChange={(e) => onUpdate({ sparkIntensity: parseInt(e.target.value, 10) })}
                className="w-full accent-amber-400 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
              />
            </div>

            {/* Interactive Mouse Field Toggle */}
            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Eye className="w-3.5 h-3.5 text-purple-400" /> Cursor Magnetic Field
              </span>
              <button
                onClick={() => onUpdate({ interactiveGlow: !settings.interactiveGlow })}
                className={`w-10 h-5 flex items-center rounded-full p-0.5 transition-colors ${
                  settings.interactiveGlow ? 'bg-emerald-500' : 'bg-slate-800'
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                    settings.interactiveGlow ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
