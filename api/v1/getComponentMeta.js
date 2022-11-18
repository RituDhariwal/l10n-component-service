class GetComponentMeta {
	constructor(cacheRefreshLogic, helper, constants) {
		this.cacheRefreshLogic = cacheRefreshLogic;
		this.constants = constants;
		this.helper = helper;
	}

	async handleRequest(req, res) {
		const userId = req.get(this.constants.userAuthorizedHeaderKey);
		const key = req.params.key;
		try {
			const resp = await this.cacheRefreshLogic.getTranslations(key);
			return this.helper.writeResponse(null, { resp: resp }, res);
		} catch (err) {
			console.log(err);
			return this.helper.writeResponse({ code: 500, msg: 'Internal Server Error' }, null, res);
		}
	}
}

module.exports = GetComponentMeta;
