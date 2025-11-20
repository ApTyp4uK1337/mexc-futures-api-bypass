# receiveFuturesTestnetAsset

Receive futures testnet asset.

- **POST:** `/v1/receiveFuturesTestnetAsset`

---

## 📥 Request parameters

| **Parameter** | **Type**   | **Required** | **Description**                                 |
|---------------|------------|--------------|-------------------------------------------------|
| `currency`      | `string`   | ❌           | Asset (e.g., `USDT`).   |
| `amount`      | `int`   | ❌           | Amount. Max: `50000`   |

---

###### Response

```json
{
    "success": true,
    "code": 0,
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
