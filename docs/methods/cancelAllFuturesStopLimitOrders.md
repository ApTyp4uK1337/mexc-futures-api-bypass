# cancelAllFuturesStopLimitOrders

Cancel all stop-limit (stoporder) futures orders.  
You can cancel by `symbol`, by `positionId`, or **all at once**.

- **POST:** `/v1/cancelAllFuturesStopLimitOrders`

---

## 📥 Request parameters

| **Parameter**  | **Type** | **Required** | **Description**                                                                 |
|----------------|----------|--------------|---------------------------------------------------------------------------------|
| `positionId`   | `long`   | ❌           | If provided, cancels only stop-limit orders tied to this position. Requires `symbol` to also be provided. |
| `symbol`       | `string` | ❌           | The contract symbol (e.g. `BTC_USDT`). Cancels only orders for this symbol if filled. If omitted, cancels all. |

---

## 📦 Example response

```json
{
  "success": true,
  "code": 0,
  "is_testnet": true
}
```

---

## ✅ Response parameters

| **Field**     | **Type**    | **Description**                     |
|---------------|-------------|-------------------------------------|
| `success`     | `boolean`   | Indicates whether the request was successful |
| `code`        | `number`    | Status code                        |
| `is_testnet`  | `boolean`   | Indicates whether the environment is testnet |
