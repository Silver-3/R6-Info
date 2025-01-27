const path = require('path');

module.exports = {
  "name": "Bailiff 410",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 30,
    "firerate": 1,
    "ammo": 5,
    "maxammo": 46,
    "difficulty": 2
  },
  "type": "Revolver",
  "scopes": [
    "Custom Sight"
  ],
  "barrels": [],
  "grips": [],
  "operators": [
    "Grim",
    "Doc",
    "Maestro",
    "Alibi",
    "Oryx",
    "Fenrir"
  ]
};