'use strict';

module.exports = app => {
  app.router.get('/', 'home.render');
  app.router.get('/logout', 'home.logout')

  app.passport.mount('github');

  // app.router.get('/logout', 'user.logout');
};
