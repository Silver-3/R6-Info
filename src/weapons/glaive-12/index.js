const path = require('path');

module.exports = {
  "name": "Glaive-12",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 63,
    "firerate": 1,
    "ammo": 4,
    "maxammo": 29,
    "difficulty": 3
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
  "grips": [
    "Vertical Grip",
    "Angled Grip",
    "Horizontal Grip"
  ],
  "operators": [
    "Denari"
  ]
};