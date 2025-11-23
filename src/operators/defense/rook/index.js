const path = require('path');

module.exports = {
  "name": "Rook",
  "ability": {
    "name": "Armor Pack",
    "description": "Drops a supply bag full of armor plates for his team to use."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Support"
  ],
  "stats": {
    "health": 3,
    "speed": 1,
    "difficulty": 1
  },
  "bio": {
    "realname": "Julien Nizan",
    "nickname": "Rook",
    "org": "GIGN",
    "squad": "Viperstrike",
    "height": "1.75m",
    "weight": "72kg",
    "dateofbirth": "January 6th (Age 27)",
    "placeofbirth": "Tours, France"
  },
  "guns": {
    "primary": [
      "MP5",
      "P90",
      "SG-CQB"
    ],
    "secondary": [
      "LFP586",
      "P9",
      "Reaper MK2"
    ]
  },
  "gadgets": [
    "Proximity alarm",
    "Impact grenade",
    "Nitro cell"
  ],
  "season": "Release"
};