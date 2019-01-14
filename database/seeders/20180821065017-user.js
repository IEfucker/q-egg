'use strict';

module.exports = {
  up: queryInterface => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('user', [{
      _id: 1,
      name: 'test',
      password: null,
      email: '',
      url: null,
      avatar: '',
      githubId: null,
      githubUsername: null,
      githubAccessToken: null,
      is_block: 0, // 默认1是true
      age: null,
      active: true, // 默认1是true,
      accessToken: null,
      created_at: '2018-8-20 00:40:40',
      updated_at: '2018-8-21 02:58:27',
      last_sign_in_at: null,
    }], {});
  },

  down: queryInterface => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('user', null, {})
  },
};
