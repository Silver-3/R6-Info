const path = require('path');

module.exports = {
  "name": "P-10C",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 40,
    "firerate": 1,
    "ammo": 15,
    "maxammo": 106,
    "difficulty": 1
  },
  "type": "Handgun",
  "scopes": [
    "Custom Sight"
  ],
  "operators": [
    "Clash",
    "Warden"
  ]
};