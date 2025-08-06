# getAssetsOverview

Get a summary of user's assets, optionally converted to a specific currency (e.g., USDT).

## 📥 Request parameters

| **Name**   | **Type**   | **Required** | **Description** |
|------------|------------|--------------|------------------|
| `convert`  | `boolean`  | ❌           | Whether to return balances converted into a unified currency (e.g., USDT). `true` returns per-currency breakdown, `false` returns single total. |

---

## 📤 Examples

### Get a total asset value in USDT

```js
import { MexcBypass } from '../../src/MexcBypass.js';

const mexc = new MexcBypass('YOUR_API_KEY', false);

const overview = await mexc.getAssetsOverview();

console.log(overview);
```

###### Response

```JSON
{
  "data": {
    "total": "1337.1337",
    "spot": "0",
    "otc": "0",
    "contract": "1337.1337",
    "strategy": "0",
    "robot": "0",
    "alpha": "0"
  },
  "code": 0,
  "msg": "success",
  "timestamp": 1752186129431
}
```

---

##### Get a breakdown by each asset

```js
import { MexcBypass } from '../../src/MexcBypass.js';

const mexc = new MexcBypass('YOUR_API_KEY', false);

const overview = await mexc.getAssetsOverview({
  'convert': true
});

console.log(overview);
```

###### Response

```JSON
{
  "data": [
    {
      "currency": "BTC",
      "coinId": "febc9973be4d4d53bb374476239eb219",
      "total": "0.011511",
      "spot": "0",
      "otc": "0",
      "contract": "0.011511",
      "strategy": "0",
      "robot": "0",
      "alpha": "0",
      "originTotal": "0.01151",
      "originSpot": "0",
      "originOtc": "0",
      "originContract": "0.011511",
      "originStrategy": "0",
      "originRobot": "0",
      "originAlpha": "0"
    },
    ...
  ],
  "code": 0,
  "msg": "success",
  "timestamp": 1752186381606
}

```

## 📦 Response parameters

| **Field**           | **Type**   | **Description** |
|---------------------|------------|------------------|
| `currency`         | `string`   | Currency code (e.g., `BTC`, `ETH`, `USDT`). |
| `coinId`           | `string`   | Unique identifier of the coin. |
| `total`            | `string`   | Converted total balance for this currency. |
| `spot`             | `string`   | Converted Spot wallet balance. |
| `otc`              | `string`   | Converted OTC wallet balance. |
| `contract`         | `string`   | Converted Contract (Futures) balance. |
| `strategy`         | `string`   | Converted Strategy balance. |
| `robot`            | `string`   | Converted Robot trading balance. |
| `alpha`            | `string`   | Converted Alpha balance. |
| `originTotal`      | `string`   | Original total balance (unconverted). |
| `originSpot`       | `string`   | Original Spot wallet balance. |
| `originOtc`        | `string`   | Original OTC wallet balance. |
| `originContract`   | `string`   | Original Contract wallet balance. |
| `originStrategy`   | `string`   | Original Strategy wallet balance. |
| `originRobot`      | `string`   | Original Robot balance. |
| `originAlpha`      | `string`   | Original Alpha strategy balance. |