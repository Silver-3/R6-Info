const path = require('path');

module.exports = {
  "name": "Tachanka",
  "ability": {
    "name": "Shumikha Launcher",
    "description": "Launcher firing havy incendiary grenades with a timed fuse activated on the first bounce. (Lord Tachanka)"
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Anti-Entry",
    "Crowd Control"
  ],
  "stats": {
    "health": 3,
    "speed": 1,
    "difficulty": 1
  },
  "bio": {
    "realname": "Alexsandr Senaviev",
    "nickname": "Tachanka",
    "org": "SPETSNAZ",
    "squad": "Redhammer",
    "height": "1.83m",
    "weight": "86kg",
    "dateofbirth": "November 3rd (Age 48)",
    "placeofbirth": "Saint Petersburg, Russia"
  },
  "guns": {
    "primary": [
      "DP27",
      "9x19VSN"
    ],
    "secondary": [
      "GSH-18",
      "PMM",
      "BEARING 9"
    ]
  },
  "gadgets": [
    "Barbed wire",
    "Deployable shield",
    "Proximity alarm"
  ],
  "season": "Release"
};