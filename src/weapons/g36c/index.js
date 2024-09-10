const path = require('path');

module.exports = {
  "name": "G36C",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 38,
    "firerate": 780,
    "ammo": 30,
    "maxammo": 181,
    "difficulty": 3
  },
  "type": "Assault Rifle",
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
    "Ash",
    "Iana"
  ]
};