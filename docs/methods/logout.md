# logout

Deactivate X-MEXC-WEB-KEY and close current sessions on it.

- **POST:** `/v1/getServerTime`

## 📥 Request parameters

This endpoint does not require any parameters.

---

###### Response

```JSON
{
    "success": true,
    "code": 0,
    "is_testnet": false
}
```

---

## 📦 Response parameters

| **Field**           | **Type**    | **Description**  |
|---------------------|-------------|------------------|
| `success`           | `boolean`   | Indicates whether the request was successful. |
| `code`              | `number`    | Response status code. |
| `is_testnet`        | `boolean`   | Indicates if the server is in testnet mode. |