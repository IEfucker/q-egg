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
    return queryInterface.bulkInsert('Question', [{
      _id: 1,
      question: 'this is a q1',
      options: '["option1","option2","option3","option4"]',
      correct: 1,
      rand: 0.7,
      tags: 'tag1,tag2',
      created_at: '2018-8-20 00:40:40',
      updated_at: '2018-8-21 02:58:27',
    }, {
      _id: 2,
      question: 'this is a q2',
      options: '["option1","option2","option3","option4"]',
      correct: 3,
      rand: 0.3,
      tags: 'tag1',
      created_at: '2018-8-20 00:40:40',
      updated_at: '2018-8-21 02:58:27',
    }, {
      _id: 3,
      question: 'this is a q3',
      options: '["option1","option2","option3","option4"]',
      correct: 2,
      rand: 0.5,
      tags: 'tag1',
      created_at: '2018-8-20 00:40:40',
      updated_at: '2018-8-21 02:58:27',
    }, {
      _id: 4,
      question: 'this is a q4',
      options: '["option1","option2","option3","option4"]',
      correct: 1,
      rand: 0.1,
      tags: 'Closures',
      created_at: '2018-8-20 00:40:40',
      updated_at: '2018-8-21 02:58:27',
    }, {
      _id: 5,
      question: 'this is a q5',
      options: '["option1","option2","option3","option4"]',
      correct: 3,
      rand: 0.2,
      tags: 'tag2',
      created_at: '2018-8-20 00:40:40',
      updated_at: '2018-8-21 02:58:27',
    }, {
      _id: 6,
      question: 'this is a q6',
      options: '["option1","option2","option3","option4"]',
      correct: 4,
      rand: 0.8,
      tags: 'Closures',
      created_at: '2018-8-20 00:40:40',
      updated_at: '2018-8-21 02:58:27',
    }, {
      _id: 7,
      question: 'this is a q7',
      options: '["option1","option2","option3","option4"]',
      correct: 2,
      rand: 0.9,
      tags: 'tag1',
      created_at: '2018-8-20 00:40:40',
      updated_at: '2018-8-21 02:58:27',
    }, {
      _id: 8,
      question: 'this is a q8',
      options: '["option1","option2","option3","option4"]',
      correct: 1,
      rand: 0.9,
      tags: 'tag2,Closures',
      created_at: '2018-8-20 00:40:40',
      updated_at: '2018-8-21 02:58:27',
    }, {
      _id: 9,
      question: 'this is a q9',
      options: '["option1","option2","option3","option4"]',
      correct: 3,
      rand: 0.3,
      tags: 'tag2',
      created_at: '2018-8-20 00:40:40',
      updated_at: '2018-8-21 02:58:27',
    }, {
      _id: 10,
      question: 'this is a q10',
      options: '["option1","option2","option3","option4"]',
      correct: 4,
      rand: 0.6,
      tags: 'tag1,Closures',
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
    return queryInterface.bulkDelete('Question', null, {})
  },
};
