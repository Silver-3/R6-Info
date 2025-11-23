const path = require('path');

module.exports = {
  "name": "Oryx",
  "ability": {
    "name": "Remah Dash",
    "description": "Fast dash that allows for faster roaming, breaches breakable walls, and pushes back opponents."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Support"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 2
  },
  "bio": {
    "realname": "Saif Al Hadid",
    "nickname": "Oryx",
    "org": "Unaffiliated",
    "squad": "Redhammer",
    "height": "1.95m",
    "weight": "130kg",
    "dateofbirth": "July 3rd (Age 45)",
    "placeofbirth": "Azraq, Jordan"
  },
  "guns": {
    "primary": [
      "T-5 SMG",
      "SPAS-12"
    ],
    "secondary": [
      "USP40",
      "Bailiff 410",
      "Reaper MK2"
    ]
  },
  "gadgets": [
    "Barbed wire",
    "Proximity alarm"
  ],
  "season": "Y5S1 - Void Edge"
};