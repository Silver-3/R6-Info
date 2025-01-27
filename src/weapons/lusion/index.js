const path = require('path');

module.exports = {
  "name": "Lusion",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 65,
    "firerate": 1,
    "ammo": 12,
    "maxammo": 91,
    "difficulty": 2
  },
  "type": "Handgun",
  "scopes": [
    "Custom Sight"
  ],
  "barrels": [],
  "grips": [],
  "operators": [
    "Caveira"
  ]
};