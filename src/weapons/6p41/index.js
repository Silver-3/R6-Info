const path = require('path');

module.exports = {
  "name": "6P41",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 46,
    "firerate": 680,
    "ammo": 100,
    "maxammo": 301,
    "difficulty": 3
  },
  "type": "Light Machine Gun",
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
    "Suppressor"
  ],
  "grips": [
    "Vertical Grip",
    "Angled Grip",
    "Horizontal Grip"
  ],
  "operators": [
    "Fuze",
    "Finka"
  ]
};