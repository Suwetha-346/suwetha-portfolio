const fs = require('fs');

let data = fs.readFileSync('lib/data.ts', 'utf8');

const volunteeringData = `
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
`;

fs.appendFileSync('lib/data.ts', volunteeringData);
console.log('Volunteering data appended!');
