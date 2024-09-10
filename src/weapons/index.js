const path = require('path');
const fs = require('fs');

const weapons = {};

fs.readdirSync(__dirname).forEach(weapon => {
    const weaponDir = path.join(__dirname, weapon);

    if (fs.statSync(weaponDir).isDirectory()) {
        const weaponData = require(weaponDir + '/index.js');
        weapons[weapon] = weaponData;
    }
});

function randomWeapon() {
    const keys = Object.keys(weapons);
    return weapons[keys[Math.floor(Math.random() * keys.length)]];
}

function getWeapon(weapon) {
    if (!weapon) throw new Error("Weapon name is required");
    weapon = weapon.toLowerCase().replaceAll(' ', '_');

    const weaponsA = Object.keys(weapons).find(key => key.toLowerCase() === weapon);
    if (!weaponsA) throw new Error(`Weapon (${weapon}) not found. If you think that this is wrong then please DM ${user} on discord.`);

    return weapons[weaponsA];
}

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