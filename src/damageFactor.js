const typeDamage = require('../dist/typeDamage.json');
const typeOrder = require('../dist/typeOrder.json');

const damageFactorSingleTyped = (attacker, defender) => {
  const attackerIndex = typeOrder.indexOf(attacker);
  const defenderIndex = typeOrder.indexOf(defender);

  if (attackerIndex === -1 || defenderIndex === -1) {
    return NaN;
  }

  return typeDamage[attackerIndex][defenderIndex];
};

const damageFactor = (attackers, defenders) => {
  if (attackers instanceof Array) {
    return attackers.reduce((product, att) => product * damageFactor(att, defenders), 1);
  }

  if (defenders instanceof Array) {
    return defenders.reduce((product, def) => product * damageFactor(attackers, def), 1);
  } 

  return damageFactorSingleTyped(attackers, defenders);
};

module.exports = damageFactor;
