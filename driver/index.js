const redis = require('./redis');
const queueDriver = require('./queue-driver');
const dbDriverV2 = require('./dbDriverV2');

module.exports = {
	redis: redis,
	queueDriver: queueDriver,
	dbDriverV2: dbDriverV2
};
