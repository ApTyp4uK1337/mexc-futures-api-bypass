# getFuturesLeverage

Get leverage and margin information for a specific futures contract.

- **GET:** `/v1/getFuturesLeverage`

---

## 📥 Request parameters

| **Parameter** | **Type** | **Required** | **Description**                      |
|---------------|----------|--------------|--------------------------------------|
| `symbol`      | `string` | ✅          | Trading pair symbol (e.g., `BTC_USDT`) |

---

###### Response

```json
{
  "success": true,
  "code": 0,
  "data": [
    {
      "level": 4,
      "maxVol": 1200000,
      "mmr": 0.01,
      "imr": 0.02,
      "positionType": 1,
      "openType": 1,
      "leverage": 50,
      "limitBySys": false,
      "currentMmr": 0.001
    },
    {
      "level": 4,
      "maxVol": 1200000,
      "mmr": 0.01,
      "imr": 0.02,
      "positionType": 2,
      "openType": 1,
      "leverage": 50,
      "limitBySys": false,
      "currentMmr": 0.001
    }
  ],
  "is_testnet": false
}
```

---

## 📦 Response parameters

| **Field**        | **Type**   | **Description**                                                              |
|------------------|------------|------------------------------------------------------------------------------|
| `success`        | `boolean`  | Whether the request was successful.                                         |
| `code`           | `number`   | Response status code.                                                       |
| `data`           | `array`    | List of leverage/margin configurations per position type.                   |
| `data[].level`   | `number`   | Risk level tier.                                                            |
| `data[].maxVol`  | `number`   | Maximum position volume allowed for this level.                             |
| `data[].mmr`     | `decimal`  | Maintenance margin rate.                                                    |
| `data[].imr`     | `decimal`  | Initial margin rate.                                                        |
| `data[].positionType` | `number` | 1 = long, 2 = short.                                                        |
| `data[].openType`     | `number` | 1 = isolated, 2 = cross.                                                    |
| `data[].leverage`     | `number` | Leverage value.                                                             |
| `data[].limitBySys`   | `boolean`| Whether leverage is limited by system constraints.                          |
| `data[].currentMmr`   | `decimal`| Current effective maintenance margin rate (may differ from base `mmr`).    |
| `is_testnet`     | `boolean`  | Indicates if the response is from a testnet environment.                    |
