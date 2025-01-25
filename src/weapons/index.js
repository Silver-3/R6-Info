const path = require('path');
const fs = require('fs');

const weapons = {};

/**
 * @typedef {Object} weaponObject
 * @property {string} name
 * @property {string} image 
 * @property {Object} stats 
 * @property {number} stats.damage
 * @property {number} stats.firerate 
 * @property {number} stats.ammo
 * @property {number} stats.maxammo
 * @property {number} stats.difficulty
 * @property {string} type
 * @property {string[]} scopes
 * @property {string[]} operators
 */

fs.readdirSync(__dirname).forEach(weapon => {
    const weaponDir = path.join(__dirname, weapon);

    if (fs.statSync(weaponDir).isDirectory()) {
        const weaponData = require(weaponDir + '/index.js');
        weapons[weapon] = weaponData;
    }
});

/**
 * 
 * @returns {weaponObject}
 */

function randomWeapon() {
    const keys = Object.keys(weapons);
    return weapons[keys[Math.floor(Math.random() * keys.length)]];
}

/**
 * 
 * @param {String} weapon 
 * @returns {weaponObject}
 */

function getWeapon(weapon) {
    if (!weapon) throw new Error("Weapon name is required");
    weapon = weapon.toLowerCase().replaceAll(' ', '_');

    const weaponsA = Object.keys(weapons).find(key => key.toLowerCase() === weapon);
    if (!weaponsA) throw new Error(`Weapon (${weapon}) not found. If you think that this is wrong then please DM .silver_3 on discord.`);

    return weapons[weaponsA];
}

/**
 * 
 * @returns {Array<weaponObject>}
 */

function getAllWeapons() {
    let weaponArray = [];

    for (let weapon in weapons) {
        weaponArray.push(weapons[weapon]);
    }

    return weaponArray;
}

module.exports = {
    randomWeapon,
    getWeapon,
    getAllWeapons,
}