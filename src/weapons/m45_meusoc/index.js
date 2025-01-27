const path = require('path');

module.exports = {
  "name": "M45 Meusoc",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 58,
    "firerate": 1,
    "ammo": 7,
    "maxammo": 78,
    "difficulty": 2
  },
  "type": "Handgun",
  "scopes": [
    "Custom Sight"
  ],
  "barrels": [
    "Muzzle Brake",
    "Suppressor"
  ],
  "grips": [],
  "operators": [
    "Ash",
    "Thermite",
    "Castle",
    "Pulse"
  ]
};