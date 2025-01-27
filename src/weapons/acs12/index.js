const path = require('path');

module.exports = {
  "name": "ACS12",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 69,
    "firerate": 300,
    "ammo": 30,
    "maxammo": 121,
    "difficulty": 4
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
    "Maestro",
    "Alibi",
    "Azami"
  ]
};