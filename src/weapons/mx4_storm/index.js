const path = require('path');

module.exports = {
  "name": "Mx4 Storm",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 26,
    "firerate": 950,
    "ammo": 30,
    "maxammo": 181,
    "difficulty": 4
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
    "Alibi"
  ]
};