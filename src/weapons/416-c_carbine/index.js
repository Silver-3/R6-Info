const path = require('path');

module.exports = {
  "name": "416-C Carbine",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 38,
    "firerate": 740,
    "ammo": 25,
    "maxammo": 176,
    "difficulty": 3
  },
  "type": "Assault Rifle",
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
    "Jager"
  ]
};