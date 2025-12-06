# cancelFuturesTrailingOrder

Cancel futures trailing order.

- **POST:** `/v1/cancelFuturesTrailingOrder`

---

## 📥 Request parameters

| **Parameter**   |    **Type**    | **Required** | **Description**                                                                 |
|-----------------------------------|-------------|--------------|---------------------------------------------------------------------------------|
| `symbol`                      | `string`    | ❌          | Contract name.                                       |
| `order_id`                      | `int`    | ❌          | Trailing order ID.                                       |

---

###### Response

```json
{
  "success": true,
  "code": 0
}
```

---

## 📦 Response parameters

| **Field**   | **Type**   | **Description**                                |
|-------------|------------|------------------------------------------------|
| `success`   | `boolean`  | Whether the request was successful.           |
| `code`      | `number`   | Status code (0 means success).                |
| `data`      | `number`   | Data.                      |
