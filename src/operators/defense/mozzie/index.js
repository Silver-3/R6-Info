const path = require('path');

module.exports = {
  "name": "Mozzie",
  "ability": {
    "name": "Pest Launcher",
    "description": "Launches autonomous bots that latch onto nearby enemy drones, hijacking their controls."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Anti-Gadget",
    "Intel"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 2
  },
  "bio": {
    "realname": "Max Goose",
    "nickname": "Mozzie",
    "org": "SASR",
    "squad": "Ghosteyes",
    "height": "1.62m",
    "weight": "57kg",
    "dateofbirth": "February 15th (Age 35)",
    "placeofbirth": "Portland, Australia"
  },
  "guns": {
    "primary": [
      "Commando 9",
      "P10 Roni"
    ],
    "secondary": [
      "SDP 9mm"
    ]
  },
  "gadgets": [
    "Barbed wire",
    "Nitro cell"
  ],
  "season": "Y4S1 - Burnt Horizon"
};