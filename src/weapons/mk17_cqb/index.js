const path = require('path');

module.exports = {
  "name": "MK17 CQB",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 40,
    "firerate": 585,
    "ammo": 20,
    "maxammo": 181,
    "difficulty": 1
  },
  "type": "Assault Rifle",
  "scopes": [
    "Magnified A",
    "Magnified B",
    "Magnified C",
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
    "Blackbeard"
  ]
};