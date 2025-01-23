const path = require('path');

module.exports = {
  "name": "Mute",
  "ability": {
    "name": "Signal Disruptor",
    "description": "Jammer which makes electronic gadgets in range malfunction."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Anti-Gadget",
    "Crowd-Control"
  ],
  "stats": {
    "health": 3,
    "speed": 1,
    "difficulty": 1
  },
  "bio": {
    "realname": "Mark R. Chandar",
    "nickname": "Mute",
    "org": "SAS",
    "squad": "Viperstrike",
    "height": "1.85m",
    "weight": "80kg",
    "dateofbirth": "October 11th (Age 25)",
    "placeofbirth": "York, England"
  },
  "guns": {
    "primary": [
      "MP5K",
      "M590A1"
    ],
    "secondary": [
      "P226 MK 25",
      "SMG-11"
    ]
  },
  "gadgets": [
    "Nitro cell",
    "Bulletproof camera"
  ],
  "season": "Release"
};