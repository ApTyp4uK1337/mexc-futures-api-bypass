# cancelSpotOrder

Cancel spot limit order by order id.

- **POST:** `/v1/cancelSpotOrder`

---

## 📥 Request parameters

| **Parameter**   |    **Type**    | **Required** | **Description**                                                                 |
|-----------------------------------|-------------|--------------|---------------------------------------------------------------------------------|
| `order_id`                      | `string`    | ✅          | Spot order id (e.g., `C02__1337`).                                       |

---

###### Response

```json
{
    "code": 200,
    "timestamp": 1759766852161,
    "is_testnet": false
}
```

---

## 📦 Response parameters

| **Field**   | **Type**   | **Description**                                |
|-------------|------------|------------------------------------------------|
| `success`   | `boolean`  | Whether the request was successful.           |
| `code`      | `number`   | Status code (0 means success).                |
| `data`      | `number`   | Data.                      |
