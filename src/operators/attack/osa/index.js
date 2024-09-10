const path = require('path');

module.exports = {
  "name": "Osa",
  "ability": {
    "name": "Talon-8 Shield",
    "description": "Transparent bulletproof shield that can be carried for deployed on floors and window frames."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Intel",
    "Support"
  ],
  "stats": {
    "health": 3,
    "speed": 1,
    "difficulty": 2
  },
  "bio": {
    "realname": "Anja Katarina Jankovic",
    "nickname": "Osa",
    "org": "Nighthaven",
    "squad": "Nighthaven",
    "height": "1.8m",
    "weight": "71kg",
    "dateofbirth": "April 29th (Age 27)",
    "placeofbirth": "Split, Croatia"
  },
  "guns": {
    "primary": [
      "556XI",
      "PDW9"
    ],
    "secondary": [
      "PMM"
    ]
  },
  "gadgets": [
    "Claymore",
    "Frag grenade",
    "Impact emp grenade"
  ],
  "season": "Y6S3 - Crystal Guard"
};