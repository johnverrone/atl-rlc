var express = require('express');
var router = express.Router();
var playerManager = require('../managers/player-manager');

router.post('', playerManager.createPlayer);
router.get('', playerManager.getPlayers);

module.exports = router;
