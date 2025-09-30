# getCustomerInfo

Get brief information about the authenticated user.

- **GET:** `/v1/getCustomerInfo`

## 📥 Request parameters

This endpoint does not require any parameters.

---

###### Response

```json
{
  "success": true,
  "code": 0,
  "data": {
    "memberId": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "digitalId": "12345678",
    "customerServiceToken": "abc123xyzTOKENobfuscatedForDocs=="
  },
  "is_testnet": true
}
```

---

## 📦 Response parameters

| **Field**                    | **Type**    | **Description**                                       |
|-----------------------------|-------------|-------------------------------------------------------|
| `success`                   | `boolean`   | Indicates whether the request was successful.         |
| `code`                      | `number`    | Response status code.                                 |
| `data.memberId`             | `string`    | Unique identifier of the authenticated user.          |
| `data.digitalId`            | `string`    | Platform-specific numeric ID of the user.             |
| `data.customerServiceToken` | `string`    | Token used for accessing customer support features.   |
| `is_testnet`                | `boolean`   | Indicates if the server is in testnet mode.           |