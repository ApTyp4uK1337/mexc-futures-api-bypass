# getFuturesOrdersDeals

Fetches the deal history for your futures orders.

- **GET:** `/v1/getFuturesOrdersDeals`

---

## 📥 Request parameters

| Parameter   | Type    | Required | Description                                                                 |
|-------------|---------|----------|-----------------------------------------------------------------------------|
| symbol      | string  | ✅      | The name of the contract (e.g., `BTC_USDT`)                                 |
| start_time  | long    | ❌       | Start timestamp in ms. Defaults to Monday this week                         |
| end_time    | long    | ❌       | End timestamp in ms. Defaults to Sunday this week 23:59:59                  |
| page_num    | int     | ❌      | Page number (default: 1)                                                    |
| page_size   | int     | ❌      | Page size (default: 20, max: 100)                                           |

> ⚠️ Max query range: **90 days**


###### Response

```json
{
  "success": true,
  "code": 0,
  "message": "",
  "data": [
    {
      "id": 109839382001,
      "symbol": "BTC_USDT",
      "side": 1,
      "vol": 0.5,
      "price": 115802.3,
      "fee": -0.00035,
      "feeCurrency": "USDT",
      "profit": 12.45,
      "isTaker": true,
      "category": 1,
      "orderId": 103487001239182336,
      "timestamp": 1753470007123
    },
    {
      "id": 109839382002,
      "symbol": "BTC_USDT",
      "side": 2,
      "vol": 0.25,
      "price": 115745.6,
      "fee": -0.00018,
      "feeCurrency": "USDT",
      "profit": -1.21,
      "isTaker": false,
      "category": 3,
      "orderId": 103487001239182337,
      "timestamp": 1753470500980
    }
  ],
  "is_testnet": true
}
```

---

## 🧾 Response fields

| Field        | Type     | Description                                           |
|--------------|----------|-------------------------------------------------------|
| id           | long     | Deal ID                                               |
| symbol       | string   | The contract symbol                                   |
| side         | int      | 1: open long, 2: close short, 3: open short, 4: close long |
| vol          | decimal  | Executed volume                                       |
| price        | decimal  | Executed price                                        |
| fee          | decimal  | Fee (negative = paid)                                 |
| feeCurrency  | string   | Currency of the fee                                   |
| profit       | decimal  | Profit or loss from this deal                         |
| isTaker      | boolean  | Whether your order was a taker                        |
| category     | int      | 1: limit, 2: system takeover, 3: close, 4: ADL        |
| orderId      | long     | Related order ID                                      |
| timestamp    | long     | Timestamp in ms                                       |

---
