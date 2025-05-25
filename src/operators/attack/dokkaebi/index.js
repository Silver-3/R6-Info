const path = require('path');

module.exports = {
  "name": "Dokkaebi",
  "ability": {
    "name": "Logic Bomb",
    "description": "Calls Defenders phones to compromise their locations and interrupt the use of Observation Tools."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Intel",
    "Map Control"
  ],
  "stats": {
    "health": 1,
    "speed": 3,
    "difficulty": 2
  },
  "bio": {
    "realname": "Grace Nam",
    "nickname": "Dokkaebi",
    "org": "707th SMB",
    "squad": "Viperstrike",
    "height": "1.69m",
    "weight": "62kg",
    "dateofbirth": "February 2nd (Age 29)",
    "placeofbirth": "Seoul, South Korea"
  },
  "guns": {
    "primary": [
      "Mk 14 EBR",
      "BOSG.12.2"
    ],
    "secondary": [
      "SMG-12",
      "C75 Auto",
      "GONNE-6"
    ]
  },
  "gadgets": [
    "Smoke grenade",
    "Stun grenade",
    "Impact emp grenade"
  ],
  "season": "Y2S4 - White Noise"
};