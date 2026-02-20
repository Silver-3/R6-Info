const path = require('path');

module.exports = {
  "name": "Flores",
  "ability": {
    "name": "RCE-Ratero Charge",
    "description": "Remote control charge that anchors to a surface, becomes bulletproof, then detonates after a set time period."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Anti-Gadget",
    "Intel"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 2
  },
  "bio": {
    "realname": "Santiago Miguel Lucero",
    "nickname": "Flores",
    "org": "Unaffiliated",
    "squad": "Ghosteyes",
    "height": "1.81m",
    "weight": "72kg",
    "dateofbirth": "October 2nd (Age 38)",
    "placeofbirth": "Buenos Aires, Argentina"
  },
  "guns": {
    "primary": [
      "AR33",
      "SR-25",
      "T-95 LSW"
    ],
    "secondary": [
      "GSH-18"
    ]
  },
  "gadgets": [
    "Claymore",
    "Stun grenade"
  ],
  "season": "Y6S1 - Crimson Heist"
};