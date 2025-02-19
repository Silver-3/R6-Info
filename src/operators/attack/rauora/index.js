const path = require('path');

module.exports = {
  "name": "Rauora",
  "ability": {
    "name": "D.O.M Panel Launcher",
    "description": "A launcher that fires retractable bulletproof panels onto doorframes"
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Support",
    "Map Control"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 2
  },
  "bio": {
    "realname": "Hapai Iwini",
    "nickname": "Rauora",
    "org": "NZSAS",
    "squad": "Viperstrike",
    "height": "1.86m",
    "weight": "80kg",
    "dateofbirth": "March 15rd (Age 29)",
    "placeofbirth": "Christchurch, New Zealand"
  },
  "guns": {
    "primary": [
      "417",
      "M249"
    ],
    "secondary": [
      "Reaper MK2",
      "GSH-18"
    ]
  },
  "gadgets": [
    "Smoke grenade",
    "Breach charge"
  ],
  "season": "Y10S1 - Prep Phase"
};