const path = require('path');

module.exports = {
  "name": "Brava",
  "ability": {
    "name": "Kludge Drone",
    "description": "Deployable drone that either takes control of electronic devices or destroys them after a short delay."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Anti-Gadget",
    "Intel"
  ],
  "stats": {
    "health": 1,
    "speed": 3,
    "difficulty": 3
  },
  "bio": {
    "realname": "Nayara Cardoso",
    "nickname": "Brava",
    "org": "COT",
    "squad": "Viperstrike",
    "height": "1.7m",
    "weight": "71kg",
    "dateofbirth": "January 10th (Age 40)",
    "placeofbirth": "Curitiba, Brazil"
  },
  "guns": {
    "primary": [
      "PARA-308",
      "CAMRS"
    ],
    "secondary": [
      "Super Shorty",
      "USP40"
    ]
  },
  "gadgets": [
    "Claymore",
    "Smoke grenade"
  ],
  "season": "Y8S1 - Commanding Force"
};