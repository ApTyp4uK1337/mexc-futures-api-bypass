# chaseFuturesOrder

Modify order price to the corresponding one-tick price.

- **POST:** `/v1/chaseFuturesOrder`

---

## 📥 Request parameters

| **Parameter**   |    **Type**    | **Required** | **Description**                                                                 |
|-----------------------------------|-------------|--------------|---------------------------------------------------------------------------------|
| `order_id`                      | `long`    | ✅          | Order ID.                                       |

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

| **Field**   | **Type**   | **Description**                                |
|-------------|------------|------------------------------------------------|
| `success`   | `boolean`  | Whether the request was successful.           |
| `code`      | `number`   | Status code (0 means success).                |
| `data`      | `number`   | ID of the created order.                      |
