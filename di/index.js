const { createContainer, asValue, asClass, InjectionMode, Lifetime } = require('awilix');

/**
 *
 * @returns {Object} life time
 */
function getScope() {
	return { lifetime: Lifetime.SINGLETON };
}

const envConfig = require('../config/config');
const serverConfig = require('../config/server-config');
const middlewares = require('../driver');
const util = require('../util');

const container = createContainer({ injectionMode: InjectionMode.CLASSIC });

container.register({

	//------------------ MIDDLEWARE --------------------
	// sqs
	queueDriver: asValue(middlewares.queueDriver),
	dbDriverV2: asValue(middlewares.dbDriverV2),
	// Database
	spannerHelper: asValue(middlewares.spanner.spannerHelper),
	//--------------------------------------------------


	//------------------ CONFIG ------------------------
	config: asValue(envConfig),
	serverConfig: asValue(serverConfig),
	//--------------------------------------------------


	//------------------ UTILITY -----------------------
	constants: asValue(util.constants),
	hacks: asValue(util.hacks),
	logHelper: asClass(util.LogHelper, getScope()).inject(() => ({
		indexName: process.env.DEPLOYMENT_ID || util.constants.serviceName
	})),
	helper: asClass(util.Helper, getScope()),
	utility: asValue(util.utility),
	httpClient: asClass(util.HttpClient, getScope()).inject(() => ({ callerName: util.constants.serviceName })),
	//--------------------------------------------------
});

// -------------------- QUEUE -------------------------
container.register('followFeedQueue', asClass(require('../repository/queue/queueDriverRepo'), getScope()).inject(() => ({
	queueName: container.resolve('config').queueDriver.followFeedQueue
})));


//------------------ CACHE ----------------------

//-----------------------------------------------


// -------------------- SERVICES -------------------------
container.register('localisationService', asClass(require('../repository/services/localisationService'), getScope()));

//------------------ LOGIC ----------------------
container.register('cacheRefreshLogic', asClass(require('../logic/cacheRefreshLogic'), getScope()));

//-----------------------------------------------


//------------------ API -------------------------------
// Create API after everything

container.register('getComponentMeta', asClass(require('../api/v1/getComponentMeta'), getScope()));
container.register('getLangList', asClass(require('../api/v1/getLangList'), getScope()));
//------------------------------------------------------

container.register('container', asValue(container));

module.exports = container;
