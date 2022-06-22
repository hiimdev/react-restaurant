const express = require('express');
const router = express.Router();

// wine routes
const apiwine = require('../controller/wine.controller');

router.get('/wine', apiwine.GetWine);
router.post('/wine', apiwine.CreateWine);

const apicocktails = require('../controller/cocktails.controller');

router.get('/cocktails', apicocktails.GetCocktails);
router.post('/cocktails', apicocktails.CreateCocktails);

module.exports = router;
