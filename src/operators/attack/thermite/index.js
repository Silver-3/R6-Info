const path = require('path');

module.exports = {
  "name": "Thermite",
  "ability": {
    "name": "Exothermic Charge",
    "description": "Sets an exothermic charge that destroys reinforced walls."
  },
  "icon": path.join(__dirname, './icon.png'),
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
      "M1O14",
      "556XI"
    ],
    "secondary": [
      "M45 MEUSOC",
      "5.7 USG"
    ]
  },
  "gadgets": [
    "Smoke grenade",
    "Stun grenade"
  ],
  "season": "Release"
};