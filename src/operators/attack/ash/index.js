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
    "health": 1,
    "speed": 3,
    "difficulty": 2
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
      "R4-C",
      "G36C"
    ],
    "secondary": [
      "5.7 USG",
      "M45 MEUSOC"
    ]
  },
  "gadgets": [
    "Claymore",
    "Breach charge"
  ],
  "season": "Release"
};