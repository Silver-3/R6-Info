const path = require('path');

module.exports = {
  "name": "Warden",
  "ability": {
    "name": "Glance Smart Glasses",
    "description": "Eyewear that improves visibility in smoke while standing still. Can also be activated to protect again or reduce flash blindness."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Anti-Gadget",
    "Intel"
  ],
  "stats": {
    "health": 3,
    "speed": 1,
    "difficulty": 2
  },
  "bio": {
    "realname": "Collinn McKinley",
    "nickname": "Warden",
    "org": "Secret Service",
    "squad": "Ghosteyes",
    "height": "1.83m",
    "weight": "80kg",
    "dateofbirth": "March 18th (Age 48)",
    "placeofbirth": "Louisville, Kentucky"
  },
  "guns": {
    "primary": [
      "M590A1",
      "MPX"
    ],
    "secondary": [
      "P-10C",
      "SMG-12"
    ]
  },
  "gadgets": [
    "Deployable shield",
    "Nitro cell",
    "Observation blocker"
  ],
  "season": "Y4S2 - Phantom Sight"
};