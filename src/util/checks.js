const R6Info = require('../index.js');
const fs = require('fs');

const operators = R6Info.getAllOperators();
const weapons = R6Info.getAllWeapons();
const maps = R6Info.getAllMaps();

function validateOperators(operators) {
    let allClear = true;
    let errorMessages = [];

    operators.forEach(operator => {
        let issues = [];

        if (!operator) {
            issues.push('operator is undefined');
            allClear = false;
        }

        if (!operator.name || operator.name.trim() === '') {
            issues.push('name is empty');
            allClear = false;
        }

        if (!operator.ability || !operator.ability.name || operator.ability.name.trim() === '' || !operator.ability.description || operator.ability.description.trim() === '') {
            issues.push('ability name or description is empty');
            allClear = false;
        }

        if (operator.icon && !fs.existsSync(operator.icon)) {
            issues.push('icon path does not exist');
            allClear = false;
        }

        if (!operator.specialties || operator.specialties.length === 0 || operator.specialties.some(s => s.trim() === '')) {
            issues.push('specialties are empty');
            allClear = false;
        }

        if (operator.stats) {
            for (const [key, value] of Object.entries(operator.stats)) {
                if (value <= 0) {
                    issues.push(`${key}: ${value}`);
                    allClear = false;
                }
            }
        } else {
            issues.push('stats are missing');
            allClear = false;
        }

        if (!operator.bio) {
            issues.push('bio is missing');
            allClear = false;
        } else {
            const requiredBioFields = [
                'realname',
                'nickname',
                'org',
                'squad',
                'height',
                'weight',
                'dateofbirth',
                'placeofbirth'
            ];

            requiredBioFields.forEach(field => {
                if (!operator.bio[field] || operator.bio[field].trim() === '') {
                    issues.push(`${field} is missing or empty in bio`);
                    allClear = false;
                }
            });
        }

        if (!operator.guns) {
            issues.push('guns are missing');
            allClear = false;
        } else {
            if (!operator.guns.primary || operator.guns.primary.length === 0 || operator.guns.primary.some(g => g.trim() === '')) {
                issues.push('primary guns list is empty');
                allClear = false;
            }
            if (!operator.guns.secondary || operator.guns.secondary.length === 0 || operator.guns.secondary.some(g => g.trim() === '')) {
                issues.push('secondary guns list is empty');
                allClear = false;
            }
        }

        if (!operator.gadgets || operator.gadgets.length === 0 || operator.gadgets.some(g => g.trim() === '')) {
            issues.push('gadgets list is empty');
            allClear = false;
        }

        if (!operator.season || operator.season.trim() === '') {
            issues.push('season is empty');
            allClear = false;
        }

        if (issues.length > 0) {
            errorMessages.push(`${operator.name}: ${issues.join(', ')}`);
        }
    });

    if (allClear) {
        console.log("operators clear");
    } else {
        console.log("there were some errors with operators");
        errorMessages.forEach(msg => console.log(msg));
    }
}

function validateWeapons(weapons) {
    let allClear = true;
    let errorMessages = [];

    weapons.forEach(weapon => {
        let issues = [];

        if (!weapon) {
            issues.push('weapon is undefined');
            allClear = false;
        }

        if (!weapon.name || weapon.name.trim() === '') {
            issues.push('name is empty');
            allClear = false;
        }

        if (weapon.icon && !fs.existsSync(weapon.icon)) {
            issues.push('icon path does not exist');
            allClear = false;
        }

        if (weapon.stats) {
            for (const [key, value] of Object.entries(weapon.stats)) {
                if (value <= 0) {
                    issues.push(`${key}: ${value}`);
                    allClear = false;
                }
            }
        } else {
            issues.push('stats are missing');
            allClear = false;
        }

        if (!weapon.type || weapon.type.trim() === '') {
            issues.push('type is empty');
            allClear = false;
        }

        if (!weapon.operators || weapon.operators.length === 0 || weapon.operators.some(op => op.trim() === '')) {
            issues.push('operators list is empty');
            allClear = false;
        }

        if (issues.length > 0) {
            errorMessages.push(`${weapon.name}: ${issues.join(', ')}`);
        }
    });

    if (allClear) {
        console.log("weapons clear");
    } else {
        console.log("there were some errors with weapons");
        errorMessages.forEach(msg => console.log(msg));
    }
}

function validateMaps(maps) {
    let allClear = true;
    let errorMessages = [];

    maps.forEach(map => {
        let issues = [];

        if (!map) {
            issues.push('map is undefined');
            allClear = false;
        }

        if (!map.name || map.name.trim() === '') {
            issues.push('name is empty');
            allClear = false;
        }

        if (map.image && !fs.existsSync(map.image)) {
            issues.push('image path does not exist');
            allClear = false;
        }

        if (issues.length > 0) {
            errorMessages.push(`${map.name}: ${issues.join(', ')}`);
        }
    });

    if (allClear) {
        console.log("maps clear");
    } else {
        console.log("there were some errors with maps");
        errorMessages.forEach(msg => console.log(msg));
    }
}

function validateAll() {
    validateOperators(operators);
    validateWeapons(weapons);
    validateMaps(maps);
}

module.exports = validateAll();