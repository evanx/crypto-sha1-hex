
module.exports = string => require('crypto').createHash('sha1').update(string).digest('hex');

