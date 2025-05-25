const path = require('path');

module.exports = {
  "name": "Ace",
  "ability": {
    "name": "S.E.L.M.A. Aqua Breacher",
    "description": "Thrown gadget that deploys hydraulic pressure pellets to breach breakable and reinforced surfaces."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Breach",
    "Anti-Gadget"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 1
  },
  "bio": {
    "realname": "Havard Haugland",
    "nickname": "Ace",
    "org": "Nighthaven",
    "squad": "Nighthaven",
    "height": "1.87m",
    "weight": "75kg",
    "dateofbirth": "March 15th (Age 33)",
    "placeofbirth": "Laerdalsoyri, Norway"
  },
  "guns": {
    "primary": [
      "AK-12",
      "M1014"
    ],
    "secondary": [
      "P9"
    ]
  },
  "gadgets": [
    "Breach charge",
    "Claymore"
  ],
  "season": "Y5S2 - Steel Wave"
};