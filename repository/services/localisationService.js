const request = require('request');

class LocalisationService {

	/**
     * @param {Object} config config
     * @param {Object} constants constants
     */
	constructor (config, constants) {
		this.config = config;
		this.constants = constants;
		this.localisationServiceEndpoint = this.config.localisationService.endpoint;
	}

	/**
     * get translations
     * @returns {Promise<Object>}
     */

	getTranslations() {
		return new Promise((resolve, reject) => {
			let url = `${this.localisationServiceEndpoint}/v1.0.0/label-translations/${this.constants.SERVICE_TRANSLATIONS_LABEL}`;
			const options = {
				url: url,
				method: 'GET',
				forever: true,
				timeout : 500
			};
			request(options, (err, response, body) => {
				if (err) {
					err.service = 'localisationService';
					return reject(err);
				}
				if (response.statusCode !== 200) {
					return reject(`localisation service response with status code ${response.statusCode} and body: ${body}`);
				}
				return resolve(JSON.parse(body));
			});
		});
	}
}

module.exports = LocalisationService;
