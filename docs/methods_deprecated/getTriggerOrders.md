# getTriggerOrders

Gets the trigger order list.

- **Endpoint:** `/api/v1/private/planorder/list/orders`

## Properties

| **Name**           | **Type**   | **Required** | **Description** |
|--------------------|------------|--------------|------------------|
| `symbol`           | `string`   | ❌            | the name of the contract |
| `states`           | `string`   | ❌            | order state, ([see values below](#enum-gettriggerordersstates)); Multiple separate by ',' |
| `start_time`           | `long`   | ❌            | start time, start time and end time span can only check 90 days at a time, default return the last 7 days of data without fill in |
| `end_time`           | `long`   | ❌            | end time, start time, and end time spans can only be checked for 90 days at a time |
| `page_num`           | `int`   | ❌            | current page number, default is 1 |
| `page_size`           | `int`   | ❌            | page size, default 20, maximum 100 |

---

## Enum: `getTriggerOrders.States`

* `Uninformed` (value: `'uninformed'`)
* `Uncompleted` (value: `'uncompleted'`)
* `Completed` (value: `'completed'`)
* `Cancelled` (value: `'cancelled'`)
* `Invalid` (value: `'invalid'`)

---

## Example

```js
import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const orders = await client.getTriggerOrders();

console.log(orders);
```

---

## Response

```JSON
{
  "success": false,
  "code": 0,
  "message": "",
  "data": [
    {
      "id": 0,
      "symbol": "",
      "leverage": 0,
      "side": 0,
      "triggerPrice": 0.0,
      "price": 0.0,
      "vol": 0.0,
      "openType": 0,
      "triggerType": 0,
      "state": 0,
      "executeCycle": 0,
      "trend": 0,
      "orderType": 0,
      "orderId": 0,
      "errorCode": 0,
      "createTime": "",
      "updateTime": ""
    }
  ]
}
```