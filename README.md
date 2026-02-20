
# R6-Info

This package allows you to access information about any R6 operator or map, and more. Currently updated to Y11S1
A discord bot that I have made with this package can be found [here](https://github.com/Silver-3/R6-operator)

## Installation

Install R6-Info with npm

```bash
npm install @silver-3/r6-info
```
    
## Usage/Examples of finding an operator

#### Layout of an operator
```batch
{
  name: 'Denari',
  ability: {
    name: 'T.R.I.P. Connector',
    description: 'Throwable devices that link into a precise laser network to secure territory for Denari.'
  },
  icon: 'FILE_PATH_TO_ICON',
  image: 'FILE_PATH_TO_IMAGE',
  specialties: [ 'Anti-Entry', 'Crowd Control' ],
  stats: { health: 1, speed: 3, difficulty: 3 },
  bio: {
    realname: 'Leon Winzenried',
    nickname: 'Denari',
    org: 'Nighthaven',
    squad: 'Nighthaven',
    height: '1.90m',
    weight: '73kg',
    dateofbirth: 'November 30th (Age 38)',
    placeofbirth: 'Lugano, Switzerland'
  },
  guns: {
    primary: [ 'Scorpion Evo 3 A1', 'FMG-9' ],
    secondary: [ 'Glaive-12', 'P226 MK 25' ]
  },
  gadgets: [ 'Observation blocker', 'Deployable Shield' ],
  season: 'Y10S3 - High Stakes'
}
```

#### Geting information about an operator
```javascript
const R6Info = require('@silver-3/r6-info');
const operator = R6Info.getOperator("Striker"); // Operator name <Required>

console.log(operator.name);
console.log(operator.ability.name);
console.log(operator.guns.primary);
console.log(operator.season);
// Output
// Striker
// Gadget Kit
// [ 'M4', 'M249' ]
// Y9S2 - New Blood
```

#### Getting a random operator
```javascript
const R6Info = require('@silver-3/r6-info');
const operator = R6Info.randomOperator("defense"); // Team <Required>

console.log(operator.name);
console.log(operator.bio.realname);
// Output
// Fenrir
// Emil Svensson
```

#### Getting all operators/attackers/defenders
```javascript
const R6Info = require('@silver-3/r6-info');

console.log(R6Info.getAttackers()); // returns all attackers
console.log(R6Info.getDefenders()); // returns all defenders
console.log(R6Info.getAllOperators()); // returns all operators

// Output
// [
//     {operator one},
//     {operator two},
//     {operator three}
// ]
```

## Usage/Examples of finding an map

#### Layout of an map
```batch
{
  name: 'Oregon',
  image: 'FILE_PATH_TO_IMAGE'
}
```

#### Geting an map
```javascript
const R6Info = require('@silver-3/r6-info');
const map = R6Info.getMap("Oregon"); // Full map name <Required>

console.log(map.name);
console.log(map.image);
// Output
// Oregon
// FILE_PATH_TO_IMAGE
```

#### Getting a random map
```javascript
const R6Info = require('@silver-3/r6-info');
const map = R6Info.randomMap("ranked"); // Type (ranked / nonranked) <Required>

console.log(map.name);
console.log(map.image);
// Output
// Kanal
// FILE_PATH_TO_IMAGE
```

#### Getting all maps
```javascript
const R6Info = require('@silver-3/r6-info');

console.log(R6Info.getRankedMaps()); // returns all ranked maps
console.log(R6Info.getNonrankedMaps()); // returns all non ranked maps
console.log(R6Info.getAllMaps()); // returns all maps

// Output
// [
//     {map one},
//     {map two},
//     {map three}
// ]
```

## Usage/Examples of finding an weapon

#### Layout of an weapon
```batch
{
  name: 'R4-C',
  image: 'FILE_PATH_TO_IMAGE',
  stats: { damage: 39, firerate: 860, ammo: 25, maxammo: 151, difficulty: 4 },
  type: 'Assault Rifle',
  scopes: [
    'Magnified A', 'Magnified B',
    'Magnified C', 'Red Dot A',
    'Red Dot B',   'Red Dot C',
    'Holo A',      'Holo B',
    'Holo C',      'Holo D',
    'Reflex A',    'Reflex B',
    'Reflex C',    'Iron Sight'
  ],
  barrels: [
    'Flash Hider',
    'Compensator',
    'Muzzle Brake',
    'Suppressor',
    'Extended Barrel'
  ],
  grips: [ 'Vertical Grip', 'Angled Grip', 'Horizontal Grip' ],
  operators: [ 'Ash', 'Ram' ]
}
```

#### Geting an weapon
```javascript
const R6Info = require('@silver-3/r6-info');
const weapon = R6Info.getWeapon("mp5"); // exact name from r6 siege

console.log(weapon.name);
console.log(weapon.stats.damage);
console.log(weapon.stats.firerate);
console.log(weapon.operators);
```

#### Getting a random weapon
```javascript
const R6Info = require('@silver-3/r6-info');
const weapon = R6Info.randomWeapon();

console.log(weapon.name);
```

#### Getting a random weapon loadout
```javascript
const R6Info = require('@silver-3/r6-info');
const randomLoadout = R6Info.randomLoadout('r4-c');

console.log(randomLoadout);

// Output
// { scope: 'Holo C', barrel: 'Muzzle Brake', grip: 'Angled Grip' }
```

#### Getting all weapons
```javascript
const R6Info = require('@silver-3/r6-info');

console.log(R6Info.getAllWeapons()); // returns all weapons

// Output
// [
//     {weapon one},
//     {weapon two},
//     {weapon three}
// ]
```

## Support

Once again I have created a discord bot with this package that you can checkout [here](https://github.com/Silver-3/R6-operator)
For any support, dm `.silver_3.` on discord and I will try to help you