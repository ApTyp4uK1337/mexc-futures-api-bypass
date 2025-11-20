# getFuturesTriggerOrders

Fetch the list of trigger orders (plan orders).

- **GET:** `/v1/getFuturesTriggerOrders`

---

## 📥 Request parameters

| Parameter     | Type   | Required | Description                                                                 |
|---------------|--------|----------|-----------------------------------------------------------------------------|
| symbol        | string | ❌       | Contract symbol (e.g. `BTC_USDT`)                                           |
| states        | string | ❌       | Filter by state(s). Values: `1` untriggered, `2` cancelled, `3` executed, `4` invalid, `5` failed. Use comma-separated string for multiple |
| start_time    | long   | ❌       | Start timestamp (ms). Max range with `end_time` is 90 days                  |
| end_time      | long   | ❌       | End timestamp (ms).                                                        |
| page_num      | int    | ❌      | Page number (default: 1)                                                   |
| page_size     | int    | ❌      | Page size (default: 20, max: 100)                                          |

---

## 📦 Example response

```json
{
  "success": true,
  "code": 0,
  "message": "",
  "data": [
    {
      "id": 10928374,
      "symbol": "BTC_USDT",
      "leverage": 20,
      "side": 1,
      "triggerPrice": 29450.0,
      "price": 29480.0,
      "vol": 0.5,
      "openType": 1,
      "triggerType": 2,
      "state": 1,
      "executeCycle": 1,
      "trend": 1,
      "orderType": 1,
      "orderId": 0,
      "errorCode": 0,
      "createTime": 1753469001000,
      "updateTime": 1753469001000
    }
  ]
}
```

---

## 🧾 Field details

| Field           | Type    | Description                                                               |
|------------------|---------|---------------------------------------------------------------------------|
| id               | int     | Trigger order ID                                                         |
| symbol           | string  | Contract name                                                            |
| leverage         | long    | Leverage                                                                 |
| side             | int     | Direction: 1=open long, 3=open short                                     |
| triggerPrice     | decimal | Trigger price                                                            |
| price            | decimal | Execution price (limit or market-based)                                  |
| vol              | decimal | Volume                                                                   |
| openType         | int     | Margin mode: 1=isolated, 2=cross                                         |
| triggerType      | int     | Trigger condition: 1≥, 2≤                                                |
| state            | int     | Status: 1=untriggered, 2=cancelled, 3=executed, 4=invalid, 5=fail         |
| executeCycle     | int     | Validity period in hours                                                 |
| trend            | int     | Trigger price source: 1=last price, 2=fair price, 3=index price          |
| orderType        | int     | Order type: 1=limit, 2=post-only, 3=IOC, 4=FOK, 5=market                  |
| orderId          | long    | Executed order ID (if triggered)                                         |
| errorCode        | int     | Error code if failed (0 = none)                                          |
| createTime       | long    | Creation timestamp (ms)                                                  |
| updateTime       | long    | Last update timestamp (ms)                                               |
