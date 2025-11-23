const path = require("path");
const fs = require("fs");

/**
 * @typedef {Object} operatorObject
 * @property {string} name 
 * @property {Object} ability 
 * @property {string} ability.name
 * @property {string} ability.description
 * @property {string} icon 
 * @property {string} image
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

/**
 * 
 * @returns {operatorObject}
 */

function getOperators() {
    const operatorsDir = path.join(__dirname, "operators");
    const teamDirs = fs
        .readdirSync(operatorsDir)
        .filter((file) => fs.statSync(path.join(operatorsDir, file)).isDirectory());
    const operators = [];

    teamDirs.forEach((team) => {
        const teamDir = path.join(operatorsDir, team);
        const operatorNames = fs
            .readdirSync(teamDir)
            .filter((file) => fs.statSync(path.join(teamDir, file)).isDirectory());

        operatorNames.forEach((name) => {
            const operatorPath = path.join(teamDir, name, "index.js");
            operators.push(require(operatorPath));
        });
    });

    return operators;
}

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

/**
 * 
 * @returns {Array<weaponObject>}
 */

function getWeapons() {
    const weaponsDir = path.join(__dirname, "weapons");
    const weaponNames = fs
        .readdirSync(weaponsDir)
        .filter((file) => fs.statSync(path.join(weaponsDir, file)).isDirectory());

    return weaponNames.map((name) => {
        const weaponPath = path.join(weaponsDir, name, "index.js");
        return require(weaponPath);
    });
}

/**
 * @typedef {Object} mapObject
 * @property {string} name 
 * @property {string} image 
 */

/**
 * 
 * @returns {Array<mapObject>}
 */

function getMaps() {
    const mapsDir = path.join(__dirname, "maps");
    const mapTypes = fs
        .readdirSync(mapsDir)
        .filter((file) => fs.statSync(path.join(mapsDir, file)).isDirectory());
    const maps = [];

    mapTypes.forEach((type) => {
        const typeDir = path.join(mapsDir, type);
        const mapNames = fs
            .readdirSync(typeDir)
            .filter((file) => fs.statSync(path.join(typeDir, file)).isDirectory());

        mapNames.forEach((name) => {
            const mapPath = path.join(typeDir, name, "index.js");
            maps.push(require(mapPath));
        });
    });

    return maps;
}

/**
 * @typedef {Object} gadgetObject
 * @property {string} name 
 * @property {string} image 
 */

/**
 * 
 * @returns {Array<gadgetObject>}
 */

function getGadgets() {
    const gadgetsDir = path.join(__dirname, "gadgets");
    const gadgetNames = fs
        .readdirSync(gadgetsDir)
        .filter((file) => fs.statSync(path.join(gadgetsDir, file)).isDirectory());
    const gadgets = [];

    gadgetNames.forEach((name) => {
        const gadgetPath = path.join(gadgetsDir, name, "index.js");
        gadgets.push(require(gadgetPath));
    });

    return gadgets;
}

/**
 * 
 * @param {Array<operatorObject>} operators
 */

function validateOperators(operators) {
    let errorMessages = [];

    operators.forEach((operator) => {
        let issues = [];

        if (!operator) issues.push("operator object is missing");
        if (!operator.name || operator.name.trim() === "") issues.push("operator name is empty or missing");
        if (!operator.ability || !operator.ability.name || operator.ability.name.trim() === "" || !operator.ability.description || operator.ability.description.trim() === "") issues.push("operator ability name or description is empty or missing");

        if (!operator.image || (operator.icon && !fs.existsSync(operator.icon))) issues.push("operator icon path does not exist or is missing");
        if (!operator.image || (operator.image && !fs.existsSync(operator.image))) issues.push("operator image path does not exist or is missing");

        const expectedSpecialties = ["Intel", "Anti-Gadget", "Support", "Front-Line", "Map Control", "Breach", "Trapper", "Intel", "Anti-Gadget", "Support", "Anti-Entry", "Crowd Control"];
        if (!operator.specialties || operator.specialties.length === 0 || operator.specialties.some((s) => s.trim() === "")) issues.push("operator specialties are empty or missing");
        else {
            operator.specialties.forEach(speciality => {
                if (!expectedSpecialties.includes(speciality)) issues.push(`operator speciality '${speciality}' is unknown or does not match`);
            });
        }

        if (operator.stats) {
            for (const [key, value] of Object.entries(operator.stats)) {
                if (value <= 0) issues.push(`${key}: ${value}`);
            }
        } else issues.push("operator stats are missing");

        const requiredBioFields = ["realname", "nickname", "org", "squad", "height", "weight", "dateofbirth", "placeofbirth"];
        if (operator.bio) {
            requiredBioFields.forEach((field) => {
                if (!operator.bio[field] || operator.bio[field].trim() == "") issues.push(`operator bio field ${field} is missing or empty`);
            });
        } else issues.push("operator bio is missing or empty");

        if (operator.guns) {
            if (!operator.guns.primary || operator.guns.primary.length === 0 || operator.guns.primary.some((g) => g.trim() === "")) issues.push("primary guns list is empty");
            if (!operator.guns.secondary || operator.guns.secondary.length === 0 || operator.guns.secondary.some((g) => g.trim() === "")) issues.push("secondary guns list is empty");
            
        } else issues.push("operator weapons are missing or empty");

        if (!operator.gadgets || operator.gadgets.length === 0 || operator.gadgets.some((g) => g.trim() === "")) issues.push("gadgets list is empty");
        if (!operator.season || operator.season.trim() === "") issues.push("season is empty");
        if (issues.length > 0) errorMessages.push(`${operator.name}: ${issues.join(", ")}`);
    });

    if (errorMessages.length == 0) {
        console.log("Operators are clear");
    } else {
        console.log("There were some errors with operators:");
        errorMessages.forEach((msg) => console.log(msg));
    }
}

