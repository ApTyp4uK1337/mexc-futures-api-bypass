# changeFuturesPositionLeverage

Change the leverage of a position. If the position does not exist yet, additional info is required.

- **Endpoint:** `/v1/changeFuturesPositionLeverage`

---

## 📥 Request parameters

| **Parameter**     | **Type**   | **Required** | **Description**                                                                 |
|------------------|------------|--------------|---------------------------------------------------------------------------------|
| `position_id`    | `long`     | ✅*         | ID of the position to modify. Required if a position already exists.           |
| `leverage`       | `int`      | ✅          | New leverage value.                                                             |
| `open_type`      | `int`      | Conditional  | Open type: `1` for isolated, `2` for cross. Required if position doesn't exist.|
| `symbol`         | `string`   | Conditional  | Contract symbol. Required if position doesn't exist.                            |
| `position_type`  | `int`      | Conditional  | Position type: `1` for long, `2` for short. Required if no existing position.   |

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