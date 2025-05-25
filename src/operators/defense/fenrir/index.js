const path = require('path');

module.exports = {
  "name": "Fenrir",
  "ability": {
    "name": "F-Natt Dread Mine",
    "description": "Throwable device that sticks to surfaces and releases a fear-inducing gas when it detects nearby opponents."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Crowd Control",
    "Trapper"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 3
  },
  "bio": {
    "realname": "Emil Svensson",
    "nickname": "Fenrir",
    "org": "Unaffiliated",
    "squad": "Redhammer",
    "height": "1.76m",
    "weight": "74kg",
    "dateofbirth": "December 3rd (Age 34)",
    "placeofbirth": "Uppsala, Sweden"
  },
  "guns": {
    "primary": [
      "MP7",
      "SASG-12"
    ],
    "secondary": [
      "Bailiff 410",
      "5.7 USG"
    ]
  },
  "gadgets": [
    "Bulletproof camera",
    "Observation blocker"
  ],
  "season": "Y8S2"
};