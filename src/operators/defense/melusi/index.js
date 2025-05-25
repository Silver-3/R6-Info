const path = require('path');

module.exports = {
  "name": "Melusi",
  "ability": {
    "name": "Banshee Sonic Defense",
    "description": "Deployable device with a bulletproof shell and exposed center that emits sound to slow down opponents in range."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Intel",
    "Crowd Control"
  ],
  "stats": {
    "health": 3,
    "speed": 1,
    "difficulty": 1
  },
  "bio": {
    "realname": "Thandiwe Ndlovu",
    "nickname": "Melusi",
    "org": "Inkaba Task Force",
    "squad": "Wolfguard",
    "height": "1.72m",
    "weight": "68kg",
    "dateofbirth": "June 16th (Age 32)",
    "placeofbirth": "Louwsburg, South Africa"
  },
  "guns": {
    "primary": [
      "MP5",
      "Super 90"
    ],
    "secondary": [
      "RG15",
      "ITA12S"
    ]
  },
  "gadgets": [
    "Bulletproof camera",
    "Impact grenade"
  ],
  "season": "Y5S2 - Steel Wave"
};