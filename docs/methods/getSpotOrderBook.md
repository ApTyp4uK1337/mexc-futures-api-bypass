# getFuturesTickers

Get the latest market ticker for a futures contract.

- **GET:** `/v1/getFuturesTickers`

---

## 📥 Request parameters

| **Parameter** | **Type**   | **Required** | **Description**                                 |
|---------------|------------|--------------|-------------------------------------------------|
| `symbol`      | `string`   | ❌           | Contract symbol (e.g., `BTC_USDT`).   |
| `limit`      | `string`   | ❌           | Returen number.	Default: `100`; max: `5000`   |

---

###### Response

```json
{
    "lastUpdateId": 45887138375,
    "bids": [
        [
            "103735.86",
            "0.00500000"
        ]
    ],
    "asks": [
        [
            "103735.92",
            "0.07593000"
        ]
    ],
    "timestamp": 1762709560625,
    "is_testnet": false
}
```

---

## 📦 Response parameters

| **Field**                        | **Type**    | **Description**                                         |
|----------------------------------|-------------|---------------------------------------------------------|
| `success`                        | `boolean`   | Whether the request was successful.                     |
| `code`                           | `number`    | Response status code.                                   |
| `is_testnet`                    | `boolean`   | Indicates whether the environment is testnet.           |
