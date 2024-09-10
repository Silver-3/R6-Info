const path = require('path');

module.exports = {
  "name": "Maverick",
  "ability": {
    "name": "Breacing Torch",
    "description": "Blowtorch capable of burning holes through reinforced walls at an almost inaudible level."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Breach",
    "Front-Line"
  ],
  "stats": {
    "health": 1,
    "speed": 3,
    "difficulty": 2
  },
  "bio": {
    "realname": "Erik Thorn",
    "nickname": "Maverick",
    "org": "GSUTR",
    "squad": "Ghosteyes",
    "height": "1.8m",
    "weight": "82kg",
    "dateofbirth": "April 20th (Age 36)",
    "placeofbirth": "Boston, Massachusetts"
  },
  "guns": {
    "primary": [
      "AR-15.50",
      "M4"
    ],
    "secondary": [
      "1911 Tacops"
    ]
  },
  "gadgets": [
    "Stun grenade",
    "Claymore",
    "Smoke grenade"
  ],
  "season": "Y3S3 - Grim sky"
};