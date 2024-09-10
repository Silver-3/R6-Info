const path = require('path');

module.exports = {
  "name": "Pulse",
  "ability": {
    "name": "Cardiac Sensor",
    "description": "Detects heartbeats at a short distance through obstacles."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Intel",
    "Suppot"
  ],
  "stats": {
    "health": 1,
    "speed": 3,
    "difficulty": 3
  },
  "bio": {
    "realname": "Jack Estrada",
    "nickname": "Pulse",
    "org": "FBI Swat",
    "squad": "Nighthaven",
    "height": "1.88m",
    "weight": "85kg",
    "dateofbirth": "October 11th (Age 32",
    "placeofbirth": "Goldsboro, North Carolina"
  },
  "guns": {
    "primary": [
      "M1O14",
      "UMP45"
    ],
    "secondary": [
      "M45 MEUSOC",
      "5.7 USG"
    ]
  },
  "gadgets": [
    "Nitro cell",
    "Deployable shield"
  ],
  "season": "Release"
};