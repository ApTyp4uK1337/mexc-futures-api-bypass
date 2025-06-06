# cancelStopLimitOrders

Cancel the Stop-Limit trigger order.

- **Endpoint:** `/api/v1/private/stoporder/cancel`

## Properties

| **Name**           | **Type**   | **Required** | **Description** |
|--------------------|------------|--------------|------------------|
| `ids`           | `list`   | ✅            | order id list, maximum 50 |

---

## Example

```js
import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const result = await client.cancelStopLimitOrders({
  ids: ["1", "2"]
});

console.log(result);
```

---

## Response

```JSON
[
  {
    "stopPlanOrderId": 1
  },
  {
    "stopPlanOrderId": 2
  }
]
```