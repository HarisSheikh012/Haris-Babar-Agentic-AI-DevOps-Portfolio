
import { Experience, Project, SkillGroup } from './types';


export const HARIS_CV = {
  name: "Haris Babar",
  email: "harisbabar012@gmail.com",
  phone: "+92-316-6861729",
  links: {
    github: "https://github.com/HarisSheikh012",
    linkedin: "https://www.linkedin.com/in/harissheikh012/",
  },
  summary: "Software Engineer (AI & Full Stack). Building the future of automation with a focus on scalable agentic systems, modern web engineering, and cloud infrastructure.",
  skills: [
    {
      category: "Cloud",
      items: ["AWS (EC2, S3, Lambda)", "CloudFormation & IaC", "CI/CD", "Docker", "Linux", "Networking"]
    },
    {
      category: "Programming",
      items: ["Python", "JavaScript"]
    },
    {
      category: "AI Agentic",
      items: ["Open-source LLM", "MCP", "Agentic Frameworks", "Models", "Automation"]
    },
    {
      category: "Web & Full-Stack",
      items: ["HTML & CSS", "React.js", "TypeScript", "Node.js", "Express.js", "SQL", "MongoDB"]
    },
    {
      category: "Tools & Collaboration",
      items: ["Git", "GitHub", "Prompt Engineering"]
    }
  ] as SkillGroup[],
  experience: [
    {
      period: "SEP 2026 – PRESENT",
      role: "Software Engineer (AI & Full Stack)",
      company: "Stacklist",
      location: "United States (REMOTE)",
      description: [
        "Engineering scalable software infrastructure and full-stack web solutions.",
        "Developing AI-integrated features and distributed web systems."
      ]
    },
    {
      period: "JAN 2026 – AUG 2026",
      role: "AI Developer & DevOps",
      company: "KloudStack",
      location: "Reading, UK (REMOTE)",
      description: [
        "Optimization of AI-driven solutions focusing on Agentic AI systems.",
        "Integrating AI models into production using Google ADK and DevOps best practices.",
        "Containerization deployments using Docker and infrastructure observability."
      ]
    },
    {
      period: "OCT 2025 – JAN 2026",
      role: "Agentic AI & DevOps Engineer Intern",
      company: "KloudStack",
      location: "Reading, UK (REMOTE)",
      description: [
        "Design and deployment of Agentic AI systems using Google ADK and A2A protocols.",
        "Created CI/CD pipelines for automated testing, build, and cloud deployments.",
        "Managed scalable cloud infrastructure focusing on reliability and performance."
      ]
    },
    {
      period: "DEC 2024 – OCT 2025",
      role: "Software Engineer",
      company: "Freelance | Self-Employed",
      location: "Punjab, Pakistan (REMOTE)",
      description: [
        "Developed full-stack web applications and robust RESTful APIs using Node.js and Express.js.",
        "Delivered custom client architectures, responsive frontend interfaces, and database solutions."
      ]
    },
    {
      period: "SEP 2024 – DEC 2024",
      role: "Software Developer",
      company: "QAQF Quality Assessment and Qualification Framework",
      location: "Birmingham, UK (REMOTE)",
      description: [
        "Developed backend services and API integrations using Node.js and Express.js.",
        "Built full-stack components and optimized real-time communication workflows."
      ]
    },
    {
      period: "FEB 2023 – NOV 2023",
      role: "Software Developer",
      company: "Queper Technologies",
      location: "Punjab, Pakistan (ON-SITE)",
      description: [
        "Built dynamic, responsive web applications and front-end architectures.",
        "Collaborated with cross-functional teams on component design, testing, and UI integration."
      ]
    },
    {
      period: "NOV 2022 – JAN 2023",
      role: "Web Application Developer",
      company: "Queper Technologies",
      location: "Punjab, Pakistan (ON-SITE)",
      description: [
        "Implemented state management and debugging across web applications using Redux.js.",
        "Developed and maintained core front-end components and interactive UI modules."
      ]
    },
    {
      period: "SEP 2022 – NOV 2022",
      role: "Frontend Developer",
      company: "Cu4Soft",
      location: "Punjab, Pakistan (ON-SITE)",
      description: [
        "Developed responsive user interfaces and websites utilizing Bootstrap and modern web standards.",
        "Assisted in front-end styling, cross-browser compatibility, and performance optimization."
      ]
    }
  ] as Experience[],
  projects: [
    {
      title: "FitForge — Multi-Tenant Gym Management SaaS",
      description: "A production-oriented, multi-tenant gym management SaaS built with React, Node.js, PostgreSQL, Prisma, and Docker. Designed to manage members, memberships, trainers, classes, attendance, payments, analytics, and full gym operations across isolated gym tenants.",
      tags: ["SaaS", "Multi-Tenant", "React", "Node.js", "PostgreSQL", "Prisma", "Docker"],
      link: "https://github.com/HarisSheikh012/FitForge"
    },
    {
      title: "RedVapt — AI Penetration Testing Platform",
      description: "Developed an AI-powered penetration testing platform designed to automate vulnerability scanning and threat detection.",
      tags: ["AI/ML", "Python", "Cybersecurity", "Automation", "Web Security"],
      link: "https://github.com/HarisSheikh012/RedVapt---AI-Penetration-Testing-Platform"
    },
    {
      title: "Multiagent Business Agentic Project",
      description: "Developed a multi-agent business automation system leveraging Google ADK and MCP for autonomous decision-making.",
      tags: ["Agentic AI", "Google ADK", "MCP", "Python"],
      link: "https://github.com/HarisSheikh012/AI-Multi-Agent-Application"
    },
    {
      title: "AI Text-Based Emotion Recognition",
      description: "Built a machine learning model using Python, NLP, and Scikit-learn to classify emotions from text input.",
      tags: ["NLP", "Python", "Scikit-Learn", "AI"],
      link: "https://github.com/HarisSheikh012/Text-Emotion-Recognition"
    },
    {
      title: "TerraNova Reforestation",
      description: "Donation-based platform for reforestation with live tree donation tracking and analytics dashboards.",
      tags: ["React", "Data Analytics", "Environment"]
    },
    {
      title: "Socket.IO Real-time Chat",
      description: "Seamless instant messaging app built with Socket.IO for both frontend and backend integration.",
      tags: ["Socket.IO", "Node.js", "React"],
      link: "https://github.com/HarisSheikh012/Chat-Application"
    },
    {
      title: "Afzal Hospital Portal",
      description: "Online presence and services portal for a hospital, ensuring accessibility and information flow.",
      tags: ["Web Dev", "Responsive Design"]
    },
    {
      title: "Auto Electronics Website",
      description: "Delivered a fully deployed and optimized retail website, improving product visibility and customer engagement.",
      tags: ["Retail", "E-commerce", "Performance"],
      link: "https://github.com/HarisSheikh012/aeled"
    },
    {
      title: "Femme Physique Care",
      description: "Physiotherapy and DPT services portal with high focus on patient booking and health tech integration.",
      tags: ["Physiotherapy", "Health Tech", "DPT Services"],
      link: "https://github.com/HarisSheikh012/Femme-Physique-Care"
    }
  ] as Project[]
};
