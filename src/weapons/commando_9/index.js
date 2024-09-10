const path = require('path');

module.exports = {
  "name": "Commando 9",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 40,
    "firerate": 780,
    "ammo": 25,
    "maxammo": 176,
    "difficulty": 1
  },
  "type": "Assault Rifle",
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
    "Sentry",
    "Mozzie"
  ]
};