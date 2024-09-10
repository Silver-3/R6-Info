const path = require('path');

module.exports = {
  "name": "SG-CQB",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 44,
    "firerate": 1,
    "ammo": 7,
    "maxammo": 50,
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
  "operators": [
    "Twich",
    "Lion",
    "Grim",
    "Doc",
    "Rook"
  ]
};