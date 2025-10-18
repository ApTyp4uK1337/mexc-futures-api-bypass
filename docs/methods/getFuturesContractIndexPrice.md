# getFuturesContractIndexPrice

Retrieve the index price of a specific futures contract.

- **GET:** `/v1/getFuturesContractIndexPrice`

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
    "indexPrice": 115890,
    "timestamp": 1753464933565
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
| `data.indexPrice`| `decimal`    | Current index price of the contract.     |
| `data.timestamp` | `long`       | Timestamp of the price update (ms).      |
| `is_testnet`     | `boolean`    | Indicates if it's a testnet environment. |
