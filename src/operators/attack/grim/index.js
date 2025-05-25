const path = require('path');

module.exports = {
  "name": "Grim",
  "ability": {
    "name": "Kawan Hive Launcher",
    "description": "Launcher that fires a canister, releasing a swarm of bots that reveals opponents passing through it for a limited time."
  },
  "icon": path.join(__dirname, './icon.png'),
  "image": path.join(__dirname, './image.png'),
  "specialties": [
    "Front-Line",
    "Map Control"
  ],
  "stats": {
    "health": 1,
    "speed": 3,
    "difficulty": 1
  },
  "bio": {
    "realname": "Charlie Tho Keng Boon",
    "nickname": "Grim",
    "org": "Nighthaven",
    "squad": "Nighthaven",
    "height": "1.79m",
    "weight": "89.8kg",
    "dateofbirth": "April 5th (Age 39)",
    "placeofbirth": "Jurong, Singapore"
  },
  "guns": {
    "primary": [
      "552 Commando",
      "SG-CQB"
    ],
    "secondary": [
      "P229",
      "Bailiff 410"
    ]
  },
  "gadgets": [
    "Impact emp grenade",
    "Claymore",
    "Hard breach charge"
  ],
  "season": "Y7S3 - Brutal Swarm"
};