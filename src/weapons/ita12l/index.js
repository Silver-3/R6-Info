const path = require('path');

module.exports = {
  "name": "ITA12L",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 41,
    "firerate": 1,
    "ammo": 8,
    "maxammo": 57,
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
    "Jackal",
    "Mira",
    "Solis"
  ]
};