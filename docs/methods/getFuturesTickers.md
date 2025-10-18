# getFuturesTickers

Get the latest market ticker for a futures contract.

- **GET:** `/v1/getFuturesTickers`

---

## 📥 Request parameters

| **Parameter** | **Type**   | **Required** | **Description**                                 |
|---------------|------------|--------------|-------------------------------------------------|
| `symbol`      | `string`   | ❌           | Contract symbol (e.g., `BTC_USDT`). Optional.   |

---

###### Response

```json
{
  "success": true,
  "code": 0,
  "data": {
    "contractId": 73,
    "symbol": "DOGE_USDT",
    "lastPrice": 0.2157,
    "bid1": 0.2156,
    "ask1": 0.2158,
    "volume24": 823459321,
    "amount24": 174920000.27,
    "holdVol": 19420300,
    "lower24Price": 0.2084,
    "high24Price": 0.2221,
    "riseFallRate": -0.0123,
    "riseFallValue": -0.0027,
    "indexPrice": 0.2159,
    "fairPrice": 0.2156,
    "fundingRate": 0.00006,
    "maxBidPrice": 0.2375,
    "minAskPrice": 0.1983,
    "timestamp": 1753460104432,
    "riseFallRates": {
      "zone": "UTC+8",
      "r": -0.0123,
      "v": -0.0027,
      "r7": 0.0195,
      "r30": 0.0641,
      "r90": 0.1319,
      "r180": 0.3128,
      "r365": 0.5113
    },
    "riseFallRatesOfTimezone": [
      -0.0142,
      -0.0101,
      -0.0123
    ]
  },
  "is_testnet": false
}
```

---

## 📦 Response parameters

| **Field**                        | **Type**    | **Description**                                         |
|----------------------------------|-------------|---------------------------------------------------------|
| `success`                        | `boolean`   | Whether the request was successful.                     |
| `code`                           | `number`    | Response status code.                                   |
| `data.contractId`               | `number`    | Internal contract ID.                                   |
| `data.symbol`                   | `string`    | Contract symbol.                                        |
| `data.lastPrice`                | `decimal`   | Last traded price.                                      |
| `data.bid1`                     | `decimal`   | Best bid price.                                         |
| `data.ask1`                     | `decimal`   | Best ask price.                                         |
| `data.volume24`                 | `decimal`   | 24-hour trading volume (counted by quantity).           |
| `data.amount24`                 | `decimal`   | 24-hour trading amount (counted by value).              |
| `data.holdVol`                  | `decimal`   | Current total holdings (open interest).                 |
| `data.lower24Price`            | `decimal`   | Lowest price in the last 24 hours.                      |
| `data.high24Price`             | `decimal`   | Highest price in the last 24 hours.                     |
| `data.riseFallRate`            | `decimal`   | Rate of price change.                                   |
| `data.riseFallValue`           | `decimal`   | Value of price change.                                  |
| `data.indexPrice`              | `decimal`   | Index price.                                            |
| `data.fairPrice`               | `decimal`   | Fair market price.                                      |
| `data.fundingRate`             | `decimal`   | Current funding rate.                                   |
| `data.maxBidPrice`             | `decimal`   | Maximum allowed bid price.                              |
| `data.minAskPrice`             | `decimal`   | Minimum allowed ask price.                              |
| `data.timestamp`               | `long`      | Timestamp of data snapshot (ms).                        |
| `data.riseFallRates.zone`      | `string`    | Timezone used for rate calculations.                    |
| `data.riseFallRates.r`         | `decimal`   | Daily change rate.                                      |
| `data.riseFallRates.v`         | `decimal`   | Daily change value.                                     |
| `data.riseFallRates.r7`        | `decimal`   | 7-day change rate.                                      |
| `data.riseFallRates.r30`       | `decimal`   | 30-day change rate.                                     |
| `data.riseFallRates.r90`       | `decimal`   | 90-day change rate.                                     |
| `data.riseFallRates.r180`      | `decimal`   | 180-day change rate.                                    |
| `data.riseFallRates.r365`      | `decimal`   | 365-day change rate.                                    |
| `data.riseFallRatesOfTimezone` | `array`     | Price change rates in different timezones.              |
| `is_testnet`                    | `boolean`   | Indicates whether the environment is testnet.           |
