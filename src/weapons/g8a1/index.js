const path = require('path');

module.exports = {
  "name": "G8A1",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 37,
    "firerate": 850,
    "ammo": 50,
    "maxammo": 251,
    "difficulty": 2
  },
  "type": "Light Machine Gun",
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
    "Iq",
    "Amaru"
  ]
};