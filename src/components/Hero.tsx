import React from 'react';
import { ArrowDown, FileDown, Award, FolderKanban, Mail, Sparkles, Code2, Smartphone, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenCVModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCVModal }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Background Gradients - restrained, dark slate tone */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-900/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-slate-800/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Natural Editorial Eyebrow - no pill container */}
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold tracking-wide text-indigo-400 mb-4">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Software Engineer & AI Application Developer</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Computer Science</span>
          </div>

          {/* Primary Headline with text-wrap: balance */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight md:leading-none mb-6">
            Building Intelligent Mobile, Backend &amp; Web Systems
          </h1>

          {/* Bio Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            Hi, I’m <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>. I develop cross-platform
            mobile applications with <span className="text-indigo-300 font-medium">Flutter</span>, scalable backends with{' '}
            <span className="text-indigo-300 font-medium">Python &amp; Flask</span>, and applied <span className="text-indigo-300 font-medium">AI/ML</span> models,
            alongside practical enterprise business tools.
          </p>

          {/* REQUIRED HOME BUTTONS: 4 clear navigation buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-3xl mx-auto mb-14">
            {/* Button 1: View My Projects */}
            <button
              onClick={() => scrollTo('projects')}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-md shadow-indigo-600/30 transition-all duration-150 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 cursor-pointer"
            >
              <FolderKanban className="w-4 h-4 text-white" />
              <span>View My Projects</span>
            </button>

            {/* Button 2: View Certificates */}
            <button
              onClick={() => scrollTo('certificates')}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 active:bg-slate-700 border border-slate-700 rounded-lg transition-all duration-150 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 cursor-pointer"
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span>View Certificates</span>
            </button>

            {/* Button 3: Download CV */}
            <button
              onClick={onOpenCVModal}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 active:bg-slate-700 border border-slate-700 rounded-lg transition-all duration-150 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 cursor-pointer"
            >
              <FileDown className="w-4 h-4 text-emerald-400" />
              <span>Download CV</span>
            </button>

            {/* Button 4: Contact Me */}
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 active:bg-slate-700 border border-slate-700 rounded-lg transition-all duration-150 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-sky-400" />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Quick Technical Anchors - unboxed text with separators */}
          <div className="pt-8 border-t border-slate-800/80 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <Smartphone className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-sm font-semibold text-white">Mobile &amp; Frontend</h2>
                  <p className="text-xs text-slate-400 mt-1 leading-normal">
                    Flutter, Dart, React, TypeScript, and responsive UI architecture.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <Cpu className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-sm font-semibold text-white">AI/ML &amp; Backend</h2>
                  <p className="text-xs text-slate-400 mt-1 leading-normal">
                    Python, Flask REST APIs, Computer Vision, and inference serving.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <Code2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-sm font-semibold text-white">Business &amp; Systems</h2>
                  <p className="text-xs text-slate-400 mt-1 leading-normal">
                    QuickBooks, Peachtree, SQL databases, Shopify, and Excel modeling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 text-center">
          <button
            onClick={() => scrollTo('about')}
            className="inline-flex flex-col items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded p-1"
          >
            <span>Explore Portfolio</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-slate-500" />
          </button>
        </div>
      </div>
    </section>
  );
};
