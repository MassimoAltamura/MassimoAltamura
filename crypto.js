const crypto = require('crypto');
console.log(Object.keys(crypto));
const randomId = crypto.randomBytes(16).toString('hex');
console.log("Random ID:", randomId);