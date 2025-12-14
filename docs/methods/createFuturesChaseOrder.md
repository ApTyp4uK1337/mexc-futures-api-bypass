# createFuturesChaseOrder

Create a new futures chase limit order.

- **POST:** `/v1/createFuturesChaseOrder`

---

## 📥 Request parameters

| **Parameter**   |    **Type**    | **Required** | **Description**                                                                 |
|-----------------------------------|-------------|--------------|---------------------------------------------------------------------------------|
| `chase_type`                      | `int`    | ✅          | Chase type: `1` = Bid1/Ask1, `2` - Distance from Bid1/Ask1.                                       |
| `distance_type`                      | `int`    | ❌          | Distance type: `1` = USDT, `2` = Percent.                                       |
| `distance_value`                      | `decimal`    | ❌          | Distance value in USDT or Percent / 100.                                       |
| `max_distance_type`                      | `int`    | ❌          | Max distance type: `1` = USDT, `2` = Percent.                                       |
| `max_distance_value`                      | `decimal`    | ❌          | Max distance value in USDT or Percent / 100.                                       |
| `leverage`                      | `int`    | ❌          | Leverage (required for isolated margin).                                       |
| `open_type`                      | `int`    | ✅          | Margin type: `1` = Isolated, `2` = Cross.                                       |
| `side`                      | `int`    | ✅          | Direction: `1` = Open Long, `2` = Close Short, `3` = Open Short, `4` = Close Long.                                       |
| `symbol`                      | `int`    | ✅          | Name of the contract (e.g., `BTC_USDT`).                                       |
| `vol`                      | `string`    | ✅          | Order volume.                                       |

---

###### Response

```json
{
    "success": true,
    "code": 0,
    "data": {
        "orderId": "1337",
        "ts": 1337
    },
    "is_testnet": true
}
```

---

## 📦 Response parameters

| **Field**   | **Type**   | **Description**                                |
|-------------|------------|------------------------------------------------|
| `success`   | `boolean`  | Whether the request was successful.           |
| `code`      | `number`   | Status code (0 means success).                |
| `data`      | `object`   | ID of the created order.                      |
