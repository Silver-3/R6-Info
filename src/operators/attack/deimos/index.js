const path = require('path');

module.exports = {
  "name": "Deimos",
  "ability": {
    "name": "Deathmark Tracker",
    "description": "Small probe that reveals an Opponent and Deimos to each other for a limited time."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Intel",
    "Map Control"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 2
  },
  "bio": {
    "realname": "Gerald Morris",
    "nickname": "Deimos",
    "org": "Keres Legion",
    "squad": "Unknown",
    "height": "1.86km",
    "weight": "94kg",
    "dateofbirth": "December 24th (Age 51)",
    "placeofbirth": "Birmingham, Alabama"
  },
  "guns": {
    "primary": [
      "AK-74M",
      "M59OA1"
    ],
    "secondary": [
      ".44 Vendetta"
    ]
  },
  "gadgets": [
    "Frag grenade",
    "Hard breach charge"
  ],
  "season": "Y9S1 - Deadly Omen"
};