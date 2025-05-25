const path = require('path');

module.exports = {
  "name": "Goyo",
  "ability": {
    "name": "Volcan Canister",
    "description": "Incendiary bomb that can be deployed on floors or walls and explodes when destroyed."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Anti-Entry",
    "Trapper"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 2
  },
  "bio": {
    "realname": "Cesar Ruiz Hernandez",
    "nickname": "Goyo",
    "org": "Fuerzas Especiales",
    "squad": "Redhammer",
    "height": "1.71m",
    "weight": "83kg",
    "dateofbirth": "June 20th (Age 31)",
    "placeofbirth": "Culiacan Rosales, Mexico"
  },
  "guns": {
    "primary": [
      "Vector .45 ACP",
      "TCSG12"
    ],
    "secondary": [
      "P229"
    ]
  },
  "gadgets": [
    "Proximity alarm",
    "Bulletproof camera",
    "Impact grenade"
  ],
  "season": "Y4S3 - Ember Rise"
};