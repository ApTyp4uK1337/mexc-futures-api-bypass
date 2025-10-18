# cancelFuturesOrderWithExternalId

Cancel a futures order using an external order ID.

- **POST:** `/v1/cancelFuturesOrderWithExternalId`

---

## 📥 Request parameters

| **Parameter**      | **Type**   | **Required** | **Description**                          |
|-------------------|------------|--------------|------------------------------------------|
| `symbol`          | `string`   | ✅          | Contract symbol (e.g. BTC_USDT).         |
| `external_id`     | `string`   | ✅          | External order ID to cancel.             |

---

###### Response

```json
{
  "symbol": "BTC_USDT",
  "externalOid": "mexc-a-001"
}
```

---

## 📦 Response parameters

| **Field**         | **Type**   | **Description**                          |
|------------------|------------|------------------------------------------|
| `symbol`         | `string`   | Contract symbol of the canceled order.   |
| `externalOid`    | `string`   | External ID of the canceled order.       |
