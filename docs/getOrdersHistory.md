
# getOrdersHistory

## Properties

| **Name**           | **Type**   | **Required** | **Description** |
|--------------------|------------|--------------|------------------|
| `symbol`           | `string`   | ❌            | the name of the contract |
| `states`            | `string`  | ❌            | order state, ([see values below](#enum-getordershistorystates)); multiple separate by ',' |
| `category`              | `int`  | ❌            | order category: ([see values below](#enum-getordershistorycategory)) |
| `start_time`         | `long`      | ❌            | start time, start time and end time span can only check 90 days at a time, default return the last 7 days of data without fill in |
| `end_time`             | `long`      | ❌            | end time, start time, and end time spans can only be checked for 90 days at a time |
| `side`             | `int`      | ❌            | order direction ([see values below](#enum-getordershistoryside)) |
| `page_num`         | `int`      | ❌            | current page number, default is 1 |
| `page_size`       | `int`     | ❌            | page size, default 20, maximum 100 |

---

## Enum: `getOrdersHistory.States`

* `Uninformed` (value: `'uninformed'`)
* `Uncompleted` (value: `'uncompleted'`)
* `Completed` (value: `'completed'`)
* `Cancelled` (value: `'cancelled'`)
* `Invalid` (value: `'invalid'`)

## Enum: `getOrdersHistory.Category`

* `Limit order` (value: `'1'`)
* `System take-over delegate` (value: `'2'`)
* `Close delegate` (value: `'3'`)
* `ADL reduction` (value: `'4'`)

## Enum: `getOrdersHistory.Side`

* `Open Long` (value: `'1'`)
* `Close Short` (value: `'2'`)
* `Open Short` (value: `'3'`)
* `Close Long` (value: `'4'`)

---

## Example

```js
import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const orders = await client.getOrdersHistory();

console.log(orders);
```

---

## Response

```JSON
{
    "success": false,
    "code": 0,
    "message": "",
    "data": [{
            "orderId": 0,
            "symbol": "",
            "positionId": 0,
            "price": 0.0,
            "vol": 0.0,
            "leverage": 0,
            "side": 0,
            "category": 0,
            "orderType": 0,
            "dealAvgPrice": 0.0,
            "dealVol": 0.0,
            "orderMargin": 0.0,
            "takerFee": 0.0,
            "makerFee": 0.0,
            "profit": 0.0,
            "feeCurrency": "",
            "openType": 0,
            "state": 0,
            "externalOid": "",
            "errorCode": 0,
            "usedMargin": 0.0,
            "createTime": "",
            "updateTime": "",
            "stopLossPrice": 0.0,
            "takeProfitPrice": 0.0
        }

    ]
}
```