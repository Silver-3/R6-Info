const path = require('path');

module.exports = {
  "name": "SMG-12",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 28,
    "firerate": 1270,
    "ammo": 32,
    "maxammo": 129,
    "difficulty": 4
  },
  "type": "Machine Pistol",
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
  "barrels": [],
  "grips": [
    "Vertical Grip",
    "Angled Grip",
    "Horizontal Grip"
  ],
  "operators": [
    "Dokkaebi",
    "Vigil",
    "Warden"
  ]
};