const path = require('path');

module.exports = {
  "name": "R4-C",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 39,
    "firerate": 860,
    "ammo": 25,
    "maxammo": 151,
    "difficulty": 4
  },
  "type": "Assault Rifle",
  "scopes": [
    "Magnified A",
    "Magnified B",
    "Magnified C",
    "Red Dot A",
    "Red Dot B",
    "Red Dot C",
    "Holo A",
    "Holo B",
    "Holo C",
    "Holo D",
    "Reflex A",
    "Reflex B",
    "Reflex C",
    "Iron Sight"
  ],
  "operators": [
    "Ash",
    "Ram"
  ]
};