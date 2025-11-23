const path = require('path');

module.exports = {
  "name": "Thunderbird",
  "ability": {
    "name": "Kona Station",
    "description": "Deployable device that gives an HP boost or offers a revive to a downed Operator in proximity."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Support"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 1
  },
  "bio": {
    "realname": "Mina Sky",
    "nickname": "Thunderbird",
    "org": "Star-net Aviation",
    "squad": "Wolfguard",
    "height": "1.72m",
    "weight": "70kg",
    "dateofbirth": "April 1st (Age 36)",
    "placeofbirth": "Nakoda Territories"
  },
  "guns": {
    "primary": [
      "Spear .308",
      "SPAS-15"
    ],
    "secondary": [
      "BEARING 9",
      "ITA12S",
      "Q-929"
    ]
  },
  "gadgets": [
    "Deployable shield",
    "Barbed wire",
    "Bulletproof camera"
  ],
  "season": "Y6S2 - North Star"
};