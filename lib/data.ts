export const NAV_LINKS = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#skills", label: "SKILLS" },
  { href: "#certifications", label: "CERTS" },
  { href: "#profiles", label: "PROFILES" },
  { href: "#contact", label: "CONTACT" },
];

export const SOCIALS = {
  github: "https://github.com/Suwetha-346",
  linkedin: "https://linkedin.com/in/suwetha-s-t-12a059294",
  linkedinActivity: "https://www.linkedin.com/in/suwetha-s-t-12a059294/recent-activity/all/",
  email: "suwetha361@gmail.com",
  phone: "+91 8072661713",
};

export const ABOUT_TEXT =
  "I am an AI & Data Science undergraduate who enjoys building software that turns data into meaningful insights and real-world applications. My interest lies at the intersection of software development, backend engineering, machine learning, and analytics, where I can solve practical problems through technology. Over the past few years, I've worked on projects ranging from customer churn prediction and IoT-based health monitoring to database-driven management systems. Each project has strengthened my ability to learn new technologies quickly and apply them effectively. Code is logic, Data is the canvas.";

export const SKILL_FOCUS = {
  title: "AI & DATA SCIENCE",
  subtitle: "Machine learning, analytics & scalable applications",
  description:
    "Building data-driven solutions and intelligent software using Python, Java, and modern analytics tools. Creating end-to-end ML pipelines and backend systems.",
  tools: [
    "Python",
    "Java",
    "MySQL",
    "Power BI",
    "Google Colab",
    "Machine Learning",
    "Arduino",
    "ESP32",
  ],
};

export const TECH_STACK = [
  { name: "Java", subtitle: "Intermediate", icon: "☕", category: "Programming", progress: 70 },
  { name: "Python", subtitle: "Basic", icon: "🐍", category: "Programming", progress: 40 },
  { name: "C Language", subtitle: "Basic", icon: "C", category: "Programming", progress: 40 },
  { name: "HTML5", subtitle: "Basic", icon: "5", category: "Web Tech", progress: 40 },
  { name: "CSS3", subtitle: "Basic", icon: "CSS", category: "Web Tech", progress: 40 },
  { name: "JavaScript", subtitle: "Basic", icon: "JS", category: "Web Tech", progress: 40 },
  { name: "Power BI", subtitle: "Intermediate", icon: "📊", category: "Tools & DB", progress: 70 },
  { name: "Microsoft Excel", subtitle: "Intermediate", icon: "📗", category: "Tools & DB", progress: 70 },
  { name: "Google Colab", subtitle: "Intermediate", icon: "📙", category: "Tools & DB", progress: 70 },
  { name: "VS Code", subtitle: "Intermediate", icon: "💻", category: "Tools & DB", progress: 70 },
  { name: "MySQL", subtitle: "Intermediate", icon: "🗄️", category: "Tools & DB", progress: 70 },
  { name: "Problem-Solving", subtitle: "Algorithmic Mindset", icon: "🧩", category: "Soft Skills", progress: 90 },
  { name: "Quick Learner", subtitle: "Rapid Tech Adoption", icon: "⚡", category: "Soft Skills", progress: 90 },
  { name: "Teamwork", subtitle: "Collaborative Execution", icon: "👥", category: "Soft Skills", progress: 90 },
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
  tag: string;
  description: string;
  highlights: string[];
  tech: string[];
  image: string;
  liveDemo: string | null;
  github: string | null;
  year: string;
};

export const PROJECTS: Project[] = [
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
    github: "https://github.com/Suwetha-346/Music_trends_project",
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
];

export type TimelineEntry = {
  year: string;
  role: string;
  subtitle: string;
  description: string;
};

