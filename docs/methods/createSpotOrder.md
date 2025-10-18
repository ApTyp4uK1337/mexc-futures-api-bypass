# createSpotOrder

Create a new spot order.

- **POST:** `/v1/createSpotOrder`

---

## 📥 Request parameters

| **Parameter**   |    **Type**    | **Required** | **Description**                                                                 |
|-----------------------------------|-------------|--------------|---------------------------------------------------------------------------------|
| `symbol`                      | `string`    | ✅          | Name of the contract (e.g., `BTC_USDT`).                                       |
| `type`                      | `string`    | ✅          | `MARKET_ORDER`, `LIMIT_ORDER`.                                       |
| `side`                         | `string`   | ✅          | `BUY`, `SELL`.                                                                   |
| `price`                        | `decimal`       | ❌          | Price for LIMIT_ORDER |
| `amount`                       | `decimal`       | ❌          | Order USDT amount.                                      |
| `quantity`                       | `decimal`       | ❌          | Order quantity.                                      |

---

###### Response

```json
{
    "data": "C02__603915252018683904091",
    "code": 200,
    "msg": "success",
    "timestamp": 1759766852161,
    "is_testnet": false
}
```

---

## 📦 Response parameters

| **Field**   | **Type**   | **Description**                                |
|-------------|------------|------------------------------------------------|
| `success`   | `boolean`  | Whether the request was successful.           |
| `code`      | `number`   | Status code (0 means success).                |
| `data`      | `number`   | ID of the created order.                      |
