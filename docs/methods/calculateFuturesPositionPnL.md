# calculateFuturesPositionPnL

Calculate futures position PnL.

- **GET:** `/v1/calculateFuturesPositionPnL`

---

## 📥 Request parameters

| **Parameter** | **Type**   | **Required** | **Description**                                 |
|---------------|------------|--------------|-------------------------------------------------|
| `symbol`      | `string`   | ✅           | Contract symbol (e.g., `ETH_USDT`). Optional.   |
| `volume`      | `decimal`   | ✅           | Position volume.   |
| `leverage`      | `int`   | ✅           | Position leverage.   |
| `side`      | `int`   | ✅           | Position side: `1` = Long, `2` = Short.   |
| `entry_price`      | `decimal`   | ✅           | Position average entry price.   |
| `price_type`      | `string`   | ❌           | Calculation price type: `last_price`, `index_price`, `fair_price`. Default: `last_price`.   |

---

###### Response

```json
{
    "success": true,
    "code": 0,
    "data": {
        "pnl": 1.4615,
        "pnl_percent": 17.06,
        "volume": 10,
        "entry_price": 85677.5,
        "current_price": 87139,
        "price_type": "last_price"
    }
}
```

---

## 📦 Response parameters

| **Field**             | **Type**  | **Description**                                  |
|-----------------------|-----------|--------------------------------------------------|
| `success`             | `boolean` | Whether the request succeeded.                   |
| `code`                | `number`  | Status code (0 = success).                       |
| `data`                | `number`  | Data.                                            |
