const fs = require('fs');
let data = fs.readFileSync('lib/data.ts', 'utf8');
const ids = [
  'accenture-innovation',
  'unstop-adobe-hackathon',
  'genai-llm-workshop',
  'cognizant-hackathon',
  'psg-codestorm',
  'powerbi-workshop',
  'nxtwave-genai-participation',
  'tata-crucible-quiz',
  'imagecon-engineers-day',
  'flipkart-grid',
  'techtrek-fullstack',
  'sawit-learnathon',
  'nxtwave-genai',
  'robomiracle-industrial-visit'
];

ids.forEach(id => {
  const regex = new RegExp(`\\s*\\{\\s*id:\\s*"${id}"[\\s\\S]*?\\},?`, 'g');
  data = data.replace(regex, '');
});

fs.writeFileSync('lib/data.ts', data);
console.log('Removed certificates.');
