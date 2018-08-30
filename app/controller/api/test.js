'use strict'

const Controller = require('egg').Controller;
const _ = require('lodash')

class TestController extends Controller {
  async getTest(ctx) {
    ctx.validate({
      id: {
        type: 'int',
      },
    }, ctx.params)
    const test_id = String(ctx.params.id)
    const user = await ctx.service.user.getUserByToken(ctx.query.accessToken)
    const test = await ctx.service.test.getTestById(test_id)
  }
}

module.exports = TestController;
