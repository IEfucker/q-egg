'use strict';

const Service = require('egg').Service;

class TestService extends Service {
  getTestById(id) {
    const query = { id };
    return this.ctx.model.Test.findOne(query);
  }
}

module.exports = TestService;
