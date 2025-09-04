const path = require('path');

module.exports = {
  "name": "Reaper MK2",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 31,
    "firerate": 765,
    "ammo": 33,
    "maxammo": 133,
    "difficulty": 5
  },
  "type": "Machine Pustol",
  "scopes": [
    "Custom Sight"
  ],
  "barrels": [
    "Flash Hider",
    "Compensator",
    "Muzzle Brake",
    "Suppressor"
  ],
  "grips": [],
  "operators": [
    "Rauora",
    "Sledge",
    "Oryx",
    "Pulse",
    "Ying",
    "Rook"
  ]
};