const path = require('path');

module.exports = {
  "name": "spas-15",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 24,
    "firerate": 1,
    "ammo": 6,
    "maxammo": 49,
    "difficulty": 1
  },
  "type": "Shotgun",
  "scopes": [
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
  "barrels": [],
  "grips": [],
  "operators": [
    "Caveira",
    "Thunderbird"
  ]
};