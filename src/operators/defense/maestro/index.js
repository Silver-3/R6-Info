const path = require('path');

module.exports = {
  "name": "Maestro",
  "ability": {
    "name": "Evil Eye",
    "description": "A remote controlled bulletproof camera armed with a high-energy laser."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Anti-Gadget",
    "Intl"
  ],
  "stats": {
    "health": 3,
    "speed": 1,
    "difficulty": 2
  },
  "bio": {
    "realname": "Adriano Martello",
    "nickname": "Maestro",
    "org": "GIS",
    "squad": "Viperstrike",
    "height": "1.85m",
    "weight": "87kg",
    "dateofbirth": "April 13th (Age 45)",
    "placeofbirth": "Rome, Italy"
  },
  "guns": {
    "primary": [
      "Alda 5.56",
      "ACS12"
    ],
    "secondary": [
      "Bailiff 410",
      "Keratos .357"
    ]
  },
  "gadgets": [
    "Barbed wire",
    "Impact grenade",
    "Observation blocker"
  ],
  "season": "Y3S2 - Para Bellum"
};