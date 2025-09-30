# cancelAllFuturesTriggerOrders

Cancel all open trigger (planned) futures orders. You can cancel all at once, or only for a specific symbol.

- **POST:** `/v1/cancelAllFuturesTriggerOrders`

---

## 📥 Request parameters

| **Parameter** | **Type** | **Required** | **Description**                                                                 |
|---------------|----------|--------------|---------------------------------------------------------------------------------|
| `symbol`      | `string` | ❌           | Contract symbol (e.g. `BTC_USDT`). If provided, only cancel orders for this contract. If omitted, cancels **all** trigger orders. |

---

### 📦 Response

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
| `success`     | `boolean`   | Indicates whether the request was successful. |
| `code`        | `number`    | Status code.                        |
| `is_testnet`  | `boolean`   | Whether the environment is testnet. |
