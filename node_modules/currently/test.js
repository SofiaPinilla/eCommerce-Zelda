var now;
var chai      = require('chai');
var should    = chai.should();
var currently = require('./');

describe('currently', function() {
    beforeEach(function() {
        now = new Date();
    });
    it('should not be perfectly equal to now', function(done) {
        currently.full.should.not.equal(now);
        done();
    });
    it('should display datetime on .full', function(done) {
        currently.full.should.exist;
        currently.full.toString().should.equal(now.toString());
        done();
    });
    it('should display this year on .year', function(done) {
        var year = now.getFullYear();
        currently.year.should.equal(year);
        currently.year.should.not.equal(2012);
        done();
    });
    it('should display this month on .month', function(done) {
        var month = now.getMonth() + 1;
        currently.month.should.equal(month);
        done();
    });
    it('should display this date on .date', function(done) {
        var date = now.getDate();
        currently.date.should.equal(date);
        currently.date.should.not.equal(0);
        done();
    });
    it('should write what day it is', function(done) {
        console.log('today is a '+ currently.day);
        done();
    });
    it('should write what month it is', function(done) {
        console.log('it is '+ currently.monthName);
        done();
    });
    it('should humanize the time', function(done) {
        var time = now.getHours() +':'+ now.getMinutes();
        console.log(time +', currently '+ currently.timeOfDay);
        done();
    });
});