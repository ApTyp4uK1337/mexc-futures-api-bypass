# getStopLimitOrders

Get the Stop-Limit order list.

- **Endpoint:** `/api/v1/private/stoporder/list/orders`

## Properties

| **Name**           | **Type**   | **Required** | **Description** |
|--------------------|------------|--------------|------------------|
| `symbol`           | `string`   | ❌            | the name of the contract |
| `is_finished`           | `int`   | ❌            | final state indicator: ([see values below](#enum-getstoplimitordersisfinished)) |
| `start_time`           | `long`   | ❌            | start time, start time and end time span can only check 90 days at a time, default return the last 7 days of data without fill in |
| `end_time`           | `long`   | ❌            | end time, start time, and end time spans can only be checked for 90 days at a time |
| `page_num`           | `int`   | ❌            | current page number, default is 1 |
| `page_size`           | `int`   | ❌            | page size, default 20, maximum 100 |

---

## Enum: `getStopLimitOrders.IsFinished`

* `Uncompleted` (value: `'0'`)
* `Completed` (value: `'1'`)

---

## Example

```js
import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const orders = await client.getStopLimitOrders();

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
      "orderId": 0,
      "symbol": "",
      "positionId": 0,
      "stopLossPrice": 0.0,
      "takeProfitPrice": 0.0,
      "state": 0,
      "triggerSide": 0,
      "positionType": 0,
      "vol": 0.0,
      "realityVol": 0.0,
      "placeOrderId": 0,
      "errorCode": 0,
      "version": 0,
      "isFinished": 0,
      "createTime": "",
      "updateTime": ""
    }
  ]
}
```