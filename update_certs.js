const fs = require('fs');
let data = fs.readFileSync('lib/data.ts', 'utf8');

const newCerts = `export const CERTIFICATIONS: Certification[] = [
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
];`;

data = data.replace(/export const CERTIFICATIONS: Certification\[\] = \[[\s\S]*?\];/m, newCerts);
fs.writeFileSync('lib/data.ts', data);
console.log('Certifications updated!');
