const path = require('path');

module.exports = {
  "name": "Amaru",
  "ability": {
    "name": "Garra Hook",
    "description": "A high-tensile grappling gun used for fast access to rappel points and hatches, or to enter via exterior windows at limited distances."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Front-Line",
    "Map Control"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 2
  },
  "bio": {
    "realname": "Azucena Rocio Quispe",
    "nickname": "Amaru",
    "org": "APCA",
    "squad": "Redhammer",
    "height": "1.89m",
    "weight": "84kg",
    "dateofbirth": "May 6th (Age 48)",
    "placeofbirth": "Cojata, Peru"
  },
  "guns": {
    "primary": [
      "G8A1",
      "Supernova"
    ],
    "secondary": [
      "ITA12S",
      "SMG-11",
      "GONNE-6"
    ]
  },
  "gadgets": [
    "Stun grenade",
    "Hard breach charge"
  ],
  "season": "Y4S3 - Ember rise"
};