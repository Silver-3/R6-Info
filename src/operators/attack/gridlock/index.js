const path = require('path');

module.exports = {
  "name": "Gridlock",
  "ability": {
    "name": "Trax Stingers",
    "description": "Thrown gadget that deploys barbed mats capable of shlowing down and hurting enemies to traverse them."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Support",
    "Map Control"
  ],
  "stats": {
    "health": 3,
    "speed": 1,
    "difficulty": 1
  },
  "bio": {
    "realname": "Tori Tallyo Fairous",
    "nickname": "Gridlock",
    "org": "SASR",
    "squad": "Redhammer",
    "height": "1.77m",
    "weight": "102kg",
    "dateofbirth": "August 5th (Age 36)",
    "placeofbirth": "Longreach, Central Queensland, Australia"
  },
  "guns": {
    "primary": [
      "F90",
      "M249 SAW"
    ],
    "secondary": [
      "Super Shorty",
      "SDP 9mm"
    ]
  },
  "gadgets": [
    "Smoke grenade",
    "Frag grenade",
    "Impact emp grenade"
  ],
  "season": "Y4S1 - Burnt Horizon"
};