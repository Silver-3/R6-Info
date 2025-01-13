const path = require('path');
const fs = require('fs');

const operators = {attack: {}, defense: {}};

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

function randomOperator(team) {
    team = team.toLowerCase();
    if (team !== "attack" && team !== "defense") throw new Error("Invalid team. Must be 'attack' or 'defense'");

    const keys = Object.keys(operators[team]);
    return operators[team][keys[Math.floor(Math.random() * keys.length)]];
}

function getOperator(operator) {
    if (!operator) throw new Error("Operator name is required");
    operator = operator.toLowerCase();

    const attack = Object.keys(operators.attack).find(key => key.toLowerCase() === operator);
    const defense = Object.keys(operators.defense).find(key => key.toLowerCase() === operator);

    if (!attack && !defense) throw new Error(`Operator (${operator}) not found. If you think that this is wrong then please DM .silver_3 on discord.`);

    return attack ? operators.attack[attack] : operators.defense[defense];
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

module.exports = {
    randomOperator,
    getOperator,
    getAttackers,
    getDefenders,
    getAllOperators
}