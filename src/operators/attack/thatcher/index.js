const path = require('path');

module.exports = {
  "name": "Thatcher",
  "ability": {
    "name": "EMP Grenade",
    "description": "Uses EMP Grenades to disable any electonics in range."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Anti-Gadget",
    "Support"
  ],
  "stats": {
    "health": 3,
    "speed": 1,
    "difficulty": 1
  },
  "bio": {
    "realname": "Mike Baker",
    "nickname": "Thatcher",
    "org": "SAS",
    "squad": "Viperstrike",
    "height": "1.8m",
    "weight": "72kg",
    "dateofbirth": "June 22nd (Age 56)",
    "placeofbirth": "Bideford, England"
  },
  "guns": {
    "primary": [
      "AR33",
      "L85A2",
      "M590A1"
    ],
    "secondary": [
      "P226 MK 25"
    ]
  },
  "gadgets": [
    "Breach charge",
    "Claymore"
  ],
  "season": "Release"
};