const path = require('path');

module.exports = {
  "name": "TCSG12",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 63,
    "firerate": 1,
    "ammo": 10,
    "maxammo": 121,
    "difficulty": 3
  },
  "type": "Slug Shotgun",
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
    "Kaid",
    "Goyo"
  ]
};