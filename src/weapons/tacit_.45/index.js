const path = require('path');

module.exports = {
  "name": "TACIT .45",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 52,
    "firerate": 1,
    "ammo": 8,
    "maxammo": 88,
    "difficulty": 2
  },
  "type": "Handgun",
  "scopes": [
    "Custom Sight"
  ],
  "barrels": [],
  "grips": [],
  "operators": [
    "Solid Snake"
  ]
};