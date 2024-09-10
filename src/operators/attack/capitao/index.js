const path = require('path');

module.exports = {
  "name": "Capitao",
  "ability": {
    "name": "Tactical Crossbow",
    "description": "Tactical crossbow that fires incendiary bolts and micro smoke grenades."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Front-Line",
    "Map Control"
  ],
  "stats": {
    "health": 1,
    "speed": 3,
    "difficulty": 2
  },
  "bio": {
    "realname": "Vicente Souza",
    "nickname": "Capitao",
    "org": "BOPE",
    "squad": "Viperstrike",
    "height": "1.83m",
    "weight": "86kg",
    "dateofbirth": "November 17th (Age 49)",
    "placeofbirth": "Nova Iguacu, Brazil"
  },
  "guns": {
    "primary": [
      "PARA-308",
      "M249"
    ],
    "secondary": [
      "PRB92",
      "GONNE-6"
    ]
  },
  "gadgets": [
    "Claymore",
    "Hard breach charge",
    "Impact emp grenade"
  ],
  "season": "Y1S3 - Skull Rain"
};