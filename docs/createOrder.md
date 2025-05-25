# createOrder

## Properties

| **Name**           | **Type**   | **Required** | **Description** |
|--------------------|------------|--------------|------------------|
| `symbol`           | `string`   | ✅            | Contract name |
| `price`            | `decimal`  | ❌            | Price |
| `vol`              | `decimal`  | ✅            | Volume |
| `leverage`         | `int`      | ❌            | Leverage (required for Isolated Margin) |
| `side`             | `int`      | ✅            | Order direction ([see values below](#enum-createorderside)) |
| `type`             | `int`      | ✅            | Order type ([see values below](#enum-createorderlimit)) |
| `openType`         | `int`      | ✅            | Open type ([see values below](#enum-createorderopentype)) |
| `positionId`       | `long`     | ❌            | Position ID (recommended when closing) |
| `externalOid`      | `string`   | ❌            | External order ID |
| `stopLossPrice`    | `decimal`  | ❌            | Stop-loss price |
| `takeProfitPrice`  | `decimal`  | ❌            | Take-profit price |
| `positionMode`     | `int`      | ❌            | Position mode ([see values below](#enum-createorderpositionmode)). Default = user's config |
| `reduceOnly`       | `boolean`  | ❌            | Default: `false`. For One-Way only; ignored in Hedge mode |

---

## Enum: `createOrder.Side`

* `Open Long` (value: `'1'`)
* `Close Short` (value: `'2'`)
* `Open Short` (value: `'3'`)
* `Close Long` (value: `'4'`)

## Enum: `createOrder.Type`

* `Limit` (value: `'1'`)
* `Post Only` (value: `'2'`)
* `IOC` (value: `'3'`)
* `FOK` (value: `'4'`)
* `Market` (value: `'5'`)
* `Convert Market to Current` (value: `'6'`)

## Enum: `createOrder.OpenType`

* `Isolated` (value: `'1'`)
* `Cross` (value: `'2'`)

## Enum: `createOrder.PositionMode`

* `Hedge` (value: `'1'`)
* `One-way` (value: `'2'`)

---

## Example

```js
import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const order = await client.createOrder({
  symbol: 'BTC_USDT',
  type: 5,
  side: 1,
  openType: 2,
  vol: 15,
  leverage: 25
});

console.log(order);
```

---

## Response

```JSON
{
    "success": true,
    "code": 0,
    "data": 102057569836905984
}
```