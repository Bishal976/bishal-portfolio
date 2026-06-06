export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/Bishal976",
  linkedin: "https://linkedin.com/in/bishal-kumar-054b30192",
  twitter: "https://x.com/RDXgrinds",
  instagram: "https://instagram.com/bishalsingh2225",
  leetcode: "https://leetcode.com/singhbishalkumarsingh",
  email: "elevatedsoul2225@gmail.com",
};

export const TYPEWRITER_PHRASES = [
  "Senior Frontend Developer",
  "React & Next.js Engineer",
  "AI-Powered Builder",
];

export const STATS = [
  { number: "2+", label: "Years at Scale" },
  { number: "4",  label: "Patents Filed" },
  { number: "2K+", label: "Students Mentored" },
  { number: "5",  label: "Engineers Led" },
];

export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend Core",
    icon: "code",
    skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Dev Tooling & Infra",
    icon: "server",
    skills: ["Git", "GitLab CI/CD", "Vite", "Webpack", "REST APIs", "GCP", "Vercel", "Node.js"],
  },
  {
    category: "Testing & Quality",
    icon: "cpu",
    skills: ["Jest", "React Testing Library", "WCAG 2.1 Accessibility", "Cross-browser Testing"],
  },
  {
    category: "AI & Other",
    icon: "layers",
    skills: ["LLM Integration", "Prompt Engineering", "Solidity", "Python", "Graphic Design"],
  },
];

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  metrics?: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Senior Frontend Developer",
    company: "Josh Technology Group",
    period: "Oct 2024 – Present",
    description:
      "Leading frontend architecture across complex product surfaces. Manage a 5-engineer team through design reviews, sprint planning, and PR mentorship. Own full delivery cycles — from scoping to CI/CD.",
    metrics: ["60% efficiency gain", "40% render latency drop", "30% faster load times"],
  },
  {
    role: "Frontend Developer Engineer",
    company: "Josh Technology Group",
    period: "Jan 2023 – Oct 2024",
    description:
      "Built high-complexity modules end-to-end: multi-step form architectures with deep validation, scalable dashboards over large datasets, and SEO-optimised public-facing microsites with Next.js.",
    metrics: ["45% organic reach growth", "10K+ platform users", "80+ reusable templates"],
  },
  {
    role: "Google Cloud Facilitator",
    company: "Google",
    period: "2021 – 2022",
    description:
      "Ran cloud awareness campaigns and guided 2,000+ students through GCP certifications and lab completions across the university ecosystem.",
  },
  {
    role: "Founder — Cyber Cell",
    company: "Galgotia University",
    period: "2020 – 2022",
    description:
      "Founded and scaled a 35-member cybersecurity club. Organised technical events, awareness drives, and hands-on workshops that became a flagship student initiative.",
  },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  status?: "wip" | "request";
}

export const PROJECTS: Project[] = [
  {
    title: "Secured Identity Storage DApp",
    description:
      "Decentralised application for tamper-proof identity storage. Smart contracts in Solidity, deployed via Hardhat; React frontend with Material-UI.",
    tags: ["React", "Solidity", "Hardhat", "Web3"],
    github: "https://github.com/Bishal976",
  },
  {
    title: "Steganography Tool",
    description:
      "Browser-native tool to hide and extract secret payloads inside images using LSB encoding — no server, no upload.",
    tags: ["React", "JavaScript", "Canvas API"],
    github: "https://github.com/Bishal976/steganography-project",
  },
  {
    title: "Photo Location Organiser",
    description:
      "Python CLI that auto-sorts a photo library into geo-tagged folders by parsing GPS metadata from EXIF data.",
    tags: ["Python", "EXIF", "GPS Metadata"],
    github: "https://github.com/Bishal976",
  },
  {
    title: "Micro-SaaS — TBA",
    description: "Building in public. A focused product shipping in 2026.",
    tags: ["Next.js", "TypeScript", "SaaS"],
    status: "wip",
  },
];

export interface Recognition {
  icon: string;
  title: string;
  description: string;
  link?: string;
}

export const RECOGNITION: Recognition[] = [
  {
    icon: "🥈",
    title: "Silver Medal",
    description: "B.Tech CSE, Galgotia University — CGPA 9.23 / 10",
  },
  {
    icon: "📄",
    title: "4 Patents Filed",
    description: "Innovations in software and computing systems",
  },
  {
    icon: "📝",
    title: "2 Research Papers",
    description: "Published in peer-reviewed academic journals",
  },
  {
    icon: "📖",
    title: "1 Book Chapter",
    description: "Co-authored chapter in a technical publication",
  },
  {
    icon: "☁️",
    title: "Google Cloud Certified",
    description: "Certified GCP practitioner and facilitator",
    link: "https://www.qwiklabs.com/public_profiles/e10ea8e8-0e5c-49dd-aed9-7021df307faf",
  },
  {
    icon: "🏆",
    title: "Hackathon Wins",
    description: "nameSpace Community and university-level competitions",
  },
];
