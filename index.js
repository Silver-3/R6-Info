const operators = require('./operators');

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

module.exports = {
    randomOperator,
    getOperator,
    getAttackers,
    getDefenders,
    getAllOperators
}