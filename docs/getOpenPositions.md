# getPositionsHistory

## Properties

| **Name**           | **Type**   | **Required** | **Description** |
|--------------------|------------|--------------|------------------|
| `symbol`           | `string`   | ❌            | the name of the contract |

---

## Example

```js
import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const positions = await client.getOpenPositions();

console.log(positions);
```

---

## Response

```JSON
{
    "success": true,
    "code": 0,
    "data": [
        {
          "positionId": 1394650,
          "symbol": "ETH_USDT",
          "positionType": 1,
          "openType": 1,
          "state": 1,
          "holdVol": 1,
          "frozenVol": 0,
          "closeVol": 0,
          "holdAvgPrice": 1217.3,
          "holdAvgPriceFullyScale": "2506.57",
          "openAvgPrice": 1217.3,
          "openAvgPriceFullyScale": "2506.57",
          "closeAvgPrice": 0,
          "liquidatePrice": 1211.2,
          "oim": 0.1290338,
          "im": 0.1290338,
          "holdFee": 0,
          "realised": -0.0073,
          "leverage": 100,
          "marginRatio": 0,
          "createTime": 1609991676000,
          "updateTime": 1609991676000,
          "autoAddIm": false,
          "version": 1,
          "profitRatio": 0,
          "newOpenAvgPrice": 2506.57,
          "newCloseAvgPrice": 0,
          "closeProfitLoss": 0,
          "fee": -0.005,
          "deductFeeList": [],
          "totalFee": 0.005,
          "zeroSaveTotalFeeBinance": 0,
          "zeroTradeTotalFeeBinance": 0.005
      }
  ]
}
```