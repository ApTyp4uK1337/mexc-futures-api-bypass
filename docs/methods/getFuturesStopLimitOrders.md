# getFuturesStopLimitOrders

Retrieve the list of Stop-Limit orders (take-profit & stop-loss).

- **GET:** `/v1/getFuturesStopLimitOrders`

---

## 📥 Request parameters

| Parameter    | Type   | Required | Description                                                                 |
|--------------|--------|----------|-----------------------------------------------------------------------------|
| symbol       | string | ❌       | Contract name (e.g. `BTC_USDT`)                                             |
| is_finished  | int    | ❌       | Filter by order completion: `0` - not completed, `1` - completed            |
| start_time   | long   | ❌       | Start time (timestamp in ms). Max range with end_time is 90 days           |
| end_time     | long   | ❌       | End time (timestamp in ms)                                                 |
| page_num     | int    | ❌      | Page number (default: 1)                                                   |
| page_size    | int    | ❌      | Page size (default: 20, max: 100)                                          |

---

## 📦 Example response

```json
{
  "success": true,
  "code": 0,
  "message": "",
  "data": [
    {
      "id": 14579012,
      "orderId": 0,
      "symbol": "BTC_USDT",
      "positionId": 20394827,
      "stopLossPrice": 28200.5,
      "takeProfitPrice": 29600.0,
      "state": 1,
      "triggerSide": 2,
      "positionType": 1,
      "vol": 0.3,
      "realityVol": 0.0,
      "placeOrderId": 0,
      "errorCode": 0,
      "version": 1,
      "isFinished": 0,
      "createTime": 1753470095000,
      "updateTime": 1753470095000
    }
  ]
}
```

---

## 🧾 Field details

| Field            | Type    | Description                                                                  |
|------------------|---------|------------------------------------------------------------------------------|
| id               | long    | Stop-Limit order ID                                                          |
| symbol           | string  | Contract name                                                                |
| orderId          | long    | Related limit order ID (0 if linked to position)                             |
| positionId       | long    | Position ID                                                                  |
| stopLossPrice    | decimal | Stop-loss price                                                              |
| takeProfitPrice  | decimal | Take-profit price                                                            |
| state            | int     | Status: `1`=untriggered, `2`=cancelled, `3`=executed, `4`=invalid, `5`=failed |
| triggerSide      | int     | Trigger direction: `0`=untriggered, `1`=take-profit, `2`=stop-loss           |
| positionType     | int     | Position type: `1`=long, `2`=short                                           |
| vol              | decimal | Volume of the trigger                                                        |
| realityVol       | decimal | Actual filled volume                                                         |
| placeOrderId     | long    | ID of placed order after successful trigger                                  |
| errorCode        | int     | Error code (0 = normal)                                                      |
| version          | int     | Version control                                                              |
| isFinished       | int     | Whether it’s a terminal state: `0`=no, `1`=yes                               |
| createTime       | long    | Order creation time (ms)                                                     |
| updateTime       | long    | Last update time (ms)                                                        |