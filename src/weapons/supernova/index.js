const path = require('path');

module.exports = {
  "name": "Supernova",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 48,
    "firerate": 1,
    "ammo": 7,
    "maxammo": 57,
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
    "Hibana",
    "Amaru",
    "Echo"
  ]
};