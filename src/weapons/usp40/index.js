const path = require('path');

module.exports = {
  "name": "USP40",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 48,
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
    "Jackal",
    "Brava",
    "Mira",
    "Oryx"
  ]
};