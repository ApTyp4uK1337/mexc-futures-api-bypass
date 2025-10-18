# getOrderById

Get detailed information about a specific futures order by ID.

- **Endpoint:** `/api/v1/private/order/get`

---

## 📥 Request parameters

| **Name**   | **Type** | **Required** | **Description**                      |
|------------|----------|--------------|--------------------------------------|
| `orderId`  | `string` | ✅           | Unique ID of the order to retrieve. |

---

## 📤 Examples

##### Get order by ID

```js
import { MexcBypass } from '../../src/MexcBypass.js';

const mexc = new MexcBypass('YOUR_API_KEY', false);

const order = await mexc.getFuturesOrderById({
  orderId: '1337'
});

console.log(order);
```

###### Response

```json
{
  "success": true,
  "code": 0,
  "data": {
    "orderId": "1337",
    "symbol": "XRP_USDT",
    "positionId": 217829,
    "price": 0.7639,
    "priceStr": "0.763900000000000000",
    "vol": 350,
    "leverage": 10,
    "side": 1,
    "category": 1,
    "orderType": 2,
    "dealAvgPrice": 0.0,
    "dealAvgPriceStr": "0.000000000000000000",
    "dealVol": 0,
    "orderMargin": 5.189,
    "takerFee": 0.0,
    "makerFee": 0.0,
    "profit": 0.0,
    "feeCurrency": "USDT",
    "openType": 1,
    "state": 6,
    "externalOid": "_m_4a2bd91044ff412f99e3e5e1cf7e1731",
    "errorCode": 0,
    "usedMargin": 0.0,
    "createTime": 1752220000000,
    "updateTime": 1752223600000,
    "lossTrend": 1,
    "profitTrend": 2,
    "stopLossPrice": 0.7900,
    "takeProfitPrice": 0.7500,
    "priceProtect": 0,
    "positionMode": 1,
    "version": 3,
    "showCancelReason": 0,
    "showProfitRateShare": 1,
    "bboTypeNum": 0,
    "totalFee": 0.0,
    "zeroSaveTotalFeeBinance": 0.0,
    "zeroTradeTotalFeeBinance": 0.0
  }
}
```

---

## 📦 Response parameters

| **Field**               | **Type**   | **Description**                              |
|------------------------|------------|----------------------------------------------|
| `orderId`              | `string`   | Unique order identifier.                     |
| `symbol`               | `string`   | Trading pair symbol.                         |
| `positionId`           | `number`   | Associated position ID.                      |
| `price`                | `number`   | Order price.                                 |
| `vol`                  | `number`   | Order volume.                                |
| `leverage`             | `number`   | Leverage used.                               |
| `side`                 | `number`   | 1 = Buy, 2 = Sell.                            |
| `category`             | `number`   | Order category.                              |
| `orderType`            | `number`   | Order type (e.g., 1 = Limit, 2 = Market).     |
| `dealAvgPrice`         | `number`   | Average filled price.                        |
| `dealVol`              | `number`   | Executed volume.                             |
| `orderMargin`          | `number`   | Margin used for the order.                   |
| `takerFee`             | `number`   | Taker fee charged.                           |
| `makerFee`             | `number`   | Maker fee charged.                           |
| `profit`               | `number`   | Unrealized profit/loss.                      |
| `feeCurrency`          | `string`   | Currency used to pay fees.                   |
| `openType`             | `number`   | 1 = Isolated, 2 = Cross.                     |
| `state`                | `number`   | Order status (e.g., 4 = Cancelled).          |
| `externalOid`          | `string`   | External order ID.                           |
| `errorCode`            | `number`   | Error code if any.                           |
| `usedMargin`           | `number`   | Actual used margin.                          |
| `createTime`           | `number`   | Timestamp of order creation (ms).            |
| `updateTime`           | `number`   | Last update timestamp (ms).                  |
| `lossTrend`            | `number`   | Trend of losses (1–decreasing, 2–increasing).|
| `profitTrend`          | `number`   | Trend of profits.                            |
| `stopLossPrice`        | `number`   | Configured stop-loss price.                  |
| `takeProfitPrice`      | `number`   | Configured take-profit price.                |
| `priceProtect`         | `number`   | Price protection enabled (1 = Yes, 0 = No).  |
| `positionMode`         | `number`   | 1 = One-way, 2 = Hedge.                      |
| `version`              | `number`   | Order version.                               |
| `showCancelReason`     | `number`   | 1 = Show cancel reason.                      |
| `showProfitRateShare`  | `number`   | 1 = Share profit rate allowed.               |
| `bboTypeNum`           | `number`   | BBO pricing type.                            |
| `totalFee`             | `number`   | Total fee paid.                              |
| `zeroSaveTotalFeeBinance` | `number` | Reserved (Binance compatibility).            |
| `zeroTradeTotalFeeBinance`| `number` | Reserved (Binance compatibility).            |