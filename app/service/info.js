'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  // 获取用户信息
  async getInfo() {
    const { ctx } = this;
    const list = await ctx.model.Info.find({});
    return {
      code: 200,
      status: true,
      message: '获取用户信息成功',
      data: {
        list,
      },
    };
  }

  // 新建模板信息
  async setInfo() {
    const { ctx } = this;
    await ctx.model.Info.create({
      name: 'vue2标准模板',
      npmName: 'vue2-template',
      version: '0.1.0',
    });
    return {
      code: 200,
      status: true,
      message: '创建数据成功',
    };
  }
}

module.exports = UserService;
