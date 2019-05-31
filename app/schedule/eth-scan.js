'use strict';

const Subscription = require('egg').Subscription;
const Scan = require('../utils/scan');

class ethScan extends Subscription {
  static get schedule() {
    return {
      interval: '360s',
      type: 'all',
    };
  }

  async subscribe() {
    Scan.eth(this.ctx);
  }
}

module.exports = ethScan;
