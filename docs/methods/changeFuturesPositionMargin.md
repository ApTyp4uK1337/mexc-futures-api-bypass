# changeFuturesMargin

Change the margin amount of an open futures position.

- **Endpoint:** `/v1/changeFuturesMargin`

---

## 📥 Request parameters

| **Parameter**    | **Type**   | **Required** | **Description**                                                                 |
|------------------|------------|--------------|---------------------------------------------------------------------------------|
| `position_id`    | `long`     | Yes          | The ID of the position you want to adjust.                                      |
| `amount`         | `decimal`  | Yes          | The amount of margin to add or remove.                                          |
| `type`           | `int`      | Yes          | type: `ADD` - increase; `SUB` - decrease                                            |

---

###### Response

```json
{
  "success": true,
  "code": 0
}
```

---

## 📦 Response parameters

| **Field**     | **Type**   | **Description**                     |
|---------------|------------|-------------------------------------|
| `success`     | `boolean`  | Whether the request was successful. |
| `code`        | `number`   | Response status code.               |
