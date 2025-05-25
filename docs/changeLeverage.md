# changeLeverage

## Properties

| **Name**           | **Type**   | **Required** | **Description** |
|--------------------|------------|--------------|------------------|
| `positionId`           | `long`   | ✅            | position id |
| `leverage`           | `int`   | ✅            | leverage |
| `openType`           | `int`   | ❌            | required when there is no position, openType ([see values below](#enum-changeleverageopentype)) |
| `symbol`           | `string`   | ❌            | equired when there is no position，symbol |
| `positionType`           | `int`   | ❌            | equired when there is no position, positionType: ([see values below](#enum-changeleveragepositiontype)) |

---

## Enum: `changeLeverage.OpenType`

* `Isolated Position` (value: `'1'`)
* `Full Position` (value: `'2'`)

## Enum: `changeLeverage.PositionType`

* `Long` (value: `'1'`)
* `Short` (value: `'2'`)

---

## Example

```js
import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const result = await client.changeLeverage({
  positionId: 1337,
  leverage: 15
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