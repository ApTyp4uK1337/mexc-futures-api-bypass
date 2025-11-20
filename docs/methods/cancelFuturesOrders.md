# cancelFuturesOrders

Cancel futures orders by order ids.

---

## 📥 Request parameters

| **Parameter**      | **Type**   | **Required** | **Description**                          |
|-------------------|------------|--------------|------------------------------------------|
| `ids`          | `string`   | ✅          | A comma-separated list of order IDs.         |

---

###### Response

```json
{
    "success": true,
    "code": 0,
    "data": [
        {
            "orderId": 739238961033069056,
            "errorCode": 0,
            "errorMsg": "success"
        }
    ]
}
```

---

## 📦 Response parameters

| **Field**         | **Type**   | **Description**                          |
|---------------|-------------|-------------------------------------|
| `success`     | `boolean`   | Indicates whether the request was successful. |
| `code`        | `number`    | Status code.                        |
| `is_testnet`  | `boolean`   | Whether the environment is testnet. |