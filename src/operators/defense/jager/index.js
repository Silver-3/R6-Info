const path = require('path');

module.exports = {
  "name": "Jager",
  "ability": {
    "name": "Active Defense",
    "description": "Uses an Active Defense system to intercept grenades before they detonate."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Anti-Gadget",
    "Support"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 1
  },
  "bio": {
    "realname": "Marius Sreicher",
    "nickname": "Jager",
    "org": "GSG 9",
    "squad": "Viperstrie",
    "height": "1.8m",
    "weight": "64kg",
    "dateofbirth": "March 9th (Age 39)",
    "placeofbirth": "Dusseldorf, Germany"
  },
  "guns": {
    "primary": [
      "M870",
      "416-C Carbine"
    ],
    "secondary": [
      "P12"
    ]
  },
  "gadgets": [
    "Bulletproof camera",
    "Observation blocker"
  ],
  "season": "Release"
};