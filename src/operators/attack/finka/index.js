const path = require('path');

module.exports = {
  "name": "Finka",
  "ability": {
    "name": "Adrenal Surge",
    "description": "Activates nanobots to give allies an HP boost and revive those who are downed, including herself."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Front-Line",
    "Support"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 1
  },
  "bio": {
    "realname": "Lera Melnikova",
    "nickname": "Finka",
    "org": "CBRN Threat Unit",
    "squad": "Nighthaven",
    "height": "1.71m",
    "weight": "68kg",
    "dateofbirth": "June 7th (Age 27)",
    "placeofbirth": "Gomel, Belarus"
  },
  "guns": {
    "primary": [
      "Spear .308",
      "6P41",
      "SASG-12"
    ],
    "secondary": [
      "PMM",
      "GSH-18"
    ]
  },
  "gadgets": [
    "Frag grenade",
    "Smoke grenade",
    "Stun grenade"
  ],
  "season": "Y3S1 - Chimera"
};