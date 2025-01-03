const path = require('path');

module.exports = {
  "name": "Montagne",
  "ability": {
    "name": "Le Roc Shield",
    "description": "Can expand his Extendable Shield to offer full protection while standing."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Intel",
    "Support"
  ],
  "stats": {
    "health": 3,
    "speed": 1,
    "difficulty": 3
  },
  "bio": {
    "realname": "Gilles Toure",
    "nickname": "Montagne",
    "org": "GIGN",
    "squad": "Wolfguard",
    "height": "1.9m",
    "weight": "90kg",
    "dateofbirth": "October 11th (Age 48)",
    "placeofbirth": "Bordeaux, France"
  },
  "guns": {
    "primary": [
      "Le Roc Shield"
    ],
    "secondary": [
      "P9",
      "LFP586"
    ]
  },
  "gadgets": [
    "Hard breach charge",
    "Smoke grenade",
    "Impact emp grenade"
  ],
  "season": "Release"
};