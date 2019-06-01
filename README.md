# Asset monitor

目前已经完成了ETH的合约资产某地址监控。

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### Config

#### Address list
> asset-monitor/app/public/load-files/addresses.json  
```json
[
  {
    "contractAddress" : "需要监控的合约资产Hash",
    "addresses": [
      {
        "address": "需要监控的ETH地址",
        "value": "对比的值，不一样会自动发送邮件"
      }
    ]
  }
]

```

#### Email list
> asset-monitor/app/public/load-files/emails.json
```json
[
  "需要通知的邮件地址，用逗号分隔，可以多个"
]
```

#### API key
> 本地环境： asset-monitor/config/config.local.js ；  
生产环境： asset-monitor/config/config.prod.js ：

```javascript
'use strict';

module.exports = {
  apiKey: {
    token: 'https://etherscan.io/ 的 API-Key Token',
  },
  emailParams: {
    address: '你自己的QQ邮箱，暂时只支持QQ邮箱发送',
    code: 'QQ邮箱授权码，暂时只支持QQ邮箱发送',
  },
};

```

End.
