const NodeCache = require('node-cache');

class CacheRefreshLogic {
	constructor(localisationService) {
		this.inMemoryCacheClient = new NodeCache();
		this.localisationService = localisationService;
	}

	async getTranslations(key) {
		let responseTranslations = {};
		let translations = {};
		const inMemoryCacheKey = `translations:${key}`;
		try {
			translations = JSON.parse(this.inMemoryCacheClient.get(inMemoryCacheKey) || '{}');
		} catch (err) {
			console.log(err);
		}

		if (!translations || !Object.keys(translations).length) {
			responseTranslations = await this.fetchAndCacheTranslations(key);
		} else {
			const lastChecked = translations.lc;
			if (lastChecked + 30*1000 < Date.now()) {
				console.log('checking lastUpdated');
				const lastUpdated = JSON.parse(this.inMemoryCacheClient.get('translations_lu') || '');
				if (Number(lastUpdated) + 60*1000 < Date.now()) {
					//refresh-cache
					console.log('refreshing cache');
					await this.fetchAndCacheTranslations(key);
				} else {
					const cacheObject = { translations: translations.translations, lc: Date.now() };
					this.inMemoryCacheClient.set(inMemoryCacheKey, JSON.stringify(cacheObject), 60*60);
				}
			}
			responseTranslations = translations.translations;
		}
		return responseTranslations;
	}

	async fetchAndCacheTranslations(key) {
		let response, responseTranslations;
		let translations = {};
		try {
			response = await this.localisationService.getTranslations();
		} catch (e) {
			console.log(e);
			return translations;
		}
		try {
			if (response && response.keys && Object.keys(response.keys).length) {
				this.inMemoryCacheClient.flushAll();
				for (let meta of response.keys) {
					const cacheKey = Object.keys(meta)[0];
					if (cacheKey === key) {
						responseTranslations = meta[cacheKey];
					}
					const inMemoryCacheKey = `translations:${cacheKey}`;
					const cacheObject = { translations: meta[cacheKey], lc: Date.now() };
					//await this.inMemoryCacheClient.del(inMemoryCacheKey);
					this.inMemoryCacheClient.set(inMemoryCacheKey, JSON.stringify(cacheObject), 60*60);
				}
				await this.inMemoryCacheClient.del('translations_lu');
				this.inMemoryCacheClient.set('translations_lu', JSON.stringify(Date.now()), 60*60);
			}
		} catch (err) {
			console.log(err);
		}
		return responseTranslations;
	}
}

module.exports = CacheRefreshLogic;


//1668728904974
//1668728904974
