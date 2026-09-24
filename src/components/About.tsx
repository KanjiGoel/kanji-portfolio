import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Terminal, Lightbulb, Compass, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-24 border-t border-slate-800/80 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
            <span>About Me</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Background &amp; Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering software with analytical precision and purpose
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am a software engineer focused on developing resilient mobile applications, backend microservices,
              and applied machine learning solutions. Throughout my academic journey and intensive project practice,
              I have prioritized understanding complete engineering lifecycles—from system requirements and database
              normalization to responsive UI design and cloud API deployment.
            </p>
            <p>
              My marquee academic undertaking is an{' '}
              <strong className="text-white font-medium">
                AI-Based Mobile Application for Early Detection of Child Malnutrition and Diet Recommendation System
              </strong>
              . This project bridges medical diagnostic guidelines, computer vision analysis, and an accessible Flutter
              mobile interface to bring proactive health screening into caregivers’ hands.
            </p>
            <p>
              Beyond core software engineering, I possess a versatile background in enterprise tools—including
              computerized accounting platforms (<span className="text-slate-200">QuickBooks</span> and{' '}
              <span className="text-slate-200">Peachtree / Sage 50</span>), spreadsheet modeling (<span className="text-slate-200">MS Excel</span>),
              e-commerce storefront architecture (<span className="text-slate-200">Shopify</span>), and digital marketing workflows.
              This allows me to bridge technical code with practical business realities.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Clean, maintainable code architectures</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Modern mobile-first UI paradigms</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Practical AI/ML computer vision integration</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Relational databases &amp; computerized ledgers</span>
              </div>
            </div>
          </div>

          {/* Core Focus Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center gap-3 mb-2">
                <Terminal className="w-5 h-5 text-indigo-400" />
                <h3 className="text-base font-semibold text-white">Full-Stack Development</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-normal">
                Structuring clean declarative interfaces with Flutter and React, connected to microservices built with Python and Flask.
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                <span>Flutter</span>
                <span aria-hidden="true">·</span>
                <span>React</span>
                <span aria-hidden="true">·</span>
                <span>Python</span>
                <span aria-hidden="true">·</span>
                <span>Flask</span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center gap-3 mb-2">
                <Lightbulb className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-semibold text-white">Applied Machine Learning</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-normal">
                Applying computer vision and classification logic to solve tangible societal problems, focusing on healthcare and nutrition diagnostics.
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                <span>Computer Vision</span>
                <span aria-hidden="true">·</span>
                <span>Image Analysis</span>
                <span aria-hidden="true">·</span>
                <span>Diet Algorithms</span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center gap-3 mb-2">
                <Compass className="w-5 h-5 text-sky-400" />
                <h3 className="text-base font-semibold text-white">Business &amp; Operations</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-normal">
                Practical expertise in computerized accounting (QuickBooks, Peachtree), commercial storefronts (Shopify), and structured financial modeling.
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                <span>QuickBooks</span>
                <span aria-hidden="true">·</span>
                <span>Peachtree</span>
                <span aria-hidden="true">·</span>
                <span>Shopify</span>
                <span aria-hidden="true">·</span>
                <span>MS Excel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
