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

| **Field**              | **Type**   | **Description**                              |
|------------------------|------------|----------------------------------------------|
| `success`             | `boolean`  | Whether the request succeeded.               |
| `code`                | `number`   | Status code (0 = success).                   |
| `data.mobile`         | `string`   | User mobile phone number.                    |
| `data.mobileCountry`  | `string`   | Country/region code for the mobile number.   |
| `data.email`          | `string`   | User email address.                          |
| `is_testnet`          | `boolean`  | Whether environment is testnet.              |