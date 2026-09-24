import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Github, Send, Copy, Check, MessageSquare, ExternalLink, MapPin } from 'lucide-react';

interface ContactProps {
  onOpenGithubModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenGithubModal }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [showLinkedInNotice, setShowLinkedInNotice] = useState<boolean>(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-24 border-t border-slate-800/80 bg-slate-950/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
            <span>Direct Channels</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Connect &amp; Collaborate
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Interested in discussing software development roles, project collaborations, or the Child Malnutrition
            AI system? Feel free to reach out directly through any of the channels below.
          </p>
        </div>

        {/* REQUIRED CONTACT BUTTONS: LinkedIn, GitHub, Email */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {/* 1. LinkedIn Button */}
          <div className="relative">
            <button
              onClick={() => setShowLinkedInNotice(!showLinkedInNotice)}
              className="w-full p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 transition-all flex items-center justify-between group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-blue-950/60 border border-blue-800/60 text-blue-400 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-400 font-medium">Professional Network</div>
                  <div className="text-sm font-semibold text-white">LinkedIn</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </button>

            {showLinkedInNotice && (
              <div className="absolute top-full left-0 right-0 mt-2 p-3 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-300 shadow-xl z-20">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-semibold text-white">LinkedIn Profile Status</span>
                  <button
                    onClick={() => setShowLinkedInNotice(false)}
                    className="text-slate-400 hover:text-white text-xs"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-slate-400 mb-2">
                  Profile handle is currently configured with placeholder link. Click to visit standard LinkedIn directory:
                </p>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  Visit LinkedIn <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>

          {/* 2. GitHub Button */}
          <button
            onClick={onOpenGithubModal}
            className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 transition-all flex items-center justify-between group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 group-hover:scale-105 transition-transform">
                <Github className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs text-slate-400 font-medium">Code Repositories</div>
                <div className="text-sm font-semibold text-white">GitHub</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
          </button>

          {/* 3. Email Button */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 transition-all flex items-center justify-between group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs text-slate-400 font-medium">Direct Inbox</div>
                <div className="text-sm font-semibold text-white truncate max-w-[130px] sm:max-w-none">
                  {PERSONAL_INFO.email}
                </div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
          </a>
        </div>

        {/* Detailed Contact Section: Email Quick Copy + Interactive Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Quick Details & Location */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white">Direct Communication</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Messages sent via email are typically reviewed within 24 hours. You can also copy the raw email
                address for your mail client.
              </p>

              <div className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-2 overflow-hidden text-xs text-slate-300 font-mono">
                  <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </div>
                <button
                  onClick={copyEmail}
                  className="px-2.5 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded transition-colors flex items-center gap-1 shrink-0 ml-2"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Right: Working Interactive Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleFormSubmit}
              className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 space-y-4"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-white mb-2">
                <MessageSquare className="w-4 h-4 text-indigo-400" />
                <span>Send a Direct Message</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Name <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Email <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Inquiry regarding Software Engineering / FYP collaboration"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Message <span className="text-indigo-400">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 rounded-lg shadow-sm transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  {formStatus === 'sending' ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {formStatus === 'success' && (
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    <Check className="w-4 h-4" />
                    <span>Message received! Thank you for reaching out.</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
