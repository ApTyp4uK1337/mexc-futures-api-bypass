# changeFuturesPositionLeverage

Change the leverage of a position. If the position does not exist yet, additional info is required.

- **Endpoint:** `/v1/changeFuturesPositionLeverage`

---

## 📥 Request parameters

| **Parameter**     | **Type**   | **Required** | **Description**                                                                 |
|------------------|------------|--------------|---------------------------------------------------------------------------------|
| `position_id`    | `long`     | Yes*         | ID of the position to modify. Required if a position already exists.           |
| `leverage`       | `int`      | Yes          | New leverage value.                                                             |
| `open_type`      | `int`      | Conditional  | Open type: `1` for isolated, `2` for cross. Required if position doesn't exist.|
| `symbol`         | `string`   | Conditional  | Contract symbol. Required if position doesn't exist.                            |
| `position_type`  | `int`      | Conditional  | Position type: `1` for long, `2` for short. Required if no existing position.   |

---

### 📌 Example requests

- **Existing position:**

```json
{
  "positionId": 87192342,
  "leverage": 20
}
```

- **No existing position:**

```json
{
  "openType": 1,
  "leverage": 20,
  "symbol": "BTC_USDT",
  "positionType": 1
}
```

---

###### Response (example)

```json
{
  "success": true,
  "code": 0
}
```

---

## 📦 Response parameters

| **Field**     | **Type**   | **Description**                     |
|---------------|------------|-------------------------------------|
| `success`     | `boolean`  | Indicates if the request succeeded. |
| `code`        | `number`   | Response status code.               |
