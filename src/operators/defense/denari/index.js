const path = require('path');

module.exports = {
  "name": "Denari",
  "ability": {
    "name": "T.R.I.P. Connector",
    "description": "Throwable devices that link into a precise laser network to secure territory for Denari."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Anti-Entry",
    "Crowd Control"
  ],
  "stats": {
    "health": 1,
    "speed": 3,
    "difficulty": 3
  },
  "bio": {
    "realname": "Leon Winzenried",
    "nickname": "Denari",
    "org": "Nighthaven",
    "squad": "Nighthaven",
    "height": "1.90m",
    "weight": "73kg",
    "dateofbirth": "November 30th (Age 38)",
    "placeofbirth": "Lugano, Switzerland"
  },
  "guns": {
    "primary": [
      "Scorpion Evo 3 A1",
      "FMG-9"
    ],
    "secondary": [
      "Glaive-12",
      "P226 MK 25"
    ]
  },
  "gadgets": [
    "Observation blocker",
    "Deployable Shield"
  ],
  "season": "Y10S3 - High Stakes"
};