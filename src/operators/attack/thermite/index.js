const path = require('path');

module.exports = {
  "name": "Thermite",
  "ability": {
    "name": "Exothermic Charge",
    "description": "Sets an exothermic charge that destroys reinforced walls."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Breach",
    "Support"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 1
  },
  "bio": {
    "realname": "Jordan Trace",
    "nickname": "Thermite",
    "org": "FBI Swat",
    "squad": "Redhammer",
    "height": "1.78m",
    "weight": "80kg",
    "dateofbirth": "March 14th (Age 35)",
    "placeofbirth": "Plano, Texas"
  },
  "guns": {
    "primary": [
      "556XI",
      "M1014"
    ],
    "secondary": [
      "M45 MEUSOC",
      "5.7 USG",
      "ITA12S"
    ]
  },
  "gadgets": [
    "Smoke grenade",
    "Stun grenade"
  ],
  "season": "Release"
};