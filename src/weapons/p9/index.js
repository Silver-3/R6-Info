const path = require('path');

module.exports = {
  "name": "P9",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 45,
    "firerate": 1,
    "ammo": 16,
    "maxammo": 113,
    "difficulty": 1
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
    "Twitch",
    "Montagne",
    "Lion",
    "Ace",
    "Doc",
    "Rook"
  ]
};