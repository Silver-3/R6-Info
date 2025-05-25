const path = require('path');

module.exports = {
  "name": "Jackal",
  "ability": {
    "name": "Eyenox Model III",
    "description": "Tracking optics that locates targets by revealing and identifying recent footsteps."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Intel",
    "Map Control"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 3
  },
  "bio": {
    "realname": "Ryad Ramirez AI-Hassar",
    "nickname": "Jackal",
    "org": "GEO",
    "squad": "Viperstrike",
    "height": "1.9m",
    "weight": "78kg",
    "dateofbirth": "Febuary 29th (Age 49)",
    "placeofbirth": "Ceuta, Spain"
  },
  "guns": {
    "primary": [
      "C7E",
      "PDW9",
      "ITA12L"
    ],
    "secondary": [
      "USP40",
      "ITA12S"
    ]
  },
  "gadgets": [
    "Claymore",
    "Smoke grenade"
  ],
  "season": "Y2S1 - Velvet Shell"
};