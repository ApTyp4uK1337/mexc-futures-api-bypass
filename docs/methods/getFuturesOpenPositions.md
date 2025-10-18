# getFuturesOpenPositions

Get currently open futures positions.

- **GET:** `/v1/getFuturesOpenPositions`

---

## 📥 Request parameters

| **Parameter** | **Type**   | **Required** | **Description**                        |
|---------------|------------|--------------|----------------------------------------|
| `symbol`      | `string`   | ❌           | Contract symbol (e.g., `BTC_USDT`). If omitted, returns all open positions. |

---

###### Response

```json
{
  "success": true,
  "code": 0,
  "data": [
    {
      "positionId": 98765432,
      "symbol": "ETH_USDT",
      "positionType": 2,
      "openType": 2,
      "state": 1,
      "holdVol": 5,
      "frozenVol": 0,
      "closeVol": 0,
      "holdAvgPrice": 3050.75,
      "holdAvgPriceFullyScale": "3050.75",
      "openAvgPrice": 3050.75,
      "openAvgPriceFullyScale": "3050.75",
      "closeAvgPrice": 0,
      "liquidatePrice": 2802.50,
      "oim": 152.53,
      "im": 152.53,
      "holdFee": 0,
      "realised": -0.0127,
      "leverage": 20,
      "marginRatio": 0.0235,
      "createTime": 1753499999123,
      "updateTime": 1753500012345,
      "autoAddIm": false,
      "version": 3,
      "profitRatio": -0.0042,
      "newOpenAvgPrice": 3050.75,
      "newCloseAvgPrice": 0,
      "closeProfitLoss": 0,
      "fee": -0.0127,
      "deductFeeList": [],
      "totalFee": 0.0127,
      "zeroSaveTotalFeeBinance": 0,
      "zeroTradeTotalFeeBinance": 0.0127
    }
  ],
  "is_testnet": true
}
```

---

## 📦 Response parameters

| **Field**                      | **Type**    | **Description**                                                       |
|--------------------------------|-------------|-----------------------------------------------------------------------|
| `success`                      | `boolean`   | Whether the request was successful.                                   |
| `code`                         | `number`    | Status code.                                                          |
| `data`                         | `array`     | List of open positions.                                               |
| `data[].positionId`           | `long`      | Unique ID of the position.                                            |
| `data[].symbol`               | `string`    | Contract symbol.                                                      |
| `data[].positionType`         | `int`       | Position type: `1` = Long, `2` = Short.                               |
| `data[].openType`             | `int`       | Margin type: `1` = Isolated, `2` = Cross.                             |
| `data[].state`                | `int`       | Position state: `1` = Holding, `2` = System Holding, `3` = Closed.    |
| `data[].holdVol`              | `decimal`   | Held volume.                                                          |
| `data[].frozenVol`            | `decimal`   | Frozen volume.                                                        |
| `data[].closeVol`             | `decimal`   | Closed volume.                                                        |
| `data[].holdAvgPrice`         | `decimal`   | Average holding price.                                                |
| `data[].openAvgPrice`         | `decimal`   | Average open price.                                                   |
| `data[].closeAvgPrice`        | `decimal`   | Average close price.                                                  |
| `data[].liquidatePrice`       | `decimal`   | Liquidation price.                                                    |
| `data[].oim`                  | `decimal`   | Original initial margin.                                              |
| `data[].im`                   | `decimal`   | Initial margin.                                                       |
| `data[].holdFee`              | `decimal`   | Holding fee (`+` means earned, `–` means paid).                       |
| `data[].realised`             | `decimal`   | Realized profit/loss.                                                 |
| `data[].leverage`             | `int`       | Leverage used.                                                        |
| `data[].marginRatio`          | `decimal`   | Margin ratio.                                                         |
| `data[].createTime`           | `number`    | Creation timestamp (ms).                                              |
| `data[].updateTime`           | `number`    | Last update timestamp (ms).                                           |
| `data[].autoAddIm`            | `boolean`   | Whether auto add margin is enabled.                                   |
| `data[].version`              | `int`       | Version of the position data.                                         |
| `data[].profitRatio`          | `decimal`   | Profit ratio of the position.                                         |
| `data[].newOpenAvgPrice`      | `decimal`   | Adjusted open average price.                                          |
| `data[].newCloseAvgPrice`     | `decimal`   | Adjusted close average price.                                         |
| `data[].closeProfitLoss`      | `decimal`   | Profit or loss after closing position.                                |
| `data[].fee`                  | `decimal`   | Total fee for the position.                                           |
| `data[].deductFeeList`        | `array`     | Fee deduction breakdown (e.g., vouchers).                             |
| `data[].totalFee`             | `decimal`   | Total fee including deductions.                                       |
| `data[].zeroSaveTotalFeeBinance` | `decimal` | Zero-fee savings from Binance promotion.                              |
| `data[].zeroTradeTotalFeeBinance`| `decimal` | Zero-fee trading amount from Binance promotion.                       |
| `is_testnet`                  | `boolean`   | Whether the environment is testnet.                                   |
