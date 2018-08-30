'use strict'
module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize
  const Test = app.model.define('test', {
    _id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(20),
    category: { type: INTEGER, defaultValue: 0 }, // 0代表es5和es3，1代表es2015+，默认为0
    created_at: { type: DATE },
    updated_at: { type: DATE },
  })
  return Test
}
