const path = require('path');

module.exports = {
  "name": "Super Shorty",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 35,
    "firerate": 1,
    "ammo": 3,
    "maxammo": 46,
    "difficulty": 1
  },
  "type": "Shotgun",
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
  "barrels": [],
  "grips": [],
  "operators": [
    "Gridlock",
    "Brava",
    "Sentry",
    "Castle",
    "Clash",
    "Wamai"
  ]
};