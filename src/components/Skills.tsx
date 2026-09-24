import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import {
  Code,
  Smartphone,
  Terminal,
  Server,
  Cpu,
  Database,
  ShoppingBag,
  TrendingUp,
  Receipt,
  BookOpen,
  FileSpreadsheet,
  Presentation,
  ShieldCheck,
  Check,
} from 'lucide-react';
import { SkillItem } from '../types';

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Skills (13)' },
    { id: 'development', label: 'Development & Core' },
    { id: 'ai', label: 'AI & Intelligence' },
    { id: 'business', label: 'Business & Accounting' },
    { id: 'tools', label: 'Tools & Security' },
  ];

  const filteredSkills =
    activeFilter === 'all'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === activeFilter);

  // Helper icon mapper for each specific skill
  const getSkillIcon = (id: string) => {
    switch (id) {
      case 'web-dev':
        return <Code className="w-5 h-5 text-indigo-400" />;
      case 'flutter':
        return <Smartphone className="w-5 h-5 text-sky-400" />;
      case 'python':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      case 'flask':
        return <Server className="w-5 h-5 text-teal-400" />;
      case 'ai-ml':
        return <Cpu className="w-5 h-5 text-violet-400" />;
      case 'database':
        return <Database className="w-5 h-5 text-cyan-400" />;
      case 'shopify':
        return <ShoppingBag className="w-5 h-5 text-emerald-400" />;
      case 'digital-marketing':
        return <TrendingUp className="w-5 h-5 text-rose-400" />;
      case 'quickbooks':
        return <Receipt className="w-5 h-5 text-lime-400" />;
      case 'peachtree':
        return <BookOpen className="w-5 h-5 text-amber-300" />;
      case 'ms-excel':
        return <FileSpreadsheet className="w-5 h-5 text-green-400" />;
      case 'powerpoint':
        return <Presentation className="w-5 h-5 text-orange-400" />;
      case 'cybersecurity':
        return <ShieldCheck className="w-5 h-5 text-red-400" />;
      default:
        return <Code className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-24 border-t border-slate-800/80 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
              <span>Technical &amp; Business Toolkit</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">13 Verified Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Skills &amp; Practical Capabilities
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              Individual skill competencies developed through university coursework, intensive coding practice,
              and applied software development.
            </p>
          </div>

          {/* Interactive Filter Tabs - Single row segmented control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  activeFilter === tab.id
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 13 Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill: SkillItem) => (
            <div
              key={skill.id}
              className="p-5 rounded-xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 hover:bg-slate-900 transition-all duration-150 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Icon, Name & Category */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 group-hover:scale-105 transition-transform">
                      {getSkillIcon(skill.id)}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white tracking-tight">
                        {skill.name}
                      </h3>
                      {/* Unboxed metadata with separator */}
                      <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                        <span>{skill.categoryLabel}</span>
                        <span aria-hidden="true" className="text-slate-600">·</span>
                        <span className="text-indigo-300">{skill.level}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {skill.description}
                </p>

                {/* Practical Application Highlight */}
                <div className="mb-4 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/60 text-xs text-slate-300 leading-normal">
                  <span className="font-semibold text-slate-200">Applied In: </span>
                  {skill.practicalApplication}
                </div>
              </div>

              {/* Tools & Frameworks list */}
              <div className="pt-3 border-t border-slate-800/60">
                <div className="text-[11px] font-medium text-slate-400 mb-2 uppercase tracking-wider">
                  Associated Tools &amp; Methods:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skill.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-slate-300 bg-slate-800/70 border border-slate-700/50 px-2 py-0.5 rounded text-[11px]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
