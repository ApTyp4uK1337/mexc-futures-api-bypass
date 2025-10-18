# getFuturesAssets

Get detailed balance data for your futures account.

- **GET:** `/v1/getFuturesAssets`

---

## 📥 Request parameters

| **Parameter** | **Type**  | **Required** | **Description**                                  | **Default** |
|---------------|-----------|--------------|--------------------------------------------------|-------------|
| `currency`    | `string`  | ❌           | Filter by specific asset symbol (e.g., `USDT`). | *All assets* |

---

###### Response (when `currency` is not provided)

```json
{
  "success": true,
  "code": 0,
  "data": [
    {
      "currency": "BTC",
      "positionMargin": 0,
      "availableBalance": 0.0004,
      "cashBalance": 0.0004,
      "frozenBalance": 0,
      "equity": 0.0004,
      "unrealized": 0,
      "bonus": 0,
      "availableCash": 0.0004,
      "availableOpen": 0.0004
    },
    {
      "currency": "USDT",
      "positionMargin": 0,
      "availableBalance": 3.32,
      "cashBalance": 3.32,
      "frozenBalance": 0,
      "equity": 3.32,
      "unrealized": 0,
      "bonus": 0,
      "availableCash": 3.32,
      "availableOpen": 3.32
    }
  ],
  "is_testnet": false
}
```

---

###### Response (when `currency = USDT`)

```json
{
  "success": true,
  "code": 0,
  "data": {
    "currency": "USDT",
    "positionMargin": 0,
    "availableBalance": 3.32,
    "cashBalance": 3.32,
    "frozenBalance": 0,
    "equity": 3.32,
    "unrealized": 0,
    "bonus": 0,
    "availableCash": 3.32,
    "availableOpen": 3.32
  },
  "is_testnet": false
}
```

---

## 📦 Response parameters

| **Field**          | **Type**   | **Description**                                                                 |
|--------------------|------------|---------------------------------------------------------------------------------|
| `currency`         | `string`   | Currency symbol (e.g., `USDT`, `BTC`).                                          |
| `positionMargin`   | `number`   | Margin currently used in open positions.                                        |
| `availableBalance` | `number`   | Funds available for trading.                                                   |
| `cashBalance`      | `number`   | Total balance including unrealized PnL.                                        |
| `frozenBalance`    | `number`   | Funds frozen (e.g., in orders).                                                |
| `equity`           | `number`   | Account equity (cash + unrealized PnL).                                        |
| `unrealized`       | `number`   | Unrealized profit or loss.                                                     |
| `bonus`            | `number`   | Promotional or bonus funds available.                                          |
| `availableCash`    | `number`   | Amount of cash available for withdrawal or transfers.                         |
| `availableOpen`    | `number`   | Funds available for opening new positions.                                     |
| `success`          | `boolean`  | Indicates whether the request was successful.                                  |
| `code`             | `number`   | Response status code.                                                          |
| `is_testnet`       | `boolean`  | Indicates if the environment is in testnet mode.                               |

> 🛈 If `currency` is not provided, the response will contain a list of all available currencies. If `currency` is specified, only that asset's details will be returned.
