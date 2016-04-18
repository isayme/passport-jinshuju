var expect = require('chai').expect;
var Profile = require('../lib/profile');
var userProfile = {
  "email": "isayme@163.com",
  "nickname": "isayme@163.com",
  "avatar": "https://dn-jsjpub.qbox.me/av/569a4af85d7d2850320005831452952314.png",
  "paid": false
};

describe('profile', function() {
  it('should parse ok', function() {
    var profile = Profile.parse(userProfile);
    expect(profile.displayName).to.be.equal(userProfile.email);
    expect(profile.photoUrl).to.be.equal(userProfile.avatar);
    expect(profile.emails).to.be.a('array');
    expect(profile.emails[0].value).to.be.equal(userProfile.email);
    expect(profile.photos).to.be.a('array');
    expect(profile.photos[0]).to.be.equal(userProfile.photoUrl);
  });
});
