const path = require('path');

module.exports = {
  "name": "Alda 5.56",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 35,
    "firerate": 900,
    "ammo": 80,
    "maxammo": 241,
    "difficulty": 3
  },
  "type": "Light Machine Gun",
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
    "Suppressor"
  ],
  "grips": [
    "Vertical Grip",
    "Angled Grip",
    "Horizontal Grip"
  ],
  "operators": [
    "Maestro"
  ]
};