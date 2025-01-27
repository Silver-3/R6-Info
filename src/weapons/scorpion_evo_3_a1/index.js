const path = require('path');

module.exports = {
  "name": "Scorpion Evo 3 A1",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 23,
    "firerate": 1800,
    "ammo": 40,
    "maxammo": 201,
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
    "Suppressor"
  ],
  "grips": [
    "Vertical Grip",
    "Angled Grip",
    "Horizontal Grip"
  ],
  "operators": [
    "Ela"
  ]
};