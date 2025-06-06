# getAssets

Get the user's single currency asset information.

- **Endpoint:** `/api/v1/private/account/asset/{currency}`

## Example

```js
import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const assets = await client.getAssets();

console.log(assets);
```

---

## Response

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