'use strict'
module.exports = app => {
  const { INTEGER, STRING, FLOAT, DATE } = app.Sequelize
  const Question = app.model.define('question', {
    _id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    question: STRING(300),
    options: STRING(300),
    correct: INTEGER,
    rand: FLOAT,
    tags: STRING(100),
    created_at: { type: DATE },
    updated_at: { type: DATE },
  })
  return Question
}
