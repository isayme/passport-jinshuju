var express = require('express');
var passport = require('passport');
var JinshujuStrategy = require('../lib').Strategy;

var JINSHUJU_CLIENT_ID = '--insert-jinshuju-client-id-here--';
var JINSHUJU_CLIENT_SECRET = '--insert-worktile-client-secret-here--';

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new JinshujuStrategy({
    clientID: JINSHUJU_CLIENT_ID,
    clientSecret: JINSHUJU_CLIENT_SECRET,
    callbackURL: 'http://example.com/oauth2/callback',
    scope: 'public forms read_entries'
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(accessToken, refreshToken, profile)
    return done(null, profile);
  }
));

var app = express();
app.use(passport.initialize());
// app.use(passport.session());

app.get('/oauth2/callback',
  passport.authenticate('jinshuju'),
  function(req, res) {
    res.json(req.user);
  });

app.listen(80, function() {
  console.log('listening ...');
});
