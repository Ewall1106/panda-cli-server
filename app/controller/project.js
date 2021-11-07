'use strict';

const Controller = require('egg').Controller;

class ProjectController extends Controller {
  // 获取项目or组件模板
  async getTemplate() {
    const { ctx } = this;
    ctx.body = await ctx.service.info.getInfo();
    // ctx.body = 'get project template';
  }

  // 创建项目or组件模板
  async setTemplate() {
    const { ctx } = this;
    ctx.body = await ctx.service.info.setInfo();
    // ctx.body = 'get project template';
  }
}

module.exports = ProjectController;
