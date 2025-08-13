# getFuturesTodayPnL

Get futures today PnL.

- **Endpoint:** `/v1/getFuturesTodayPnL`

## 📥 Request parameters

This endpoint does not require any parameters.

---

###### Response

```json
{
    "success": true,
    "code": 0,
    "data": {
        "todayPnl": 1337.77,
        "todayPnlRate": 0.04278779,
        "todayPnlFinished": true
    },
    "is_testnet": false
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