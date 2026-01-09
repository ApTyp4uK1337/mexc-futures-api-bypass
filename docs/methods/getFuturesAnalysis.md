# getFuturesAnalysis

User Asset Analysis.

- **GET:** `/v1/getFuturesAnalysis`

---

## 📥 Request parameters

| **Parameter** | **Type**  | **Required** | **Description**                                              |
|---------------|-----------|--------------|---------------------------------------------------------------|
| `symbol`    | `string`  | ❌           | Trading pair |
| `start_time`    | `long`  | ❌           | Start time (ms) |
| `end_time`    | `long`  | ❌           | End time (ms) |
| `reverse`    | `int`  | ❌           | Contract type: `0` - All; `1` -  USDT-M; `2` - Coin-M; `3` - USDC-M. Default: `0` |
| `include_unrealised_pnl`    | `int`  | ❌           | Include unrealized PnL: `0` - No; `1` - Yes. Default: `0` |

---

###### Response

```json
{
    "success": true,
    "code": 0,
    "data": {
        "historyDailyData": {
            "timeList": [
                1767369600000,
                1767456000000,
                1767542400000,
                1767628800000,
                1767715200000,
                1767801600000,
                1767888000000,
                1767974400000
            ],
            "accumPnlList": [
                37.977624,
                75.4495876928,
                69.3495295095,
                108.5351513495,
                115.9399998343,
                115.9399998343,
                -183.0312165757,
                -183.0312165757
            ],
            "accumPnlRateList": [
                0.08364834,
                0.16618294,
                0.15274714,
                0.23905619,
                0.25536588,
                0.25536588,
                -0.40313893,
                -0.40313893
            ],
            "dailyPnlList": [
                37.977624,
                37.4719636928,
                -6.1000581833,
                39.18562184,
                7.4048484848,
                0,
                -298.97121641,
                0
            ],
            "dailyEquityList": [
                491.99285097875,
                529.46481467155,
                523.36475648825,
                562.55037832825,
                569.95522681305,
                569.95522681305,
                270.98401040305,
                270.98401040305
            ]
        },
        "todayPnl": 0,
        "todayPnlRate": 0,
        "totalEquity": 270.98401040305,
        "recentPnl": -221.0088405757,
        "recentPnlRate": -0.44921148,
        "recentPnl30": -250.4828720435,
        "recentPnlRate30": -0.36541936,
        "accurate": false,
        "timestamp": 1767982295018,
        "todayPnlFinished": true
    },
    "is_testnet": false
}
```

---

## 📦 Response parameters

| **Field**          | **Type**   | **Description**                                                 |
|-----------------------------|-------------|-------------------------------------------------------|
| `success`                   | `boolean`   | Indicates whether the request was successful.         |
| `code`                      | `number`    | Response status code.                                 |
| `is_testnet`                | `boolean`   | Indicates if the server is in testnet mode.           |