const path = require('path');

module.exports = {
  "name": "UZK50GI",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 40,
    "firerate": 700,
    "ammo": 22,
    "maxammo": 177,
    "difficulty": 2
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
    "Thorn"
  ]
};