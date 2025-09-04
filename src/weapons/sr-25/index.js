const path = require('path');

module.exports = {
  "name": "SR-25",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 61,
    "firerate": 1,
    "ammo": 20,
    "maxammo": 141,
    "difficulty": 3
  },
  "type": "Marksman Rifle",
  "scopes": [
    "Telescopic A",
    "Telescopic B",
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
  "barrels": [
    "Muzzle Brake",
    "Suppressor"
  ],
  "grips": [
    "Vertical Grip",
    "Angled Grip",
    "Horizontal Grip"
  ],
  "operators": [
    "Blackbeard",
    "Flores",
    "Striker"
  ]
};