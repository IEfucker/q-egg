'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async render() {
    const ctx = this.ctx;
    if (ctx.isAuthenticated()) {
      ctx.body = `<div>
        <h2>${ctx.path}</h2>
        <hr>
        Logined user: <img src="${ctx.user.photo}"> ${ctx.user.displayName} / ${ctx.user.id} | <a href="/logout">Logout</a>
        <pre><code>${JSON.stringify(ctx.user, null, 2)}</code></pre>
        <hr>
        <a href="/">Home</a> | <a href="/user">User</a>
      </div>`;
    } else {
      ctx.session.returnTo = ctx.path;
      ctx.body = `
        <div>
          <h2>${ctx.path}</h2>
          <hr>
          Login with
          <a href="/passport/github">Github</a>
          <hr>
          <a href="/">Home</a> | <a href="/user">User</a>
        </div>
      `;
    }
  }

  async logout() {
    const ctx = this.ctx
    // ctx.session = null;
    ctx.logout();
    ctx.redirect(ctx.get('referer') || '/')
  }
}

module.exports = HomeController;
