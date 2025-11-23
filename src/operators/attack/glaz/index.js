const path = require('path');

module.exports = {
  "name": "Glaz",
  "ability": {
    "name": "Flip Sight",
    "description": "Toggles a magnifcation scope with sophisticated image sensors outlining long range marks, even through smoke."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Intel",
    "Support"
  ],
  "stats": {
    "health": 1,
    "speed": 3,
    "difficulty": 2
  },
  "bio": {
    "realname": "Timur Glazkov",
    "nickname": "Glaz",
    "org": "SPETSNAZ",
    "squad": "Ghosteyes",
    "height": "1.78m",
    "weight": "79kg",
    "dateofbirth": "July 2nd (Age 30)",
    "placeofbirth": "Vladivostok, Russia"
  },
  "guns": {
    "primary": [
      "OTs-03"
    ],
    "secondary": [
      "PMM",
      "BEARING 9",
      "GONNE-6"
    ]
  },
  "gadgets": [
    "Smoke grenade",
    "Frag grenade",
    "Claymore"
  ],
  "season": "Release"
};