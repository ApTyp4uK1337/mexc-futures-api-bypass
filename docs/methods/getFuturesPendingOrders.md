# getFuturesPendingOrders

Get a list of your open (pending) futures orders.

- **GET:** `/v1/getFuturesPendingOrders`

---

## 📥 Request parameters

| **Parameter**   | **Type**   | **Required** | **Description**                                 | **Default** |
|------------------|------------|--------------|--------------------------------------------------|-------------|
| `symbol`         | `string`   | ❌           | Trading pair symbol (e.g. `BTC_USDT`).           | *All*       |
| `page_num`       | `number`   | ❌           | Page number for pagination.                      | `1`         |
| `page_size`      | `number`   | ❌           | Number of records per page.                      | `20`        |

---

###### Response

```json
{
  "success": true,
  "code": 0,
  "message": "",
  "data": [
    {
      "orderId": 837462910,
      "symbol": "ETH_USDT",
      "positionId": 51987421,
      "price": 1885.50,
      "vol": 1.5,
      "leverage": 10,
      "side": 1,
      "category": 1,
      "orderType": 1,
      "dealAvgPrice": 0.0,
      "dealVol": 0.0,
      "orderMargin": 282.825,
      "takerFee": 0.0,
      "makerFee": 0.0,
      "profit": 0.0,
      "feeCurrency": "USDT",
      "openType": 1,
      "state": 1,
      "externalOid": "ext_4571_23487",
      "errorCode": 0,
      "usedMargin": 282.825,
      "createTime": "2025-07-25T08:32:10Z",
      "updateTime": "2025-07-25T08:32:10Z",
      "stopLossPrice": 1800.00,
      "takeProfitPrice": 1950.00
    }
  ]
}
```

---

## 📦 Response parameters

| **Field**            | **Type**   | **Description**                                              |
|----------------------|------------|--------------------------------------------------------------|
| `success`            | `boolean`  | Indicates whether the request was successful.                |
| `code`               | `number`   | Response status code.                                        |
| `message`            | `string`   | Response message, if any.                                    |
| `data`               | `array`    | List of open (pending) futures orders.                       |
| `data[].orderId`     | `number`   | Unique order ID.                                             |
| `data[].symbol`      | `string`   | Trading pair symbol.                                         |
| `data[].positionId`  | `number`   | Associated position ID.                                      |
| `data[].price`       | `number`   | Order price.                                                 |
| `data[].vol`         | `number`   | Order volume.                                                |
| `data[].leverage`    | `number`   | Leverage used for the order.                                 |
| `data[].side`        | `number`   | 1 for buy/long, 2 for sell/short.                            |
| `data[].category`    | `number`   | 1 for isolated, 2 for cross margin.                          |
| `data[].orderType`   | `number`   | 1 for limit, 2 for market, etc.                              |
| `data[].dealAvgPrice`| `number`   | Average executed price.                                      |
| `data[].dealVol`     | `number`   | Executed volume so far.                                      |
| `data[].orderMargin` | `number`   | Initial margin required for the order.                       |
| `data[].takerFee`    | `number`   | Taker fee (if applicable).                                   |
| `data[].makerFee`    | `number`   | Maker fee (if applicable).                                   |
| `data[].profit`      | `number`   | Estimated unrealized profit (if any).                        |
| `data[].feeCurrency` | `string`   | Currency in which fees are charged.                          |
| `data[].openType`    | `number`   | 1 for opening position, 2 for closing.                       |
| `data[].state`       | `number`   | Current order state (e.g. 1 = submitted, 2 = partially filled). |
| `data[].externalOid` | `string`   | External order ID if provided by the client.                 |
| `data[].errorCode`   | `number`   | Error code (0 if none).                                      |
| `data[].usedMargin`  | `number`   | Actual margin in use.                                        |
| `data[].createTime`  | `string`   | ISO8601 creation timestamp.                                  |
| `data[].updateTime`  | `string`   | ISO8601 last update timestamp.                               |
| `data[].stopLossPrice` | `number` | Set stop-loss price (if applicable).                         |
| `data[].takeProfitPrice` | `number` | Set take-profit price (if applicable).                     |

> 🛈 If no open orders exist, `data` will be an empty array.
