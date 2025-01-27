const path = require('path');

module.exports = {
  "name": "5.7 USG",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 42,
    "firerate": 1,
    "ammo": 20,
    "maxammo": 121,
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
    "Striker",
    "Ash",
    "Thermite",
    "Nokk",
    "Zero",
    "Castle",
    "Pulse",
    "Fenrir"
  ]
};