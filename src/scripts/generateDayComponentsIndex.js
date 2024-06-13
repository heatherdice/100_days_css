// file system, path modules for interacting w/ file system & directory paths
const fs = require('fs');
const path = require('path');

// construct absolute path to days dir; __dirname = dir name of current module where script is located
const componentsDir = path.join(__dirname, '../src/components/days');
// construct absolute path to index.js file being generated w/in days dir
const indexPath = path.join(componentsDir, 'index.js');

// read content of days dir synchronously, return arr of file names; filter arr to include only files that start w/ Day & end w/ .js
const files = fs.readdirSync(componentsDir).filter(file => file.startsWith('Day') && file.endsWith('.js'));

// map over filtered file names, create component names & import statements, join into single string w/ each import on new line
const imports = files.map((file, index) => {
    const componentName = `Day${index + 1}`;
    return `import ${componentName} from './${file}';`;
}).join('\n');

// map over files to create arr of objs where each obj contains a component & a title; join arr items w/ commas & new lines
const exports = `export default [\n${files.map((file, index) => `    { component: Day${index + 1}, title: "Day ${index + 1}" }`).join(',\n')}\n];`;

// combine imports & exports into final content string for index.js file
const content = `${imports}\n\n${exports}\n`;

// write content string to index.js file, creating or overwriting it
fs.writeFileSync(indexPath, content, 'utf8');
// log message to console when successful
console.log('index.js file has been generated.');
