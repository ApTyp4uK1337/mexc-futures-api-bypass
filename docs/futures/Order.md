
# 📦 Order

## 📋 Properties

| **Name**           | **Type**   | **Required** | **Description** |
|--------------------|------------|--------------|------------------|
| `symbol`           | `string`   | ✅            | Contract name |
| `price`            | `decimal`  | ✅            | Price |
| `vol`              | `decimal`  | ✅            | Volume |
| `leverage`         | `int`      | ❌            | Leverage (required for Isolated Margin) |
| `side`             | `int`      | ✅            | Order direction ([see values below](#-enum-orderside)) |
| `type`             | `int`      | ✅            | Order type ([see values below](#-enum-orderlimit)) |
| `openType`         | `int`      | ✅            | Open type ([see values below](#-enum-orderopentype)) |
| `positionId`       | `long`     | ❌            | Position ID (recommended when closing) |
| `externalOid`      | `string`   | ❌            | External order ID |
| `stopLossPrice`    | `decimal`  | ❌            | Stop-loss price |
| `takeProfitPrice`  | `decimal`  | ❌            | Take-profit price |
| `positionMode`     | `int`      | ❌            | Position mode ([see values below](#-enum-orderpositionmode)). Default = user's config |
| `reduceOnly`       | `boolean`  | ❌            | Default: `false`. For One-Way only; ignored in Hedge mode |

---

## 🎯 Enum: `Order.Side`

| **Name**       | **Value** |
|----------------|-----------|
| `Open Long`    | `'1'`     |
| `Close Short`  | `'2'`     |
| `Open Short`   | `'3'`     |
| `Close Long`   | `'4'`     |

## 🎯 Enum: `Order.Type`

| **Name**       | **Value** |
|----------------|-----------|
| `Limit`    | `'1'`     |
| `Post Only`  | `'2'`     |
| `IOC`   | `'3'`     |
| `FOK`   | `'4'`     |
| `Market`   | `'5'`     |
| `Convert Market to Current`   | `'6'`     |

## 🎯 Enum: `Order.OpenType`

| **Name**       | **Value** |
|----------------|-----------|
| `Isolated`    | `'1'`     |
| `Cross`  | `'2'`     |

## 🎯 Enum: `Order.PositionMode`

| **Name**       | **Value** |
|----------------|-----------|
| `Hedge`    | `'1'`     |
| `One-way`  | `'2'`     |

---
