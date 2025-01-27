const path = require('path');

module.exports = {
  "name": "ITA12S",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 29,
    "firerate": 1,
    "ammo": 5,
    "maxammo": 36,
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
  "barrels": [],
  "grips": [],
  "operators": [
    "Jackal",
    "Amaru",
    "Frost",
    "Mira",
    "Thunderbird",
    "Striker",
    "Melusi"
  ]
};