# cancelAllStopLimitOrders

## Properties

| **Name**           | **Type**   | **Required** | **Description** |
|--------------------|------------|--------------|------------------|
| `positionId`           | `long`   | ❌            | position id, fill in positionId，only cancel the trigger order of the corresponding position, and check the symbol without filling |
| `symbol`           | `string`   | ❌            | the name of the contact ,only cancels the delegate order under this contract based on the symbol, cancel all orders without filling the symbol |

---

## Example

```js
import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const result = await client.cancelAllStopLimitOrders();

console.log(result);
```

---

## Response

```JSON
{
    "success": true,
    "code": 0,
}
```