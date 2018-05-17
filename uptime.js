const os = require('os');
const formatDate = require('./index');
const timeManagement = require('./time');

const uptime = timeManagement(os.uptime());

console.log(`Current uptime is ${uptime}`);
