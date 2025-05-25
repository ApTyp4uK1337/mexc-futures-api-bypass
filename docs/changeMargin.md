# changeMargin

## Properties

| **Name**           | **Type**   | **Required** | **Description** |
|--------------------|------------|--------------|------------------|
| `positionId`           | `long`   | ✅            | position id |
| `amount`           | `decimal`   | ✅            | amount |
| `type`           | `int`   | ✅            | type  ([see values below](#enum-changemargintype)) |

---

## Enum: `changeMargin.Type`

* `Increase` (value: `'ADD'`)
* `Decrease` (value: `'SUB'`)

---

## Example

```js
import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const result = await client.changeMargin({
  positionId: 1337,
  amount: 15,
  type: "ADD"
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