const path = require('path');

module.exports = {
  "name": "MP5",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 27,
    "firerate": 800,
    "ammo": 30,
    "maxammo": 181,
    "difficulty": 2
  },
  "type": "Submachine Gun",
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
  "barrels": [
    "Flash Hider",
    "Compensator",
    "Muzzle Brake",
    "Suppressor",
    "Extended Barrel"
  ],
  "grips": [
    "Vertical Grip",
    "Angled Grip",
    "Horizontal Grip"
  ],
  "operators": [
    "Doc",
    "Rook",
    "Melusi"
  ]
};