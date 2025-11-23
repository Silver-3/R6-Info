const path = require('path');

module.exports = {
  "name": "Smoke",
  "ability": {
    "name": "Remote Gas Grenade",
    "description": "Sets remote detonated toxic gas charges."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Anti-Entry",
    "Trapper"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 2
  },
  "bio": {
    "realname": "James Porter",
    "nickname": "Smoke",
    "org": "SAS",
    "squad": "Nighthaven",
    "height": "1.73m",
    "weight": "70kg",
    "dateofbirth": "May 14th (Age 36)",
    "placeofbirth": "London, England (King's Cross)"
  },
  "guns": {
    "primary": [
      "M590A1",
      "FMG-9"
    ],
    "secondary": [
      "SMG-11",
      "P226 MK 25"
    ]
  },
  "gadgets": [
    "Barbed wire",
    "Proximity alarm"
  ],
  "season": "Release"
};