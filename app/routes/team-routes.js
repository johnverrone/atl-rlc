var express = require('express');
var router = express.Router();
var teamManager = require('../managers/team-manager');

router.post('', teamManager.createTeam);
router.get('', teamManager.getTeams);
router.put('/:team_id', teamManager.updateTeam);
router.delete('/:team_id', teamManager.deleteTeam);

module.exports = router;
