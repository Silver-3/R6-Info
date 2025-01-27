const path = require('path');

module.exports = {
  "name": "P12",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 44,
    "firerate": 1,
    "ammo": 15,
    "maxammo": 106,
    "difficulty": 2
  },
  "type": "Handgun",
  "scopes": [
    "Custom Sight"
  ],
  "barrels": [
    "Muzzle Brake",
    "Suppressor"
  ],
  "grips": [],
  "operators": [
    "Blitz",
    "Iq",
    "Jager",
    "Bandit",
    "Wamai"
  ]
};