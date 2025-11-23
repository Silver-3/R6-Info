const path = require('path');

module.exports = {
  "name": "Thorn",
  "ability": {
    "name": "Razorbloom Shell",
    "description": "Throwable device that sticks to surfaces and propels a set of sharp blades shortly after detecting nearby opponents."
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
    "difficulty": 1
  },
  "bio": {
    "realname": "Brianna Skehan",
    "nickname": "Thorn",
    "org": "Emergency Reponse Unit",
    "squad": "Redhammer",
    "height": "1.88m",
    "weight": "78kg",
    "dateofbirth": "June 18th (Age 28)",
    "placeofbirth": "Country Kildare, Ireland"
  },
  "guns": {
    "primary": [
      "UZK50GI",
      "M870"
    ],
    "secondary": [
      "C75 Auto",
      "1911 Tacops"
    ]
  },
  "gadgets": [
    "Deployable shield",
    "Barbed wire"
  ],
  "season": "Y6S4 - High Calibre"
};