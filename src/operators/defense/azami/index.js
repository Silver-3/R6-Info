const path = require('path');

module.exports = {
  "name": "Azami",
  "ability": {
    "name": "Kiba Barrier",
    "description": "Throwable device that sticks to surfaces and releases a gas that solidifers to create a barrier."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Anti-Entry",
    "Support"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 3
  },
  "bio": {
    "realname": "Kuna Fujiwara",
    "nickname": "Azami",
    "org": "Unaffiliated",
    "squad": "Viperstrike",
    "height": "1.64m",
    "weight": "56.7kg",
    "dateofbirth": "September 6th (Age 28)",
    "placeofbirth": "Kyoto, Japan"
  },
  "guns": {
    "primary": [
      "9x19VSN",
      "ACS12"
    ],
    "secondary": [
      "D-50"
    ]
  },
  "gadgets": [
    "Barbed wire",
    "Impact grenade"
  ],
  "season": "Y7S1 - Demon Veil"
};