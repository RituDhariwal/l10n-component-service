const constants = {
	userAuthorizedHeaderKey: 'X-SHARECHAT-AUTHORIZED-USERID',
	userHeaderKey: 'X-SHARECHAT-USERID',
	userSkinLanguage: 'LOCALE-SKIN-LANGUAGE',
	userLanguage: 'LOCALE-LANGUAGE',
	userSecretKey: 'X-SHARECHAT-SECRET',
	feedType: 'FEED-TYPE',
	xCallerKey: 'X-SHARECHAT-CALLER',
	serviceName: 'follow-feed-service',
	referrerHeader: 'REFERRER',
	FOLLOW_FEED_REFERRER : 'follow-feed-service',
	MAX_BATCH_INSERT_SIZE: 1000,
	NORMAL_USER_EXPIRY_TIME: 30 * 24 * 60 * 60,
	MAU_USER_EXPIRY_TIME: 90 * 24 * 60 * 60,
	DEFAULT_REMARK: 'followFeed',
	E13N_TIMEOUT: 200,
	GET_POST_CARDS_LIMIT: 29,
	EXPERIMENT_NAMES: {
		FOLLOW_FEED_EXPERIMENT: 'followfeedpopulationV2'
	},
	POPULAR_CREATORS: 'creator-popular',
	APP_VERSION: 'APP-VERSION',
	HTTP_NOT_FOUND_STATUS_CODE: 404,
	FOLLOW_FEED_FETCH_LIMIT: 301,
	suggestedPosts: {
		LIMIT: 5,
		APP_VERSION: 5128,
		HEADING: {
			English: 'Suggested Post',
			Assamese: 'প্ৰস্তাৱিত পোষ্টসমূহ',
			Bengali: 'প্রস্তাবিত পোস্টসমূহ',
			Bhojpuri: 'सुझावल गईल पोस्ट',
			Gujarati: 'સૂચિત પોસ્ટ',
			Haryanvi: 'सुझाई गई पोस्ट्स',
			Hindi: 'सुझाई गई पोस्ट्स',
			Kannada: 'ಸೂಚಿಸಿದ ಪೋಸ್ಟ್‌ಗಳು',
			Malayalam: 'സജസ്റ്റഡ് പോസ്റ്റുകൾ',
			Marathi: 'सुचवलेल्या पोस्ट्स',
			Odia: 'ସଜେଷ୍ଟ ହୋଇଥିବା ପୋଷ୍ଟସ',
			Punjabi: 'ਸੁਝਾਈਆਂ ਗਈਆਂ ਪੋਸਟਾਂ',
			Rajasthani: 'सुझाई गई पोस्ट्स',
			Tamil: 'பரிந்துரைக்கப்பட்ட பதிவுகள்',
			Telugu: 'సూచించబడిన పోస్ట్‌లు',
			Urdu: 'تجویز کردہ پوسٹس'
		},
		LEFT_ICON: 'https://cdn.sharechat.com/dd6baae_1635229191313_sc.svg',
		D0_EXPERIENCE_FOLLOWING_COUNT_LIMIT: 10,
		MAX_FOLLOWING_COUNT_TO_ALWAYS_SHOW_D0_EXPERIENCE: 2
	},
	FAKE_POST_DATA: {
		a: '17404734',
		ath: {
			a: '1204',
			b: '247',
			bc: '#ce2247',
			bk: '0',
			branchIOLink: 'https://b.sharechat.com/i7ZpHKv5fV',
			config_bits: 0,
			coverPic: 'https://cdn.sharechat.com/8b5f02ef-389f-458e-8f97-f8cf384ec888-d5006fae-1931-4adf-8e03-1431755f6b68.jpg',
			f: '247',
			fb: '0',
			h: 'Arijit7017',
			i: '17404734',
			lc: 'Bangalore',
			n: 'Arjit Mukhopadyay',
			pc: '403',
			pu: 'https://cdn.sharechat.com/ProfilePic/f21e884d-8b89-4196-b986-3a566d9c330f-76d29eb9-908b-47d1-baea-26694a846adc.jpg',
			s: 'arju',
			tu: 'https://cdn.sharechat.com/ProfilePic/f21e884d-8b89-4196-b986-3a566d9c330f-76d29eb9-908b-47d1-baea-26694a846adc_thumbnail_v2.jpg',
			vp: '0'
		},
		authorId: '17404734',
		b: 'https://s3-ap-southeast-1.amazonaws.com/static.sharechatapp.in/not_found_english.jpg',
		bottomVisibilityFlag: 2,
		c: 'Please update your App to see this post',
		cd: '1',
		favouriteCount: '0',
		g: 'https://s3-ap-southeast-1.amazonaws.com/static.sharechatapp.in/not_found_english.jpg',
		h: '1',
		hideHeader: true,
		hidePadding: true,
		i: '79231552',
		m: 'Bengali',
		n: 'Arijit Mukhopadhyay',
		noIndex: false,
		o: '1521183453',
		permalink: 'https://sharechat.com/post/6vrpE4',
		q: 'image/jpeg',
		sd: '1',
		t: 'image',
		w: '540',
		y: 'https://cdn.sharechat.com/ProfilePic/f21e884d-8b89-4196-b986-3a566d9c330f-76d29eb9-908b-47d1-baea-26694a846adc_thumbnail_v2.jpg',
		z: '241292'
	},
	SERVICE_TRANSLATIONS_LABEL: 'android'
};

module.exports = constants;
