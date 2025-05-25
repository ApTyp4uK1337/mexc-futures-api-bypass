# getRiskLimits

## Properties

| **Name**           | **Type**   | **Required** | **Description** |
|--------------------|------------|--------------|------------------|
| `symbol`           | `string`   | ❌            | the name of the contract , not uploaded will return all |

---

## Example

```js
import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const riskLimits = await client.getRiskLimits();

console.log(riskLimits);
```

---

## Response

```JSON
{
  "success": true,
  "code": 0,
  "data": {
    "BTC_USDT": [
      {
        "level": 10,
        "maxVol": 10200000,
        "mmr": 0.0375,
        "imr": 0.04,
        "maxLeverage": 500,
        "symbol": "BTC_USDT",
        "positionType": 1,
        "openType": 2,
        "leverage": 25,
        "limitBySys": false
      },
      {
        "level": 16,
        "maxVol": 16500000,
        "mmr": 0.0615,
        "imr": 0.0625,
        "maxLeverage": 500,
        "symbol": "BTC_USDT",
        "positionType": 2,
        "openType": 2,
        "leverage": 10,
        "limitBySys": false
      }
    ]
    ...
  }
}
```