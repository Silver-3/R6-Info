// Operators

const operators = require('./util/operators');

function randomOperator(team) {
    team = team.toLowerCase();
    if (!team == "attack" || !team == "defense") throw new Error("Invalid team. Must be 'attack' or 'defense'");
    
    const keys = Object.keys(operators[team]);
    return operators[team][keys[Math.floor(Math.random() * keys.length)]];
}

function getOperator(operator) {
    if (!operator) throw new Error("Operator name is required");
    
    operator = operator.toLowerCase();
    const attack = Object.keys(operators.attack).find(key => key.toLowerCase() === operator);
    const defense = Object.keys(operators.defense).find(key => key.toLowerCase() === operator);

    if (!attack && !defense) throw new Error("Operator not found. If you think that this is wrong then please dm .silver_3");

    return attack ? operators.attack[operator] : operators.defense[operator];
}

function getAttackers() {
    return Object.keys(operators.attack).map(operator => ({
        [operator]: operators.attack[operator]
    }));
}

function getDefenders() {
    return Object.keys(operators.defense).map(operator => ({
        [operator]: operators.defense[operator]
    }));
}

function getAllOperators() {
    let operatorArray = [];

    for (let team in operators) {
        for (let operator in operators[team]) {
            operatorArray.push(operators[team][operator]);
        }
    }

    return operatorArray;
}

// MAPS

const maps = require('./util/maps');

function randomMap(type) {
    type = type.toLowerCase().replace(' ', '');
    if (!type == "ranked" || !type == "nonranked") throw new Error("Invalid type of map. Must be 'ranked' or 'non ranked'");
    
    const keys = Object.keys(maps[type]);
    return maps[type][keys[Math.floor(Math.random() * keys.length)]];
}

function getMap(map) {
    if (!map) throw new Error("Map name is required");
    
    map = map.toLowerCase().replace(' ', '');
    const ranked = Object.keys(maps.ranked).find(key => key.toLowerCase() === map);
    const nonranked = Object.keys(maps.nonranked).find(key => key.toLowerCase() === map);

    if (!ranked && !nonranked) throw new Error("Map not found. If you think that this is wrong then please dm .silver_3");

    return ranked ? maps.ranked[map] : maps.nonranked[map];
}

function getRankedMaps() {
    return Object.keys(maps.ranked).map(map => ({
        [map]: maps.ranked[map]
    }));
}

function getNonrankedMaps() {
    return Object.keys(maps.nonranked).map(map => ({
        [map]: maps.nonranked[map]
    }));
}

function getAllMaps() {
    let mapArray = [];

    for (let type in maps) {
        for (let map in maps[type]) {
            mapArray.push(maps[type][map]);
        }
    }

    return mapArray;
}

// WEAPONS

const weapons = require('./util/weapons');

function randomWeapon() {
    const keys = Object.keys(weapons);
    return weapons[keys[Math.floor(Math.random() * keys.length)]];
}

function getWeapon(weapon) {
    if (!weapon) throw new Error("Weapon name is required");
    
    weapon = weapon.toLowerCase().replaceAll(' ', '_');
    const weaponsA = Object.keys(weapons).find(key => key.toLowerCase() === weapon);

    if (!weaponsA) throw new Error("Weapon not found. If you think that this is wrong then please dm .silver_3");

    return weapons[weapon];
}

function getAllWeapons() {
    let weaponArray = [];

    for (let weapon in weapons) {
        weaponArray.push(weapons[weapon]);
    }

    return weaponArray;
}

module.exports = {
    randomOperator,
    getOperator,
    getAttackers,
    getDefenders,
    getAllOperators,
    randomMap,
    getMap,
    getRankedMaps,
    getNonrankedMaps,
    getAllMaps,
    randomWeapon,
    getWeapon,
    getAllWeapons
}