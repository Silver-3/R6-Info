const path = require('path');

module.exports = {
  "name": "C7E",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 42,
    "firerate": 800,
    "ammo": 30,
    "maxammo": 176,
    "difficulty": 2
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
    "Jackal"
  ]
};