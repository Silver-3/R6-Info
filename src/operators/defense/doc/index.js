const path = require('path');

module.exports = {
  "name": "Doc",
  "ability": {
    "name": "Stim Pistol",
    "description": "Fires a shot that provides Doc and his team with a health boost or revive from a distance."
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
    "realname": "Gustave Kateb",
    "nickname": "Doc",
    "org": "GIGN",
    "squad": "Wolfguard",
    "height": "1.77m",
    "weight": "74kg",
    "dateofbirth": "September 16th (Age 39)",
    "placeofbirth": "Paris, France"
  },
  "guns": {
    "primary": [
      "SG-CQB",
      "MP5",
      "P90"
    ],
    "secondary": [
      "P9",
      "LFP586",
      "Bailiff 410"
    ]
  },
  "gadgets": [
    "Bulletproof camera",
    "Barbed wire"
  ],
  "season": "Release"
};