# createFuturesOrder

Create a new futures order.

- **Endpoint:** `/v1/createFuturesOrder`

---

## 📥 Request parameters

| **Parameter (PHP)**        | **Sent as (API)**       | **Type**    | **Required** | **Description**                                                                 |
|----------------------------|--------------------------|-------------|--------------|---------------------------------------------------------------------------------|
| `symbol`                   | `symbol`                 | `string`    | Yes          | Name of the contract (e.g., `BTC_USDT`).                                       |
| `price`                    | `price`                  | `decimal`   | Yes          | Order price.                                                                   |
| `type`                     | `type`                   | `int`       | Yes          | Order type:<br>1 = Limit<br>2 = Post Only<br>3 = Fill or Kill<br>4 = All or None<br>5 = Market<br>6 = Market to Current |
| `open_type`                | `openType`               | `int`       | Yes          | Margin type: `1` = Isolated, `2` = Cross.                                      |
| `position_mode`            | `positionMode`           | `int`       | No           | Position mode: `1` = Hedge, `2` = One-way. Defaults to user's config.          |
| `side`                     | `side`                   | `int`       | Yes          | Direction: `1` = Open Long, `2` = Close Short, `3` = Open Short, `4` = Close Long. |
| `vol`                      | `vol`                    | `decimal`   | Yes          | Order volume.                                                                  |
| `leverage`                 | `leverage`               | `int`       | No           | Leverage (required for isolated margin).                                       |
| `position_id`              | `positionId`             | `long`      | No           | Position ID (recommended for closing).                                         |
| `external_id`              | `externalOid`            | `string`    | No           | External order ID (custom client-side ID).                                     |
| `take_profit_price`        | `takeProfitPrice`        | `decimal`   | No           | Take-profit price.                                                             |
| `take_profit_trend`        | `profitTrend`            | `int`       | No           | TP trigger type: `1` = Last, `2` = Fair, `3` = Index. Default = `1`.           |
| `stop_loss_price`          | `stopLossPrice`          | `decimal`   | No           | Stop-loss price.                                                               |
| `stop_loss_trend`          | `lossTrend`              | `int`       | No           | SL trigger type: `1` = Last, `2` = Fair, `3` = Index. Default = `1`.           |
| `price_protect`            | `priceProtect`           | `boolean`   | No           | Enable price protection. Default = `false`.                                    |
| `reduce_only`              | `reduceOnly`             | `boolean`   | No           | One-way mode only: set `true` to reduce-only. Ignored in hedge mode.           |

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
