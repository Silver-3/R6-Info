const path = require('path');

module.exports = {
  "name": "OTs-03",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 71,
    "firerate": 1,
    "ammo": 15,
    "maxammo": 106,
    "difficulty": 2
  },
  "type": "Sniper Rifle",
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
    "Muzzle Brake",
    "Suppressor"
  ],
  "grips": [
    "Vertical Grip",
    "Angled Grip",
    "Horizontal Grip"
  ],
  "operators": [
    "Glaz"
  ]
};