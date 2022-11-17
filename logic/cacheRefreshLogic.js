const NodeCache = require('node-cache');

class CacheRefreshLogic {
	constructor(localisationService) {
		this.inMemoryCacheClient = new NodeCache();
		this.localisationService = localisationService;
	}

	async getTranslations(key) {
		let translations = {};
		try {
			const inMemoryCacheKey = `translations:${key}`;
			translations = JSON.parse(this.inMemoryCacheClient.get(inMemoryCacheKey) || '[]');
		} catch (err) {
			console.log(err);
		}

		if (!translations || !Object.keys(translations).length) {
			const [ err, response ] = await this.utility.invoker(this.localisationService.getTranslations());
			if (err) {
				console.log(err);
				return translations;
			}
			translations = response;
			try {
				if (response && response.keys && response.keys.length) {
					for (let meta of response.keys) {
						const key = Object.keys(meta)[0];
						const inMemoryCacheKey = `translations:${key}`;
						const cacheObject = { translations: meta[key], lc: Date.now() };
						this.inMemoryCacheClient.set(inMemoryCacheKey, JSON.stringify(cacheObject), 60*60);
					}
				}
			} catch (err) {
				console.log(err);
			}
		} else {
			const lastChecked = translations.lc;
			if (lastChecked + 15*60*1000 < Date.now()) {
				const lastUpdated = JSON.parse(this.inMemoryCacheClient.get('translations_lu') || '');
				if (lastUpdated + 60*60*1000 < Date.now()) {
					//refresh-cache
				}
			}
		}

		return translations;
	}
}

module.exports = CacheRefreshLogic;
