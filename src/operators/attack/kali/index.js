const path = require('path');

module.exports = {
  "name": "Kali",
  "ability": {
    "name": "LV Explosive Lance",
    "description": "Under-barrel mechanical projectile that explodes within a set radius to destroy gadgets on both sides of breaking and reinforced surfaces."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Anti-Gadget",
    "Support"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 2
  },
  "bio": {
    "realname": "Jaimini Kalimohan Shah",
    "nickname": "Kali",
    "org": "Nighthaven",
    "squad": "Nighthaven",
    "height": "1.7m",
    "weight": "67kg",
    "dateofbirth": "August 21st (Age 34)",
    "placeofbirth": "Amreli, India"
  },
  "guns": {
    "primary": [
      "CSRX 300"
    ],
    "secondary": [
      "SPSMG9",
      "C75 Auto",
      "P226 MK 25"
    ]
  },
  "gadgets": [
    "Claymore",
    "Breach charge",
    "Smoke grenade"
  ],
  "season": "Y4S4 - Shifting Tides"
};