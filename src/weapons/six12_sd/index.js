const path = require('path');

module.exports = {
  "name": "SIX12 SD",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 46,
    "firerate": 1,
    "ammo": 6,
    "maxammo": 55,
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
    "Nokk",
    "Lesion"
  ]
};