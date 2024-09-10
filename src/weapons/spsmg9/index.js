const path = require('path');

module.exports = {
  "name": "SPSMG9",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 33,
    "firerate": 980,
    "ammo": 20,
    "maxammo": 121,
    "difficulty": 4
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
    "Kali",
    "Clash"
  ]
};