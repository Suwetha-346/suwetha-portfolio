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
  { name: "Python", icon: "🐍", category: "languages" },
  { name: "Java", icon: "☕", category: "languages" },
  { name: "C", icon: "⚙️", category: "languages" },
  { name: "MySQL", icon: "🗄️", category: "databases" },
  { name: "Power BI", icon: "📊", category: "backend" },
  { name: "Google Colab", icon: "📓", category: "tools" },
  { name: "VS Code", icon: "💻", category: "tools" },
  { name: "Arduino", icon: "🔌", category: "tools" },
  { name: "ESP32", icon: "📡", category: "tools" },
  { name: "Pandas", icon: "🐼", category: "backend" },
  { name: "NumPy", icon: "🔢", category: "backend" },
  { name: "Scikit-learn", icon: "🧠", category: "backend" },
  { name: "TensorFlow", icon: "🤖", category: "backend" },
  { name: "Git", icon: "📝", category: "tools" },
  { name: "GitHub", icon: "🐱", category: "tools" },
  { name: "Linux", icon: "🐧", category: "tools" },
  { name: "Jupyter", icon: "📔", category: "tools" },
  { name: "Figma", icon: "🎨", category: "tools" },
  { name: "Postman", icon: "📬", category: "tools" },
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
  },
  {
    id: "smart-health-iot",
    index: "02",
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
  },
  {
    id: "museum-management",
    index: "03",
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
    year: "2025-2026",
    role: "1st Rank Academic Award & Distinction",
    subtitle: "Dr. Mahalingam College of Eng. & Tech.",
    description:
      "Awarded 1st Rank in B.Tech Artificial Intelligence & Data Science for outstanding academic performance, maintaining CGPA 9.015 and top proficiency across core subjects.",
  },
  {
    year: "2025",
    role: "Data Science Intern",
    subtitle: "Krish Tec",
    description:
      "Transformed raw datasets into actionable insights through preprocessing and predictive modeling. Created visual analytics using Python, Pandas, and Google Colab.",
  },
  {
    year: "2024",
    role: "AI & Data Science Undergrad",
    subtitle: "B.Tech Student",
    description:
      "Building end-to-end Machine Learning pipelines, IoT hardware systems, and backend database applications.",
  },
  {
    year: "2023",
    role: "Higher Secondary Certificate (HSC)",
    subtitle: "Academic Distinction (92.16%)",
    description:
      "Completed HSC with 92.16% from G. Ramaswamy Naidu Matriculation School. Built foundational mastery in advanced mathematics and computer science.",
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
      { label: "Academic Honor", value: "1st Rank Secured (2025-2026)" },
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
    title: "1st Rank Academic Excellence Award (2025-2026)",
    issuer: "Dr. Mahalingam College of Engineering & Tech",
    date: "Academic Year 2025-2026",
    category: "Academic Honor",
    description:
      "Honored with First Rank in B.Tech AI & Data Science by the academic jury for achieving top scholastic proficiency and academic distinction.",
    image: "/images/nptel_social_networks_elite.jpg",
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
    id: "accenture-innovation",
    title: "Accenture Innovation Challenge Certificate",
    issuer: "Accenture",
    date: "2025",
    category: "Competition & Innovation",
    description:
      "Awarded official badge & certificate of participation in the Accenture Innovation Challenge 2024 for developing impactful technology solutions.",
    image: "/images/accenture_innovation_new.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_hello-everyone-happy-to-share-my-certificate-activity-7289121313745424384-xNs0?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
  },
  {
    id: "deloitte-data-analytics",
    title: "Deloitte: Data Analytics Job Simulation",
    issuer: "Deloitte / Forage",
    date: "2025",
    category: "Industry Simulation",
    description:
      "Completed Deloitte Data Analytics Job Simulation, applying practical forensic technology and data analysis to complex business scenarios.",
    image: "/images/deloitte_new.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_deloitte-dataanalytics-forage-activity-7481371807866855425-10wD?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
  },
  {
    id: "mongodb-data-modeling",
    title: "MongoDB Data Modeling Skills for Developers",
    issuer: "MongoDB",
    date: "June 2025",
    category: "Course Completion",
    description:
      "Successfully completed the MongoDB Data Modeling Skills for Developers course.",
    image: "/images/mongodb_data_modeling.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_mongodb-certification-datamodeling-activity-7349086898620899329-q9HE?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
  },
  {
    id: "mongodb-rag",
    title: "RAG with MongoDB",
    issuer: "MongoDB",
    date: "June 2025",
    category: "Course Completion",
    description:
      "Successfully completed the RAG with MongoDB course.",
    image: "/images/mongodb_rag.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_mongodb-certification-datamodeling-activity-7349086898620899329-q9HE?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
  },
  {
    id: "mongodb-schema-patterns",
    title: "Schema Patterns and Antipatterns",
    issuer: "MongoDB",
    date: "June 2025",
    category: "Course Completion",
    description:
      "Successfully completed the Schema Patterns and Antipatterns course.",
    image: "/images/mongodb_schema_patterns.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_mongodb-certification-datamodeling-activity-7349086898620899329-q9HE?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
  },
  {
    id: "mongodb-adv-schema",
    title: "Advanced Schema Patterns and Antipatterns",
    issuer: "MongoDB",
    date: "June 2025",
    category: "Course Completion",
    description:
      "Successfully completed the Advanced Schema Patterns and Antipatterns course.",
    image: "/images/mongodb_adv_schema.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_mongodb-certification-datamodeling-activity-7349086898620899329-q9HE?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
  },
  {
    id: "mongodb-relational-to-document",
    title: "Relational to Document Model",
    issuer: "MongoDB",
    date: "June 2025",
    category: "Course Completion",
    description:
      "Successfully completed the Relational to Document Model course.",
    image: "/images/mongodb_relational_to_document.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_mongodb-certification-datamodeling-activity-7349086898620899329-q9HE?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
  },
  {
    id: "hplife-agile",
    title: "Agile Project Management",
    issuer: "HP LIFE / HP Foundation",
    date: "July 2025",
    category: "Course Completion",
    description:
      "Successfully completed the HP LIFE online course Agile Project Management, covering MVP definition, Scrum, and Kanban.",
    image: "/images/hp_life_agile.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_agile-projectmanagement-hplife-activity-7350878651455877120-rjEW?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
  },
  {
    id: "scaler-eda",
    title: "EDA and Data Visualization Course",
    issuer: "Scaler Topics",
    date: "July 19, 2025",
    category: "Course Completion",
    description:
      "Completed EDA and Data Visualization Course in Data Science, including 88 Video Tutorials, 7 Modules, and 6 Challenges.",
    image: "/images/scaler_eda.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_scaler-datascience-eda-activity-7352383606293491712-swOZ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
  },
  {
    id: "unstop-adobe-hackathon",
    title: "Adobe India Hackathon - Team FUSION FORCE",
    issuer: "Unstop & Adobe",
    date: "August 2025",
    category: "Competition & Innovation",
    description:
      "Participated in Round 1 (Online MCQ Assessment & Coding) of the Adobe India Hackathon.",
    image: "/images/unstop_adobe.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_unstop-hackathon-happylearning-activity-7366493880118063104-QIO3?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
  },
  {
    id: "salesforce-agentblazer",
    title: "Agentblazer Champion 2025",
    issuer: "Salesforce Trailhead",
    date: "2025",
    category: "Certification",
    description:
      "Recognized as an Agentblazer Champion for learning foundational AI concepts and gaining hands-on Agentforce experience.",
    image: "/images/salesforce_agentblazer.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_salesforce-agentblazer-trailhead-activity-7481368730912878592-LN47?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
  },
  {
    id: "tata-forage-powerbi",
    title: "Data Visualisation: Empowering Business with Effective Insights",
    issuer: "Tata / Forage",
    date: "July 2026",
    category: "Job Simulation",
    description:
      "Completed practical tasks in framing business scenarios, choosing right visuals, and communicating insights in Power BI.",
    image: "/images/tata_forage_powerbi.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_powerbi-dataanalytics-datavisualization-activity-7484497462905315328-hKcE?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
  },
  {
    id: "genai-llm-workshop",
    title: "Two Days Workshop on GenAI with LLM",
    issuer: "Dr. Mahalingam College of Engineering & Technology",
    date: "October 2025",
    category: "Workshop",
    description:
      "Participated in an intensive two-day workshop focused on Generative AI and Large Language Models organized by the AI & DS department.",
    image: "/images/genai_llm_workshop.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_generativeai-llm-artificialintelligence-activity-7483035763090026496-iFwq?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
  },
  {
    id: "invictus-leadership",
    title: "Invictus Leadership & Teamwork",
    issuer: "Invictus",
    date: "2025",
    category: "Leadership",
    description:
      "Demonstrated strong leadership, teamwork, and collaborative skills within a driven community.",
    image: "/images/invictus_leadership.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_invictus-leadership-teamwork-activity-7481769685781229569-6l3K?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
  },
  {
    id: "cognizant-hackathon",
    title: "Cognizant Technoverse Hackathon 2026",
    issuer: "Cognizant",
    date: "2026",
    category: "Hackathon",
    description:
      "Recognized for participation, innovation, and technological problem-solving in the Cognizant Technoverse Hackathon 2026.",
    image: "/images/cognizant_hackathon.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_cognizant-technoverse2026-hackathon-activity-7481373341937786880-z9TI?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
  },
  {
    id: "grc-governance",
    title: "GRC - Governance Risk Management",
    issuer: "Self-Paced / Workshop",
    date: "2025",
    category: "Course Completion",
    description:
      "Gained comprehensive understanding of Governance, Risk Management, and Compliance (GRC) frameworks.",
    image: "/images/grc_governance.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_grc-governance-riskmanagement-activity-7484501244112437248-c3Cs?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
  },
  {
    id: "oracle-cloud-erp",
    title: "Oracle Cloud ERP Certified Foundations Associate",
    issuer: "Oracle University",
    date: "April 06, 2025",
    category: "Certification",
    description:
      "Recognized by Oracle Corporation as an Oracle Fusion Cloud Applications ERP Certified Foundations Associate.",
    image: "/images/oracle_cloud.png",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_oraclecloud-erp-cx-activity-7314672976468090880-wAFN?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
  },
  {
    id: "psg-codestorm",
    title: "CodeStorm KRIYA 2025",
    issuer: "PSG College of Technology",
    date: "March 14-16, 2025",
    category: "Competition & Innovation",
    description:
      "Participated in the CodeStorm event of KRIYA 2025 held at PSG College of Technology.",
    image: "/images/psg_codestorm.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_hello-everyone-happy-to-share-my-certificate-activity-7309611130190970880-fZV9?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
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
    id: "sawit-learnathon",
    title: "SAWIT.AI Learnathon: Generative AI",
    issuer: "GUVI / SAWIT",
    date: "Sept 21, 2024",
    category: "Workshop",
    description:
      "Awarded certificate of achievement for the successful completion of SAWIT.AI Learnathon Program covering fundamentals of Generative AI.",
    image: "/images/sawit_learnathon.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_ai-generativeai-rag-activity-7247218707888816128--aBY?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
  },
  {
    id: "guvi-genai",
    title: "Generative AI",
    issuer: "GUVI",
    date: "Sept 21, 2024",
    category: "Course Completion",
    description:
      "Awarded certificate of achievement for the successful completion of Generative AI.",
    image: "/images/guvi_generative_ai.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_genai-openai-api-activity-7244685952634253313-sFML?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
  },
  {
    id: "powerbi-workshop",
    title: "Artificial Intelligence - Microsoft PowerBI",
    issuer: "Dr. Mahalingam College of Engineering & Technology",
    date: "Aug 27-28, 2024",
    category: "Workshop",
    description:
      "Participated in the Two Days Workshop on 'Artificial Intelligence - Microsoft PowerBI'.",
    image: "/images/powerbi_workshop.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_powerbi-datavisualization-microsoftworkshop-activity-7243956819394494464-PdOp?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
  },
  {
    id: "nxtwave-genai",
    title: "AI for Students: Build Your Own Generative AI Model",
    issuer: "NxtWave",
    date: "Sept 20, 2024",
    category: "Workshop",
    description:
      "Successfully completed the hands-on project in 'Build Your Own Generative AI Model' workshop.",
    image: "/images/nxtwave_genai.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_generativeai-aiinnovation-techjourney-activity-7243614154006134784-kGZQ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
  },
  {
    id: "nxtwave-genai-participation",
    title: "AI for Students: Build Your Own Generative AI Model",
    issuer: "NxtWave",
    date: "Sept 20, 2024",
    category: "Workshop",
    description:
      "Participated in the Workshop on 'AI for Students: Build Your Own Generative AI Model'.",
    image: "/images/nxtwave_genai_participation.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_genai-futuretech-lifelearning-activity-7243609683976937472-jLQ0?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
  },
  {
    id: "tata-crucible-quiz",
    title: "TATA Crucible Campus Quiz 2024",
    issuer: "TATA Group / Unstop",
    date: "2024",
    category: "Competition & Innovation",
    description:
      "Participated in the TATA Crucible Campus Quiz 2024 organised by the Tata Group.",
    image: "/images/tata_crucible_quiz.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_unstop-tatacruciblecampusquiz-activity-7242131488106766337-P3AZ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
  },
  {
    id: "accenture-innovator",
    title: "Innovator Badge - Accenture Innovation Challenge",
    issuer: "Accenture / Hack2Skill",
    date: "2024",
    category: "Competition & Innovation",
    description:
      "Awarded the 'Innovator' badge at the Accenture Innovation Challenge for showcasing technological excellence.",
    image: "/images/accenture_innovator_badge.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_accenture-hack2skill-innovationchallenge-activity-7240356525297311744-N3fw?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
  },
  {
    id: "imagecon-engineers-day",
    title: "Engineers Day Contest 2024",
    issuer: "Imagecon Academy",
    date: "Sept 15, 2024",
    category: "Competition & Innovation",
    description:
      "Successfully participated in the Engineers Day Contest 2024 among 10,000 participants.",
    image: "/images/imagecon_engineers_day.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_imageconacademy-engineersday2024-activity-7241012105821184000-IsX5?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
  },
  {
    id: "flipkart-grid",
    title: "Flipkart GRiD 6.0 - Software Development Track",
    issuer: "Flipkart / Unstop",
    date: "2024",
    category: "Competition & Innovation",
    description:
      "Participated in Level 1: E-Commerce & Tech Quiz of the Flipkart GRiD 6.0 - Software Development Track.",
    image: "/images/flipkart_grid.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_unstop-flipkart-quiz-activity-7234178369565704193-EpuF?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
  },
  {
    id: "techtrek-fullstack",
    title: "TechTrek: Full-Stack Development to Industry Mastery",
    issuer: "Coimbatore Institute of Technology",
    date: "August 10, 2024",
    category: "Workshop",
    description:
      "Participated in the one day national workshop hosted by the Department of Information Technology, CIT.",
    image: "/images/techtrek_fullstack.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_fullstackdevelopment-techietech-cit-activity-7233772672361361410-GFtU?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
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
    id: "robomiracle-industrial-visit",
    title: "One-Day Industrial Visit at Robomiraccle Technologies",
    issuer: "Robomiraccle Technologies Private Limited",
    date: "April 25, 2024",
    category: "Workshop",
    description:
      "Successfully completed a one-day industrial visit at Robomiraccle Technologies Private Limited.",
    image: "/images/robomiracle_visit.jpg",
    link: "https://www.linkedin.com/posts/suwetha-s-t-12a059294_hello-connections-i-am-excited-to-share-activity-7233769376787611649-XlG6?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfeze4BwEP5-pBBZheZ2MFtxPwrEgVXaCI",
  }
];

export const SPECIAL_ACADEMIC_HIGHLIGHT = {
  title: "1st Rank Secured — Academic Year 2025–2026",
  department: "B.Tech Artificial Intelligence and Data Science",
  institution: "Dr. Mahalingam College of Engineering & Technology",
  cgpa: "9.015",
  honors: "Department Academic Topper & Proficiency Gold Award",
  description:
    "Recognized and awarded by the university jury for securing 1st Rank across the academic department for 2025–2026. Demonstrating relentless academic dedication, technical mastery, and analytical innovation.",
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

