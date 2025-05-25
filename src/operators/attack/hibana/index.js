const path = require('path');

module.exports = {
  "name": "Hibana",
  "ability": {
    "name": "X-Kairdos",
    "description": "A 40mm grenade launcher firing explsive pallets that can be detonated from a distance."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Breach",
    "Front-Line"
  ],
  "stats": {
    "health": 1,
    "speed": 3,
    "difficulty": 1
  },
  "bio": {
    "realname": "Yumiko Imagawa",
    "nickname": "Hibana",
    "org": "SAT",
    "squad": "Viperstrike",
    "height": "1.73m",
    "weight": "57kg",
    "dateofbirth": "July 12th (Age 34)",
    "placeofbirth": "Nagoya, Japan"
  },
  "guns": {
    "primary": [
      "Type-89",
      "Supernova"
    ],
    "secondary": [
      "P229",
      "BEARING 9"
    ]
  },
  "gadgets": [
    "Stun grenade",
    "Breach charge"
  ],
  "season": "Y1S4 - Red Crow"
};