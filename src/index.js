module.exports = {
    ...require('./operators/index.js'),
    ...require('./maps/index.js'),
    ...require('./weapons/index.js')
};

const a = require('./operators/index');

console.log(a.getAllOperators())