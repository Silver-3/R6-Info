const path = require('path');

module.exports = {
  "name": "IQ",
  "ability": {
    "name": "Electronics Detector",
    "description": "Uses the Electronics Detector to locate any electronics in range through obstacles such as walls."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Intel",
    "Support"
  ],
  "stats": {
    "health": 1,
    "speed": 3,
    "difficulty": 3
  },
  "bio": {
    "realname": "Monika Weiss",
    "nickname": "IQ",
    "org": "GSG 9",
    "squad": "Nighthaven",
    "height": "1.75m",
    "weight": "70kg",
    "dateofbirth": "August 1st (Age 38)",
    "placeofbirth": "Leipzig, Germany"
  },
  "guns": {
    "primary": [
      "AUG A2",
      "552 Commando",
      "G8A1"
    ],
    "secondary": [
      "P12"
    ]
  },
  "gadgets": [
    "Breach charge",
    "Claymore",
    "Frag grenade"
  ],
  "season": "Release"
};