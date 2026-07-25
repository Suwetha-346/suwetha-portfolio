export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const SOCIALS = {
  github: "https://github.com/Suwetha-346",
  linkedin: "https://linkedin.com/in/suwetha-s-t-12a059294",
  email: "suwetha361@gmail.com",
  phone: "+91 8072661713",
};

export const SKILL_GROUPS = [
  {
    title: "Programming Languages",
    items: ["Java", "Python", "C"],
  },
  {
    title: "Data & Analytics",
    items: ["Power BI", "Python", "MySQL"],
  },
  {
    title: "Databases",
    items: ["MySQL"],
  },
  {
    title: "Tools & Technologies",
    items: ["Power BI", "Google Colab", "Visual Studio Code", "Arduino"],
  },
  {
    title: "Domains",
    items: [
      "Software Development",
      "Backend Development",
      "Data Analytics",
      "Machine Learning",
    ],
  },
  {
    title: "Professional Skills",
    items: ["Problem Solving", "Communication", "Teamwork", "Time Management"],
  },
];

export const ABOUT_CHIPS = [
  "Software Development",
  "Backend Development",
  "Machine Learning",
  "Data Analytics",
  "Problem Solving",
];

export type Project = {
  id: string;
  index: string;
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  liveDemo: string | null;
  github: string | null;
};

export const PROJECTS: Project[] = [
  {
    id: "churn-prediction",
    index: "01",
    title: "Customer Churn Prediction",
    description:
      "Predicts customer retention using machine learning to support data-driven business decisions.",
    highlights: [
      "Developed a machine learning-based customer churn prediction system using Python.",
      "Analyzed customer behavior to identify churn patterns.",
    ],
    tech: ["Python", "Machine Learning"],
    liveDemo: null,
    github: null,
  },
  {
    id: "smart-health-iot",
    index: "02",
    title: "Smart Health IoT Pet Belt",
    description:
      "An IoT-based health monitoring system for real-time pet tracking and wellness monitoring.",
    highlights: [
      "Built a smart monitoring system using ESP32, RFID, GPS, and health sensors.",
      "Integrated a cloud-connected web dashboard for live monitoring and alerts.",
    ],
    tech: ["ESP32", "RFID", "GPS", "Health Sensors", "Cloud Dashboard"],
    liveDemo: null,
    github: null,
  },
  {
    id: "museum-management",
    index: "03",
    title: "Museum Management System",
    description:
      "A backend-focused application for efficiently managing museum operations and records.",
    highlights: [
      "Developed a Java and MySQL application with CRUD functionality.",
      "Designed an interactive UI for museums, artifacts, and employees.",
    ],
    tech: ["Java", "MySQL"],
    liveDemo: null,
    github: null,
  },
];

export const EXPERIENCE = [
  {
    role: "Data Science Intern",
    org: "Krish Tec",
    location: "Coimbatore",
    period: "June 16, 2025 – June 28, 2025",
    responsibilities: [
      "Transformed raw datasets into actionable insights through preprocessing and predictive modeling.",
      "Created visual analytics using Python, Pandas, and Google Colab.",
      "Worked with multiple datasets to strengthen practical data visualization skills.",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology",
    field: "Artificial Intelligence and Data Science",
    institution: "Dr. Mahalingam College of Engineering and Technology",
    affiliation: "Anna University",
    meta: [
      { label: "Expected Graduation", value: "May 2027" },
      { label: "CGPA", value: "9.015" },
    ],
  },
  {
    degree: "HSC",
    field: "Higher Secondary Certificate",
    institution: "G. Ramaswamy Naidu Matriculation Higher Secondary School",
    affiliation: "March 2023",
    meta: [{ label: "Score", value: "92.16%" }],
  },
  {
    degree: "SSLC",
    field: "Secondary School Leaving Certificate",
    institution: "G. Ramaswamy Naidu Matriculation Higher Secondary School",
    affiliation: "March 2021",
    meta: [],
  },
];

export const CERTIFICATIONS = [
  {
    title: "Project Management for Managers",
    issuer: "NPTEL",
    date: "Placeholder", // Completion date not provided
  },
  {
    title: "Social Networks",
    issuer: "NPTEL",
    date: "Placeholder", // Completion date not provided
  },
];

export const ACHIEVEMENTS = [
  {
    title: "First Rank Holder",
    meta: "Academic Year 2024–2025",
  },
  {
    title: "Accenture Innovation Challenge",
    meta: "Badge & Certificate Recipient",
  },
];
