'use strict';

const Service = require('egg').Service;

class InfoService extends Service {
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

  async setInfo() {
    const { ctx } = this;
    await ctx.model.Info.create({
      name: 'te111st',
      age: '123',
    });
    return {
      code: 200,
      status: true,
      message: '创建数据成功',
    };
  }
}

module.exports = InfoService;
