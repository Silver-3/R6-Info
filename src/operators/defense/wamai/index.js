const path = require('path');

module.exports = {
  "name": "Wamai",
  "ability": {
    "name": "Mag-net System",
    "description": "Throwable device that sticks to a surface, captures an incoming projectile, then detonates it and self-destructs."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Anti-Gadget",
    "Trapper"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 2
  },
  "bio": {
    "realname": "Ngugi Muchoki Furaha",
    "nickname": "Wamai",
    "org": "Nighthaven",
    "squad": "Nighthaven",
    "height": "1.87m",
    "weight": "83kg",
    "dateofbirth": "June 1st (Age 28)",
    "placeofbirth": "Lamu, Kenya"
  },
  "guns": {
    "primary": [
      "AUG A2",
      "MP5K"
    ],
    "secondary": [
      "Keratos .357",
      "P12",
      "Super Shorty"
    ]
  },
  "gadgets": [
    "Impact grenade",
    "Proximity alarm"
  ],
  "season": "Y4S4 - Shifting Tides"
};