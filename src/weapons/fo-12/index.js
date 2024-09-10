const path = require('path');

module.exports = {
  "name": "FO-12",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 26,
    "firerate": 1,
    "ammo": 10,
    "maxammo": 71,
    "difficulty": 1
  },
  "type": "Shotgun",
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
    "Ela"
  ]
};