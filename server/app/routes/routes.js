var express = require('express');
var router = express.Router();
var teamRoutes = require('./team-routes');
var playerRoutes = require('./player-routes');
var gameRoutes = require('./game-routes');

router.use('/v1/teams', teamRoutes);
router.use('/v1/players', playerRoutes);
router.use('/v1/games', gameRoutes);

module.exports = router;
