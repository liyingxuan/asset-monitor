'use strict';
const Service = require('egg').Service;

const nodemailer = require('nodemailer');

class EmailService extends Service {
  async sendMail(email, subject, text, html) {
    const transporter = nodemailer.createTransport({
      service: 'qq',
      secureConnection: true,
      port: 465,
      auth: {
        user: this.app.config.emailParams.address, // 账号
        pass: this.app.config.emailParams.code, // 授权码
      },
    });

    const mailOptions = {
      from: this.app.config.emailParams.address, // 发送者,与上面的user一致
      to: email, // 接收者,可以同时发送多个,以逗号隔开
      subject, // 标题
      text, // 文本
      html,
    };

    try {
      await transporter.sendMail(mailOptions);
      return true;
    } catch (err) {
      return false;
    }
  }
}

module.exports = EmailService;
