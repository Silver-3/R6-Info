const path = require('path');

module.exports = {
  "name": "T-5 SMG",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 28,
    "firerate": 900,
    "ammo": 30,
    "maxammo": 181,
    "difficulty": 3
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
    "Lesion",
    "Oryx"
  ]
};