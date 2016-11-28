const typeDamage = require('../dist/typeDamage.json');
const typeOrder = require('../dist/typeOrder.json');

const damageFactor = (attacker, defender) => {
  const attackerIndex = typeOrder.indexOf(attacker);
  const defenderIndex = typeOrder.indexOf(defender);

  return typeDamage[attackerIndex][defenderIndex];
};

module.exports = damageFactor;
