const path = require('path');

module.exports = {
  "name": "AUG A2",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 42,
    "firerate": 720,
    "ammo": 30,
    "maxammo": 181,
    "difficulty": 2
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
    "Iq",
    "Wamai"
  ]
};