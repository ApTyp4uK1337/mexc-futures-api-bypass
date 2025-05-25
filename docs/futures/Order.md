
# 📦 Order

## 📋 Properties

| **Name**           | **Type**   | **Required** | **Description** |
|--------------------|------------|--------------|------------------|
| `symbol`           | `string`   | ✅            | Contract name |
| `price`            | `decimal`  | ✅            | Price |
| `vol`              | `decimal`  | ✅            | Volume |
| `leverage`         | `int`      | ❌            | Leverage (required for Isolated Margin) |
| `side`             | `int`      | ✅            | Order direction ([see values below](#-enum-orderside)) |
| `type`             | `int`      | ✅            | Order type: <br>1 = Limit, 2 = Post Only, 3 = IOC, 4 = FOK, 5 = Market, 6 = Convert Market to Current |
| `openType`         | `int`      | ✅            | Open type: 1 = Isolated, 2 = Cross |
| `positionId`       | `long`     | ❌            | Position ID (recommended when closing) |
| `externalOid`      | `string`   | ❌            | External order ID |
| `stopLossPrice`    | `decimal`  | ❌            | Stop-loss price |
| `takeProfitPrice`  | `decimal`  | ❌            | Take-profit price |
| `positionMode`     | `int`      | ❌            | Position mode: 1 = Hedge, 2 = One-way. Default = user's config |
| `reduceOnly`       | `boolean`  | ❌            | Default: `false`. For One-Way only; ignored in Hedge mode |

---

## 🎯 Enum: `Order.Side`

| **Name**       | **Value** |
|----------------|-----------|
| `Open Long`    | `'1'`     |
| `Close Short`  | `'2'`     |
| `Open Short`   | `'3'`     |
| `Close Long`   | `'4'`     |

---

### 💡 Советы по улучшению оформления

- Используй эмодзи для акцентов (`📋`, `📦`, `🎯`, `✅`, `❌`, и т.д.).
- Вставляй ссылки и якоря (`[see values below](#-enum-orderside)`).
- Можно добавить пример JSON ниже для наглядности.
- Для больших README — используйте навигацию, `toc`, и делите на разделы.