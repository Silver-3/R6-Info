const path = require('path');

module.exports = {
  "name": "Iana",
  "ability": {
    "name": "Gemini Replicator",
    "description": "Deploys a remote-controlled holographic copy of Iana to fool oppents and gather intel."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Front-Line",
    "Support"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 1
  },
  "bio": {
    "realname": "Nienke Meijer",
    "nickname": "Iana",
    "org": "REU",
    "squad": "Ghosteyes",
    "height": "1.57m",
    "weight": "56kg",
    "dateofbirth": "August 27th (Age 35)",
    "placeofbirth": "Kawijk, the Netherlands"
  },
  "guns": {
    "primary": [
      "ARX200",
      "G36C"
    ],
    "secondary": [
      "MK1 9mm",
      "GONNE-6"
    ]
  },
  "gadgets": [
    "Impact emp grenade",
    "Smoke grenade"
  ],
  "season": "Y5S1 - Void Edge"
};