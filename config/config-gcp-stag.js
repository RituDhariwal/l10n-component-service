module.exports = {
	activeEnv: 'STAGING',
	redis: {
		sharechatWebRedis: {
			host: 'redis-10641.internal.c6804.asia-south1-1.gcp.cloud.rlrcp.com',
			port: 10641,
			password: 'E7ItWVuwQCWbXdZWBwVCMeXdTNm6Hj9e',
			db: 0
		},
		userPostSentRedis: {
			host: 'redis-10641.internal.c6804.asia-south1-1.gcp.cloud.rlrcp.com',
			port: 10641,
			password: 'E7ItWVuwQCWbXdZWBwVCMeXdTNm6Hj9e',
			db: 0
		},
	},
	queueDriver: {
		followFeedQueue: 'new-follow-feed-queue'
	},
	localisationService: {
		endPoint: 'http://172.16.0.60:3031/l10-service/v1.0.0/labels'
	},
	dbDriverV2: {
		useSharedLibrary: true,
		serviceName: 'follow-feed-service',
		projectName: 'SHARECHAT',
		environment: 'STAGING',
	},
	MAX_FETCH_LIMIT: 10000,
	whitelistUrl: [
		'https://sharechat.com',
		'http://sharechat.com',
		'https://staging.sharechat.com',
		'http://staging.sharechat.com',
		'http://localhost:8085',
		'http://www.sharechat.com',
		'https://www.sharechat.com',
		'https://dashboard.sharechat.com',
		'https://temp-master.sharechat.com',
		'https://booth.sharechat.com',
		'http://tv-feed.sharechat.com',
		'https://master.sharechat.com',
		'http://localhost:8080',
		'http://polls.sharechat.com',
		'https://polls.sharechat.com',
		'https://dev.sharechat.com'
	]
};
