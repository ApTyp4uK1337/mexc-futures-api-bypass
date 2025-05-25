
# Order

## Properties

| **Name**           | **Type**   | **Required** | **Description** |
|--------------------|------------|--------------|------------------|
| `currency`           | `string`   | ✅            | currency |

---

## Example

```js
import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const asset = await client.getAsset({
  currency: 'USDT'
});

console.log(asset);
```

---

## Response

```JSON
{
  "success": true,
  "code": 0,
  "data": {
    "currency": "USDT",
    "positionMargin": 0,
    "availableBalance": 0,
    "cashBalance": 0,
    "frozenBalance": 0,
    "equity": 0,
    "unrealized": 0,
    "bonus": 0,
    "availableCash": 0,
    "availableOpen": 0
  }
}
```