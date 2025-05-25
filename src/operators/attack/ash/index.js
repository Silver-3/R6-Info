const path = require('path');

module.exports = {
  "name": "Ash",
  "ability": {
    "name": "Breaching Round",
    "description": "Fires an explosive Breach Round that burrows into a surface and utomatically detonates."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Breach",
    "Front-Line"
  ],
  "stats": {
    "health": 2,
    "speed": 3,
    "difficulty": 1
  },
  "bio": {
    "realname": "Eliza Cohen",
    "nickname": "Ash",
    "org": "FBI Swat",
    "squad": "Redhammer",
    "height": "1.7m",
    "weight": "63kg",
    "dateofbirth": "December 24th (Age 33)",
    "placeofbirth": "Jerusalem, Israel"
  },
  "guns": {
    "primary": [
      "G36C",
      "R4-C"
    ],
    "secondary": [
      "M45 MEUSOC",
      "5.7 USG"
    ]
  },
  "gadgets": [
    "Breach charge",
    "Claymore"
  ],
  "season": "Release"
};