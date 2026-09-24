import React from 'react';
import { CERTIFICATES_DATA } from '../data/portfolioData';
import { Award, Calendar, Building, Eye, ShieldCheck } from 'lucide-react';
import { CertificateItem } from '../types';

interface CertificatesProps {
  onViewCertificate: (cert: CertificateItem) => void;
}

export const Certificates: React.FC<CertificatesProps> = ({ onViewCertificate }) => {
  return (
    <section id="certificates" className="py-20 md:py-24 border-t border-slate-800/80 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
            <span>Verified Credentials</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Certifications &amp; Accreditations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Certificates of Completion
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Technical course completions, software development certifications, and business system credentials.
            Click any certificate to inspect full document credentials and verification details in the viewer.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES_DATA.map((cert: CertificateItem) => (
            <div
              key={cert.id}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700/80 transition-all duration-200 overflow-hidden flex flex-col justify-between group shadow-lg shadow-black/20"
            >
              <div>
                {/* 1. Certificate image/thumbnail */}
                <div
                  onClick={() => onViewCertificate(cert)}
                  className="relative aspect-4/3 w-full overflow-hidden bg-slate-950 border-b border-slate-800 cursor-pointer"
                >
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                  
                  {/* Subtle hover overlay hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-xs">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 text-white text-xs font-medium border border-slate-700 shadow-md">
                      <Eye className="w-3.5 h-3.5 text-indigo-400" />
                      View Certificate
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 left-2.5 text-[11px] text-slate-300 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded border border-slate-700/70 font-mono">
                    ID: {cert.credentialId}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  {/* 2. Certificate name */}
                  <h3 className="text-base font-bold text-white tracking-tight leading-snug group-hover:text-indigo-300 transition-colors">
                    {cert.name}
                  </h3>

                  {/* 3. Organization & 4. Completion/date information */}
                  <div className="space-y-1.5 text-xs text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span className="text-slate-300">{cert.organization}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    {cert.summary}
                  </p>
                </div>
              </div>

              {/* 5. View Certificate button */}
              <div className="p-5 pt-0 border-t border-slate-800/60 mt-3">
                <button
                  onClick={() => onViewCertificate(cert)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-indigo-600 rounded-lg border border-slate-700 hover:border-indigo-500 transition-all duration-150 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  <Eye className="w-3.5 h-3.5 text-indigo-400 group-hover:text-white" />
                  <span>View Certificate</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
