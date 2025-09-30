# createFuturesTriggerOrder

Create a trigger (planned) futures order that executes once market conditions are met.

- **POST:** `/v1/createFuturesTriggerOrder`

---

## 📥 Request parameters

| **Parameter**     | **Type**   | **Required** | **Description**                                                                 |
|------------------|------------|--------------|---------------------------------------------------------------------------------|
| `symbol`         | `string`   | ✅          | Contract symbol (e.g. BTC_USDT).                                               |
| `price`          | `decimal`  | ❌           | Execution price. Not required for market orders.                              |
| `vol`            | `decimal`  | ✅          | Order volume.                                                                  |
| `leverage`       | `int`      | ❌           | Leverage. Required for isolated margin.                                        |
| `side`           | `int`      | ✅          | Order direction: 1 open long, 2 close short, 3 open short, 4 close long.       |
| `open_type`      | `int`      | ✅          | Margin type: 1 isolated, 2 cross.                                              |
| `trigger_price`  | `decimal`  | ✅          | Trigger price for the order to activate.                                       |
| `trigger_type`   | `int`      | ✅          | Trigger condition: 1 ≥ (greater or equal), 2 ≤ (less or equal).                |
| `execute_cycle`  | `int`      | ✅          | Validity duration: 1 = 24 hours, 2 = 7 days.                                   |
| `order_type`     | `int`      | ✅          | Order type: 1 limit, 2 post-only, 3 IOC, 4 FOK, 5 market.                       |
| `trend`          | `int`      | ✅          | Trigger price source: 1 last price, 2 fair price, 3 index price.               |

---

###### Response

```json
{
  "success": true,
  "code": 0,
  "data": 103487001239182336
}
```

---

## 📦 Response parameters

| **Field** | **Type**   | **Description**                     |
|-----------|------------|-------------------------------------|
| `code`    | `number`   | Response status code.               |
| `success` | `boolean`  | Indicates whether request succeeded.|
| `data`    | `number`   | ID of the created trigger order.    |
