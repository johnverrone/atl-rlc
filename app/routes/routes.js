var express = require('express');
var router = express.Router();
var teamRoutes = require('./team-routes');
var playerRoutes = require('./player-routes');

router.use('/v1/teams', teamRoutes);
router.use('/v1/players', playerRoutes);

module.exports = router;
