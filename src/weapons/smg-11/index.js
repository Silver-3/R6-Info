const path = require('path');

module.exports = {
  "name": "SMG-11",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 32,
    "firerate": 1270,
    "ammo": 16,
    "maxammo": 113,
    "difficulty": 5
  },
  "type": "Machine Pistol",
  "scopes": [
    "Red Dot A",
    "Red Dot B",
    "Red Dot C",
    "Holo A",
    "Holo B",
    "Holo C",
    "Holo D",
    "Reflex A",
    "Reflex B",
    "Reflex C",
    "Iron Sight"
  ],
  "operators": [
    "Amaru",
    "Smoke",
    "Mute",
    "Solis"
  ]
};