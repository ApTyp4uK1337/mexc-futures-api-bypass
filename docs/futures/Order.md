
# Order

## Properties

| **Name**           | **Type**   | **Required** | **Description** |
|--------------------|------------|--------------|------------------|
| `symbol`           | `string`   | ✅            | Contract name |
| `price`            | `decimal`  | ✅            | Price |
| `vol`              | `decimal`  | ✅            | Volume |
| `leverage`         | `int`      | ❌            | Leverage (required for Isolated Margin) |
| `side`             | `int`      | ✅            | Order direction ([see values below](#enum-orderside)) |
| `type`             | `int`      | ✅            | Order type ([see values below](#enum-orderlimit)) |
| `openType`         | `int`      | ✅            | Open type ([see values below](#enum-orderopentype)) |
| `positionId`       | `long`     | ❌            | Position ID (recommended when closing) |
| `externalOid`      | `string`   | ❌            | External order ID |
| `stopLossPrice`    | `decimal`  | ❌            | Stop-loss price |
| `takeProfitPrice`  | `decimal`  | ❌            | Take-profit price |
| `positionMode`     | `int`      | ❌            | Position mode ([see values below](#enum-orderpositionmode)). Default = user's config |
| `reduceOnly`       | `boolean`  | ❌            | Default: `false`. For One-Way only; ignored in Hedge mode |

---

## Enum: `Order.Side`

* `Open Long` (value: `1`)
* `Close Short` (value: `2`)
* `Open Short` (value: `3`)
* `Close Long` (value: `4`)

## Enum: `Order.Type`

* `Limit` (value: `1`)
* `Post Only` (value: `2`)
* `IOC` (value: `3`)
* `FOK` (value: `4`)
* `Market` (value: `5`)
* `Convert Market to Current` (value: `6`)

## Enum: `Order.OpenType`

* `Isolated` (value: `1`)
* `Cross` (value: `2`)

## Enum: `Order.PositionMode`

* `Hedge` (value: `1`)
* `One-way` (value: `2`)