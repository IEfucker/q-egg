'use strict'
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const User = app.model.define('user', {
    _id: { type: INTEGER, primaryKey: true, autoIncrement: true }, // 用户id
    loginname: { type: STRING(30) },
    name: STRING(30),
    password: STRING(32),
    email: STRING(32),
    url: STRING(100),
    avatar: STRING(100),
    githubId: STRING(30),
    githubUsername: STRING(30),
    githubAccessToken: STRING(100),
    is_block: { type: INTEGER, defaultValue: 0 }, // 默认1是true
    age: INTEGER,
    active: { type: INTEGER, defaultValue: 0 }, // 默认1是true,
    accessToken: { type: STRING },
    created_at: { type: DATE },
    updated_at: { type: DATE },
    last_sign_in_at: DATE,
  })

  User.findByLogin = function* (login) {
    return yield this.findOne({
      where: {
        login,
      },
    })
  }

  User.prototype.logSignin = function* () {
    yield this.update({ last_sign_in_at: new Date() })
  }

  return User
}
