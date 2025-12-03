# createFuturesStopOrder

Create a new futures stop order.

- **POST:** `/v1/createFuturesStopOrder`

---

## 📥 Request parameters

| **Parameter**   |    **Type**    | **Required** | **Description**                                                                 |
|-----------------------------------|-------------|--------------|---------------------------------------------------------------------------------|
| `position_id`                      | `long`    | ✅          | Position ID.                                       |
| `vol_type`                         | `int`   | ✅          | Quantity type: `1` = partial TP/SL, `2` = full position TP/SL.                                                                   |
| `vol`                         | `decimal`   | ✅          | Order quantity; must be within the allowed range for the contract; the order quantity plus existing TP/SL order quantity must be less than the closable quantity; position quantity will not be frozen, but checks are required                                                                   |
| `take_profit_type`                         | `int`   | ❌          | Take-profit type `0` - market TP, `1` - limit TP |
| `take_profit_order_price`                         | `decimal`   | ❌          | Limit TP order price |
| `take_profit_price`                         | `decimal`   | ❌          | Take-profit price; at least one of stop-loss or take-profit must be non-empty and greater than 0 |
| `take_profit_reverse`                         | `int`   | ❌          | Take-profit reverse: `1` - yes, `2` - no           |
| `take_profit_trend`                         | `int`   | ✅          | Take profit price type: `1` = Last, `2` = Fair, `3` = Index. Default = `1`.                                                                   |
| `take_profit_vol`                         | `decimal`   | ❌          | Take-profit quantity (when profitLossVolType == `SEPARATE`)   |
| `stop_loss_type`                         | `int`   | ❌          | Stop-loss type `0` - market TP, `1` - limit TP |
| `stop_loss_order_price`                         | `decimal`   | ❌          | Limit SL order price |
| `stop_loss_price`                         | `decimal`   | ❌          | Stop-loss price; at least one of stop-loss or take-profit must be non-empty and greater than 0                                                                   |
| `stop_loss_reverse`                         | `int`   | ❌          | Stop-loss reverse: `1` - yes, `2` - no           |
| `stop_loss_trend`                         | `int`   | ✅          | Stop loss price type: `1` = Last, `2` = Fair, `3` = Index. Default = `1`.                                                                   |
| `stop_loss_vol`                         | `int`   | ❌          | Stop-loss quantity (when profitLossVolType == `SEPARATE`)  |
| `profit_loss_vol_type`                         | `string`   | ✅          | TP/SL quantity type (`SAME` - same quantity; `SEPARATE` - different quantities)                                                                   |
| `price_protect`                         | `int`   | ❌          | Trigger protection: `1`, `0`                                                                   |

---

###### Response

```json
{
    "success": true,
    "code": 0,
    "data": "3801168"
}
```

---

## 📦 Response parameters

| **Field**   | **Type**   | **Description**                                |
|-------------|------------|------------------------------------------------|
| `success`   | `boolean`  | Whether the request was successful.           |
| `code`      | `number`   | Status code (0 means success).                |
| `data`      | `number`   | ID of the created order.                      |
