# cancelAllFuturesOrders

Cancel all open futures orders for a given symbol.

- **POST:** `/v1/cancelAllFuturesOrders`

---

## 📥 Request parameters

| **Parameter** | **Type**   | **Required** | **Description**                                 |
|---------------|------------|--------------|-------------------------------------------------|
| `symbol`      | `string`   | ❌           | Contract symbol (e.g., `ETH_USDT`). Optional.   |

---

###### Response

```json
{
  "success": true,
  "code": 0,
  "is_testnet": false
}
```

---

## 📦 Response parameters

| **Field**     | **Type**   | **Description**                                      |
|---------------|------------|------------------------------------------------------|
| `success`     | `boolean`  | Whether the request was successful.                 |
| `code`        | `number`   | Response status code. `0` means success.            |
| `is_testnet`  | `boolean`  | Indicates whether the environment is testnet.       |
