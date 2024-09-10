const path = require('path');

module.exports = {
  "name": "Frost",
  "ability": {
    "name": "Welcome Mat",
    "description": "Uses a mechanical trap to incapacitate enemies."
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
    "realname": "Tina Lin Tsang",
    "nickname": "Frost",
    "org": "JTF2",
    "squad": "Wolfguard",
    "height": "1.72m",
    "weight": "63kg",
    "dateofbirth": "May 4th (Age 32)",
    "placeofbirth": "Vancouver, British Columbia"
  },
  "guns": {
    "primary": [
      "Super 90",
      "9mm C1"
    ],
    "secondary": [
      "MK1 9mm",
      "ITA12S"
    ]
  },
  "gadgets": [
    "Bulletproof camera",
    "Deployable shield"
  ],
  "season": "Y1S1 - Black Ice"
};