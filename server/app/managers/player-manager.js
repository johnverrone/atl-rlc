var connectionString = require('../../config/database');
var pg = require('pg');

exports.createPlayer = function(req, res) {

  var results = [];

  // Grab data from http request
  var data = req.body;

  // Get a Postgres client from the connection pool
  pg.connect(connectionString, function(err, client, done) {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({ success: false, data: err});
    }

    // SQL Query > Insert Data
    client.query(
      `WITH inserted_player AS (
        INSERT INTO players(username, first_name, last_name, email_address) 
        VALUES($1, $2, $3, $4)
        RETURNING player_id
      ) INSERT INTO team_players (team_id, player_id)
      SELECT $5, player_id FROM inserted_player`
      , [data.username, data.first_name, data.last_name, data.email_address, data.team_id]);

    // SQL Query > Select Data
    var query = client.query(
          `SELECT players.*, teams.team_name 
          FROM players
          LEFT OUTER JOIN team_players tp ON tp.player_id = players.player_id
          LEFT OUTER JOIN teams on teams.team_id = tp.team_id          
          ORDER BY player_id ASC`);

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

exports.getPlayers = function(req, res) {

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
          `SELECT players.*, teams.team_name 
          FROM players
          LEFT OUTER JOIN team_players tp ON tp.player_id = players.player_id
          LEFT OUTER JOIN teams on teams.team_id = tp.team_id          
          ORDER BY player_id ASC`);

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
