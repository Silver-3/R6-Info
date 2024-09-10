const path = require('path');

module.exports = {
  "name": "DP27",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 60,
    "firerate": 550,
    "ammo": 70,
    "maxammo": 281,
    "difficulty": 1
  },
  "type": "Light Machine Gun",
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
    "Reflex D",
    "Iron Sight"
  ],
  "operators": [
    "Tachanka"
  ]
};