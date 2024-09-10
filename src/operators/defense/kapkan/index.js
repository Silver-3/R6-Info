const path = require('path');

module.exports = {
  "name": "Kapkan",
  "ability": {
    "name": "Entry Denial Device",
    "description": "Sets booby traps on windows and door frames."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Anti-Entry",
    "Trapper"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 1
  },
  "bio": {
    "realname": "Maxim Basuda",
    "nickname": "Kapkan",
    "org": "SPETSNAZ",
    "squad": "Redhammer",
    "height": "1.8m",
    "weight": "80kg",
    "dateofbirth": "May 14th (Age 38)",
    "placeofbirth": "Korov, Russia"
  },
  "guns": {
    "primary": [
      "9x19VSN",
      "SASG-12"
    ],
    "secondary": [
      "PMM",
      "GSH-18"
    ]
  },
  "gadgets": [
    "Bulletproof camera",
    "Nitro cell"
  ],
  "season": "Release"
};