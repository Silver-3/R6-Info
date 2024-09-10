const path = require('path');

module.exports = {
  "name": "GSH-18",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 44,
    "firerate": 1,
    "ammo": 18,
    "maxammo": 109,
    "difficulty": 1
  },
  "type": "Handgun",
  "scopes": [
    "Custom Sight"
  ],
  "operators": [
    "Fuze",
    "Finka",
    "Flores",
    "Kapkan",
    "Tachanka"
  ]
};