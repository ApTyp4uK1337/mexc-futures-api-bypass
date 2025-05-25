# cancelTriggerOrders

Cancel the trigger order.

- **Endpoint:** `/api/v1/private/planorder/cancel`

## Properties

| **Name**           | **Type**   | **Required** | **Description** |
|--------------------|------------|--------------|------------------|
| `ids`           | `list`   | ✅            | order id list, maximum 50 |

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