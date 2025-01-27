const path = require('path');

module.exports = {
  "name": "D-50",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 71,
    "firerate": 1,
    "ammo": 7,
    "maxammo": 64,
    "difficulty": 3
  },
  "type": "Handgun",
  "scopes": [
    "Custom Sight"
  ],
  "barrels": [],
  "grips": [],
  "operators": [
    "Nokk",
    "Valkyrie",
    "Azami"
  ]
};