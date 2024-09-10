const path = require('path');

module.exports = {
  "name": "LMG-E",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 41,
    "firerate": 720,
    "ammo": 150,
    "maxammo": 301,
    "difficulty": 2
  },
  "type": "Light Machine Gun",
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
    "Zofia",
    "Ram"
  ]
};