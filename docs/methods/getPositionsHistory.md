# getPositionsHistory

Get the user’s history position information.

- **Endpoint:** `/api/v1/private/position/list/history_positions`

## Properties

| **Name**           | **Type**   | **Required** | **Description** |
|--------------------|------------|--------------|------------------|
| `symbol`           | `string`   | ❌            | the name of the contract |
| `type`            | `int`  | ❌            | position type ([see values below](#enum-getpositionshistorytype)) |
| `page_num`              | `int`  | ❌            | current page number , default is 1 |
| `page_size`         | `int`      | ❌            | page size , default 20, maximum 100 |

---

## Enum: `getPositionsHistory.Type`

* `Long` (value: `'1'`)
* `Short` (value: `'2'`)

---

## Example

```js
import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const positions = await client.getPositionsHistory();

console.log(positions);
```

---

## Response

```JSON
{
    "success": false,
    "code": 0,
    "message": "",
    "data": [{
        "positionId": 0,
        "symbol": "",
        "positionType": 0,
        "openType": 0,
        "state": 0,
        "holdVol": 0.0,
        "frozenVol": 0.0,
        "closeVol": 0.0,
        "holdAvgPrice": 0.0,
        "openAvgPrice": 0.0,
        "closeAvgPrice": 0.0,
        "liquidatePrice": 0.0,
        "oim": 0.0,
        "im": 0.0,
        "holdFee": 0.0,
        "realised": 0.0,
        "adlLevel": 0,
        "leverage": 0,
        "createTime": "",
        "updateTime": "",
        "autoAddIm": false
    }]
}
```