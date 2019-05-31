'use strict';

const fs = require('fs');

module.exports = app => {
  app.beforeStart(async () => {
    app.addressList = JSON.parse(fs.readFileSync('app/public/load-files/addresses.json'));
    app.emails = JSON.parse(fs.readFileSync('app/public/load-files/emails.json'));

    app.isGetEvent = true;

    await app.runSchedule('eth-scan');
  });
};