/**
 * 
 * @param {Array<weaponObject>} weapons
 */

function validateWeapons(weapons) {
    let errorMessages = [];

    weapons.forEach((weapon) => {
        let issues = [];

        if (!weapon) issues.push("weapon object is undefined");
        if (!weapon.name || weapon.name.trim() === "") issues.push("weapon name is empty or missing");
        if (weapon.image && !fs.existsSync(weapon.image)) issues.push("weapon image path does not exist or is missing");

        if (weapon.stats) {
            for (const [key, value] of Object.entries(weapon.stats)) {
                if (value <= 0) issues.push(`${key}: ${value}`);
            }
        } else issues.push("weapon stats are empty or missing");

        if (!weapon.type || weapon.type.trim() === "") issues.push("weapon type is empty or missing");
        if (!weapon.scopes || weapon.scopes.length == 0) issues.push("weapon scopes are empty or missing");
        if (!weapon.barrels) issues.push("weapon barrels are missing")
        if (!weapon.grips) issues.push("weapon grips are missing");
        if (!weapon.operators || weapon.operators.length === 0 || weapon.operators.some((op) => op.trim() === "")) issues.push("weapon operators list is empty or missing");
        if (issues.length > 0) errorMessages.push(`${weapon.name}: ${issues.join(", ")}`);
    });

    if (errorMessages.length == 0) {
        console.log("Weapons are clear");
    } else {
        console.log("There were some errors with weapons:");
        errorMessages.forEach((msg) => console.log(msg));
    }
}

/**
 * 
 * @param {Array<mapObject>} maps 
 */

function validateMaps(maps) {
    let errorMessages = [];

    maps.forEach((map) => {
        let issues = [];

        if (!map) issues.push("map object is undefined");
        if (!map.name || map.name.trim() === "") issues.push("map name is empty or missing");
        if (map.image && !fs.existsSync(map.image)) issues.push("image path does not exist or is missing");
        if (issues.length > 0) errorMessages.push(`${map.name}: ${issues.join(", ")}`);
    });

    if (errorMessages.length == 0) {
        console.log("Maps are clear");
    } else {
        console.log("There were some errors with maps:");
        errorMessages.forEach((msg) => console.log(msg));
    }
}

/**
 * 
 * @param {Array<operatorObject>} operators 
 */

function validateOperatorGadgets(operators) {
    let errorMessages = [];

    const gadgets = getGadgets().map(gadget => ({
        name: gadget.name.toLowerCase().replaceAll(' ', ''),
        image: gadget.image
    }));

    operators.forEach((operator) => {
        operator.gadgets.forEach(gadget => {
            if (!gadgets.some(g => g.name === gadget.toLowerCase().replaceAll(' ', ''))) errorMessages.push(`${operator.name} has an invalid gadget: ${gadget}`);
        })
    });

    if (errorMessages.length == 0) {
        console.log("Operator Gadgets are clear");
    } else {
        console.log("There were some errors with operator gadgets:");
        errorMessages.forEach((msg) => console.log(msg));
    }
}

/**
 * 
 * @param {Array<operatorObject>} operators 
 * @param {Array<weaponObject>} weapons 
 */

function validateOperatorWeaponMappings(operators, weapons) {
    let errorMessages = [];

    operators.forEach((operator) => {
        operator.guns.primary.forEach((primaryWeapon) => {
            const weapon = weapons.find(w => w.name.toLowerCase() === primaryWeapon.toLowerCase());
            if (primaryWeapon.includes('Shield')) return;
            if (!weapon) errorMessages.push(`Primary weapon '${primaryWeapon}' for operator '${operator.name}' does not exist.`);
            else if (!weapon.operators.map(op => op.toLowerCase()).includes(operator.name.toLowerCase())) errorMessages.push(`Operator '${operator.name}' is not listed in the operators list for weapon '${primaryWeapon}'.`);
        });

        operator.guns.secondary.forEach((secondaryWeapon) => {
            const weapon = weapons.find(w => w.name.toLowerCase() === secondaryWeapon.toLowerCase());
            if (!weapon) errorMessages.push(`Secondary weapon '${secondaryWeapon}' for operator '${operator.name}' does not exist.`);
            else if (!weapon.operators.map(op => op.toLowerCase()).includes(operator.name.toLowerCase())) errorMessages.push(`Operator '${operator.name}' is not listed in the operators list for weapon '${secondaryWeapon}'.`);
        });
    });

    weapons.forEach((weapon) => {
        weapon.operators.forEach((operatorName) => {
            const operator = operators.find(op => op.name.toLowerCase() === operatorName.toLowerCase());
            if (!operator) errorMessages.push(`Operator '${operatorName}' listed in weapon '${weapon.name}' is unknown.`); 
            else {
                const allOperatorWeapons = [...operator.guns.primary, ...operator.guns.secondary];
                if (!allOperatorWeapons.map(w => w.toLowerCase()).includes(weapon.name.toLowerCase())) errorMessages.push(`Weapon '${weapon.name}' listed for operator '${operatorName}' but is not in their weapon list.`);
            }
        });
    });

    if (errorMessages.length == 0) {
        console.log("Operator weapon mappings are clear");
    } else {
        console.log("There were some errors with operator weapon mappings:");
        errorMessages.forEach(msg => console.log(msg));
    }
}

validateOperators(getOperators());
validateWeapons(getWeapons());
validateMaps(getMaps());
validateOperatorGadgets(getOperators());
validateOperatorWeaponMappings(getOperators(), getWeapons());