const path = require('path');

module.exports = {
  "name": "Zofia",
  "ability": {
    "name": "KS79 Lifeline",
    "description": "Double barrel launcher that can fire both concussion and impact grenades."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Brach",
    "Anti-Gadget"
  ],
  "stats": {
    "health": 3,
    "speed": 1,
    "difficulty": 1
  },
  "bio": {
    "realname": "Zofia Bosak",
    "nickname": "Zofia",
    "org": "GROM",
    "squad": "Ghosteyes",
    "height": "1.79m",
    "weight": "72kg",
    "dateofbirth": "January 28th (Age 36)",
    "placeofbirth": "Wroctaw, Poland"
  },
  "guns": {
    "primary": [
      "LMG-E",
      "M762"
    ],
    "secondary": [
      "RG15"
    ]
  },
  "gadgets": [
    "Hard breach charge",
    "Claymore"
  ],
  "season": "Y2S4 - White Noise"
};