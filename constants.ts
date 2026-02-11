
import { Experience, Project, SkillGroup } from './types';

export const HARIS_CV = {
  name: "Haris Babar",
  email: "harisbabar012@gmail.com",
  phone: "+92-316-6861729",
  links: {
    github: "https://github.com/HarisSheikh012",
    linkedin: "https://www.linkedin.com/in/harissheikh012/",
  },
  summary: "Junior Agentic AI Developer & Cloud & DevOps Enthusiastic engineer. Building the future of automation with a focus on scalable agentic systems.",
  skills: [
    { category: "Agentic AI & Tools", items: ["Google ADK", "A2A", "MCP", "Google AI Studio"] },
    { category: "DevOps & Cloud", items: ["Azure", "Docker", "GitHub Actions", "CI/CD"] },
    { category: "Programming & IDEs", items: ["Python", "Node JS", "React JS", "Antigravity/VS Code"] },
    { category: "Networking", items: ["CCNA", "IP", "HTTP/HTTPS", "CLI"] }
  ] as SkillGroup[],
  experience: [
    {
      period: "JAN 2026 – FEB 2026",
      role: "Junior AI Developer & DevOps",
      company: "KloudStack",
      location: "Reading, UK (REMOTE)",
      description: [
        "Optimization of AI-driven solutions focusing on Agentic AI systems.",
        "Integrating AI models into production using DevOps best practices.",
        "Containerization deployments using Docker and infrastructure observability."
      ]
    },
    {
      period: "OCT 2025 – DEC 2025",
      role: "Agentic AI & Azure DevOps Intern",
      company: "KloudStack",
      location: "Reading, UK (REMOTE)",
      description: [
        "Design and deployment of Agentic AI systems using Google ADK.",
        "Created Azure DevOps pipelines for automated build/test.",
        "Managed infrastructure on Azure Cloud focusing on scalability."
      ]
    },
    {
      period: "SEP 2024 – DEC 2024",
      role: "Software Developer",
      company: "QAQF",
      location: "Birmingham, UK (REMOTE)",
      description: [
        "Developed real-time chat application using Socket.IO.",
        "Built full-stack components for efficient message synchronization.",
        "Optimized real-time messaging workflows for better UX."
      ]
    },
    {
      period: "NOV 2023 – SEP 2024",
      role: "Software Developer",
      company: "Queper",
      location: "Multan, Pakistan",
      description: [
        "Assisted in developing web interfaces and basic automation scripts.",
        "Collaborated with senior devs on testing and bug resolution.",
        "Explored initial AI integration for internal tooling."
      ]
    }
  ] as Experience[],
  projects: [
    {
      title: "RedVapt — AI Penetration Testing Platform",
      description: "Developed an AI-powered penetration testing platform designed to automate vulnerability scanning and threat detection.",
      tags: ["AI/ML", "Python", "Cybersecurity", "Automation", "Web Security"]
    },
    {
      title: "Multiagent Business Agentic Project",
      description: "Developed a multi-agent business automation system leveraging Google ADK and MCP for autonomous decision-making.",
      tags: ["Agentic AI", "Google ADK", "MCP", "Python"]
    },
    {
      title: "AI Text-Based Emotion Recognition",
      description: "Built a machine learning model using Python, NLP, and Scikit-learn to classify emotions from text input.",
      tags: ["NLP", "Python", "Scikit-Learn", "AI"]
    },
    {
      title: "TerraNova Reforestation",
      description: "Donation-based platform for reforestation with live tree donation tracking and analytics dashboards.",
      tags: ["React", "Data Analytics", "Environment"]
    },
    {
      title: "Socket.IO Real-time Chat",
      description: "Seamless instant messaging app built with Socket.IO for both frontend and backend integration.",
      tags: ["Socket.IO", "Node.js", "React"]
    },
    {
      title: "Afzal Hospital Portal",
      description: "Online presence and services portal for a hospital, ensuring accessibility and information flow.",
      tags: ["Web Dev", "Responsive Design"]
    },
    {
      title: "Auto Electronics Website",
      description: "Delivered a fully deployed and optimized retail website, improving product visibility and customer engagement.",
      tags: ["Retail", "E-commerce", "Performance"]
    },
    {
      title: "Femme Physique Care",
      description: "Physiotherapy and DPT services portal with high focus on patient booking and health tech integration.",
      tags: ["Physiotherapy", "Health Tech", "DPT Services"]
    }
  ] as Project[]
};
