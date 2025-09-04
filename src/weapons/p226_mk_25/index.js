const path = require('path');

module.exports = {
  "name": "P226 MK 25",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 50,
    "firerate": 1,
    "ammo": 15,
    "maxammo": 97,
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
    "Sledge",
    "Thatcher",
    "Kali",
    "Smoke",
    "Mute",
    "Tubarao",
    "Denari"
  ]
};