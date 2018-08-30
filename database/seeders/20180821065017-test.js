'use strict';

const uuidv3 = require('uuid/v3')

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
    const q_ids = '1,2,3,4,5,6,7,8,9,10',
      test_id = uuidv3(q_ids, uuidv3.URL)
    return queryInterface.bulkInsert('Test', [{
      _id: 1,
      test_id,
      q_ids,
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
