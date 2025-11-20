# cancelStopLimitOrders

Cancel stop-limit futures orders by id.

- **POST:** `/v1/cancelStopLimitOrders`

---

## 📥 Request parameters

| **Parameter**        | **Type**   | **Required** | **Description**                                                                                 |
|----------------------|------------|--------------|-------------------------------------------------------------------------------------------------|
| `ids`      | `string`     | ✅           | Real order ids separated by commas.                                       |

> **Note:** The `ids` can be obtained from the [`getFuturesOpenOrders`](/docs/methods/getFuturesOpenOrders.md) method - `data[].id`.

---

## 📦 Example response

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
| `success`     | `boolean`  | Whether the request was successful. |
| `code`        | `number`   | Response status code.               |
| `is_testnet`  | `boolean`   | Whether the environment is testnet. |