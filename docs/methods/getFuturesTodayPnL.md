# getFuturesTodayPnL

Get futures today PnL.

- **GET:** `/v1/getFuturesTodayPnL`

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

| **Field**                 | **Type**   | **Description**                               |
|---------------------------|------------|-----------------------------------------------|
| `success`                | `boolean`  | Whether the request succeeded.                 |
| `code`                   | `number`   | Status code (0 = success).                     |
| `data.todayPnl`         | `number`   | PnL value for today.                           |
| `data.todayPnlRate`     | `number`   | PnL rate for today.                            |
| `data.todayPnlFinished` | `boolean`  | Whether the today's PnL is finalized.          |
| `is_testnet`            | `boolean`  | Whether environment is testnet.                |