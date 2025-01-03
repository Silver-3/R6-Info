const path = require('path');

module.exports = {
  "name": "Blackbeard",
  "ability": {
    "name": "H.U.L.L. Adaptable Shield",
    "description": "Ballistic shield that busts through breakable defenses and folds up for using during rappel."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Breach",
    "Front-Line"
  ],
  "stats": {
    "health": 3,
    "speed": 1,
    "difficulty": 2
  },
  "bio": {
    "realname": "Craig Jenson",
    "nickname": "Blackbeard",
    "org": "Navy Seal",
    "squad": "Redhammer",
    "height": "1.8m",
    "weight": "84kg",
    "dateofbirth": "March 12th (Age 32)",
    "placeofbirth": "Bellevue, Washington"
  },
  "guns": {
    "primary": [
      "H.U.L.L. Adaptable Shield"
    ],
    "secondary": [
      "MK17 CQB",
      "SR-25"
    ]
  },
  "gadgets": [
    "Frag grenade",
    "Claymore"
  ],
  "season": "Y1S2 - Dust Line"
};