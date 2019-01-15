'use strict'

module.exports = appInfo => {
  const config = exports = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_{{keys}}'

  config.auth_cookie_name = 'q_test'

  config.passportGithub = {
    key: '6c94d799a7780d39507d',
    secret: '9719ccd3bcf6a069e8db295196ed962bd84112ac',
  }

  // add your config here
  config.middleware = []

  // change to your own sequelize configurations
  config.sequelize = {
    dialect: 'mysql', // db类型
    database: 'q', // 数据库名
    host: 'localhost', // 主机
    port: '3306', // 端口
    username: 'root',
    password: '123456',
    timezone: '+08:00',
  }

  return config
}
