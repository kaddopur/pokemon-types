const fs = require('fs');
const rimraf = require('rimraf');
const csvDir = `${__dirname}/../data`;
const jsonDir = `${__dirname}/../dist`;
 
const result = fs.readFileSync(`${csvDir}/types.csv`);
const lines = result
    .toString()
    .split('\n');

const typeDamage = lines
    .slice(1)
    .map(line => line.trim().split(',').slice(1).map(Number));

const typeOrder = lines[0]
    .trim()
    .split(',')
    .slice(1);

rimraf(jsonDir, () => {
  fs.mkdirSync(jsonDir);

  fs.writeFileSync(`${jsonDir}/typeDamage.json`, JSON.stringify(typeDamage, null, 4));
  fs.writeFileSync(`${jsonDir}/typeOrder.json`, JSON.stringify(typeOrder, null, 4));
});
