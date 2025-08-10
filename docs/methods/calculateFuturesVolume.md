# calculateFuturesVolume

Calculate position volume quantity.

- **Endpoint:** `/v1/calculateFuturesVolume`

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

| **Field**     | **Type**   | **Description**                                      |
|---------------|------------|------------------------------------------------------|
| `usdt_value`     | `boolean`  | The value of the final volume in USDT.                 |
| `volume`        | `number`   | Total volume taking into account all rounding and minVol, maxVol.            |
| `price`  | `boolean`  | The price at which the calculation was made.       |
| `min_volume`  | `boolean`  | Min position volume.       |
| `max_volume`  | `boolean`  | Max position volume.       |
