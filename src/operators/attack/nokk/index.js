const path = require('path');

module.exports = {
  "name": "Nokk",
  "ability": {
    "name": "Hel Presence Reduction",
    "description": "Counter-intel that wipes their presence from Observation Tools."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Front-Line",
    "Map Control"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 3
  },
  "bio": {
    "realname": "[REDACTED]",
    "nickname": "Nokk",
    "org": "Jaeger Corps",
    "squad": "Ghosteyes",
    "height": "[REDACTED]",
    "weight": "[REDACTED]",
    "dateofbirth": "[REDACTED]",
    "placeofbirth": "[REDACTED]"
  },
  "guns": {
    "primary": [
      "FMG-9",
      "SIX12 SD"
    ],
    "secondary": [
      "5.7 USG",
      "D-50"
    ]
  },
  "gadgets": [
    "Frag grenade",
    "Hard breach charge",
    "Impact emp grenade"
  ],
  "season": "Y4S2 - Phantom Sight"
};