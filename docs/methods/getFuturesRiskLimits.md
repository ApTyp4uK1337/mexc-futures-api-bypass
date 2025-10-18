# getFuturesRiskLimits

Get risk limit tiers for a specific futures contract.

- **GET:** `/v1/getFuturesRiskLimits`

---

## 📥 Request parameters

| **Parameter** | **Type**   | **Required** | **Description**                                     |
|---------------|------------|--------------|-----------------------------------------------------|
| `symbol`      | `string`   | ❌           | Contract symbol (e.g., `BTC_USDT`). Optional.       |

---

###### Response

```json
{
  "success": true,
  "code": 0,
  "data": {
    "PEPE_USDT": [
      {
        "level": 1,
        "maxVol": 15000,
        "mmr": 0.0035,
        "imr": 0.007,
        "maxLeverage": 100,
        "symbol": "PEPE_USDT",
        "positionType": 1,
        "openType": 1,
        "leverage": 50,
        "limitBySys": false,
        "currentMmr": 0.0035
      },
      {
        "level": 1,
        "maxVol": 15000,
        "mmr": 0.0035,
        "imr": 0.007,
        "maxLeverage": 100,
        "symbol": "PEPE_USDT",
        "positionType": 2,
        "openType": 1,
        "leverage": 50,
        "limitBySys": false,
        "currentMmr": 0.0035
      }
    ]
  },
  "is_testnet": false
}
```

---

## 📦 Response parameters

| **Field**               | **Type**    | **Description**                                                 |
|-------------------------|-------------|-----------------------------------------------------------------|
| `success`               | `boolean`   | Whether the request was successful.                             |
| `code`                  | `number`    | Response status code.                                           |
| `data`                  | `object`    | Object where keys are contract symbols, and values are arrays.  |
| `data[].level`          | `int`       | Risk level tier.                                                |
| `data[].maxVol`         | `decimal`   | Maximum volume allowed for the tier.                            |
| `data[].mmr`            | `decimal`   | Maintenance margin rate.                                        |
| `data[].imr`            | `decimal`   | Initial margin rate.                                            |
| `data[].maxLeverage`    | `int`       | Maximum leverage allowed for the tier.                          |
| `data[].symbol`         | `string`    | Symbol of the contract.                                         |
| `data[].positionType`   | `int`       | Position type: `1` = Long, `2` = Short.                         |
| `data[].openType`       | `int`       | Open type: `1` = Isolated, `2` = Cross.                         |
| `data[].leverage`       | `int`       | Current leverage.                                               |
| `data[].limitBySys`     | `boolean`   | Indicates if limited by system configuration.                   |
| `data[].currentMmr`     | `decimal`   | Current maintenance margin rate applied.                        |
| `is_testnet`            | `boolean`   | Indicates whether the environment is testnet.                   |
