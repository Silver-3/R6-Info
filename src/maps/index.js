const path = require('path');
const fs = require('fs');

const maps = {ranked: {}, nonranked: {}};

fs.readdirSync(__dirname).forEach(type => {
    const typeDir = path.join(__dirname, type);

    if (fs.statSync(typeDir).isDirectory()) {
        fs.readdirSync(typeDir).forEach(map => {
            const mapDir = path.join(typeDir, map);

            if (fs.statSync(mapDir).isDirectory()) {
                const mapData = require(mapDir + '/index.js');
                maps[type][map] = mapData;
            }
        });
    }
});

function randomMap(type) {
    if (!type) throw new Error("Team type is required");
    type = type.toLowerCase().replace(' ', '');
    if (type !== "ranked" && type !== "nonranked") throw new Error("Invalid type of map. Must be 'ranked' or 'nonranked'");

    const keys = Object.keys(maps[type]);
    return maps[type][keys[Math.floor(Math.random() * keys.length)]];
}

function getMap(mapName) {
    if (!mapName) throw new Error("Map name is required");
    mapName = mapName.toLowerCase();

    for (let type in maps) {
        if (maps[type] && maps[type][mapName]) {
            return maps[type][mapName];
        }
    }

    throw new Error(`Map (${mapName}) not found.`);
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

module.exports = {
    randomMap,
    getMap,
    getRankedMaps,
    getNonrankedMaps,
    getAllMaps,
};