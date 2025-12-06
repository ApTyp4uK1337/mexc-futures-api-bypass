# createFuturesTrailingOrder

Create a new futures trailing order.

- **POST:** `/v1/createFuturesTrailingOrder`

---

## 📥 Request parameters

| **Parameter**   |    **Type**    | **Required** | **Description**                                                                 |
|-----------------------------------|-------------|--------------|---------------------------------------------------------------------------------|
| `symbol`                      | `string`    | ✅          | Name of the contract (e.g., `BTC_USDT`).                                       |
| `leverage`                         | `int`   | ✅          | Leverage.                                                                   |
| `side`                            | `int`       | ✅          | Direction: `1` = Open Long, `2` = Close Short, `3` = Open Short, `4` = Close Long. |
| `vol`                          | `decimal`   | ✅          | Order volume.                                                                  |
| `open_type`                       | `int`       | ✅          | Margin type: `1` = Isolated, `2` = Cross.                                      |
| `trend`                       | `int`       | ✅          | Price type: `1` = Latest, `2` = Fair, `3` = Index                                      |
| `active_price`                       | `decimal`       | ❌          | Activation price.                                      |
| `back_type`                       | `int`       | ✅          | Callback type: `1` = Percentage, `2` = Absolute value.                                      |
| `back_value`                       | `decimal`       | ✅          | Callback value.                                      |
| `position_mode`                       | `int`       | ✅          | Position mode. Default `0` = no record for historical orders; `1` = Two-way (hedged); `2` = One-way.                                      |
| `reduce_only`                       | `boolean`       | ❌          | Reduce-only.                                      |

---

###### Response

```json
{
  "success": true,
  "code": 0,
  "data": "739218627261666816"
}
```

---

## 📦 Response parameters

| **Field**   | **Type**   | **Description**                                |
|-------------|------------|------------------------------------------------|
| `success`   | `boolean`  | Whether the request was successful.           |
| `code`      | `number`   | Status code (0 means success).                |
| `data`      | `number`   | ID of the created order.                      |
