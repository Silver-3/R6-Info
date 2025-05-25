const path = require('path');

module.exports = {
  "name": "Aruni",
  "ability": {
    "name": "Surya Gate",
    "description": "Laser-generating device set on walls or entry points that deactivates after damaging gadgets or opponents, and is reactivatable."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Anti-Entry",
    "Anti-Gadget"
  ],
  "stats": {
    "health": 3,
    "speed": 1,
    "difficulty": 2
  },
  "bio": {
    "realname": "Apha Tawanroong",
    "nickname": "Aruni",
    "org": "Nighthaven",
    "squad": "Nighthaven",
    "height": "1.6m",
    "weight": "58kg",
    "dateofbirth": "August 9th (Age 42)",
    "placeofbirth": "Ta Phraya District, Thailand"
  },
  "guns": {
    "primary": [
      "P10 Roni",
      "Mk 14 EBR"
    ],
    "secondary": [
      "PRB92"
    ]
  },
  "gadgets": [
    "Barbed wire",
    "Bulletproof camera"
  ],
  "season": "Y5S4 - Neon Dawn"
};