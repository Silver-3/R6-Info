const path = require('path');

module.exports = {
  "name": "Blitz",
  "ability": {
    "name": "G52-Tactical Shield",
    "description": "Triggers the flash attached to his ballistic shield to temporaily blind enemies."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
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
    "realname": "Elias Kotz",
    "nickname": "Blitz",
    "org": "GSG 9",
    "squad": "Viperstrike",
    "height": "1.75m",
    "weight": "75kg",
    "dateofbirth": "April 2nd (Age 37)",
    "placeofbirth": "Bremen, Germany"
  },
  "guns": {
    "primary": [
      "G52-Tactical Shield"
    ],
    "secondary": [
      "P12"
    ]
  },
  "gadgets": [
    "Smoke grenade",
    "Breach charge"
  ],
  "season": "Release"
};