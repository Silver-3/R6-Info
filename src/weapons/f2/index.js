const path = require('path');

module.exports = {
  "name": "F2",
  "image": path.join(__dirname, './image.png'),
  "stats": {
    "damage": 37,
    "firerate": 980,
    "ammo": 25,
    "maxammo": 176,
    "difficulty": 4
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
  "barrels": [
    "Flash Hider",
    "Compensator",
    "Muzzle Brake",
    "Suppressor",
    "Extended Barrel"
  ],
  "grips": [],
  "operators": [
    "Twitch"
  ]
};