# getFuturesOpenStopOrders

Get currently open futures stop orders.

- **GET:** `/v1/getFuturesOpenStopOrders`

---

## 📥 Request parameters

This endpoint does not require any parameters.

---

###### Response

```json
{
    "success": true,
    "code": 0,
    "data": [
        {
            "id": 1337,
            "orderId": "71486456545433",
            "symbol": "BTC_USDT",
            "positionId": "26433333",
            "lossTrend": 1,
            "profitTrend": 1,
            "stopLossPrice": 110000,
            "takeProfitPrice": 114000,
            "state": 1,
            "triggerSide": 0,
            "positionType": 1,
            "vol": 1,
            "realityVol": 0,
            "errorCode": 0,
            "version": 2,
            "isFinished": 0,
            "priceProtect": 1,
            "profitLossVolType": "SEPARATE",
            "takeProfitVol": 1,
            "stopLossVol": 1,
            "createTime": 1756113025000,
            "updateTime": 1756113312000,
            "volType": 1,
            "takeProfitReverse": 2,
            "stopLossReverse": 2,
            "closeTryTimes": 0,
            "reverseTryTimes": 0,
            "reverseErrorCode": 0,
            "profit_LOSS_VOL_TYPE_SAME": "SAME",
            "profit_LOSS_VOL_TYPE_DIFFERENT": "SEPARATE"
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
| `data`                         | `array`     | List of open orders.                                               |
| `is_testnet`                  | `boolean`   | Whether the environment is testnet.                                   |
