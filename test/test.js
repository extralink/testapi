
var  expect  = require('chai').expect;
var request = require('request');


it('Main page content', function(done) {
    request('http://localhost:8000/health' , function(error, response, body) {
        expect(body).to.include('Hash');
        expect(body).to.include('Name');
        expect(body).to.include('Version');
        done();
    });
});

it('Main page status', function(done) {
    request('http://localhost:8000/health' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done()
    });
});



