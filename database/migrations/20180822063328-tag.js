'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    const { INTEGER, STRING, DATE, ENUM } = Sequelize
    return queryInterface.createTable('tag', {
      _id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(20),
      category: { type: ENUM('ES3', 'ES5', 'ES2015', 'ES2016', 'ES2017'), defaultValue: 'ES5' }, // 0代表es5和es3，1代表es2015+，默认为0
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
    return queryInterface.dropTable('tag')
  },
};
