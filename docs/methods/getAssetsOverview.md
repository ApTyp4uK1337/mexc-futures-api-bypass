# getAssetsOverview

Get an overview of your asset balances.

- **GET:** `/v1/getAssetsOverview`

---

## 📥 Request parameters

| **Parameter** | **Type**  | **Required** | **Description**                       | **Default** |
|---------------|-----------|--------------|---------------------------------------|-------------|
| `convert`     | `boolean` | ❌           | Return balances in converted format. | `false`     |

---

###### Response (when `convert = 1`)

```json
{
  "data": [
    {
      "currency": "BTC",
      "coinId": "btc123",
      "total": "0.0012",
      "spot": "0.0008",
      "otc": "0",
      "contract": "0.0004",
      "strategy": "0",
      "robot": "0",
      "alpha": "0",
      "originTotal": "0.0012",
      "originSpot": "0.0008",
      "originOtc": "0",
      "originContract": "0.0004",
      "originStrategy": "0",
      "originRobot": "0",
      "originAlpha": "0"
    },
    {
      "currency": "USDT",
      "coinId": "usdt456",
      "total": "100.50",
      "spot": "50.00",
      "otc": "0",
      "contract": "50.50",
      "strategy": "0",
      "robot": "0",
      "alpha": "0",
      "originTotal": "100.50",
      "originSpot": "50.00",
      "originOtc": "0",
      "originContract": "50.50",
      "originStrategy": "0",
      "originRobot": "0",
      "originAlpha": "0"
    }
  ],
  "code": 0,
  "msg": "success",
  "timestamp": 1753440224625,
  "is_testnet": false
}
```

---

###### Response (when `convert = 0`)

```json
{
  "data": {
    "total": "101.5012",
    "spot": "50.0008",
    "otc": "0",
    "contract": "51.5004",
    "strategy": "0",
    "robot": "0",
    "alpha": "0"
  },
  "code": 0,
  "msg": "success",
  "timestamp": 1753440288807,
  "is_testnet": false
}
```

---

## 📦 Response parameters

| **Field**            | **Type**   | **Description**                            |
|----------------------|------------|--------------------------------------------|
| `currency`           | `string`   | Currency code.                             |
| `coinId`             | `string`   | Unique internal coin identifier.           |
| `total`              | `string`   | Converted total balance.                   |
| `spot`               | `string`   | Converted Spot wallet balance.             |
| `otc`                | `string`   | Converted OTC wallet balance.              |
| `contract`           | `string`   | Converted Futures/Contract balance.        |
| `strategy`           | `string`   | Converted Strategy wallet balance.         |
| `robot`              | `string`   | Converted Robot trading balance.           |
| `alpha`              | `string`   | Converted Alpha strategy balance.          |
| `originTotal`        | `string`   | Original total balance.                    |
| `originSpot`         | `string`   | Original Spot wallet balance.              |
| `originOtc`          | `string`   | Original OTC wallet balance.               |
| `originContract`     | `string`   | Original Futures/Contract wallet balance.  |
| `originStrategy`     | `string`   | Original Strategy wallet balance.          |
| `originRobot`        | `string`   | Original Robot trading balance.            |
| `originAlpha`        | `string`   | Original Alpha strategy balance.           |
| `code`               | `number`   | Response status code.                      |
| `msg`                | `string`   | Response message.                          |
| `timestamp`          | `number`   | Timestamp of the response (in ms).         |
| `is_testnet`         | `boolean`  | Indicates whether the server is testnet.   |

> 🛈 When `convert = false`, only the top-level totals (`total`, `spot`, etc.) are returned without currency breakdown or origin values.
