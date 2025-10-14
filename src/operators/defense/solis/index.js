const path = require('path');

module.exports = {
  "name": "Solis",
  "ability": {
    "name": "Spec-io Electro-Sensor",
    "description": "Scanner that detects opponent electronic devices, with an Overclock that identifies them."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Intel",
    "Support"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 3
  },
  "bio": {
    "realname": "Ana Valentina Diaz",
    "nickname": "Solis",
    "org": "AFEAU",
    "squad": "Ghosteyes",
    "height": "1.66m",
    "weight": "65kg",
    "dateofbirth": "September 18th (Age 37)",
    "placeofbirth": "Zipaquria, Colombia"
  },
  "guns": {
    "primary": [
      "P90",
      "ITA12L"
    ],
    "secondary": [
      "SMG-11"
    ]
  },
  "gadgets": [
    "Proximity alarm",
    "Impact grenade"
  ],
  "season": "Y7S4 - Solar Raid"
};