# reverseFuturesPositions

Reverse futures position.

- **POST:** `/v1/reverseFuturesPositions`

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
