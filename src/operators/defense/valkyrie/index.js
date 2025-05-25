const path = require('path');

module.exports = {
  "name": "Valkyrie",
  "ability": {
    "name": "Black Eye",
    "description": "Can set up \"Black Eye\" cameras, feed accessible by whole team via observation tools."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Intel",
    "Support"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 2
  },
  "bio": {
    "realname": "Meghan J. Castellano",
    "nickname": "Valkyrie",
    "org": "Navy Seal",
    "squad": "Ghosteyes",
    "height": "1.7m",
    "weight": "61kg",
    "dateofbirth": "July 21st (Age 31)",
    "placeofbirth": "Oceanside, California"
  },
  "guns": {
    "primary": [
      "MPX",
      "SPAS-12"
    ],
    "secondary": [
      "D-50"
    ]
  },
  "gadgets": [
    "Impact grenade",
    "Nitro cell"
  ],
  "season": "Y1S2 - Dust Line"
};