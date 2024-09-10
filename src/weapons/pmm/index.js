const path = require('path');

module.exports = {
  "name": "PMM",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 61,
    "firerate": 1,
    "ammo": 8,
    "maxammo": 81,
    "difficulty": 2
  },
  "type": "Handgun",
  "scopes": [
    "Custom Sight"
  ],
  "operators": [
    "Glaz",
    "Fuze",
    "Finka",
    "Osa",
    "Kapkan",
    "Tachanka"
  ]
};