# calculateFuturesVolume

Calculate position volume quantity.

- **GET:** `/v1/calculateFuturesVolume`

---

## 📥 Request parameters

| **Parameter** | **Type**   | **Required** | **Description**                                 |
|---------------|------------|--------------|-------------------------------------------------|
| `symbol`      | `string`   | ✅           | Contract symbol (e.g., `ETH_USDT`). Optional.   |
| `amount`      | `decimal`   | ✅           | Position amount in USDT.   |
| `leverage`      | `decimal`   | ✅           | Position leverage.   |
| `price_type`      | `string`   | ❌           | Price for calculation: index_price, fair_price, last_price (default).   |

---

###### Response

```json
{
    "success": true,
    "code": 0,
    "data": {
        "usdt_value": 23.71152,
        "volume": 2,
        "price": 118557.6,
        "min_volume": 1,
        "max_volume": 1500000
    }
}
```

---

## 📦 Response parameters

| **Field**             | **Type**  | **Description**                                  |
|-----------------------|-----------|--------------------------------------------------|
| `success`             | `boolean` | Whether the request succeeded.                   |
| `code`                | `number`  | Status code (0 = success).                       |
| `data.usdt_value`     | `number`  | The value of the final volume in USDT.           |
| `data.volume`         | `number`  | Total volume after rounding and min/max checks.  |
| `data.price`          | `number`  | Price used for the calculation.                  |
| `data.min_volume`     | `number`  | Minimum allowed position volume.                 |
| `data.max_volume`     | `number`  | Maximum allowed position volume.                 |
| `is_testnet`          | `boolean` | Whether environment is testnet.                  |
