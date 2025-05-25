const path = require('path');

module.exports = {
  "name": "Buck",
  "ability": {
    "name": "Skeleton Key",
    "description": "Toggles under-barrel shotgun attachment on his main weapon."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Breach",
    "Support"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 1
  },
  "bio": {
    "realname": "Sebastien Cote",
    "nickname": "Buck",
    "org": "JTF2",
    "squad": "Redhammer",
    "height": "1.78m",
    "weight": "78kg",
    "dateofbirth": "August 20th (Age 36)",
    "placeofbirth": "Montreal, Quebec"
  },
  "guns": {
    "primary": [
      "C8-SFW",
      "CAMRS"
    ],
    "secondary": [
      "MK1 9mm"
    ]
  },
  "gadgets": [
    "Stun grenade",
    "Claymore"
  ],
  "season": "Y1S1 - Black Ice"
};