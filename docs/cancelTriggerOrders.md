# cancelTriggerOrders

## Properties

| **Name**           | **Type**   | **Required** | **Description** |
|--------------------|------------|--------------|------------------|
| `ids`           | `list`   | ✅            | ([see values below](#enum-getassettransferrecordsstate)), the modification of the position mode must ensure that there are no active orders, planned orders, or unfinished positions, otherwise it cannot be modified. When switching the one-way mode in both directions, the risk limit level will be reset to level 1. If you need to change the call interface, modify |

---

## Example

```js
import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const result = await client.cancelTriggerOrders({
  ids: ["1", "2"]
});

console.log(result);
```

---

## Response

```JSON
[
  {
    "symbol": "BTC_USDT",
    "orderId": 1
  },
  {
    "symbol": "ETH_USDT",
    "orderId": 2
  }
]
```