const path = require('path');

module.exports = {
  "name": "PRB92",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 42,
    "firerate": 1,
    "ammo": 15,
    "maxammo": 106,
    "difficulty": 2
  },
  "type": "Handgun",
  "scopes": [
    "Custom Sight"
  ],
  "operators": [
    "Capitao",
    "Nomad",
    "Aruni"
  ]
};