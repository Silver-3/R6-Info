const path = require('path');

module.exports = {
  "name": "RG15",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 38,
    "firerate": 1,
    "ammo": 15,
    "maxammo": 106,
    "difficulty": 1
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
    "Zofia",
    "Ela",
    "Melusi"
  ]
};