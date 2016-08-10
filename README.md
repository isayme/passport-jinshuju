# Passport-Jinshuju

[Passport](http://passportjs.org/) strategy for authenticating with [金数据](https://jinshuju.net/)
using the OAuth 2.0 API.

## Install

    $ npm install passport-jinshuju

## Usage

#### Configure Strategy

The Jinshuju authentication strategy authenticates users using a Jinshuju account
and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which accepts
these credentials and calls `done` providing a user, as well as `options`
specifying a client ID, client secret, and callback URL.

    passport.use(new JinshujuStrategy({
        clientID: JINSHUJU_CLIENT_ID,
        clientSecret: JINSHUJU_CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/jinshuju/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ jinshujuId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'jinshuju'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/jinshuju',
      passport.authenticate('jinshuju'));

    app.get('/auth/jinshuju/callback',
      passport.authenticate('jinshuju', { failureRedirect: '/login' }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });

## Examples

For a complete, working example, refer to the [example](https://github.com/isayme/passport-jinshuju/tree/master/example/).

## Tests

    $ npm install --dev
    $ npm test
