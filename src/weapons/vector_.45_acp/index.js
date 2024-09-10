const path = require('path');

module.exports = {
  "name": "Vector .45 ACP",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 23,
    "firerate": 1200,
    "ammo": 25,
    "maxammo": 176,
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
  "operators": [
    "Mira",
    "Goyo"
  ]
};