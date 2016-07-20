var express = require('express');
var router = express.Router();
var gameManager = require('../managers/game-manager');

router.get('', gameManager.getAllGames);

module.exports = router;
