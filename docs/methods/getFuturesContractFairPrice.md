# getFuturesContractFairPrice

Fetch the fair price of a specific futures contract.

- **GET:** `/v1/getFuturesContractFairPrice`

---

## 📥 Request parameters

| **Parameter**   | **Type**   | **Required** | **Description**                  |
|----------------|------------|--------------|----------------------------------|
| `symbol`       | `string`   | ✅          | Contract symbol (e.g. BTC_USDT) |

---

###### Response

```json
{
  "success": true,
  "code": 0,
  "data": {
    "symbol": "BTC_USDT",
    "fairPrice": 115984.3,
    "timestamp": 1753465096750
  },
  "is_testnet": true
}
```

---

## 📦 Response parameters

| **Field**         | **Type**     | **Description**                          |
|------------------|--------------|------------------------------------------|
| `success`        | `boolean`    | Indicates if the request succeeded.      |
| `code`           | `number`     | Response status code.                    |
| `data.symbol`    | `string`     | Contract symbol.                         |
| `data.fairPrice` | `decimal`    | Current fair price of the contract.      |
| `data.timestamp` | `long`       | Timestamp of the price update (ms).      |
| `is_testnet`     | `boolean`    | Indicates if it's a testnet environment. |
