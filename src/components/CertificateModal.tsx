import React, { useEffect, useState } from 'react';
import { CertificateItem } from '../types';
import { X, Check, Copy, Printer, ExternalLink, ShieldCheck, ZoomIn, ZoomOut } from 'lucide-react';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [zoomed, setZoomed] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!certificate) return null;

  const copyCredentialId = () => {
    navigator.clipboard.writeText(certificate.credentialId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90 sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-indigo-400" />
            <span className="text-sm font-semibold text-white">Certificate Credential Viewer</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoomed(!zoomed)}
              className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
              title={zoomed ? 'Zoom Out' : 'Zoom In'}
            >
              {zoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
            </button>
            <button
              onClick={handlePrint}
              className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
              title="Print Document"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
              title="Close (ESC)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Certificate Image Frame */}
          <div
            className={`relative rounded-xl overflow-hidden border border-slate-700 bg-slate-950 flex items-center justify-center transition-all ${
              zoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            onClick={() => setZoomed(!zoomed)}
          >
            <img
              src={certificate.image}
              alt={certificate.name}
              className={`w-full object-contain transition-transform duration-200 ${
                zoomed ? 'scale-125 my-8' : 'scale-100 max-h-[50vh]'
              }`}
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Certificate Information Details */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-8 space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {certificate.name}
              </h2>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
                <span className="font-semibold text-indigo-300">{certificate.organization}</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>{certificate.date}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {certificate.summary}
              </p>

              {/* Skills learned */}
              <div className="pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Competencies Validated:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {certificate.skillsLearned.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-slate-300 bg-slate-800 border border-slate-700 px-2.5 py-0.5 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Credential Verification Box */}
            <div className="md:col-span-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Credential Verification
              </div>

              <div>
                <div className="text-[11px] text-slate-500 mb-0.5">Verification ID:</div>
                <div className="flex items-center justify-between p-2 rounded bg-slate-900 border border-slate-800">
                  <span className="text-xs font-mono text-white select-all">
                    {certificate.credentialId}
                  </span>
                  <button
                    onClick={copyCredentialId}
                    className="text-slate-400 hover:text-white p-1"
                    title="Copy ID"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 leading-relaxed">
                This certificate credential records authenticated completion of required course projects, exams,
                and practical laboratory assessments.
              </div>

              <button
                onClick={handlePrint}
                className="w-full py-2 px-3 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5 text-slate-300" />
                <span>Print Document</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between text-xs text-slate-400">
          <span>Press ESC or click outside to dismiss</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
