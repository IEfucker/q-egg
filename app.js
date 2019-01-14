'use strict'
const uuid = require('uuid');
const _ = require('lodash')

module.exports = app => {
  const githubHandler = async (ctx, { profile, accessToken }) => {
    const email = profile.emails && profile.emails[0] && profile.emails[0].value;

    let existUser = await ctx.service.user.getUserByGithubId(profile.id);

    // 用户不存在则创建
    if (!existUser) {
      existUser = new ctx.model.User();
      existUser.githubId = profile.id;
      existUser.active = true;
      existUser.accessToken = uuid.v4();

    }

    // 用户存在，更新字段
    existUser.name = profile.username;
    existUser.email = email || existUser.email;
    existUser.avatar = profile._json.avatar_url;
    existUser.githubUsername = profile.username;
    existUser.githubAccessToken = accessToken;

    try {
      await existUser.save();
    } catch (ex) {
      console.log(ex)
      throw ex;
    }

    return existUser;
  };

  app.passport.verify(async (ctx, user) => {
    ctx.logger.debug('passport.verify', user);
    const handler = githubHandler;
    const existUser = await handler(ctx, user);
    if (existUser) {
      // id存入Cookie, 用于验证过期.
      const auth_token = existUser.name + '$$$$'; // 以后可能会存储更多信息，用 $$$$ 来分隔
      const opts = {
        path: '/',
        maxAge: 1000 * 60 * 60 * 24 * 30,
        signed: true,
        httpOnly: true,
        encrypt: false,
      };
      ctx.cookies.set(app.config.auth_cookie_name, auth_token, opts); // cookie 有效期30天
    }

    return existUser;
  });

  app.passport.serializeUser(async (ctx, user) => {
    return _.pick(user, [ 'name', 'email', 'avatar' ])
  })

  app.passport.deserializeUser(async (ctx, user) => {
    if (user) {
      const auth_token = ctx.cookies.get(app.config.auth_cookie_name, {
        signed: true,
        encrypt: false,
      })

      if (!auth_token) {
        return user;
      }

      const auth = auth_token.split('$$$$');
      const user_name = auth[0];
      user = await ctx.service.user.getUserByName(user_name);
    }
    return user
  })

}
