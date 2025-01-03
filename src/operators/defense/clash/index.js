const path = require('path');

module.exports = {
  "name": "Clash",
  "ability": {
    "name": "CCE Shield",
    "description": "Extendable ecltro shield capable of slowing down enemies, causing damage over time."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Inte;",
    "Crowd Control"
  ],
  "stats": {
    "health": 3,
    "speed": 1,
    "difficulty": 3
  },
  "bio": {
    "realname": "Morowa Evans",
    "nickname": "Clash",
    "org": "GSUTR",
    "squad": "Wolfguard",
    "height": "1.79m",
    "weight": "73kg",
    "dateofbirth": "June 7th (Age 35)",
    "placeofbirth": "London, England"
  },
  "guns": {
    "primary": [
      "CCE Shield"
    ],
    "secondary": [
      "Super Shorty",
      "SPSMG9",
      "P-10C"
    ]
  },
  "gadgets": [
    "Barbed wire",
    "Impact grenade",
    "Deployable shield"
  ],
  "season": "Y3S3 - Grim Sky"
};