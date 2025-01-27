const path = require('path');

module.exports = {
  "name": "BOSG.12.2",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 125,
    "firerate": 1,
    "ammo": 2,
    "maxammo": 61,
    "difficulty": 2
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
  "barrels": [],
  "grips": [
    "Vertical Grip",
    "Angled Grip",
    "Horizontal Grip"
  ],
  "operators": [
    "Dokkaebi",
    "Vigil"
  ]
};