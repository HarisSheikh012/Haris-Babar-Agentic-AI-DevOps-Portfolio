
export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}
