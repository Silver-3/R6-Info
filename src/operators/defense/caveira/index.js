const path = require('path');

module.exports = {
  "name": "Caveira",
  "ability": {
    "name": "Silent Step",
    "description": "Caveira's predatory stealth, the \"Silent Step,\" allows her to lurk on her prey, almost inaudible, until it' too late."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Intel",
    "Crowd Control"
  ],
  "stats": {
    "health": 1,
    "speed": 3,
    "difficulty": 3
  },
  "bio": {
    "realname": "Taina",
    "nickname": "Pereira",
    "org": "BOPE",
    "squad": "Ghosteyes",
    "height": "1.77m",
    "weight": "72kg",
    "dateofbirth": "October 15th (Age 27)",
    "placeofbirth": "Rinopolis, Brazil"
  },
  "guns": {
    "primary": [
      "M12",
      "SPAS-15"
    ],
    "secondary": [
      "Lusion"
    ]
  },
  "gadgets": [
    "Impact grenade",
    "Proximity alarm"
  ],
  "season": "Y1S3 - Skull Rain"
};