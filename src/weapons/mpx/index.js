const path = require('path');

module.exports = {
  "name": "MPX",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 26,
    "firerate": 830,
    "ammo": 30,
    "maxammo": 181,
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
    "Valkyrie",
    "Warden",
    "Tubarao"
  ]
};