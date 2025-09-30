# closeAllFuturesPositions

Close all currently open futures positions for the account.

- **POST:** `/v1/closeAllFuturesPositions`

---

## 📥 Request parameters

This endpoint does **not** accept any parameters.

---

###### Response

```json
{
  "success": true,
  "code": 0,
  "data": [],
  "is_testnet": true
}
```

---

## 📦 Response parameters

| **Field**     | **Type**   | **Description**                                      |
|---------------|------------|------------------------------------------------------|
| `success`     | `boolean`  | Whether the request was successful.                 |
| `code`        | `number`   | Response status code. `0` means success.            |
| `data`        | `array`    | Empty array (no content on success).                |
| `is_testnet`  | `boolean`  | Indicates whether the environment is testnet.       |
