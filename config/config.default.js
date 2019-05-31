/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1559285924418_8524';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.http = {
    headers: {
      common: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    },
    timeout: 10000,
  };

  return {
    ...config,
    ...userConfig,
  };
};
