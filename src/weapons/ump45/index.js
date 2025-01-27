const path = require('path');

module.exports = {
  "name": "UMP45",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 42,
    "firerate": 600,
    "ammo": 25,
    "maxammo": 176,
    "difficulty": 2
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
  "grips": [
    "Vertical Grip",
    "Angled Grip",
    "Horizontal Grip"
  ],
  "operators": [
    "Castle",
    "Pulse"
  ]
};