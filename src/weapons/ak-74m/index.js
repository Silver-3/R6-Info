const path = require('path');

module.exports = {
  "name": "AK-74M",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 44,
    "firerate": 650,
    "ammo": 40,
    "maxammo": 201,
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
    "Nomad",
    "Deimos"
  ]
};