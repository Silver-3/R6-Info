const path = require('path');

module.exports = {
  "name": "Mk 14 EBR",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 60,
    "firerate": 1,
    "ammo": 20,
    "maxammo": 121,
    "difficulty": 3
  },
  "type": "Marksman Rifle",
  "scopes": [
    "Telescopic A",
    "Telescopic B",
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
    "Dokkaebi",
    "Aruni"
  ]
};