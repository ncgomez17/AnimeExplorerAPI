var assert = require('assert');
var request = require('supertest')
var app = require('../server.js')

var request = request("http://localhost:3000")

describe('getAnimeList', function() {
    describe('GET', function(){
        it('Should return json as default data format', function(done){
            request.get('/animeExplorer/getAnimeList')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
        it('Should return json as data format when set Accept header to application/json', function(done){
            request.get('/animeExplorer/getAnimeList')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });

});