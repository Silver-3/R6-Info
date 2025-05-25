const path = require('path');

module.exports = {
  "name": "Bandit",
  "ability": {
    "name": "Shock Wire",
    "description": "Sets up a Crude Electrical Devicce that electrifies other gadgets and damages anything that comes within contact."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Anti-Entry",
    "anti-Gadget"
  ],
  "stats": {
    "health": 1,
    "speed": 3,
    "difficulty": 1
  },
  "bio": {
    "realname": "Dominic Brunsmeier",
    "nickname": "Bandit",
    "org": "GSG 9",
    "squad": "Wolfguard",
    "height": "1.8m",
    "weight": "68kg",
    "dateofbirth": "August 13th (Age 42)",
    "placeofbirth": "Berlin, Germany"
  },
  "guns": {
    "primary": [
      "MP7",
      "M870"
    ],
    "secondary": [
      "P12"
    ]
  },
  "gadgets": [
    "Barbed wire",
    "Nitro cell"
  ],
  "season": "Release"
};