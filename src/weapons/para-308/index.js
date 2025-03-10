const path = require('path');

module.exports = {
  "name": "Para-308",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 47,
    "firerate": 650,
    "ammo": 30,
    "maxammo": 181,
    "difficulty": 2
  },
  "type": "Assault Rifle",
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
    "Capitao",
    "Brava"
  ]
};