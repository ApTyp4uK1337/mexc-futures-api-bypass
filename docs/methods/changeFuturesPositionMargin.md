# changeFuturesMargin

Change the margin amount of an open futures position.

- **POST:** `/v1/changeFuturesMargin`

---

## 📥 Request parameters

| **Parameter**    | **Type**   | **Required** | **Description**                                                                 |
|------------------|------------|--------------|---------------------------------------------------------------------------------|
| `position_id`    | `long`     | ✅          | The ID of the position you want to adjust.                                      |
| `amount`         | `decimal`  | ✅          | The amount of margin to add or remove.                                          |
| `type`           | `int`      | ✅          | type: `ADD` - increase; `SUB` - decrease                                            |

---

###### Response

```json
{
  "success": true,
  "code": 0,
  "is_testnet": true
}
```

---

## 📦 Response parameters

| **Field**     | **Type**   | **Description**                     |
|---------------|------------|-------------------------------------|
| `success`     | `boolean`  | Whether the request was successful. |
| `code`        | `number`   | Response status code.               |
| `is_testnet`  | `boolean`   | Whether the environment is testnet. |