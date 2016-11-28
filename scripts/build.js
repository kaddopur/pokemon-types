const fs = require('fs');
const csvFilePath = `${__dirname}/../data/types.csv`;
const destFilePath = `${__dirname}/../dist/types.json`;
 
const result = fs.readFileSync(csvFilePath);
const types = result
    .toString()
    .split('\n')
    .slice(1)
    .map(line => line.trim().split(',').slice(1).map(Number));

fs.mkdirSync(`${__dirname}/../dist/`);
fs.writeFileSync(destFilePath, JSON.stringify(types, null, 4));
