# getFuturesAssetTransferRecords

Get the list of asset transfer records on your futures account.

- **Endpoint:** `/v1/getFuturesAssetTransferRecords`

---

## 📥 Request parameters

| **Parameter**  | **Type**   | **Required** | **Description**                                                                 | **Default** |
|----------------|------------|--------------|---------------------------------------------------------------------------------|-------------|
| `currency`     | `string`   | No           | Filter by specific currency (e.g., `USDT`).                                     | *All*       |
| `state`        | `string`   | No           | Transfer state: `PENDING`, `SUCCESS`, `FAILED`.                                 | *All*       |
| `type`         | `string`   | No           | Direction of transfer: `IN` (into futures), `OUT` (from futures).               | *All*       |
| `page_num`     | `number`   | No           | Page number for pagination.                                                     | `1`         |
| `page_size`    | `number`   | No           | Number of records per page.                                                     | `20`        |

---

###### Response

```json
{
  "success": true,
  "code": 0,
  "data": {
    "pageSize": 20,
    "totalCount": 1,
    "totalPage": 1,
    "currentPage": 1,
    "resultList": [
      {
        "id": 948372183,
        "txid": "a7d9e8f213b74cd2a3f3b6e0214f9bd3",
        "currency": "USDT",
        "amount": 1.2345,
        "type": "OUT",
        "state": "SUCCESS",
        "createTime": 1745123456000,
        "updateTime": 1745123460000
      }
    ]
  },
  "is_testnet": false
}
```

---

## 📦 Response parameters

| **Field**                 | **Type**   | **Description**                                         |
|---------------------------|------------|---------------------------------------------------------|
| `success`                 | `boolean`  | Indicates whether the request was successful.           |
| `code`                    | `number`   | Response status code.                                   |
| `is_testnet`              | `boolean`  | Indicates if this is testnet environment.               |
| `data.pageSize`           | `number`   | Number of records per page.                             |
| `data.totalCount`         | `number`   | Total number of matching records.                       |
| `data.totalPage`          | `number`   | Total number of pages.                                  |
| `data.currentPage`        | `number`   | Current page number.                                    |
| `data.resultList`         | `array`    | List of transfer records.                               |
| `resultList[].id`         | `number`   | Unique transfer record ID.                              |
| `resultList[].txid`       | `string`   | Transaction ID.                                         |
| `resultList[].currency`   | `string`   | Currency of the transfer.                               |
| `resultList[].amount`     | `number`   | Amount transferred.                                     |
| `resultList[].type`       | `string`   | Direction: `IN` (to futures), `OUT` (from futures).     |
| `resultList[].state`      | `string`   | Transfer state: `PENDING`, `SUCCESS`, `FAILED`.         |
| `resultList[].createTime` | `number`   | Timestamp when the transfer was initiated (in ms).      |
| `resultList[].updateTime` | `number`   | Timestamp of the latest update to this record (in ms).  |
