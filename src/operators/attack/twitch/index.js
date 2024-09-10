const path = require('path');

module.exports = {
  "name": "Twitch",
  "ability": {
    "name": "Shock Drone",
    "description": "Drone that manually fires lasers to destroy opponent devices."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Anti-Gadget",
    "Intel"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 2
  },
  "bio": {
    "realname": "Emmanuelle Pichon",
    "nickname": "Twitch",
    "org": "GIGN",
    "squad": "Wolfguard",
    "height": "1.68m",
    "weight": "58kg",
    "dateofbirth": "October 12th (Age 28)",
    "placeofbirth": "Nancy, France"
  },
  "guns": {
    "primary": [
      "F2",
      "417",
      "SG-CQB"
    ],
    "secondary": [
      "P9",
      "LFP586"
    ]
  },
  "gadgets": [
    "Claymore",
    "Smoke grenade"
  ],
  "season": "Release"
};