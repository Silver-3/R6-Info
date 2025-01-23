const path = require('path');

module.exports = {
  "name": "Lesion",
  "ability": {
    "name": "Gu",
    "description": "Toxic mines that inject a compound, injuring opponents and limiting their speed."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Anti-Entry",
    "Trapper"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 1
  },
  "bio": {
    "realname": "Liu Tze Long",
    "nickname": "Lesion",
    "org": "SDU",
    "squad": "Ghosteyes",
    "height": "1.74m",
    "weight": "82kg",
    "dateofbirth": "July 2nd (Age 44)",
    "placeofbirth": "Hong Kong, Junk Bay (Tseung Kwan O)"
  },
  "guns": {
    "primary": [
      "SIX12 SD",
      "T-5 SMG"
    ],
    "secondary": [
      "Q-929",
      "Super Shorty"
    ]
  },
  "gadgets": [
    "Observation blocker",
    "Bulletproof camera"
  ],
  "season": "Y2S3 - Blood Orchid"
};