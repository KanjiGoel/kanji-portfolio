import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, SKILLS_DATA, EXPERIENCE_DATA, FYP_PROJECT, CERTIFICATES_DATA } from '../data/portfolioData';
import { X, Printer, Copy, Check, FileDown, ShieldCheck, Mail, Globe, MapPin } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyCvSummary = () => {
    const summaryText = `
${PERSONAL_INFO.name.toUpperCase()} - ${PERSONAL_INFO.headline}
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}

PROFILE SUMMARY:
${PERSONAL_INFO.bio}

CORE SKILLS:
- Mobile & Web: Flutter (Dart), React, TypeScript, HTML5/CSS3, Tailwind CSS
- AI & Backend: Python, Flask REST APIs, Computer Vision, AI/ML Classification
- Databases: PostgreSQL, SQLite, MySQL, Relational Modeling (3NF)
- Business & Accounting: QuickBooks, Peachtree (Sage 50), Shopify, MS Excel

FEATURED CAPSTONE (FYP):
${FYP_PROJECT.title}
Technologies: Flutter, Python, Flask, AI/ML Image Analysis

PRACTICAL EXPERIENCE & LEARNING:
${EXPERIENCE_DATA.map((e) => `• ${e.title} (${e.period}): ${e.summary}`).join('\n')}

CERTIFICATIONS:
${CERTIFICATES_DATA.map((c) => `• ${c.name} - ${c.organization} (${c.credentialId})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[94vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/95 sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <FileDown className="w-5 h-5 text-indigo-400" />
            <span className="text-sm font-semibold text-white">Curriculum Vitae Preview &amp; Export</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyCvSummary}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors ml-2 cursor-pointer"
              title="Close (ESC)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Sheet Area */}
        <div className="p-6 sm:p-10 bg-slate-950 text-slate-200 print:bg-white print:text-black space-y-8 font-sans">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 print:border-black">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-white print:text-black tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-base text-indigo-400 print:text-blue-700 font-medium mt-1">
                  {PERSONAL_INFO.headline}
                </p>
              </div>

              <div className="space-y-1 text-xs text-slate-300 print:text-slate-800">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-indigo-400 print:text-black" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400 print:text-black" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-indigo-400 print:text-black" />
                  <span>GitHub &amp; LinkedIn Active</span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-700 mt-4 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Core Technical & Business Competencies */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 print:text-black mb-3 border-b border-slate-800 pb-1">
              Technical &amp; Business Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="space-y-1">
                <span className="font-semibold text-white print:text-black">Programming &amp; Mobile:</span>
                <p className="text-slate-400 print:text-slate-700">
                  Dart (Flutter), Python 3, JavaScript, TypeScript, React, HTML5, CSS3, Tailwind CSS
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-white print:text-black">Backend &amp; AI/ML:</span>
                <p className="text-slate-400 print:text-slate-700">
                  Flask RESTful APIs, Computer Vision Image Analysis, Machine Learning Classification, NumPy, Pandas
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-white print:text-black">Databases &amp; Systems:</span>
                <p className="text-slate-400 print:text-slate-700">
                  PostgreSQL, MySQL, SQLite, Relational Modeling (3NF), Query Optimization, Cybersecurity Basics
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-white print:text-black">Business &amp; Finance Software:</span>
                <p className="text-slate-400 print:text-slate-700">
                  QuickBooks, Peachtree (Sage 50), Shopify Store Architecture, Advanced MS Excel, PowerPoint
                </p>
              </div>
            </div>
          </div>

          {/* Featured Capstone (FYP) */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 print:text-black mb-3 border-b border-slate-800 pb-1">
              Capstone Final Year Project (FYP)
            </h2>
            <div className="p-4 rounded-xl bg-slate-900/60 print:bg-slate-100 border border-slate-800 print:border-slate-300 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="text-sm font-bold text-white print:text-black">
                  {FYP_PROJECT.title}
                </h3>
                <span className="text-xs text-indigo-400 print:text-blue-700 font-mono">
                  Flutter · Python/Flask · AI/ML
                </span>
              </div>
              <p className="text-xs text-slate-300 print:text-slate-700 leading-relaxed">
                {FYP_PROJECT.description}
              </p>
              <div className="text-xs text-slate-400 print:text-slate-600">
                <span className="font-medium text-slate-200 print:text-black">Role: </span>
                {FYP_PROJECT.role}
              </div>
            </div>
          </div>

          {/* Practical Experience & Learning */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 print:text-black mb-3 border-b border-slate-800 pb-1">
              Practical Experience &amp; Learning
            </h2>
            <div className="space-y-4">
              {EXPERIENCE_DATA.map((item) => (
                <div key={item.id} className="text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white print:text-black">{item.title}</span>
                    <span className="text-slate-400 print:text-slate-600 font-mono">{item.period}</span>
                  </div>
                  <p className="text-slate-400 print:text-slate-700 leading-relaxed">{item.summary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 print:text-black mb-3 border-b border-slate-800 pb-1">
              Certifications &amp; Accreditations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {CERTIFICATES_DATA.map((c) => (
                <div key={c.id} className="p-2.5 rounded bg-slate-900/40 print:bg-slate-100 border border-slate-800/60 print:border-slate-300">
                  <div className="font-semibold text-white print:text-black">{c.name}</div>
                  <div className="text-slate-400 print:text-slate-600 text-[11px] mt-0.5">
                    {c.organization} · {c.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between text-xs text-slate-400">
          <span>Official CV Export Representation</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors cursor-pointer"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
