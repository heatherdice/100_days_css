// scripts/generateDayComponentsIndex.js
const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '../src/components/days');
const indexPath = path.join(componentsDir, 'index.js');

const files = fs.readdirSync(componentsDir)
    .filter(file => file.startsWith('Day') && file.endsWith('.js'));

const imports = files.map((file, index) => {
    const componentName = `Day${index + 1}`;
    return `import ${componentName} from './${file}';`;
}).join('\n');

const exports = `export default [\n${files.map((file, index) => `    { component: Day${index + 1}, title: "Day ${index + 1}" }`).join(',\n')}\n];`;

const content = `${imports}\n\n${exports}\n`;

fs.writeFileSync(indexPath, content, 'utf8');
console.log('index.js file has been generated.');
