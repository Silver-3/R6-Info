const path = require('path');

module.exports = {
  "name": "MP5K",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 30,
    "firerate": 900,
    "ammo": 30,
    "maxammo": 181,
    "difficulty": 2
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
    "Mute",
    "Wamai"
  ]
};