import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { FYPSection } from './components/FYPSection';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CertificateModal } from './components/CertificateModal';
import { ProjectModal } from './components/ProjectModal';
import { CVModal } from './components/CVModal';
import { GithubModal } from './components/GithubModal';
import { CertificateItem, ProjectItem } from './types';

export default function App() {
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [githubProject, setGithubProject] = useState<ProjectItem | null>(null);
  const [isCVModalOpen, setIsCVModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      {/* Top Navigation Bar */}
      <Navbar onOpenCVModal={() => setIsCVModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. HOME / HERO SECTION with 4 HOME BUTTONS */}
        <Hero onOpenCVModal={() => setIsCVModalOpen(true)} />

        {/* 2. ABOUT SECTION */}
        <About />

        {/* 3. SKILLS SECTION (13 Individual Skill Cards) */}
        <Skills />

        {/* 4. EXPERIENCE SECTION ("Practical Experience & Learning") */}
        <Experience />

        {/* 5. FYP DEDICATED SECTION (Flutter, Python/Flask, AI/ML) */}
        <FYPSection
          onViewProject={(project) => setSelectedProject(project)}
          onOpenGithub={(project) => setGithubProject(project)}
        />

        {/* 6. PROJECTS SECTION (All Project Cards) */}
        <Projects
          onViewProject={(project) => setSelectedProject(project)}
          onOpenGithub={(project) => setGithubProject(project)}
        />

        {/* 7. CERTIFICATES SECTION (Certificate Cards & Lightbox) */}
        <Certificates
          onViewCertificate={(cert) => setSelectedCertificate(cert)}
        />

        {/* 8. CONTACT SECTION (LinkedIn, GitHub, Email & Form) */}
        <Contact
          onOpenGithubModal={() =>
            setGithubProject({
              id: 'github-profile',
              title: 'Kanji Developer Repositories',
              tagline: 'Source repositories for Flutter, Python, and Web implementations',
              description: 'Central GitHub profile and code repositories.',
              fullDescription: 'Public software implementations and capstone codebase.',
              image: '',
              technologies: ['Flutter', 'Python', 'Flask', 'TypeScript'],
              role: 'Developer & Author',
              features: [],
              githubUrl: 'https://github.com/goilkanji',
            })
          }
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenGithub={(p) => {
          setSelectedProject(null);
          setGithubProject(p);
        }}
      />

      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

      <GithubModal
        project={githubProject}
        onClose={() => setGithubProject(null)}
      />
    </div>
  );
}
