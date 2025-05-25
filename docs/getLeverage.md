# getLeverage

## Properties

| **Name**           | **Type**   | **Required** | **Description** |
|--------------------|------------|--------------|------------------|
| `symbol`           | `string`   | ✅            | symbol |

---

## Example

```js
import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const leverage = await client.getLeverage({
  symbol: 'BTC_USDT'
});

console.log(leverage);
```

---

## Response

```JSON
{
  "success": true,
  "code": 0,
  "data": [
    {
      "level": 16,
      "maxVol": 16500000,
      "mmr": 0.0615,
      "imr": 0.0625,
      "positionType": 2,
      "openType": 2,
      "leverage": 10,
      "limitBySys": false,
      "currentMmr": 0.001
    }
  ]
}
```