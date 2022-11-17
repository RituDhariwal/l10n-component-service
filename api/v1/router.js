const express = require('express');
const router = express.Router();

router.get('/lang-list', (req, res, next) => {
	req.container.resolve('getLangList').handleRequest(req, res).catch(next);
});

router.get('/', (req, res) => {
	res.send('Hello from Follow Feed Service');
});

module.exports = router;
