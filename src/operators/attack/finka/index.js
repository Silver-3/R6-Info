const path = require('path');

module.exports = {
  "name": "Finka",
  "ability": {
    "name": "Adrenal Surge",
    "description": "Activates nanobots to give allies an HP boost and revive those who are downed, including herself."
  },
  "icon": path.join(__dirname, './icon.png'),
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
      "Spear.308",
      "GP41",
      "SASG-12"
    ],
    "secondary": [
      "PMM",
      "GSH-18"
    ]
  },
  "gadgets": [
    "Smoke grenade",
    "Stun grenade",
    "Frag grenade"
  ],
  "season": "Y3S1 - Chimera"
};