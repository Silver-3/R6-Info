const path = require('path');

module.exports = {
  "name": "Sens",
  "ability": {
    "name": "R.O.U. Projector System",
    "description": "Trowablle rolling device with a lighting system that projects a screen to obstruct visibility."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Support",
    "Map Control"
  ],
  "stats": {
    "health": 1,
    "speed": 3,
    "difficulty": 2
  },
  "bio": {
    "realname": "Neon Ngoma Mutombo",
    "nickname": "Sens",
    "org": "SFG",
    "squad": "Wolfguard",
    "height": "1.78m",
    "weight": "73kg",
    "dateofbirth": "March 3rd (Age 30)",
    "placeofbirth": "Brussels, Belgium"
  },
  "guns": {
    "primary": [
      "POF-9",
      "417"
    ],
    "secondary": [
      "SDP 9mm"
    ]
  },
  "gadgets": [
    "Hard breach charge",
    "Claymore",
    "Frag grenade"
  ],
  "season": "Y7S2 - Vector Glare"
};