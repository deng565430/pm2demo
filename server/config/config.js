const path = require('path');

const CONFIG = new Map();

CONFIG.set('prot', 3001);
CONFIG.set('staticDir', path.join(__dirname, '..', 'build'));
CONFIG.set('viewDir', path.join(__dirname, '..', 'build/views'));


module.exports = CONFIG;