const path = require('path');

module.exports = {
  "name": "Castle",
  "ability": {
    "name": "Armor Panel",
    "description": "Sets bulletproof barricades that are more resistant than standard ones."
  },
  "icon": path.join(__dirname, './icon.png'),
  "specialties": [
    "Anti-Entry",
    "Support"
  ],
  "stats": {
    "health": 2,
    "speed": 2,
    "difficulty": 2
  },
  "bio": {
    "realname": "Miles Campbell",
    "nickname": "Castle",
    "org": "FBI Swat",
    "squad": "Wolfguard",
    "height": "1.85m",
    "weight": "86kg",
    "dateofbirth": "September 20th (Age 36)",
    "placeofbirth": "Sherman Oaks, California"
  },
  "guns": {
    "primary": [
      "UMP45",
      "M1014"
    ],
    "secondary": [
      "5.7 USG",
      "Super Shorty",
      "M45 MEUSOC"
    ]
  },
  "gadgets": [
    "Bulletproof camera",
    "Proximity alarm"
  ],
  "season": "Release"
};