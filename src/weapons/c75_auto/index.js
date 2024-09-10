const path = require('path');

module.exports = {
  "name": "C75 Auto",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 35,
    "firerate": 1000,
    "ammo": 26,
    "maxammo": 131,
    "difficulty": 3
  },
  "type": "Machine Pistol",
  "scopes": [
    "Custom Sight"
  ],
  "operators": [
    "Dokkaebi",
    "Kali",
    "Sentry",
    "Vigil",
    "Thorn"
  ]
};