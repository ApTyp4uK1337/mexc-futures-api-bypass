# getFuturesPositionMode

Get the current position mode for the account.

- **GET:** `/v1/getFuturesPositionMode`

## 📥 Request parameters

This endpoint does not require any parameters.

---

###### Response

```JSON
{
    "success": true,
    "code": 0,
    "data": 1,
    "is_testnet": false
}
```

---

## 📦 Response parameters

| **Field**     | **Type**   | **Description**                                     |
|---------------|------------|-----------------------------------------------------|
| `success`     | `boolean`  | Whether the request was successful.                |
| `code`        | `number`   | Response status code (0 means success).            |
| `data`        | `number`   | Current position mode: `1` = Hedge mode, `2` = One-way mode. |
| `is_testnet`  | `boolean`  | Indicates if the environment is testnet.           |