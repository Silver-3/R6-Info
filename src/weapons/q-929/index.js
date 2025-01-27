const path = require('path');

module.exports = {
  "name": "Q-929",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 60,
    "firerate": 1,
    "ammo": 10,
    "maxammo": 101,
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
    "Ying",
    "Lesion",
    "Thunderbird"
  ]
};