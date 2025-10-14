const path = require('path');

module.exports = {
  "name": "Keratos .357",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 78,
    "firerate": 1,
    "ammo": 6,
    "maxammo": 61,
    "difficulty": 3
  },
  "type": "Revolver",
  "scopes": [
    "Custom Sight"
  ],
  "barrels": [
    "Muzzle Brake",
    "Suppressor"
  ],
  "grips": [],
  "operators": [
    "Maestro",
    "Alibi",
    "Wamai",
    "Bandit"
  ]
};