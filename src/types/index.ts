export interface SkillItem {
  id: string;
  name: string;
  category: 'development' | 'ai' | 'business' | 'tools';
  categoryLabel: string;
  level: string;
  description: string;
  tools: string[];
  practicalApplication: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  role: string;
  features: string[];
  architecture?: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface CertificateItem {
  id: string;
  name: string;
  organization: string;
  date: string;
  credentialId: string;
  image: string;
  skillsLearned: string[];
  verificationUrl?: string;
  summary: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  period: string;
  category: string;
  summary: string;
  outcomes: string[];
  technologies: string[];
}
