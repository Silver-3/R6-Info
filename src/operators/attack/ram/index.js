const path = require('path');

module.exports = {
  "name": "Ram",
  "ability": {
    "name": "BU-GI Auto-Breacher",
    "description": "Deployable mini-tank that moves along a set path destroying devices and breakable surfaces in its way."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Breach",
    "Anti-Gadget"
  ],
  "stats": {
    "health": 3,
    "speed": 1,
    "difficulty": 2
  },
  "bio": {
    "realname": "Bo-Ram Choi",
    "nickname": "Ram",
    "org": "35th Commando Battalion",
    "squad": "Redhammer",
    "height": "1.78m",
    "weight": "68kg",
    "dateofbirth": "April 25th (Age 37)",
    "placeofbirth": "Busan, South Korea"
  },
  "guns": {
    "primary": [
      "R4-C",
      "LMG-E"
    ],
    "secondary": [
      "MK1 9mm"
    ]
  },
  "gadgets": [
    "Stun grenade",
    "Smoke grenade"
  ],
  "season": "Y8S3 - Heavy Mettle"
};