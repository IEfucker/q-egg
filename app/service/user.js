'use strict';

// const utility = require('utility')
// const uuid = require('uuid')
const Service = require('egg').Service;

class UserService extends Service {
  /*
   * 根据 githubId 查找用户
   * @param {String} githubId 登录名
   * @return {Promise[user]} 承载用户的 Promise 对象
   */
  getUserByGithubId(githubId) {
    const query = { where: { githubId } };
    return this.ctx.model.User.findOne(query)
  }

  /*
   * 根据 token 查找用户
   * @param {String} token
   * @return {Promise[user]} 承载用户的 Promise 对象
   */
  getUserByToken(accessToken) {
    const query = { accessToken };
    return this.ctx.model.User.findOne(query);
  }
}

module.exports = UserService;

