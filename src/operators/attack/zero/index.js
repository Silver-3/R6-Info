const path = require('path');

module.exports = {
  "name": "Zero",
  "ability": {
    "name": "Argus Launcher",
    "description": "Launcher that deploys cameras which can pierce through breakable and reinforced surfaces to surveil either side and shoot a laser."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Anti-Gadget",
    "Intel"
  ],
  "stats": {
    "health": 1,
    "speed": 3,
    "difficulty": 1
  },
  "bio": {
    "realname": "Samuel Leo Fisher",
    "nickname": "Zero",
    "org": "ROS",
    "squad": "Ghosteyes",
    "height": "1.78m",
    "weight": "77kg",
    "dateofbirth": "August 8th (Age 63)",
    "placeofbirth": "Baltimore, Maryland"
  },
  "guns": {
    "primary": [
      "SC3000K",
      "MP7"
    ],
    "secondary": [
      "5.7 USG",
      "GONNE-6"
    ]
  },
  "gadgets": [
    "Hard breach charge",
    "Claymore"
  ],
  "season": "Y5S3 - Shadow Legacy"
};