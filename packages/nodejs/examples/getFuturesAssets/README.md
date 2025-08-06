# getFuturesAssets

Retrieve information about the user's futures account assets.

- **Endpoint:** `/api/v1/private/account/asset/{currency}`

## 📥 Request parameters

| **Name**           | **Type**   | **Required** | **Description** |
|--------------------|------------|--------------|------------------|
| `currency`         | `string`   | ❌           | If `currency` is omitted, the endpoint will return all available assets. If `currency` is specified (e.g. `USDT`), only data for that specific currency will be returned. |

---

## 📤 Examples

##### Get all futures account assets

```js
import { MexcBypass } from '../../src/MexcBypass.js';

const mexc = new MexcBypass('YOUR_API_KEY', false);

const assets = await mexc.getFuturesAssets();

console.log(assets);
```

###### Response

```JSON
{
  "success": true,
  "code": 0,
  "data": [
    {
      "currency": "BTC",
      "positionMargin": 0,
      "availableBalance": 0,
      "cashBalance": 0,
      "frozenBalance": 0,
      "equity": 0,
      "unrealized": 0,
      "bonus": 0,
      "availableCash": 0,
      "availableOpen": 0
    },
    ...
  ]
}
```

---

##### Get a single futures asset by currency

```js
import { MexcBypass } from '../../src/MexcBypass.js';

const mexc = new MexcBypass('YOUR_API_KEY', false);

const asset = await mexc.getFuturesAssets({
  currency: 'USDT'
});

console.log(asset);
```

###### Response

```JSON
{
  "success": true,
  "code": 0,
  "data": {
    "currency": "ETH",
    "positionMargin": 0,
    "availableBalance": 0,
    "cashBalance": 0,
    "frozenBalance": 0,
    "equity": 0,
    "unrealized": 0,
    "bonus": 0,
    "availableCash": 0,
    "availableOpen": 0
  }
}
```

## 📦 Response parameters

| **Field**           | **Type**   | **Description** |
|---------------------|------------|------------------|
| `currency`          | `string`   | The asset's currency symbol (e.g., `USDT`, `BTC`). |
| `positionMargin`    | `decimal`  | Margin currently used in open positions. |
| `availableBalance`  | `decimal`  | Funds available for trading or withdrawal. |
| `cashBalance`       | `decimal`  | Total account balance that can be withdrawn (includes unrealized PnL). |
| `frozenBalance`     | `decimal`  | Balance currently frozen (e.g., in open orders). |
| `equity`            | `decimal`  | Total equity including all balances and unrealized profit/loss. |
| `unrealized`        | `decimal`  | Unrealized profit and loss from open positions. |
| `bonus`             | `decimal`  | Bonus or promotional funds provided by the platform. |
| `availableCash`     | `decimal`  | Actual cash available for withdrawal (excluding bonuses, etc.). |
| `availableOpen`     | `decimal`  | Funds available to open new positions. |