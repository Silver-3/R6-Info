const R6Info = require('../../src/index.js');
const weapon = R6Info.getWeapon("mp5");

console.log(weapon.name);
console.log(weapon.stats.damage);
console.log(weapon.stats.firerate);
console.log(weapon.operators);