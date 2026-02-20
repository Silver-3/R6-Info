const path = require('path');

module.exports = {
  "name": "Solid Snake",
  "ability": {
    "name": "Soliton Radar Mk. II",
    "description": "A handheld radar that detects and displays enemy threats."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Intel",
    "Front-Line"
  ],
  "stats": {
    "health": 1,
    "speed": 3,
    "difficulty": 2
  },
  "bio": {
    "realname": "Redacted",
    "nickname": "Solid Snake",
    "org": "Unaffiliated",
    "squad": "Unaffiliated",
    "height": "Redacted",
    "weight": "Redacted",
    "dateofbirth": "Redacted",
    "placeofbirth": "Redacted"
  },
  "guns": {
    "primary": [
      "F2",
      "PMR90A2"
    ],
    "secondary": [
      "TACIT .45"
    ]
  },
  "gadgets": [
    "Frag grenade",
    "Stun grenade",
    "Impact emp grenade",
    "Smoke grenade",
    "Breach charge"
  ],
  "season": "Y11S1 - Silent Hunt"
};