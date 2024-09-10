const path = require('path');

module.exports = {
  "name": "Sentry",
  "ability": {
    "name": "Gadget Kit",
    "description": "Equips two gadets instead of a gadget and an ability. Can select any gadget on the team, but not the same one twice."
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
    "realname": "Undefined",
    "nickname": "Sentry",
    "org": "ROS",
    "squad": "Undefined",
    "height": "Undefined",
    "weight": "Undefined",
    "dateofbirth": "Undefined",
    "placeofbirth": "Undefined"
  },
  "guns": {
    "primary": [
      "Commando 9",
      "M870"
    ],
    "secondary": [
      "C75 Auto",
      "Super Shorty"
    ]
  },
  "gadgets": [
    "Barbed wire",
    "Bulletproof camera",
    "Deployable shield",
    "Observation blocker",
    "Impact grenade",
    "Nitro cell",
    "Proximity Alarm"
  ],
  "season": "Y9S2 - New Blood"
};