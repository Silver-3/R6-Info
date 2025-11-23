const path = require('path');

module.exports = {
  "name": "Mute",
  "ability": {
    "name": "Signal Disruptor",
    "description": "Jammer which makes electronic gadgets in range malfunction."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Anti-Gadget",
    "Crowd Control"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
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
      "M590A1",
      "MP5K"
    ],
    "secondary": [
      "SMG-11",
      "P226 MK 25"
    ]
  },
  "gadgets": [
    "Nitro cell",
    "Bulletproof camera"
  ],
  "season": "Release"
};