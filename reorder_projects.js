const fs = require('fs');

let data = fs.readFileSync('lib/data.ts', 'utf8');

// Also update the Project type to include year
data = data.replace(
  /export type Project = \{\s*id: string;\s*index: string;\s*title: string;\s*tag: string;\s*description: string;\s*highlights: string\[\];\s*tech: string\[\];\s*image: string;\s*liveDemo: string \| null;\s*github: string \| null;\s*\};/m,
  \`export type Project = {
  id: string;
  index: string;
  title: string;
  tag: string;
  description: string;
  highlights: string[];
  tech: string[];
  image: string;
  liveDemo: string | null;
  github: string | null;
  year: string;
};\`);

const newProjects = \`export const PROJECTS: Project[] = [
  {
    id: "churn-prediction",
    index: "01",
    title: "Customer Churn Prediction",
    tag: "Machine Learning",
    image: "/images/churn-prediction.png",
    description:
      "Predicts customer retention using machine learning to support data-driven business decisions.",
    highlights: [
      "Developed a machine learning-based customer churn prediction system using Python.",
      "Analyzed customer behavior to identify churn patterns.",
    ],
    tech: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    liveDemo: null,
    github: "https://github.com/Suwetha-346/Customer_churn_prediction",
    year: "2026",
  },
  {
    id: "spotify-music-analytics",
    index: "02",
    title: "Spotify Music Trend Analysis",
    tag: "Data Analytics",
    image: "",
    description:
      "Analyzed 10 years of music listening behavior through ETL processing and trend analysis.",
    highlights: [
      "Developed a comprehensive analytics project using Python and data analytics techniques.",
      "Performed ETL processing to uncover insights across a decade of music trends.",
    ],
    tech: ["Python", "ETL", "Data Analytics", "Pandas"],
    liveDemo: null,
    github: null,
    year: "2026",
  },
  {
    id: "sales-analysis",
    index: "03",
    title: "Sales Analysis Dashboard",
    tag: "Data Analytics",
    image: "",
    description:
      "An end-to-end sales analysis project involving data cleaning, relational storage, and interactive visualization.",
    highlights: [
      "Cleaned and preprocessed raw sales data using Microsoft Excel.",
      "Stored and queried the refined data in a MySQL database, then built a Power BI dashboard for insights.",
    ],
    tech: ["Excel", "MySQL", "Power BI", "Data Cleaning"],
    liveDemo: null,
    github: null,
    year: "2026",
  },
  {
    id: "smart-health-iot",
    index: "04",
    title: "Smart Health IoT Pet Belt",
    tag: "IoT / Hardware",
    image: "/images/smart-health-iot.png",
    description:
      "An IoT-based health monitoring system for real-time pet tracking and wellness monitoring.",
    highlights: [
      "Built a smart monitoring system using ESP32, RFID, GPS, and health sensors.",
      "Integrated a cloud-connected web dashboard for live monitoring and alerts.",
    ],
    tech: ["ESP32", "RFID", "GPS", "Health Sensors", "Cloud Dashboard"],
    liveDemo: null,
    github:
      "https://github.com/Suwetha-346/Smart-IoT-Belt-Web-System-for-Dog-Creche-Management",
    year: "2025",
  },
  {
    id: "smart-parking",
    index: "05",
    title: "Smart Parking System",
    tag: "IoT / Hardware",
    image: "",
    description:
      "An IoT solution to identify empty parking slots and reduce traffic congestion in cities.",
    highlights: [
      "Built using Arduino and IR sensors for real-time slot detection.",
      "Aims to minimize traffic congestion by optimizing parking availability.",
    ],
    tech: ["Arduino", "IR Sensors", "Hardware", "IoT"],
    liveDemo: null,
    github: null,
    year: "2024",
  },
  {
    id: "museum-management",
    index: "06",
    title: "Museum Management System",
    tag: "Full Stack",
    image: "/images/museum-management.png",
    description:
      "A backend-focused application for efficiently managing museum operations and records.",
    highlights: [
      "Developed a Java and MySQL application with CRUD functionality.",
      "Designed an interactive UI for museums, artifacts, and employees.",
    ],
    tech: ["Java", "MySQL", "CRUD", "Backend"],
    liveDemo: null,
    github: "https://github.com/Suwetha-346/Museum-Management-System",
    year: "2024",
  },
];\`;

data = data.replace(/export const PROJECTS: Project\[\] = \[[\s\S]*?\];/m, newProjects);
fs.writeFileSync('lib/data.ts', data);
console.log('PROJECTS reordered with years successfully!');
