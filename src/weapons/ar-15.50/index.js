const path = require('path');

module.exports = {
  "name": "AR-15.50",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 67,
    "firerate": 1,
    "ammo": 10,
    "maxammo": 101,
    "difficulty": 2
  },
  "type": "Marksman Rifle",
  "scopes": [
    "Telescopic A",
    "Telescopic B",
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
    "Maverick",
    "Tubarao"
  ]
};