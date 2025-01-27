const path = require('path');

module.exports = {
  "name": "1911 Tacops",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 55,
    "firerate": 1,
    "ammo": 8,
    "maxammo": 73,
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
    "Maverick",
    "Thorn"
  ]
};