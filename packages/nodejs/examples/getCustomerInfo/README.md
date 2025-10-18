# getCustomerInfo

Get brief information about the authenticated user.

## 📥 Request parameters

This endpoint does not require any parameters.

---

## 📤 Examples

##### Get brief information about the user

```js
import { MexcBypass } from '../../src/MexcBypass.js';

const mexc = new MexcBypass('YOUR_API_KEY', false);

const customer = await mexc.getCustomerInfo();

console.log(customer);
```

###### Response

```JSON
{
  "success": true,
  "code": 0,
  "data": {
    "memberId": "f7c33d8a18a14e90b7f8ef84e318c8e3",
    "digitalId": "1337",
    "customerServiceToken": "REDACTED_TOKEN"
  }
}

```

## 📦 Response parameters

| **Field**                 | **Type**   | **Description** |
|---------------------------|------------|------------------|
| `memberId`                | `string`   | Internal user ID. |
| `digitalId`               | `string`   | User’s digital identifier. |
| `customerServiceToken`    | `string`   | Token used for internal support chats. |
