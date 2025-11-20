# getFuturesPositionsHistory

Retrieve the historical closed positions for a specific contract.

- **GET:** `/v1/getFuturesPositionsHistory`

---

## 📥 Request parameters

| **Parameter** | **Type**   | **Required** | **Description**                                           | **Default** |
|---------------|------------|--------------|-----------------------------------------------------------|-------------|
| `symbol`      | `string`   | ❌           | Contract symbol (e.g., `BTC_USDT`).                       | —           |
| `type`        | `number`   | ❌           | Position type filter: `1` long, `2` short.                | —           |
| `page_num`    | `number`   | ❌           | Page number for pagination.                               | `1`         |
| `page_size`   | `number`   | ❌           | Number of results per page.                               | `20`        |

---

###### Response

```json
{
  "success": true,
  "code": 0,
  "data": [
    {
      "positionId": 85412975,
      "symbol": "DOGE_USDT",
      "positionType": 1,
      "openType": 2,
      "state": 3,
      "holdVol": 0,
      "frozenVol": 0,
      "closeVol": 1200,
      "holdAvgPrice": 0.2153,
      "holdAvgPriceFullyScale": "0.215300000000000000000",
      "openAvgPrice": 0.2153,
      "openAvgPriceFullyScale": "0.215300000000000000000",
      "closeAvgPrice": 0.2112,
      "liquidatePrice": 0.1981,
      "oim": 0,
      "im": 0,
      "holdFee": 0,
      "realised": -2.45,
      "leverage": 20,
      "createTime": 1753460012000,
      "updateTime": 1753460312000,
      "autoAddIm": false,
      "version": 3,
      "profitRatio": -0.0114,
      "newOpenAvgPrice": 0.2153,
      "newCloseAvgPrice": 0.2112,
      "closeProfitLoss": -1.92,
      "fee": -0.53,
      "positionShowStatus": "CLOSED",
      "deductFeeList": [],
      "totalFee": 0.53,
      "zeroSaveTotalFeeBinance": 0,
      "zeroTradeTotalFeeBinance": 0.53
    }
  ],
  "is_testnet": true
}
```

---

## 📦 Response parameters

| **Field**                         | **Type**    | **Description**                                             |
|----------------------------------|-------------|-------------------------------------------------------------|
| `success`                        | `boolean`   | Whether the request was successful.                         |
| `code`                           | `number`    | Response status code.                                       |
| `data[]`                         | `array`     | List of historical positions.                               |
| `data[].positionId`              | `long`      | Unique position identifier.                                 |
| `data[].symbol`                  | `string`    | Contract symbol.                                            |
| `data[].positionType`            | `int`       | Position type: `1` long, `2` short.                         |
| `data[].openType`                | `int`       | Margin mode: `1` isolated, `2` cross.                       |
| `data[].state`                   | `int`       | Position state: `1` holding, `2` auto-holding, `3` closed.  |
| `data[].holdVol`                 | `decimal`   | Current holding volume (should be `0` for closed positions).|
| `data[].frozenVol`               | `decimal`   | Frozen volume (e.g., in pending close).                     |
| `data[].closeVol`                | `decimal`   | Volume that has been closed.                                |
| `data[].holdAvgPrice`            | `decimal`   | Average holding price.                                      |
| `data[].closeAvgPrice`           | `decimal`   | Average close price.                                        |
| `data[].openAvgPrice`            | `decimal`   | Average open price.                                         |
| `data[].liquidatePrice`          | `decimal`   | Liquidation price.                                          |
| `data[].oim`                     | `decimal`   | Original initial margin.                                    |
| `data[].im`                      | `decimal`   | Initial margin.                                             |
| `data[].holdFee`                 | `decimal`   | Holding fee (negative = loss, positive = gain).             |
| `data[].realised`                | `decimal`   | Realized profit or loss.                                    |
| `data[].leverage`                | `int`       | Leverage used.                                              |
| `data[].createTime`              | `long`      | Timestamp when position was opened.                         |
| `data[].updateTime`              | `long`      | Timestamp when position was updated.                        |
| `data[].autoAddIm`               | `boolean`   | Whether margin auto-replenishment was enabled.              |
| `data[].version`                | `int`       | Version number for internal tracking.                       |
| `data[].profitRatio`             | `decimal`   | Profit ratio relative to margin.                            |
| `data[].newOpenAvgPrice`         | `decimal`   | Adjusted open average price.                                |
| `data[].newCloseAvgPrice`        | `decimal`   | Adjusted close average price.                               |
| `data[].closeProfitLoss`         | `decimal`   | Profit/loss at close.                                       |
| `data[].fee`                     | `decimal`   | Fees paid.                                                  |
| `data[].positionShowStatus`      | `string`    | Display status (`CLOSED`, etc.).                            |
| `data[].deductFeeList`           | `array`     | Breakdown of deducted fees (if any).                        |
| `data[].totalFee`                | `decimal`   | Total fee for the position.                                 |
| `data[].zeroSaveTotalFeeBinance`| `decimal`   | Binance zero-saving fee (if any).                           |
| `data[].zeroTradeTotalFeeBinance`| `decimal`  | Binance zero-trading fee (if any).                          |
| `is_testnet`                     | `boolean`   | Indicates if response came from testnet.                    |
