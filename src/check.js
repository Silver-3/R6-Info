const path = require('path');
const fs = require('fs');

function getOperators() {
    const operatorsDir = path.join(__dirname, 'operators');
    const teamDirs = fs.readdirSync(operatorsDir).filter(file => fs.statSync(path.join(operatorsDir, file)).isDirectory());
    const operators = [];

    teamDirs.forEach(team => {
        const teamDir = path.join(operatorsDir, team);
        const operatorNames = fs.readdirSync(teamDir).filter(file => fs.statSync(path.join(teamDir, file)).isDirectory());

        operatorNames.forEach(name => {
            const operatorPath = path.join(teamDir, name, 'index.js');
            operators.push(require(operatorPath));
        });
    });

    return operators;
}

function getWeapons() {
    const weaponsDir = path.join(__dirname, 'weapons');
    const weaponNames = fs.readdirSync(weaponsDir).filter(file => fs.statSync(path.join(weaponsDir, file)).isDirectory());

    return weaponNames.map(name => {
        const weaponPath = path.join(weaponsDir, name, 'index.js');
        return require(weaponPath);
    });
}

function getMaps() {
    const mapsDir = path.join(__dirname, 'maps');
    const mapTypes = fs.readdirSync(mapsDir).filter(file => fs.statSync(path.join(mapsDir, file)).isDirectory());
    const maps = [];

    mapTypes.forEach(type => {
        const typeDir = path.join(mapsDir, type);
        const mapNames = fs.readdirSync(typeDir).filter(file => fs.statSync(path.join(typeDir, file)).isDirectory());

        mapNames.forEach(name => {
            const mapPath = path.join(typeDir, name, 'index.js');
            maps.push(require(mapPath));
        });
    });

    return maps;
}

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
            console.log(operator.icon);
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
        console.log("Operators clear");
    } else {
        console.log("There were some errors with operators:");
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

        if (weapon.image && !fs.existsSync(weapon.image)) {
            issues.push('image path does not exist');
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
        console.log("Weapons clear");
    } else {
        console.log("There were some errors with weapons:");
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
        console.log("Maps clear");
    } else {
        console.log("There were some errors with maps:");
        errorMessages.forEach(msg => console.log(msg));
    }
}

function validateAll() {
    const operators = getOperators();
    const weapons = getWeapons();
    const maps = getMaps();

    validateOperators(operators);
    validateWeapons(weapons);
    validateMaps(maps);
}

validateAll();