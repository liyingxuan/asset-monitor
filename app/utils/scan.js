'use strict';
const Decimal = require('decimal.js');

const Scan = {
  async eth(ctx) {
    const contractAddress = ctx.app.addressList[0].contractAddress;
    const addresses = ctx.app.addressList[0].addresses;
    const emails = ctx.app.emails;
    const apiKey = ctx.app.config.apiKey.token;
    let isSend = false;

    for (const addressI in addresses) {
      const address = addresses[addressI].address;
      const value = addresses[addressI].value;
      const url = 'https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=' + contractAddress + '&address=' + address + '&tag=latest&apikey=' + apiKey;
      let result = '';

      try {
        const data = await ctx.http.get(url);
        if (data.message === 'OK') {
          result = new Decimal(data.result).div(100000000);
          isSend = (value !== result.toString());
          result = address + ': ' + result;
          console.log(result);
        } else {
          console.log(data);
        }
      } catch (e) {
        console.error(e);
      }

      if (isSend) {
        for (const emailI in emails) {
          const email = emails[emailI];
          const subject = '被监控地址余额异动提示';
          const text = '';
          const html = '<h2>结果如下:</h2><span class="content-elem-span">' + result + '</span></a>';

          try {
            await ctx.service.email.sendMail(email, subject, text, html);
          } catch (e) {
            console.error(e);
          }
        }

        isSend = false;
      }
    }
  },
};

module.exports = Scan;
