# getUserInfo

Get detailed information about the authenticated user.

<!-- - **Endpoint:** `/api/` -->

## 📥 Request parameters

This endpoint does not require any parameters.

---

## 📤 Examples

##### Get detailed information about the user

```js
import { MexcBypass } from '../../src/MexcBypass.js';

const mexc = new MexcBypass('YOUR_API_KEY', false);

const user = await mexc.getUserInfo();

console.log(user);
```

###### Response

```JSON
{
  "success": true,
  "code": 0,
  "data": {
    "memberId": "f7c33d8a18a14e90b7f8ef84e318c8e3",
    "userToken": "YOUR_API_KEY",
    "digitalId": "1337",
    "status": "1",
    "mobile": "1337-777****777",
    "email": "us****@example.com",
    "authLevel": "3",
    "secondAuthType": 2,
    "account": "us****@example.com",
    "lastLoginIp": "127.0.0.1",
    "lastLoginTime": 101010133710101,
    "kycStatus": 1,
    "country": "1337",
    "inviteCode": "aptyp4uk1337",
    "kycInfo": {
      "junior": {},
      "senior": {},
      "level1": "10",
      "level2": "80",
      "level3": "200",
      "maxAuthTimes": 3
    },
    "institutionInfo": {
      "level": "400"
    },
    "userVipLevel": {},
    "kycMode": 0,
    "isAgent": false,
    "registerTime": 1010133710101,
    "pageLanguage": "en-US",
    "customerServiceToken": "REDACTED_TOKEN",
    "notSetPassword": false,
    "dexOpened": false
  }
}

```

## 📦 Response parameters

| **Field**                 | **Type**   | **Description** |
|---------------------------|------------|------------------|
| `memberId`                | `string`   | Internal user ID. |
| `userToken`               | `string`   | Token used for authentication. |
| `digitalId`               | `string`   | User’s digital identifier. |
| `status`                  | `string`   | Account status code. |
| `mobile`                  | `string`   | Masked phone number. |
| `email`                   | `string`   | Masked email address. |
| `authLevel`               | `string`   | Authentication level. |
| `secondAuthType`          | `number`   | Type of 2FA enabled. |
| `account`                 | `string`   | Account login. |
| `lastLoginIp`             | `string`   | Last login IP address. |
| `lastLoginTime`           | `number`   | Last login time (timestamp in ms). |
| `kycStatus`               | `number`   | KYC status. |
| `country`                 | `string`   | Country/region code. |
| `inviteCode`              | `string`   | User's referral code. |
| `kycInfo`                 | `object`   | KYC level details. |
| ├─ `level1`               | `string`   | Level 1 verification limit. |
| ├─ `level2`               | `string`   | Level 2 verification limit. |
| ├─ `level3`               | `string`   | Level 3 verification limit. |
| ├─ `maxAuthTimes`         | `number`   | Maximum times KYC can be retried. |
| `institutionInfo.level`   | `string`   | Institution user level, if applicable. |
| `userVipLevel`            | `object`   | VIP level details (empty if none). |
| `kycMode`                 | `number`   | KYC mode. |
| `isAgent`                 | `boolean`  | Whether user is a registered agent. |
| `registerTime`            | `number`   | Account registration time (timestamp in ms). |
| `pageLanguage`            | `string`   | User’s preferred language. |
| `customerServiceToken`    | `string`   | Token used for internal support chats. |
| `notSetPassword`          | `boolean`  | Whether user has set a password. |
| `dexOpened`               | `boolean`  | Whether the DEX feature is activated. |
