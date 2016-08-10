var expect = require('chai').expect;
var JinshujuStrategy = require('../lib').Strategy;

describe('Strategy', function() {
  it('should be named jinshuju', function() {
    var strategy = new JinshujuStrategy({
      clientID: 'id',
      clientSecret: 'sec'
    }, function() {});
    expect(strategy.name).to.be.equal('jinshuju');
  });
});
