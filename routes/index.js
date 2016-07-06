var express = require('express');
var router = express.Router();
var teamManager = require('../managers/team-manager');

router.post('/v1/teams', teamManager.createTeam);
router.get('/v1/teams', teamManager.getTeams);
router.put('/v1/teams/:team_id', teamManager.updateTeam);
router.delete('/v1/teams/:team_id', teamManager.deleteTeam);

module.exports = router;
