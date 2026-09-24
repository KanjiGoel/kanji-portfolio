import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { Check, Calendar, Layers, BookMarked, Terminal } from 'lucide-react';
import { ExperienceItem } from '../types';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-24 border-t border-slate-800/80 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
            <span>Authentic Competencies</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">7 Core Practice Domains</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Practical Experience &amp; Learning
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            A transparent overview of practical software development, research, and laboratory learning.
            In accordance with engineering integrity, this section represents authentic project work, coursework,
            and intensive self-directed labs without fabricated corporate employment titles.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="space-y-6">
          {EXPERIENCE_DATA.map((item: ExperienceItem, index: number) => (
            <div
              key={item.id}
              className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 transition-all duration-150"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                    <span className="text-indigo-400 font-semibold">{String(index + 1).padStart(2, '0')}.</span>
                    <span>{item.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {item.summary}
              </p>

              {/* Concrete Key Outcomes */}
              <div className="mb-5 space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Key Practical Milestones:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                  {item.outcomes.map((outcome, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 text-xs text-slate-300 leading-relaxed flex items-start gap-2"
                    >
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="pt-3 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-400 font-medium">Technologies Applied:</span>
                {item.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-slate-300 bg-slate-800/50 border border-slate-700/40 px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
