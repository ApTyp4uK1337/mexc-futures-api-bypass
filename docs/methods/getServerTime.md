# getServerTime

Get the server time.

- **GET:** `/v1/getServerTime`

## 📥 Request parameters

This endpoint does not require any parameters.

---

###### Response

```JSON
{
    "success": true,
    "code": 0,
    "data": 1753437792334,
    "is_testnet": true
}
```

---

## 📦 Response parameters

| **Field**           | **Type**    | **Description**  |
|---------------------|-------------|------------------|
| `success`           | `boolean`   | Indicates whether the request was successful. |
| `code`              | `number`    | Response status code. |
| `data`              | `number`    | Server time in milliseconds since Unix epoch. |
| `is_testnet`        | `boolean`   | Indicates if the server is in testnet mode. |