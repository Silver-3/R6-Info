const path = require('path');

module.exports = {
  "name": "Mira",
  "ability": {
    "name": "Black Mirror",
    "description": "Deploys a one-way bulletproof mirror on breakable and reinforced walls. Can also be ejected to create a murder hole."
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
    "realname": "Elena Maria Alvarez",
    "nickname": "Mira",
    "org": "GEO",
    "squad": "Viperstrike",
    "height": "1.65m",
    "weight": "60kg",
    "dateofbirth": "November 18th (Age 39)",
    "placeofbirth": "Madrid, Spain"
  },
  "guns": {
    "primary": [
      "Vector .45 ACP",
      "ITA12L"
    ],
    "secondary": [
      "USP40",
      "ITA12S"
    ]
  },
  "gadgets": [
    "Proximity alarm",
    "Nitro cell"
  ],
  "season": "Y2S1 - Velvet Shell"
};