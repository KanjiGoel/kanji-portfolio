import React from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { FolderGit2, ExternalLink, User, Wrench } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectsProps {
  onViewProject: (project: ProjectItem) => void;
  onOpenGithub: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onViewProject, onOpenGithub }) => {
  return (
    <section id="projects" className="py-20 md:py-24 border-t border-slate-800/80 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
            <span>Portfolio Works</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Applications &amp; Software Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Featured Projects &amp; Implementations
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Practical projects spanning healthcare AI mobile development, responsive web architectures,
            e-commerce storefronts, and relational database systems.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700/80 transition-all duration-200 overflow-hidden flex flex-col justify-between group shadow-lg shadow-black/20"
            >
              <div>
                {/* 1. Project Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="p-6 space-y-4">
                  {/* 2. Project Title */}
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* 3. Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* 4. Technologies (Clean unboxed representation) */}
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 mb-2">
                      <Wrench className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Technologies:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs text-slate-300 bg-slate-800/80 border border-slate-700/60 px-2 py-0.5 rounded text-[11px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 5. My Role */}
                  <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300">
                    <div className="flex items-center gap-1.5 font-semibold text-slate-200 mb-1">
                      <User className="w-3.5 h-3.5 text-sky-400" />
                      <span>My Role:</span>
                    </div>
                    <p className="leading-relaxed text-slate-400">{project.role}</p>
                  </div>
                </div>
              </div>

              {/* 6 & 7: View Project button & GitHub button */}
              <div className="p-6 pt-0 border-t border-slate-800/60 mt-4 flex items-center justify-between gap-3">
                <button
                  onClick={() => onViewProject(project)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-colors whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View Project</span>
                </button>

                <button
                  onClick={() => onOpenGithub(project)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                >
                  <FolderGit2 className="w-3.5 h-3.5 text-slate-300" />
                  <span>GitHub</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
