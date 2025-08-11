# getOriginInfo

Get account origin info.

- **Endpoint:** `/v1/getOriginInfo`

## 📥 Request parameters

This endpoint does not require any parameters.

---

###### Response

```json
{
    "success": true,
    "code": 0,
    "data": {
        "mobile": "777777777",
        "mobileCountry": "777",
        "email": "email@domain.com"
    },
    "is_testnet": false
}
```

---

## 📦 Response parameters

| **Field**                    | **Type**    | **Description**                                       |
|-----------------------------|-------------|-------------------------------------------------------|
| `success`                   | `boolean`   | Indicates whether the request was successful.         |
| `code`                      | `number`    | Response status code.                                 |
| `data.mobile`               | `string`    | User mobile phone number.          |
| `data.mobileCountry`        | `string`    | User mobile phone number country code.             |
| `data.email`                | `string`    | User email address.   |
| `is_testnet`                | `boolean`   | Indicates if the server is in testnet mode.           |