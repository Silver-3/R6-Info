const path = require('path');

module.exports = {
  "name": "Nomad",
  "ability": {
    "name": "Airjab Launcher",
    "description": "Rifle attachment shooting an adhesive repulsion device that deonates by proximity."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Front-Line",
    "Map Control"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 3
  },
  "bio": {
    "realname": "Sanaa El Maktoub",
    "nickname": "Nomad",
    "org": "GIGR",
    "squad": "Wolfguard",
    "height": "1.71m",
    "weight": "63kg",
    "dateofbirth": "July 27th (Age 39)",
    "placeofbirth": "Marrakesh, Morocoo"
  },
  "guns": {
    "primary": [
      "AK-74M",
      "ARX200"
    ],
    "secondary": [
      ".44 Mag Semi-Auto",
      "PRB92"
    ]
  },
  "gadgets": [
    "Stun grenade",
    "Breach charge"
  ],
  "season": "Y3S4 - Wind Bastion"
};