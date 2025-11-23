const path = require('path');

module.exports = {
  "name": "Fuze",
  "ability": {
    "name": "Cluster Charge",
    "description": "Charge that' deployed on soft or reinforced surfaces to clear Operators and devices on the other side."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Anti-Gadget"
  ],
  "stats": {
    "health": 3,
    "speed": 1,
    "difficulty": 1
  },
  "bio": {
    "realname": "Shuhrat Kessikbayev",
    "nickname": "Fuze",
    "org": "SPETSNAZ",
    "squad": "Redhammer",
    "height": "1.8m",
    "weight": "80kg",
    "dateofbirth": "October 12th (Age 34)",
    "placeofbirth": "Samarkand, Uzbekistan"
  },
  "guns": {
    "primary": [
      "Ballistic Shield",
      "AK-12",
      "6P41"
    ],
    "secondary": [
      "PMM",
      "GSH-18"
    ]
  },
  "gadgets": [
    "Breach charge",
    "Hard breach charge",
    "Smoke grenade"
  ],
  "season": "Release"
};