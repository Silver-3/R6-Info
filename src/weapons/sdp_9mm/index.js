const path = require('path');

module.exports = {
  "name": "SDP 9mm",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 47,
    "firerate": 1,
    "ammo": 16,
    "maxammo": 113,
    "difficulty": 2
  },
  "type": "Handgun",
  "scopes": [
    "Custom Sight"
  ],
  "operators": [
    "Gridlock",
    "Sens",
    "Mozzie"
  ]
};