export const TIMELINE: TimelineEntry[] = [
  {
    year: "2025",
    role: "Data Science Intern",
    subtitle: "Krish Tec",
    description:
      "Transformed raw datasets into actionable insights through preprocessing and predictive modeling. Created visual analytics using Python, Pandas, and Google Colab.",
  },
  {
    year: "2023 - 2027",
    role: "AI & Data Science Undergraduate",
    subtitle: "Dr. Mahalingam College of Engineering and Technology, Pollachi",
    description:
      "Pursuing B.Tech while building end-to-end Machine Learning pipelines, IoT hardware systems, and backend database applications. Current CGPA: 8.94",
  },
  {
    year: "2023",
    role: "Higher Secondary Certificate (HSC)",
    subtitle: "G. Ramaswamy Naidu Matriculation Higher Secondary School, Coimbatore",
    description:
      "Completed HSC with Academic Distinction (92.16%). Built foundational mastery in advanced mathematics and computer science.",
  },
  {
    year: "2021",
    role: "Secondary School Leaving Certificate (SSLC)",
    subtitle: "G. Ramaswamy Naidu Matriculation Higher Secondary School, Coimbatore",
    description:
      "Successfully completed Secondary School Leaving Certificate (SSLC) with a passing grade.",
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
      { label: "CGPA", value: "8.94" }
    ],
  },
  {
    degree: "HSC",
    field: "Higher Secondary Certificate",
    institution: "G. Ramaswamy Naidu Matriculation Higher Secondary School",
    affiliation: "March 2023",
    meta: [{ label: "Score", value: "92.16%" }],
  },
];

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  description: string;
  image: string;
  link: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: "academic-rank-1",
    title: "1st Rank Academic Excellence Award (2024-2025)",
    issuer: "Dr. Mahalingam College of Engineering & Tech",
    date: "Academic Year 2024-2025",
    category: "Academic Honor",
    description:
      "Honored with First Rank in B.Tech AI & Data Science by the academic jury for achieving top scholastic proficiency and academic distinction.",
    image: "/images/academic_success_stage.jpg",
    link: "https://www.linkedin.com/in/suwetha-s-t-12a059294/recent-activity/all/",
  },
  {
    id: "krishtec-internship",
    title: "Data Science Internship Certificate",
    issuer: "Krish Tec",
    date: "June 2025",
    category: "Internship",
    description:
      "Successfully completed Data Science internship focusing on data preprocessing, predictive modeling, and analytics using Python & Pandas.",
    image: "/images/krishtec_new.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_datascience-internship-krishtec-activity-7348895261361922048-gIxk?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
  },
  {
    id: "nptel-social-networks",
    title: "NPTEL: Social Networks Elite Certificate",
    issuer: "NPTEL / IIT Madras",
    date: "2024",
    category: "Course Completion",
    description:
      "Earned Elite Certification in Social Networks covering graph algorithms, network analysis, centrality measures, and computational social science.",
    image: "/images/academic_award_stage.jpg",
    link: "https://www.linkedin.com/in/suwetha-s-t-12a059294/recent-activity/all/",
  },
  {
    id: "nptel-project-management",
    title: "NPTEL: Project Management for Managers (Elite)",
    issuer: "NPTEL / IIT Roorkee",
    date: "Jul-Oct 2024",
    category: "Course Completion",
    description:
      "Successfully completed the 12-week course 'Project Management for Managers' with a consolidated score of 65%.",
    image: "/images/nptel_project_management.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_nptel-projectmanagement-learning-activity-7262831001943355393-r22z?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
  },
  {
    id: "nptel-python",
    title: "NPTEL: The Joy of Computing using Python",
    issuer: "NPTEL / IIT Madras",
    date: "Jan-Apr 2024",
    category: "Course Completion",
    description:
      "Successfully completed the 12-week course with a consolidated score of 58%.",
    image: "/images/nptel_python.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_hello-connections-i-have-successfully-activity-7233770060706627584-hSXU?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
  },
  {
    id: "tcs-ion-nqt",
    title: "TCS iON NQT - IT (63.48%)",
    issuer: "TCS iON",
    date: "June 2026",
    category: "Assessment",
    description:
      "Successfully cleared the TCS iON National Qualifier Test (NQT) for IT with a total percentage of 63.48%, demonstrating proficiency in Foundation, Advanced Reasoning, and Java Programming.",
    image: "/images/tcs_nqt.jpg",
    link: "#",
  },
];

export const SPECIAL_ACADEMIC_HIGHLIGHT = {
  title: "1st Rank Secured — Academic Year 2024–2025",
  department: "B.Tech Artificial Intelligence and Data Science",
  institution: "Dr. Mahalingam College of Engineering & Technology",
  cgpa: "9.015",
  honors: "Department Academic Topper & Proficiency Gold Award",
  description:
    "Recognized and awarded by the university jury for securing 1st Rank across the academic department for 2024–2025. Demonstrating relentless academic dedication, technical mastery, and analytical innovation.",
  juryAwardImage: "/images/academic_success_stage.jpg",
  linkedinPostLink: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_academicsuccess-learning-growth-activity-7481946885511991296-TXJu?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
};

export const SKILL_GROUPS = [
  {
    title: "Programming Languages",
    items: ["Java", "Python", "C"],
  },
  {
    title: "Data & Analytics",
    items: ["Power BI", "Python", "MySQL", "Pandas", "NumPy"],
  },
  {
    title: "Databases",
    items: ["MySQL"],
  },
  {
    title: "Tools & Hardware",
    items: ["Power BI", "Google Colab", "Visual Studio Code", "Arduino", "ESP32"],
  },
];


export type VolunteeringRole = {
  id: string;
  role: string;
  organization: string;
  description: string;
  icon: string;
};

export const VOLUNTEERING: VolunteeringRole[] = [
  {
    id: "nss-volunteer",
    role: "NSS Volunteer",
    organization: "National Service Scheme (NSS), College Level",
    description: "Actively volunteered for various events, organizing campaigns, social service drives, and community outreach programs.",
    icon: "HeartHandshake",
  },
  {
    id: "invictus-docs",
    role: "Documentation In-charge",
    organization: "Invictus (Department Association)",
    description: "Managed complete event documentation, drafted official reports, and maintained records for departmental technical and cultural events.",
    icon: "FileText",
  }
];
