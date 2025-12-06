# changeFuturesTrailingOrder

Modify futures trailing order.

- **POST:** `/v1/changeFuturesTrailingOrder`

---

## 📥 Request parameters

| **Parameter**   |    **Type**    | **Required** | **Description**                                                                 |
|-----------------------------------|-------------|--------------|---------------------------------------------------------------------------------|
| `symbol`                      | `string`    | ✅          | Name of the contract (e.g., `BTC_USDT`).                                       |
| `order_id`                         | `long`   | ✅          | Trailing order ID.                                                                   |
| `trend`                       | `int`       | ✅          | Price type: `1` = Latest, `2` = Fair, `3` = Index                                      |
| `active_price`                       | `decimal`       | ❌          | Activation price.                                      |
| `back_type`                       | `int`       | ✅          | Callback type: `1` = Percentage, `2` = Absolute value.                                      |
| `back_value`                       | `decimal`       | ✅          | Callback value.                                      |
| `vol`                          | `decimal`   | ✅          | Order volume.                                                                  |

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
| `data`      | `number`   | ID of the created order.                      |
