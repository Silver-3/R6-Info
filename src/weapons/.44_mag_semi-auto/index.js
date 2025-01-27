const path = require('path');

module.exports = {
  "name": ".44 Mag Semi-Auto",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 54,
    "firerate": 1,
    "ammo": 7,
    "maxammo": 71,
    "difficulty": 2
  },
  "type": "Handgun",
  "scopes": [
    "Custom Sight"
  ],
  "barrels": [],
  "grips": [],
  "operators": [
    "Nomad",
    "Kaid"
  ]
};