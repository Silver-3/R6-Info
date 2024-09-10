const path = require('path');

module.exports = {
  "name": "Lion",
  "ability": {
    "name": "EE-ONE-D",
    "description": "The EE-ONE-D detects enemy movement, tagging their position during the scan."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Intel",
    "Map control"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 1
  },
  "bio": {
    "realname": "Olivier Flament",
    "nickname": "Lion",
    "org": "CBRN Threat Unit",
    "squad": "Wolfguard",
    "height": "1.85m",
    "weight": "87kg",
    "dateofbirth": "August 29th (Age 31)",
    "placeofbirth": "Toulouse, France"
  },
  "guns": {
    "primary": [
      "V308",
      "417",
      "SG-CQB"
    ],
    "secondary": [
      "LFP586",
      "P9"
    ]
  },
  "gadgets": [
    "Stun grenade",
    "Claymore",
    "Grenade"
  ],
  "season": "Y3S1 - Chimera"
};