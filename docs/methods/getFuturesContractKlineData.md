# getFuturesContractKlineData

Get contract K-line data.

- **GET:** `/v1/getFuturesContractKlineData`

---

## 📥 Request parameters

| **Parameter**   | **Type**   | **Required** | **Description**                  |
|----------------|------------|--------------|----------------------------------|
| `symbol`       | `string`   | ✅          | Contract symbol (e.g. BTC_USDT) |
| `price_type`   | `string`   | ❌          | last_price (default), index_price, fair_price |
| `interval`   | `string`   | ❌          | interval: Min1、Min5、Min15、Min30、Min60、Hour4、Hour8、Day1、Week1、Month1,default: Min1 |
| `start`   | `long`   | ❌          | start timestamp,seconds |
| `end`   | `long`   | ❌          | end timestamp,seconds |

---

###### Response

```json
{
    "success": true,
    "code": 0,
    "data": {
        "time": [
            1609740600
        ],
        "open": [
            33016.5
        ],
        "close": [
            33040.5
        ],
        "high": [
            33094.0
        ],
        "low": [
            32995.0
        ],
        "vol": [
            67332.0
        ],
        "amount": [
            222515.85925
        ]
    }
}
```

---

## 📦 Response parameters


