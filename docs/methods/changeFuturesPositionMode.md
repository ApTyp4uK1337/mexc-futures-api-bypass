# changeFuturesPositionMode

Change the position mode for your futures account.

> ⚠️ This operation is only allowed if you have **no active orders**, **no planned orders**, and **no open positions**.  
> When switching from hedge to one-way mode, the risk limit level will reset to level 1.

- **POST:** `/v1/changeFuturesPositionMode`

---

## 📥 Request parameters

| **Parameter**     | **Type**   | **Required** | **Description**                                                                 |
|------------------|------------|--------------|---------------------------------------------------------------------------------|
| `position_mode`   | `int`      | ✅          | `1` for Hedge Mode, `2` for One-way Mode                                        |

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
| `success`     | `boolean`  | Indicates if the request succeeded. |
| `code`        | `number`   | Response status code.               |
| `is_testnet`  | `boolean`   | Whether the environment is testnet. |