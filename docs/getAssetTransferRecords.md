# getAssetTransferRecords

## Properties

| **Name**           | **Type**   | **Required** | **Description** |
|--------------------|------------|--------------|------------------|
| `currency`           | `string`   | ❌            | currency |
| `state`           | `string`   | ❌            | state ([see values below](#enum-getassettransferrecordsstate)) |
| `type`           | `string`   | ❌            | type ([see values below](#enum-getassettransferrecordstype)) |
| `page_num`           | `int`   | ❌            | current page number, default is 1 |
| `page_size`           | `int`   | ❌            | page size, default 20, maximum 100 |

---

## Enum: `getAssetTransferRecords.State`

* `WAIT` (value: `'WAIT'`)
* `SUCCESS` (value: `'SUCCESS'`)
* `FAILED` (value: `'FAILED'`)

## Enum: `getAssetTransferRecords.Type`

* `IN` (value: `'IN'`)
* `OUT` (value: `'OUT'`)

## Example

```js
import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const assets = await client.getAssetTransferRecords();

console.log(assets);
```

---

## Response

```JSON
{
    "success": true,
    "code": 0,
    "data": {
        "pageSize": 2,
        "totalCount": 88,
        "totalPage": 44,
        "currentPage": 1,
        "resultList": [
            {
                "id": 165230,
                "txid": "db13d56ca887429a8f5fe1d1cbc4559c",
                "currency": "USDT",
                "amount": 0.03176562,
                "type": "IN",
                "state": "SUCCESS",
                "createTime": 1609833219000,
                "updateTime": 1609833219000
            },
            {
                "id": 139320,
                "txid": "a57ff46de96545839185aff7343f9b7c",
                "currency": "USDT",
                "amount": 60.53383524,
                "type": "OUT",
                "state": "SUCCESS",
                "createTime": 1608200935000,
                "updateTime": 1608200935000
            }
        ]
    }
}
```s