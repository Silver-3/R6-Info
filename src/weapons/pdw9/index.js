const path = require('path');

module.exports = {
  "name": "PDW9",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 34,
    "firerate": 800,
    "ammo": 50,
    "maxammo": 201,
    "difficulty": 2
  },
  "type": "Submachine Gun",
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
    "Jackal",
    "Osa"
  ]
};