const path = require('path');

module.exports = {
  "name": "Ying",
  "ability": {
    "name": "Candela",
    "description": "Cluster of flash charges that can either be anchored on surfaces or rolled out as a grenade."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Front-Line",
    "Map Control"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 2
  },
  "bio": {
    "realname": "Sie Mei Lin",
    "nickname": "Ying",
    "org": "SDU",
    "squad": "Wolfguard",
    "height": "1.6m",
    "weight": "52kg",
    "dateofbirth": "May 12th (Age 33)",
    "placeofbirth": "Hong Kong, Central"
  },
  "guns": {
    "primary": [
      "T-85 LSW",
      "SIX12"
    ],
    "secondary": [
      "Q-929"
    ]
  },
  "gadgets": [
    "Hard breach charge",
    "Smoke grenade"
  ],
  "season": "Y2S3"
};