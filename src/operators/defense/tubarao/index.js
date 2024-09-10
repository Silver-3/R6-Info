const path = require('path');

module.exports = {
  "name": "Tubarao",
  "ability": {
    "name": "Zoto Canister",
    "description": "Throwable device that stcks to surfaces and releases a freezing gas, deactivating devices and slowing enemies."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Anti-Gadget",
    "Crowd Control"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 2
  },
  "bio": {
    "realname": "Issac Nunes Oliveira",
    "nickname": "Tubarao",
    "org": "DAE",
    "squad": "Wolfguard",
    "height": "1.73m",
    "weight": "69kg",
    "dateofbirth": "November 24th (Age 35)",
    "placeofbirth": "Ponta Delgada, Portugal"
  },
  "guns": {
    "primary": [
      "MPX",
      "AR-15.50"
    ],
    "secondary": [
      "P226 MK 25"
    ]
  },
  "gadgets": [
    "Nitro cell",
    "Proximity alarm"
  ],
  "season": "Y8S4 - Deep Freeze"
};