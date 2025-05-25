# createTriggerOrder

## Properties

| **Name**           | **Type**   | **Required** | **Description** |
|--------------------|------------|--------------|------------------|
| `symbol`           | `string`   | ✅            | the name of the contract |
| `price`            | `decimal`  | ❌            | execut price, market price may not fill in |
| `vol`              | `decimal`  | ✅            | volume |
| `leverage`         | `int`      | ❌            | Leverage (required for Isolated Margin) |
| `side`             | `int`      | ✅            | Order direction ([see values below](#enum-createtriggerorderside)) |
| `openType`         | `int`      | ✅            | Open type ([see values below](#enum-createtriggerorderopentype)) |
| `triggerPrice`         | `decimal`      | ✅            | trigger price |
| `triggerType`         | `int`      | ✅            | trigger type: ([see values below](#enum-createtriggerordertriggertype)) |
| `executeCycle`         | `int`      | ✅            | execution cycle: ([see values below](#enum-createtriggerorderexecutecycle)) |
| `orderType`       | `int`     | ✅            | order type: ([see values below](#enum-createtriggerorderordertype)) |
| `trend`      | `int`   | ✅            | trigger price type: ([see values below](#enum-createtriggerordertrend)) |

---

## Enum: `createOrder.Side`

* `Open Long` (value: `'1'`)
* `Close Short` (value: `'2'`)
* `Open Short` (value: `'3'`)
* `Close Long` (value: `'4'`)

## Enum: `createOrder.OpenType`

* `Isolated` (value: `'1'`)
* `Cross` (value: `'2'`)

## Enum: `createOrder.TriggerType`

* `More than or equal` (value: `'1'`)
* `Less than or equal` (value: `'2'`)

## Enum: `createOrder.ExecuteCycle`

* `24 hours` (value: `'1'`)
* `7 days` (value: `'2'`)

## Enum: `createOrder.OrderType`

* `Limit Order` (value: `'1'`)
* `Post Only Maker` (value: `'2'`)
* `Close or Cancel Instantly` (value: `'3'`)
* `Close or Cancel Completely` (value: `'4'`)
* `Market Order` (value: `'5'`)

## Enum: `createOrder.Trend`

* `Latest Price` (value: `'1'`)
* `Fair Price` (value: `'2'`)
* `Index Price` (value: `'3'`)

---

## Example

```js
import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const order = await client.createTriggerOrder({
  symbol: 'BTC_USDT',
  vol: 15,
  leverage: 25,
  side: 1,
  openType: 2,
  triggerPrice: 95000.00,
  triggerType: 1,
  executeCycle: 1,
  orderType: 5,
  trend: 2
});

console.log(order);
```

---

## Response

```JSON
{
    "success": true,
    "code": 0,
    "data": 1337
}
```