const fs = require('fs');
const path = require('path');
const deepmerge = require('deepmerge');

const inputDir = path.join(__dirname, 'theme-jsons');
const outputFilePath = path.join(__dirname, 'theme.json');

const files = fs.readdirSync(inputDir);
const themeJsonParts = files.map((file) => {
	const filePath = path.join(inputDir, file);
	const content = fs.readFileSync(filePath, 'utf-8');
	return JSON.parse(content);
});

const mergedThemeJson = deepmerge.all(themeJsonParts);
// fs.writeFileSync(outputFilePath, JSON.stringify(mergedThemeJson, null, 2));
fs.writeFileSync(outputFilePath, JSON.stringify(mergedThemeJson, null, '\t').replace(/\n/g, '\n'));

// console.log('Merged theme.json has been generated.');
