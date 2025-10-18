# getReferralsList

Get referral invite list and their commission statistics.

- **GET:** `/v1/getReferralsList`

---

## 📥 Request parameters

| **Parameter**     | **Type**   | **Required** | **Description**                                | **Default**                                  |
|------------------|------------|--------------|------------------------------------------------|----------------------------------------------|
| `start_time`     | `number`   | ❌           | Start of the time range (timestamp in ms).     | Monday of the current week (00:00:00)        |
| `end_time`       | `number`   | ❌           | End of the time range (timestamp in ms).       | Sunday of the current week (23:59:59)    |
| `page_num`       | `number`   | ❌           | Page number for pagination.                    | 1                                            |
| `page_size`      | `number`   | ❌           | Number of results per page.                    | 10                                           |

---

###### Response

```json
{
  "data": {
    "total": 1,
    "invites": [
      {
        "memberId": null,
        "account": "re****l@**.com",
        "regTime": 1751300000000,
        "totalCommission": "12.3456",
        "exchange": "10.0000",
        "contract": "2.3456",
        "dex": "0",
        "margin": null,
        "uid": "12345678"
      }
    ]
  },
  "code": 0,
  "msg": "success",
  "timestamp": 1753439901927,
  "is_testnet": false
}
```

---

## 📦 Response parameters

| **Field**                         | **Type**     | **Description**                                           |
|----------------------------------|--------------|-----------------------------------------------------------|
| `code`                           | `number`     | Response status code.                                     |
| `msg`                            | `string`     | Response message.                                         |
| `timestamp`                      | `number`     | Timestamp of the response in milliseconds.                |
| `is_testnet`                     | `boolean`    | Indicates if the server is in testnet mode.               |
| `data.total`                     | `number`     | Total number of invited users.                            |
| `data.invites`                   | `array`      | List of invited users with their commission details.      |
| `data.invites[].memberId`        | `string`     | Internal member ID (may be null).                         |
| `data.invites[].account`         | `string`     | Masked email or account name.                             |
| `data.invites[].regTime`         | `number`     | Registration timestamp in milliseconds.                   |
| `data.invites[].totalCommission` | `string`     | Total commission earned from the referral.                |
| `data.invites[].exchange`        | `string`     | Spot trading commission amount.                           |
| `data.invites[].contract`        | `string`     | Futures trading commission amount.                        |
| `data.invites[].dex`             | `string`     | DEX trading commission amount.                            |
| `data.invites[].margin`          | `string`     | Margin trading commission amount (may be null).           |
| `data.invites[].uid`             | `string`     | Unique user ID of the invitee.                            |
