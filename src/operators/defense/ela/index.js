const path = require('path');

module.exports = {
  "name": "Ela",
  "ability": {
    "name": "Grzmot Mine",
    "description": "Concussion proximity mines that can be anchored on surfaces, impairing hearing and causing a dizzying effect."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Crowd Control",
    "Trapper"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 1
  },
  "bio": {
    "realname": "Elzbieta Bosak",
    "nickname": "Ela",
    "org": "GROM",
    "squad": "Nighthaven",
    "height": "1.73m",
    "weight": "68kg",
    "dateofbirth": "November 8th (Age 31)",
    "placeofbirth": "Wroctaw, Poland"
  },
  "guns": {
    "primary": [
      "Scorpion Evo 3 A1",
      "FO-12"
    ],
    "secondary": [
      "RG15"
    ]
  },
  "gadgets": [
    "Barbed wire",
    "Deployable shield",
    "Impact grenade"
  ],
  "season": "Y2S3 - Blood Orchid"
};