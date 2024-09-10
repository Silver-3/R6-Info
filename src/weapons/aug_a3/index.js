const path = require('path');

module.exports = {
  "name": "AUG A3",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 40,
    "firerate": 700,
    "ammo": 31,
    "maxammo": 187,
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
    "Kaid"
  ]
};