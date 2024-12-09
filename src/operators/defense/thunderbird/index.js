const path = require('path');

module.exports = {
  "name": "Thunderbird",
  "ability": {
    "name": "Kona Station",
    "description": "Deployable device that gives an HP boost or offers a revive to a downed Operator in proximity."
  },
  "icon": path.join(__dirname, './icon.png'),
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
      "Q-929",
      "ITA12S"
    ]
  },
  "gadgets": [
    "Barbed wire",
    "Bulletproof camera",
    "Deployable shield"
  ],
  "season": "Y6S2 - North Star"
};