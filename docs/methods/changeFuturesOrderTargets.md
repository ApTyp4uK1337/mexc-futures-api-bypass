# changeFuturesOrderTargets

Update Take Profit (TP) and Stop Loss (SL) targets for an existing futures order.  
You can modify TP/SL prices and volumes, or cancel them by setting the respective values to `0` or leaving them empty.

- **POST:** `/v1/changeFuturesOrderTargets`

---

## 📥 Request parameters

| **Parameter**        | **Type**   | **Required** | **Description**                                                                                 |
|----------------------|------------|--------------|-------------------------------------------------------------------------------------------------|
| `real_order_id`      | `long`     | ✅           | The ID of the existing futures order you want to modify.                                       |
| `take_profit_price`  | `decimal`  | ❌           | New Take Profit price. If both TP and SL prices are `0` or empty, TP/SL will be canceled.      |
| `take_profit_volume` | `decimal`  | Conditional  | Take Profit trigger volume. Required if `take_profit_price` is provided.                      |
| `take_profit_trend`  | `decimal`  | ❌           | Take Profit trend parameter (used for trend-based TP).                                         |
| `stop_loss_price`    | `decimal`  | ❌           | New Stop Loss price. If both TP and SL prices are `0` or empty, TP/SL will be canceled.        |
| `stop_loss_volume`   | `decimal`  | Conditional  | Stop Loss trigger volume. Required if `stop_loss_price` is provided.                           |
| `stop_loss_trend`    | `decimal`  | ❌           | Stop Loss trend parameter (used for trend-based SL).                                           |

> **Note:** The `real_order_id` can be obtained from the [`getFuturesOpenOrders`](/docs/methods/getFuturesOpenOrders.md) method - `data[].id`.

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