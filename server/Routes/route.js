const express = require('express');
const routeController = require('../Controllers/wazir');
const router = express.Router();


router.get('/v2',routeController.getTickers);

router.post('/tickers',routeController.saveTickers);


module.exports = router;