const path = require('path');

module.exports = {
  "name": "PCX-33",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 36,
    "firerate": 745,
    "ammo": 31,
    "maxammo": 155,
    "difficulty": 2
  },
  "type": "Assault Rifle",
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
    "Skopos"
  ]
};