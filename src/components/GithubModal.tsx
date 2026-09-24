import React, { useState, useEffect } from 'react';
import { ProjectItem } from '../types';
import { X, FolderGit2, Copy, Check, Terminal, ExternalLink, GitBranch, ShieldAlert } from 'lucide-react';

interface GithubModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const GithubModal: React.FC<GithubModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const cloneCommand = `git clone ${project.githubUrl || 'https://github.com/goilkanji/repository.git'}`;

  const copyClone = () => {
    navigator.clipboard.writeText(cloneCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-2">
            <FolderGit2 className="w-5 h-5 text-indigo-400" />
            <span className="text-sm font-semibold text-white">GitHub Repository Information</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4 text-xs">
          <div>
            <div className="flex items-center gap-2 text-slate-400 text-[11px] mb-1">
              <GitBranch className="w-3.5 h-3.5 text-indigo-400" />
              <span>Repository / {project.id}</span>
            </div>
            <h3 className="text-base font-bold text-white leading-snug">
              {project.title}
            </h3>
          </div>

          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-slate-400 text-[11px]">
              <span className="font-mono">HTTPS Clone Command</span>
              <span>Branch: main</span>
            </div>
            <div className="flex items-center justify-between gap-2 p-2 rounded bg-slate-900 font-mono text-indigo-300 text-xs">
              <span className="truncate select-all">{cloneCommand}</span>
              <button
                onClick={copyClone}
                className="p-1 text-slate-400 hover:text-white shrink-0"
                title="Copy command"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Honest placeholder notice */}
          <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 text-slate-400 leading-relaxed">
            <span className="font-semibold text-slate-200">Repository Status: </span>
            This codebase is maintained in active local development. Code commits and documentation are staged for
            synchronization upon project defense and publication milestones.
          </div>

          <div className="pt-2 flex items-center justify-between gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition-colors"
            >
              <span>Explore GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
