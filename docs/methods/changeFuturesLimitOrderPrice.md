# changeFuturesLimitOrderPrice

Change futures limit order price.

- **POST:** `/v1/changeFuturesLimitOrder`

---

## 📥 Request parameters

| **Parameter**   |    **Type**    | **Required** | **Description**                                                                 |
|-----------------------------------|-------------|--------------|---------------------------------------------------------------------------------|
| `order_id`                      | `string`    | ✅          | Order ID.                                       |
| `price`                         | `decimal`   | ✅          | Order price.                                                                   |
| `vol`                          | `decimal`   | ✅          | Order volume.                                                                  |

---

###### Response

```json
{
  "success": true,
  "code": 0,
  "data": "750535498883221504"
}
```

---

## 📦 Response parameters

| **Field**   | **Type**   | **Description**                                |
|-------------|------------|------------------------------------------------|
| `success`   | `boolean`  | Whether the request was successful.           |
| `code`      | `number`   | Status code (0 means success).                |
| `data`      | `number`   | ID of the new created order.                   |
