# cancelOrders

Cancel the pending order placed before, each time can cancel up to 50 orders.

- **Endpoint:** `/api/v1/private/order/cancel`

## Properties

| **Name**           | **Type**   | **Required** | **Description** |
|--------------------|------------|--------------|------------------|
| `ids`           | `list`   | ✅            | ([see values below](#enum-getassettransferrecordsstate)), the modification of the position mode must ensure that there are no active orders, planned orders, or unfinished positions, otherwise it cannot be modified. When switching the one-way mode in both directions, the risk limit level will be reset to level 1. If you need to change the call interface, modify |

---

## Example

```js
import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const result = await client.cancelOrders({
  ids: ["101716841474621953", "108885377779302912", "108886241042563584"]
});

console.log(result);
```

---

## Response

```JSON
{
  "success": true,
  "code": 0,
  "data": [
    {
      "orderId": 101716841474621953,
      "errorCode": 2040,
      "errorMsg": "order not exist"
    },
    {
      "orderId": 108885377779302912,
      "errorCode": 2041,
      "errorMsg": "order state cannot be cancelled"
    },
    {
      "orderId": 108886241042563584,
      "errorCode": 0,
      "errorMsg": "success"
    }
  ]
}
```