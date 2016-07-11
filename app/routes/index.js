var express = require('express');
var router = express.Router();
var teamManager = require('../managers/team-manager');
var playerManager = require('../managers/player-manager');

router.post('/v1/teams', teamManager.createTeam);
router.get('/v1/teams', teamManager.getTeams);
router.put('/v1/teams/:team_id', teamManager.updateTeam);
router.delete('/v1/teams/:team_id', teamManager.deleteTeam);

router.post('/v1/players', playerManager.createPlayer);
router.get('/v1/players', playerManager.getPlayers);

module.exports = router;
