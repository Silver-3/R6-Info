const path = require('path');

module.exports = {
  "name": "K1A",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 36,
    "firerate": 720,
    "ammo": 30,
    "maxammo": 181,
    "difficulty": 1
  },
  "type": "Submachine Gun",
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
    "Vigil"
  ]
};