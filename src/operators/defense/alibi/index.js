const path = require('path');

module.exports = {
  "name": "Alibi",
  "ability": {
    "name": "Prisma",
    "description": "Deploys holograms of Alibi and tags hostiles when fired upon."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Intel",
    "Trapper"
  ],
  "stats": {
    "health": 1,
    "speed": 3,
    "difficulty": 3
  },
  "bio": {
    "realname": "Aria de Luca",
    "nickname": "Alibi",
    "org": "GIS",
    "squad": "Viperstrike",
    "height": "1.71m",
    "weight": "63kg",
    "dateofbirth": "December 15th (Age 37)",
    "placeofbirth": "Tripoli, Libya"
  },
  "guns": {
    "primary": [
      "Mx4 Storm",
      "ACS12"
    ],
    "secondary": [
      "Keratos .357",
      "Bailiff 410"
    ]
  },
  "gadgets": [
    "Proximity alarm",
    "Observation blocker"
  ],
  "season": "Y3S2 - Para Bellum"
};