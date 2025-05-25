const path = require('path');

module.exports = {
  "name": "Kaid",
  "ability": {
    "name": "Rtila Electroclaw",
    "description": "Electrifies reinforced walls and hatches, barbed wire and deployable shields in its affected area."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Anti-Entry",
    "Anti-Gadget"
  ],
  "stats": {
    "health": 3,
    "speed": 1,
    "difficulty": 2
  },
  "bio": {
    "realname": "Jalal El Fassi",
    "nickname": "Kaid",
    "org": "GIGR",
    "squad": "Redhammer",
    "height": "1.95m",
    "weight": "98kg",
    "dateofbirth": "June 26th (Age 58)",
    "placeofbirth": "Aroumd, Morocco"
  },
  "guns": {
    "primary": [
      "AUG A3",
      "TCSG12"
    ],
    "secondary": [
      ".44 Mag Semi-Auto",
      "LFP586"
    ]
  },
  "gadgets": [
    "Nitro cell",
    "Barbed wire",
    "Observation blocker"
  ],
  "season": "Y3S4 - Wind Bastion"
};