# cancelOrderWithExternalId

## Properties

| **Name**           | **Type**   | **Required** | **Description** |
|--------------------|------------|--------------|------------------|
| `symbol`           | `string`   | ✅            | the name of the contract |
| `externalOid`           | `string`   | ✅            | external order id |

---

## Example

```js
import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const result = await client.cancelOrderWithExternalId({
  symbol: "BTC_USDT",
  externalOid: "mexc-a-001"
});

console.log(result);
```

---

## Response

```JSON
{
    "symbol":"BTC_USDT",
    "externalOid":"mexc-a-001"
}
```