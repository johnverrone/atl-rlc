var supertest = require('supertest');
var should = require('should');

var server = supertest.agent('http://localhost:3000');

describe('GET /api/v1/teams', function() {
  it('should return 200', function(done) {
    server
      .get('/api/v1/teams')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        res.status.should.equal(200);
        done();
      })
  });
});

describe('POST /api/v1/teams', function() {
  it('should return 200', function(done) {
    server
      .post('/api/v1/teams')
      .send({name: 'Test Team'})
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        res.status.should.equal(200);
        done();
      })
  });
});
