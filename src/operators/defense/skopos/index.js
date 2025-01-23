const path = require('path');

module.exports = {
  "name": "Skopos",
  "ability": {
    "name": "v10 Pantheon Shells",
    "description": "A pair of robots piloted remotely as an Operator and Observation tool, which can be swapped."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Intel",
    "Support"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 2
  },
  "bio": {
    "realname": "Kure Galanos",
    "nickname": "Skopos",
    "org": "Ekam",
    "squad": "Wolfguard",
    "height": "1.67m",
    "weight": "55kg",
    "dateofbirth": "July 25th (Age 42)",
    "placeofbirth": "Nicosia, Cyprus"
  },
  "guns": {
    "primary": [
        "PCX-33"
    ],
    "secondary": [
        "P229"
    ]
  },
  "gadgets": [
    "Impact grenade",
    "Proximity alarm"
  ],
  "season": "Y9S3 - Twin Shells"
};