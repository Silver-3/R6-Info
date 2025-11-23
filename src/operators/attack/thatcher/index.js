const path = require('path');

module.exports = {
  "name": "Thatcher",
  "ability": {
    "name": "E.G.S. Disruptor",
    "description": "A shoulder-mounted EMP wave launcher."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Anti-Gadget",
    "Support"
  ],
  "stats": {
    "health": 3,
    "speed": 1,
    "difficulty": 2
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
      "L85A2",
      "AR33",
      "PMR90A2",
      "M590A1"
    ],
    "secondary": [
      "P226 MK 25"
    ]
  },
  "gadgets": [
    "Claymore",
    "Breach charge"
  ],
  "season": "Release"
};