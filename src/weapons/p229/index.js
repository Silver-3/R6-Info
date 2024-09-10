const path = require('path');

module.exports = {
  "name": "P229",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 51,
    "firerate": 1,
    "ammo": 12,
    "maxammo": 97,
    "difficulty": 2
  },
  "type": "Handgun",
  "scopes": [
    "Custom Sight"
  ],
  "operators": [
    "Hibana",
    "Grim",
    "Echo",
    "Goyo",
    "Skopos"
  ]
};