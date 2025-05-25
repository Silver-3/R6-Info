const path = require('path');

module.exports = {
  "name": "Sledge",
  "ability": {
    "name": "Breaching Hammer",
    "description": "Uses a Breaching Hammer to breach through destructible surfaces."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Breach",
    "Anti-Gadget"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 1
  },
  "bio": {
    "realname": "Seamus Cowden",
    "nickname": "Sledge",
    "org": "SAS",
    "squad": "Redhammer",
    "height": "1.92m",
    "weight": "95kg",
    "dateofbirth": "April 2nd (Age 35)",
    "placeofbirth": "John O’Groats, Scotland"
  },
  "guns": {
    "primary": [
      "M590A1",
      "L85A2"
    ],
    "secondary": [
      "P226 MK 25"
    ]
  },
  "gadgets": [
    "Frag grenade",
    "Stun grenade",
    "Impact emp grenade"
  ],
  "season": "Release"
};