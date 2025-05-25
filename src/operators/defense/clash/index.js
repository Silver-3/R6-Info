const path = require('path');

module.exports = {
  "name": "Clash",
  "ability": {
    "name": "CCE Shield MK2",
    "description": "A collapsible shield that can anchor to the floor and slow enemies with electricity."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Intel",
    "Crowd Control"
  ],
  "stats": {
    "health": 3,
    "speed": 1,
    "difficulty": 3
  },
  "bio": {
    "realname": "Morowa Evans",
    "nickname": "Clash",
    "org": "GSUTR",
    "squad": "Wolfguard",
    "height": "1.79m",
    "weight": "73kg",
    "dateofbirth": "June 7th (Age 35)",
    "placeofbirth": "London, England"
  },
  "guns": {
    "primary": [
      "CCE Shield MK2"
    ],
    "secondary": [
      "Super Shorty",
      "SPSMG9",
      "P-10C"
    ]
  },
  "gadgets": [
    "Barbed wire",
    "Impact grenade"
  ],
  "season": "Y3S3 - Grim Sky"
};