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
    return queryInterface.bulkInsert('Tag', [{
      _id: 1,
      name: 'tag1',
      category: 0,
      created_at: '2018-8-20 00:40:40',
      updated_at: '2018-8-21 02:58:27',
    }, {
      _id: 2,
      name: 'tag2',
      category: 0,
      created_at: '2018-8-20 00:40:40',
      updated_at: '2018-8-21 02:58:27',
    }, {
      _id: 3,
      name: 'Closures',
      category: 0,
      created_at: '2018-8-20 00:40:40',
      updated_at: '2018-8-21 02:58:27',
    }], {});
  },

  down: queryInterface => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Tag', null, {})
  },
};
