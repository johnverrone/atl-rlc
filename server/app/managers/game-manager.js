var connectionString = require('../../config/database');
var pg = require('pg');

exports.getAllGames = function(req, res) {

    var results = [];

    // Get a Postgres client from the connection pool
    pg.connect(connectionString, function(err, client, done) {
        // Handle connection errors
        if(err) {
          done();
          console.log(err);
          return res.status(500).json({ success: false, data: err});
        }

        // SQL Query > Select Data
        var query = client.query(
          `SELECT games.*, blue_team.team_name AS blue_team_name, orange_team.team_name AS orange_team_name
          FROM games
          JOIN teams blue_team ON blue_team.team_id = games.blue_team_id
          JOIN teams orange_team ON orange_team.team_id = games.orange_team_id          
          ORDER BY games.game_id, games.seq_nbr ASC`);

        // Stream results back one row at a time
        query.on('row', function(row) {
            results.push(row);
        });

        // After all data is returned, close connection and return results
        query.on('end', function() {
            done();
            return res.json(results);
        });

    });

}
