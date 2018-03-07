const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      console.log('and we are back!' + ' ' + res.json());
    }
  );

  app.get('/auth/facebook', passport.authenticate('facebook', {}));

  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook'),
    (req, res) => {
      console.log('facebook is back');
    }
  );
};
