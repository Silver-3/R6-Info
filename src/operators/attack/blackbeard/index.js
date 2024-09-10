const path = require('path');

module.exports = {
  "name": "Blackbeard",
  "ability": {
    "name": "Rifle-Shield",
    "description": "Deploys a ballistic shield on his rifle that can be swapped if the first one gets damaged."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Support"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 1
  },
  "bio": {
    "realname": "Craig Jenson",
    "nickname": "Blackbeard",
    "org": "Navy Seal",
    "squad": "Redhammer",
    "height": "1.8m",
    "weight": "84kg",
    "dateofbirth": "March 12th (Age 32)",
    "placeofbirth": "Bellevue, Washington"
  },
  "guns": {
    "primary": [
      "MK17 CQB",
      "SR-25"
    ],
    "secondary": [
      "D-50"
    ]
  },
  "gadgets": [
    "Claymore",
    "Stun grenade",
    "Frag grenade"
  ],
  "season": "Y1S2 - Dust Line"
};