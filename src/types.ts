export interface Project {
  title: string;
  subtitle: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details: string[];
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  location: string;
  details: string[];
}

export interface Skill {
  name: string;
  category: string;
}
