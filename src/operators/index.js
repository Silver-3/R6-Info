const path = require('path');
const fs = require('fs');

const operators = {attack: {}, defense: {}};

/**
 * @typedef {Object} operatorObject
 * @property {string} name 
 * @property {Object} ability 
 * @property {string} ability.name
 * @property {string} ability.description
 * @property {string} icon 
 * @property {string[]} specialties 
 * @property {Object} stats 
 * @property {number} stats.health
 * @property {number} stats.speed 
 * @property {number} stats.difficulty 
 * @property {Object} bio 
 * @property {string} bio.realname
 * @property {string} bio.nickname
 * @property {string} bio.org 
 * @property {string} bio.squad 
 * @property {string} bio.height 
 * @property {string} bio.weight 
 * @property {string} bio.dateofbirth 
 * @property {string} bio.placeofbirth 
 * @property {Object} guns 
 * @property {string[]} guns.primary 
 * @property {string[]} guns.secondary 
 * @property {string[]} gadgets 
 * @property {string} season 
 */

fs.readdirSync(__dirname).forEach(team => {
    const teamDir = path.join(__dirname, team);

    if (fs.statSync(teamDir).isDirectory()) {
        fs.readdirSync(teamDir).forEach(operator => {
            const operatorDir = path.join(teamDir, operator);

            if (fs.statSync(operatorDir).isDirectory()) {
                const operatorData = require(operatorDir + '/index.js');
                operators[team][operator] = operatorData;
            }
        });
    }
});

/**
 * 
 * @param {String} team 
 * @returns {operatorObject}
 */

function randomOperator(team) {
    team = team.toLowerCase();
    if (team !== "attack" && team !== "defense") throw new Error("Invalid team. Must be 'attack' or 'defense'");

    const keys = Object.keys(operators[team]);
    return operators[team][keys[Math.floor(Math.random() * keys.length)]];
}

/**
 * 
 * @param {String} operator 
 * @returns {operatorObject}
 */

function getOperator(operator) {
    if (!operator) throw new Error("Operator name is required");
    operator = operator.toLowerCase();

    const attack = Object.keys(operators.attack).find(key => key.toLowerCase() === operator);
    const defense = Object.keys(operators.defense).find(key => key.toLowerCase() === operator);

    if (!attack && !defense) throw new Error(`Operator (${operator}) not found. If you think that this is wrong then please DM .silver_3 on discord.`);

    return attack ? operators.attack[attack] : operators.defense[defense];
}

/**
 * @returns {Array<operatorObject>}
 */

function getAttackers() {
    return Object.keys(operators.attack).map(operator => ({
        [operator]: operators.attack[operator]
    }));
}

/**
 * @returns {Array<operatorObject>}
 */

function getDefenders() {
    return Object.keys(operators.defense).map(operator => ({
        [operator]: operators.defense[operator]
    }));
}

/**
 * @returns {Array<operatorObject>}
 */

function getAllOperators() {
    let operatorArray = [];

    for (let team in operators) {
        for (let operator in operators[team]) {
            operatorArray.push(operators[team][operator]);
        }
    }

    return operatorArray;
}

module.exports = {
    randomOperator,
    getOperator,
    getAttackers,
    getDefenders,
    getAllOperators
}