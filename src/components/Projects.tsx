import React, { useState } from 'react';
import { MAJOR_PROJECTS } from '../data/companyData';
import { ProjectItem } from '../types';
import {
  Award,
  Building,
  Search,
  CheckCircle2,
  MapPin,
  TrendingUp,
  BarChart2,
  PieChart as PieChartIcon,
  Shield,
  Layers,
  ArrowUpRight,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
} from 'recharts';

export const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [chartType, setChartType] = useState<'bar' | 'pie'>('bar');

  const categories = ['All', 'Media & Press', 'Industrial Factory', 'Healthcare', 'Agriculture & Dairy', 'Government & Strategic'];

  const filteredProjects = MAJOR_PROJECTS.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch =
      p.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.scope.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Recharts Chart Data
  const chartData = MAJOR_PROJECTS.map((p) => ({
    name: p.client.split(' ')[0],
    fullName: p.client,
    value: p.costInLakhs,
    category: p.category,
  }));

  const COLORS = ['#ff6b00', '#ff9e00', '#ffa500', '#00d2ff', '#a855f7'];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/80 border border-orange-500/30 text-orange-300 text-xs font-semibold">
            <Award className="w-3.5 h-3.5 text-orange-400" />
            <span>5. Major Projects Executed</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Proven Track Record Across Key Sectors
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Delivered over ₹2,031+ Lakhs in turnkey high-voltage electrical installations for major
            media groups, state enterprises, healthcare networks, and strategic defense agencies.
          </p>
        </div>

        {/* Project Cost Analytics Visualizer */}
        <div className="p-6 sm:p-8 rounded-3xl liquid-glass border border-orange-500/20 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-orange-400" />
                <span>Financial Distribution of Key Executed Projects (in Lakhs)</span>
              </h3>
              <p className="text-xs text-slate-400">
                Aggregate turnkey electrification contract values across landmark sites
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setChartType('bar')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  chartType === 'bar'
                    ? 'bg-orange-400 text-slate-950'
                    : 'liquid-glass text-slate-400 hover:text-white'
                }`}
              >
                <BarChart2 className="w-3.5 h-3.5" />
                <span>Bar Chart</span>
              </button>
              <button
                onClick={() => setChartType('pie')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  chartType === 'pie'
                    ? 'bg-orange-400 text-slate-950'
                    : 'liquid-glass text-slate-400 hover:text-white'
                }`}
              >
                <PieChartIcon className="w-3.5 h-3.5" />
                <span>Pie Breakdown</span>
              </button>
            </div>
          </div>

          <div className="h-64 sm:h-72 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              {chartType === 'bar' ? (
                <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                  <XAxis
                    dataKey="name"
                    stroke="#94a3b8"
                    fontSize={11}
                    tickLine={false}
                    axisLine={{ stroke: '#334155' }}
                  />
                  <YAxis
                    stroke="#94a3b8"
                    fontSize={11}
                    tickLine={false}
                    axisLine={{ stroke: '#334155' }}
                    unit="L"
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0f172a',
                      borderColor: '#10b981',
                      borderRadius: '12px',
                      color: '#f8fafc',
                      fontSize: '12px',
                    }}
                    formatter={(val: number) => [`₹${val} Lakhs`, 'Contract Cost']}
                    labelFormatter={(label, items) => items[0]?.payload?.fullName || label}
                  />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                    {chartData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              ) : (
                <PieChart>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0f172a',
                      borderColor: '#10b981',
                      borderRadius: '12px',
                      color: '#f8fafc',
                      fontSize: '12px',
                    }}
                    formatter={(val: number) => [`₹${val} Lakhs`, 'Contract Value']}
                  />
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={85}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ₹${value}L`}
                  >
                    {chartData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              )}
            </ResponsiveContainer>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search client, location, or scope..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl liquid-glass border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                  selectedCategory === cat
                    ? 'bg-orange-400 text-slate-950 font-bold'
                    : 'liquid-glass border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Major Projects List Cards */}
        <div className="space-y-6">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="p-6 sm:p-8 rounded-3xl liquid-glass border border-slate-800/80 hover:border-orange-500/40 transition duration-300 relative overflow-hidden group shadow-xl space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-orange-950 text-orange-300 border border-orange-500/30">
                      {p.category}
                    </span>
                    <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-950 text-cyan-300 border border-cyan-500/30">
                      {p.voltageGrade}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-orange-300 transition">
                    {p.client}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>{p.location}</span>
                  </div>
                </div>

                <div className="text-left md:text-right shrink-0">
                  <p className="text-xs text-slate-400 font-medium">Contract Value</p>
                  <p className="text-2xl sm:text-3xl font-black text-orange-400 tracking-tight">
                    ₹{p.costInLakhs} <span className="text-sm font-bold text-slate-300">Lakhs</span>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-slate-300 leading-relaxed font-normal">{p.scope}</p>

                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Project Highlights & Technical Accomplishments:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {p.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 p-8 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400">
              <p className="text-sm">No projects found matching criteria "{searchTerm}".</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
