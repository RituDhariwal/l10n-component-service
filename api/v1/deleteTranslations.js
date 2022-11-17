class DeleteTranslations {
	constructor(logHelper, helper, translationsRepo, constants) {
		this.logHelper = logHelper;
		this.helper = helper;
		this.constants = constants;
		this.translationsRepo = translationsRepo;
	}

	async handleRequest(req, res) {
		const userHeaderKey = this.constants.userAuthorizedHeaderKey;
		const userId = req.get(userHeaderKey);

		if (!userId) {
			return this.helper.writeResponse({ code: 400, msg: 'Missing user id in header' }, null, res);
		}

		const { key, locale } = req.params;
		try {
			await this.translationsRepo.delete(key, locale);
			return this.helper.writeResponse(null, { msg: 'success' }, res);
		} catch (err) {
			console.log(err);
			return this.helper.writeResponse({ code: 500, msg: 'Internal Server Error' }, null, res);
		}
	}
}

module.exports = DeleteTranslations;