
# R6-Info

This package allows you to access information about any R6 operator or map, currently updated to Y9S2. 
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
  name: 'Sledge',
  ability: {
    name: 'Breaching Hammer',
    description: 'Uses a Breaching Hammer to breach through destructible surfaces.'
  },
  icon: 'FILE_PATH_TO_IMAGE',
  specialties: [ 'Breach', 'Anti-Gadget' ],
  stats: { health: 2, speed: 2, difficulty: 1 },
  bio: {
    realname: 'Seamus Cowden',
    nickname: 'Sledge',
    org: 'SAS',
    squad: 'Redhammer',
    height: '1.92m',
    weight: '95kg',
    dateofbirth: 'April 2nd (Age 35)',
    placeofbirth: 'John O’Groats, Scotland'
  },
  guns: { primary: [ 'M590A1', 'L85A2' ], secondary: [ 'P226 MK 25' ] },
  gadgets: [ 'Frag grenade', 'Stun grenade', 'Impact emp grenade' ],
  season: 'Release'
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

## Support

For support, dm .silver_3 on discord

