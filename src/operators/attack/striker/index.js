const path = require('path');

module.exports = {
  "name": "Striker",
  "ability": {
    "name": "Gadget Kit",
    "description": "Equips two gadets instead of a gadget and an ability. Can select any gadget on the team, but not the same one twice."
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
    "realname": "Undefined",
    "nickname": "Striker",
    "org": "ROS",
    "squad": "Undefined",
    "height": "Undefined",
    "weight": "Undefined",
    "dateofbirth": "Undefined",
    "placeofbirth": "Undefined"
  },
  "guns": {
    "primary": [
      "M4",
      "M249",
      "SR-25"
    ],
    "secondary": [
      "5.7 USG",
      "ITA12S"
    ]
  },
  "gadgets": [
    "Breach charge",
    "Claymore",
    "Impact emp grenade",
    "Frag grenade",
    "Hard breach charge",
    "Smoke grenade",
    "Stun grenade"
  ],
  "season": "Y9S2 - New Blood"
};