# getFuturesUser

Get futures user info.

- **GET:** `/v1/getFuturesUser`

## 📥 Request parameters

This endpoint does not require any parameters.

---

###### Response

```json
{
    "success": true,
    "code": 0,
    "data": {
        "trackOrderNotify": "1",
        "orderConfirmAgain": "0",
        "smsBlack": "false",
        "positionViewMode": "GRID",
        "triggerProtect": "1",
        "positionFundingNotify": "0",
        "stopOrderNotify": "1",
        "liquidateWarnNotifyThreshold": "0.6",
        "positionFundingNotifyRatio": "0.001",
        "smsNotify": "0",
        "unrealizedPnl": "0",
        "planOrderNotify": "1",
        "liquidateNotify": "1",
        "unfinishedMarketOrderTips": "1"
    },
    "is_testnet": true
}
```

---

## 📦 Response parameters

| **Field**                    | **Type**    | **Description**                                       |
|-----------------------------|-------------|-------------------------------------------------------|
| `success`                   | `boolean`   | Indicates whether the request was successful.         |
| `code`                      | `number`    | Response status code.                                 |
| `data`               | `array`    | data.          |
| `is_testnet`                | `boolean`   | Indicates if the server is in testnet mode.           |