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
    return queryInterface.bulkInsert('Test', [{
      _id: 1,
      q_ids: '1,2,3,4,5,6,7,8,9,10',
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
    return queryInterface.bulkDelete('Test', null, {})
  },
};
