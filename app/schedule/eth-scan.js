'use strict';

const Subscription = require('egg').Subscription;
const Scan = require('../utils/scan');

class ethScan extends Subscription {
  static get schedule() {
    return {
      interval: '60m',
      type: 'all',
    };
  }

  async subscribe() {
    await Scan.eth(this.ctx);
  }
}

module.exports = ethScan;
