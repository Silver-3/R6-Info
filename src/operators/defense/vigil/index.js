const path = require('path');

module.exports = {
  "name": "Vigil",
  "ability": {
    "name": "ERC-7",
    "description": "Vigil scans surrounding devices to whipe his image from cameras and drones."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Anti-Gadget",
    "Crowd Control"
  ],
  "stats": {
    "health": 1,
    "speed": 3,
    "difficulty": 3
  },
  "bio": {
    "realname": "Chul Kyung Hwa",
    "nickname": "Vigil",
    "org": "707th SMB",
    "squad": "Ghosteyes",
    "height": "1.73m",
    "weight": "73kg",
    "dateofbirth": "January 7th (Age 34)",
    "placeofbirth": "[REDACTED]"
  },
  "guns": {
    "primary": [
      "K1A",
      "BOSG.12.2"
    ],
    "secondary": [
      "C75 Auto",
      "SMG-12"
    ]
  },
  "gadgets": [
    "Bulletproof camera",
    "Impact grenade"
  ],
  "season": "Y2S4 - White Noise"
};