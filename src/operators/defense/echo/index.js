const path = require('path');

module.exports = {
  "name": "Echo",
  "ability": {
    "name": "Yokai",
    "description": "Hovering drone that releases disorienting sonic bursts. Yokai also transmits a video feed to the Operator."
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
    "difficulty": 3
  },
  "bio": {
    "realname": "Masaru Enatsu",
    "nickname": "Echo",
    "org": "SAT",
    "squad": "Viperstrike",
    "height": "1.8m",
    "weight": "72kg",
    "dateofbirth": "October 31st (Age 36)",
    "placeofbirth": "Tokyo, Japan (Suginami-ku)"
  },
  "guns": {
    "primary": [
      "MP5SD",
      "Supernova"
    ],
    "secondary": [
      "P229",
      "BEARING 9"
    ]
  },
  "gadgets": [
    "Impact grenade",
    "Deployable shield"
  ],
  "season": "Y1S4 - Red Crow"
};