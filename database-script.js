var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/rocketleague';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE teams(id SERIAL PRIMARY KEY, name VARCHAR(40) not null)');
query.on('end', function() { client.end(); });
