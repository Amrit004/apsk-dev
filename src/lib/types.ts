export interface Highlight {
  icon: string;
  title: string;
  description: string;
}

export interface HighlightItem {
  icon: typeof import("lucide-react").Briefcase;
  title: string;
  description: string;
}

export interface Project {
  icon: typeof import("lucide-react").Shield;
  title: string;
  category: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  features: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  grade: string;
  modules: string;
}

export interface SkillCategory {
  icon: typeof import("lucide-react").Code;
  title: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: typeof import("lucide-react").Github;
}
