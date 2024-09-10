const path = require('path');

module.exports = {
  "name": "Bearing 9",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 33,
    "firerate": 1100,
    "ammo": 25,
    "maxammo": 126,
    "difficulty": 5
  },
  "type": "Machine Pistol",
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
    "Glaz",
    "Hibana",
    "Tachanka",
    "Echo",
    "Thunderbird"
  ]
};