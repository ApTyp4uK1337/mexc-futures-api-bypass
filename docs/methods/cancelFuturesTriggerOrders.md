# cancelFuturesTriggerOrders

Cancel one or multiple Trigger Orders.

- **POST:** `/v1/cancelFuturesTriggerOrders`

---

## 📥 Request parameters

The request body must be a **list** (array) of order objects, each containing:

| Parameter | Type   | Required | Description                 |
|-----------|--------|----------|-----------------------------|
| symbol    | string | ✅      | The name of the contract    |
| orderId   | string | ✅      | Trigger order ID to cancel  |

---

## 📦 Response

```json
[
  {
    "symbol": "BTC_USDT",
    "orderId": "103487001239182336"
  },
  {
    "symbol": "ETH_USDT",
    "orderId": "103487001239182337"
  }
]
```