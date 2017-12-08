const path = require('path');

const CONFIG = new Map();

CONFIG.set('prot', 80);
CONFIG.set('staticDir', path.join(__dirname, '..', 'static'));
CONFIG.set('viewDir', path.join(__dirname, '..', 'server/views'));


module.exports = CONFIG;