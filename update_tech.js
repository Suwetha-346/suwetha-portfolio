const fs = require('fs');
let data = fs.readFileSync('lib/data.ts', 'utf8');

const newStack = `export const TECH_STACK = [
  { name: "Python", subtitle: "Advanced (ML, NLP, Logic)", icon: "🐍", category: "Programming", progress: 85 },
  { name: "Java", subtitle: "Intermediate (Swing, OOP, CRUD)", icon: "☕", category: "Programming", progress: 70 },
  { name: "C Language", subtitle: "Core Data Structures", icon: "C", category: "Programming", progress: 75 },
  { name: "HTML5", subtitle: "Semantic UI & Accessibility", icon: "5", category: "Web Tech", progress: 90 },
  { name: "CSS3 & Glassmorphism", subtitle: "Flexbox, Grid, Animations", icon: "CSS", category: "Web Tech", progress: 85 },
  { name: "JavaScript (ES6+)", subtitle: "Interactive DOM, Async APIs", icon: "JS", category: "Web Tech", progress: 80 },
  { name: "Microsoft Power BI", subtitle: "Data Visualization & Dashboards", icon: "📊", category: "Tools & DB", progress: 85 },
  { name: "MySQL Database", subtitle: "Relational Modeling & Queries", icon: "🗄️", category: "Tools & DB", progress: 80 },
  { name: "IDE & Tools", subtitle: "VS Code, Apache NetBeans", icon: "💻", category: "Tools & DB", progress: 90 },
  { name: "Problem-Solving", subtitle: "Algorithmic Mindset", icon: "🧩", category: "Soft Skills", progress: 95 },
  { name: "Quick Learner & Adaptability", subtitle: "Rapid Tech Adoption", icon: "⚡", category: "Soft Skills", progress: 95 },
  { name: "Teamwork & Time Management", subtitle: "Collaborative Execution", icon: "👥", category: "Soft Skills", progress: 90 },
];`;

data = data.replace(/export const TECH_STACK = \[[\s\S]*?\];/m, newStack);
fs.writeFileSync('lib/data.ts', data);
console.log('TECH_STACK updated!');
