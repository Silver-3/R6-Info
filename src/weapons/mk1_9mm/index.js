const path = require('path');

module.exports = {
  "name": "MK1 9mm",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 48,
    "firerate": 1,
    "ammo": 13,
    "maxammo": 105,
    "difficulty": 2
  },
  "type": "Handgun",
  "scopes": [
    "Custom Sight"
  ],
  "operators": [
    "Buck",
    "Iana",
    "Ram",
    "Frost"
  ]
};