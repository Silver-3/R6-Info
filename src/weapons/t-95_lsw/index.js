const path = require('path');

module.exports = {
  "name": "T-95 LSW",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 46,
    "firerate": 650,
    "ammo": 80,
    "maxammo": 241,
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
    "Ying"
  ]
};