# changeFuturesOrderStopLimitPrice

Switch Stop-Limit limited order price.

- **POST:** `/v1/changeFuturesOrderStopLimitPrice`

---

## 📥 Request parameters

| **Parameter**    | **Type**   | **Required** | **Description**                                                                 |
|------------------|------------|--------------|---------------------------------------------------------------------------------|
| `order_id`    | `long`     | ✅          | Limit order id.                                      |
| `take_profit_price`         | `decimal`  | ❌          | stop-loss price, take-profit and stop-loss price are empty or 0 at the same time, indicating to cancel and take profit.                                          |
| `stop_loss_pirce`           | `decimal`      | ❌          | take-profit price，take-profit and stop-loss price are empty or 0 at the same time, indicating to cancel stop-loss and take profit                                            |

---

###### Response

```json
{
    "success": true,
    "code": 0,
    "is_testnet": true
}
```

---

## 📦 Response parameters

| **Field**     | **Type**   | **Description**                     |
|---------------|------------|-------------------------------------|
| `success`     | `boolean`  | Whether the request was successful. |
| `code`        | `number`   | Response status code.               |
| `is_testnet`  | `boolean`   | Whether the environment is testnet. |