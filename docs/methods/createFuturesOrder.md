# createFuturesOrder

Create a new futures order.

- **Endpoint:** `/v1/createFuturesOrder`

---

## 📥 Request parameters

| **Parameter**       **Type**    | **Required** | **Description**                                                                 |
|----------------------------|--------------------------|-------------|--------------|---------------------------------------------------------------------------------|
| `symbol`                      | `string`    | ✅          | Name of the contract (e.g., `BTC_USDT`).                                       |
| `price`                         | `decimal`   | ✅          | Order price.                                                                   |
| `type`                        | `int`       | ✅          | Order type:<br>1 = Limit<br>2 = Post Only<br>3 = Fill or Kill<br>4 = All or None<br>5 = Market<br>6 = Market to Current |
| `open_type`                       | `int`       | ✅          | Margin type: `1` = Isolated, `2` = Cross.                                      |
| `position_mode`                  | `int`       | ❌           | Position mode: `1` = Hedge, `2` = One-way. Defaults to user's config.          |
| `side`                            | `int`       | ✅          | Direction: `1` = Open Long, `2` = Close Short, `3` = Open Short, `4` = Close Long. |
| `vol`                          | `decimal`   | ✅          | Order volume.                                                                  |
| `leverage`                         | `int`       | ❌           | Leverage (required for isolated margin).                                       |
| `position_id`                   | `long`      | ❌           | Position ID (recommended for closing).                                         |
| `external_id`                   | `string`    | ❌           | External order ID (custom client-side ID).                                     |
| `take_profit_price`           | `decimal`   | ❌           | Take-profit price.                                                             |
| `take_profit_trend`              | `int`       | ❌           | TP trigger type: `1` = Last, `2` = Fair, `3` = Index. Default = `1`.           |
| `stop_loss_price`                 | `decimal`   | ❌           | Stop-loss price.                                                               |
| `stop_loss_trend`                  | `int`       | ❌           | SL trigger type: `1` = Last, `2` = Fair, `3` = Index. Default = `1`.           |
| `price_protect`                  | `boolean`   | ❌           | Enable price protection. Default = `false`.                                    |
| `reduce_only`                      | `boolean`   | ❌           | One-way mode only: set `true` to reduce-only. Ignored in hedge mode.           |

---

###### Response

```json
{
  "success": true,
  "code": 0,
  "data": 103487001239182336
}
```

---

## 📦 Response parameters

| **Field**   | **Type**   | **Description**                                |
|-------------|------------|------------------------------------------------|
| `success`   | `boolean`  | Whether the request was successful.           |
| `code`      | `number`   | Status code (0 means success).                |
| `data`      | `number`   | ID of the created order.                      |
