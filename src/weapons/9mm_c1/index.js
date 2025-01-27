const path = require('path');

module.exports = {
  "name": "9mm C1",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 36,
    "firerate": 575,
    "ammo": 34,
    "maxammo": 171,
    "difficulty": 1
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
    "Frost"
  ]
};