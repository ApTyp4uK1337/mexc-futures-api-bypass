# changePositionMode

## Properties

| **Name**           | **Type**   | **Required** | **Description** |
|--------------------|------------|--------------|------------------|
| `positionMode`           | `int`   | ✅            | ([see values below](#enum-changepositionmodepositionmode)), the modification of the position mode must ensure that there are no active orders, planned orders, or unfinished positions, otherwise it cannot be modified. When switching the one-way mode in both directions, the risk limit level will be reset to level 1. If you need to change the call interface, modify |

---

## Enum: `ChangePositionMode.PositionMode`

* `Hedge` (value: `'1'`)
* `One-way` (value: `'2'`)

---

## Example

```js
import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const result = await client.changePositionMode({
  positionMode: 1,
});

console.log(result);
```

---

## Response

```JSON
{ 
  "success": true,
  "code": 0
}
```