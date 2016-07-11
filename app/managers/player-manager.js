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
    client.query("INSERT INTO players(username, team_id, goals, assists, saves, shots, points) values($1, $2, 0, 0, 0, 0, 0)", [data.username, data.team_id]);

    // SQL Query > Select Data
    var query = client.query("SELECT players.*, teams.name as team FROM players JOIN teams on players.team_id = teams.id ORDER BY id ASC");

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
        var query = client.query("SELECT players.*, teams.name as team FROM players JOIN teams on players.team_id = teams.id ORDER BY id ASC");

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
