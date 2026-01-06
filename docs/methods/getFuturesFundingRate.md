# getFuturesFundingRate

Get details of one or all futures contracts.

- **GET:** `/v1/getFuturesFundingRate`

---

## 📥 Request parameters

| **Parameter** | **Type** | **Required** | **Description**                                     |
|---------------|----------|--------------|---------------------------------------------------------------|
| `symbol`      | `string` | ✅           | Trading pair symbol (e.g., `BTC_USDT`). If omitted, returns all contracts. |

---

###### Response

```json
{
    "success": true,
    "code": 0,
    "data": {
        "symbol": "BTC_USDT",
        "fundingRate": 0.000018,
        "maxFundingRate": 0.0018,
        "minFundingRate": -0.0018,
        "collectCycle": 8,
        "nextSettleTime": 1761897600000,
        "timestamp": 1761879755894
    }
}
```

---

## 📦 Response parameters

| **Field**                     | **Type**     | **Description**                                             |
|------------------------------|--------------|-------------------------------------------------------------|
| `success`        | `boolean`    | Indicates if the request succeeded.      |
| `code`           | `number`     | Response status code.                    |
| `is_testnet`                | `boolean`    | Indicates if the server is in testnet mode.                |