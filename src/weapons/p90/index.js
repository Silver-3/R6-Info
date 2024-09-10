const path = require('path');

module.exports = {
  "name": "P90",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 22,
    "firerate": 970,
    "ammo": 50,
    "maxammo": 201,
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
  "operators": [
    "Doc",
    "Rook",
    "Solis"
  ]
};