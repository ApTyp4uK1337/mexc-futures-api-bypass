# getUserInfo

Get brief information about the authenticated user.

- **GET:** `/v1/getUserInfo`

---

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
    "userToken": "WEBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "digitalId": "12345678",
    "status": "1",
    "mobile": "1-000***0000",
    "email": "us***r@example.com",
    "authLevel": "3",
    "secondAuthType": 2,
    "account": "us***r@example.com",
    "lastLoginIp": "123.123.123.123",
    "lastLoginTime": 1753359941000,
    "kycStatus": 1,
    "country": "1",
    "inviteCode": "XXXXX",
    "kycInfo": {
      "junior": {
        "country": "United States",
        "countryCode": "US",
        "authName": "J***********",
        "authRealName": "JOHN DOE",
        "firstName": "JOHN",
        "lastName": "DOE",
        "cardNo": "*****1234",
        "cardType": 1,
        "status": 1,
        "note": "KYC verification failed. Please contact Customer Service",
        "passTime": 1746369490000,
        "dateOfBirth": "20**-**-**",
        "realDateOfBirth": "1990-01-01"
      },
      "senior": {
        "country": "United States",
        "countryCode": "US",
        "authName": "J***********",
        "authRealName": "JOHN DOE",
        "firstName": "JOHN",
        "lastName": "DOE",
        "cardNo": "*****1234",
        "cardType": 1,
        "status": 1,
        "note": "KYC verification failed. Please contact Customer Service",
        "passTime": 1746369657000,
        "dateOfBirth": "20**-**-**",
        "realDateOfBirth": "1990-01-01"
      },
      "level1": "10",
      "level2": "80",
      "level3": "200",
      "maxAuthTimes": 3
    },
    "institutionInfo": {
      "level": "400"
    },
    "userVipLevel": [],
    "kycMode": 0,
    "isAgent": false,
    "registerTime": 1745928116000,
    "pageLanguage": "en-US",
    "customerServiceToken": "abc123xyzTOKENobfuscatedForDocs==",
    "notSetPassword": false,
    "dexOpened": false
  },
  "is_testnet": true
}
```

---

## 📦 Response parameters

| **Field**                            | **Type**      | **Description**                                             |
|-------------------------------------|---------------|-------------------------------------------------------------|
| `success`                           | `boolean`     | Indicates whether the request was successful.               |
| `code`                              | `number`      | Response status code.                                       |
| `data.memberId`                     | `string`      | Unique identifier of the authenticated user.                |
| `data.userToken`                    | `string`      | Session or identity token for the user.                     |
| `data.digitalId`                    | `string`      | Numeric identifier of the user.                             |
| `data.status`                       | `string`      | Account status.                                             |
| `data.mobile`                       | `string`      | User's masked phone number.                                 |
| `data.email`                        | `string`      | User's masked email address.                                |
| `data.authLevel`                    | `string`      | Authentication level.                                       |
| `data.secondAuthType`              | `number`      | Second-factor authentication type.                          |
| `data.account`                      | `string`      | Login account (masked).                                     |
| `data.lastLoginIp`                 | `string`      | Last login IP address.                                      |
| `data.lastLoginTime`               | `number`      | Timestamp of last login in milliseconds.                    |
| `data.kycStatus`                   | `number`      | KYC verification status.                                    |
| `data.country`                      | `string`      | Country dialing code.                                       |
| `data.inviteCode`                  | `string`      | User's invite code.                                         |
| `data.kycInfo.junior`              | `object`      | Junior KYC level details.                                   |
| `data.kycInfo.senior`              | `object`      | Senior KYC level details.                                   |
| `data.kycInfo.level1`              | `string`      | Daily withdrawal limit for level 1.                         |
| `data.kycInfo.level2`              | `string`      | Daily withdrawal limit for level 2.                         |
| `data.kycInfo.level3`              | `string`      | Daily withdrawal limit for level 3.                         |
| `data.kycInfo.maxAuthTimes`        | `number`      | Maximum allowed KYC attempts.                               |
| `data.institutionInfo.level`       | `string`      | Institution-level authorization.                            |
| `data.userVipLevel`                | `array`       | List of VIP levels.                                         |
| `data.kycMode`                      | `number`      | KYC mode type.                                              |
| `data.isAgent`                      | `boolean`     | Whether the user is registered as an agent.                 |
| `data.registerTime`                | `number`      | Account registration time in milliseconds.                  |
| `data.pageLanguage`                | `string`      | User interface language.                                    |
| `data.customerServiceToken`        | `string`      | Token for customer support authorization.                   |
| `data.notSetPassword`              | `boolean`     | Indicates whether the user has set a password.              |
| `data.dexOpened`                   | `boolean`     | Indicates whether DEX features are enabled.                 |
| `is_testnet`                        | `boolean`     | Indicates if the server is in testnet mode.                 |
