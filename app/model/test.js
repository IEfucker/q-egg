'use strict'
module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize
  const Test = app.model.define('test', {
    _id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    test_id: STRING(100), // 由q_ids字符串生成，作为test的暴露id
    q_ids: STRING(100),
    created_at: { type: DATE },
    updated_at: { type: DATE },
  }, {
    freezeTableName: true,
  })
  return Test
}
