'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    const { STRING, INTEGER, DATE, BOOLEAN } = Sequelize
    return queryInterface.createTable('user', {
      _id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 用户id
      name: STRING(30),
      password: STRING(32),
      email: STRING(32),
      url: STRING(100),
      avatar: STRING(100),
      githubId: STRING(30),
      githubUsername: STRING(30),
      githubAccessToken: STRING(100),
      is_block: { type: INTEGER, defaultValue: false }, // 默认1是true
      age: INTEGER,
      active: { type: BOOLEAN, defaultValue: true }, // 默认1是true,
      accessToken: { type: STRING },
      created_at: { type: DATE },
      updated_at: { type: DATE },
      last_sign_in_at: DATE,
    })
  },

  down: queryInterface => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('user')
  },
};
