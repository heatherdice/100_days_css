// file system, path modules for interacting w/ file system & directory paths
const fs = require('fs');
const path = require('path');

// construct absolute path to days dir; __dirname = dir name of current module where script is located
const componentsDir = path.join(__dirname, '../components/dayComponents');
console.log("componentsDir: ", componentsDir);
// construct absolute path to index.js file being generated w/in days dir
const indexPath = path.join(componentsDir, 'index.js');
console.log("indexPath: ", indexPath);

// read content of days dir synchronously, return arr of file names; filter arr to include only files that start w/ Day & end w/ .js
const files = fs.readdirSync(componentsDir).filter(file => file.startsWith('Day') && file.endsWith('.js'));
console.log("files: ", files);

// map over filtered file names, create component names & import statements, join into single string w/ each import on new line
const imports = files.map((file, index) => {
    const componentName = `Day${index + 1}`;
    console.log("Component:", componentName);
    return `import ${componentName} from '../../components/dayComponents/${file}';`;
}).join('\n');

// map over files to create arr of objs where each obj contains a component & a title; join arr items w/ commas & new lines
const exportsArray = `export default [\n${files.map((file, index) => `    { component: Day${index + 1}, title: "Day ${index + 1}" }`).join(',\n')}\n];`;

// combine imports & exportsArray into final content string for index.js file
const content = `${imports}\n\n${exportsArray}\n`;

// write content string to index.js file, creating or overwriting it
fs.writeFileSync(indexPath, content, 'utf8');
// log message to console when successful
console.log('index.js file has been generated.');
