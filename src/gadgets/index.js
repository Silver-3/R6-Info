const path = require('path');
const fs = require('fs');
const R6Info = require('../index.js');

const gadgets = {};

/**
 * @typedef {Object} gadgetObject
 * @property {string} name 
 * @property {string} image 
 */

fs.readdirSync(__dirname).forEach(gadget => {
    const gadgetDir = path.join(__dirname, gadget);

    if (fs.statSync(gadgetDir).isDirectory()) {
        const gadgetData = require(gadgetDir + '/index.js');
        gadgets[gadget] = gadgetData;
    }
});

/**
 * 
 * @param {String} operator 
 * @returns {gadgetObject}
 */

function randomGadget(operator) {
    if (!operator) throw new Error("Operator is required");
    operator = operator.toLowerCase();
    if (!R6Info.getOperator(operator)) throw new Error(`Opeartor (${operator}) not found.`);

    const keys = Object.keys(gadgets);
    return gadgets[keys[Math.floor(Math.random() * keys.length)]];
}

/**
 * 
 * @param {String} gadgetName 
 * @returns {gadgetObject}
 */

function getGadget(gadgetName) {
    if (!gadgetName) throw new Error("Map name is required");
    gadgetName = gadgetName.toLowerCase();

    if (gadgets[gadgetName]) return gadgets[gadgetName]

    throw new Error(`Gadget (${mapName}) not found.`);
}

/**
 * 
 * @returns {Array<gadgetObject>}
 */

function getAllGadgets() {
    let gadgetArray = [];

    for (let gadget in gadgets) {
        gadgetArray.push(gadgets[gadget]);
    }

    return gadgetArray;
}

module.exports = {
    getGadget,
    randomGadget,
    viewGadget,
    getAllGadgets
};