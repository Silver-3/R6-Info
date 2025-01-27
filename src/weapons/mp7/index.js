const path = require('path');

module.exports = {
  "name": "MP7",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 32,
    "firerate": 900,
    "ammo": 30,
    "maxammo": 181,
    "difficulty": 3
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
  "grips": [],
  "operators": [
    "Zero",
    "Bandit",
    "Fenrir"
  ]
};