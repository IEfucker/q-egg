'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    const { INTEGER, STRING, FLOAT, DATE } = Sequelize
    return queryInterface.createTable('question', {
      _id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      question: STRING(300),
      options: STRING(300),
      correct: INTEGER,
      rand: FLOAT,
      tags: STRING(100),
      created_at: { type: DATE },
      updated_at: { type: DATE },
    })
  },

  down: queryInterface => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('question')
  },
};
