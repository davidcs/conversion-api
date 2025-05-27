const express = require('express');
const router = express.Router();
const { fetchConversionRate } = require('../controllers/conversionController');

router.get('/conversion-rate', fetchConversionRate);

module.exports = router;
