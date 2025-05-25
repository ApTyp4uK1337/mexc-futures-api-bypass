# getPositionsHistory

## Properties

| **Name**           | **Type**   | **Required** | **Description** |
|--------------------|------------|--------------|------------------|
| `symbol`           | `string`   | ❌            | the name of the contract |

---

## Example

```js
import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const orders = await client.getOpenOrders({
  symbol: 'ETH_USDT'
});

console.log(orders);
```

---

## Response

```JSON
{
  "success": false,
  "code": 0,
  "message": "",
  "data": [
      {
        "orderId": 0,
        "symbol": "",
        "positionId": 0,
        "price": 0.0,
        "vol": 0.0,
        "leverage": 0,
        "side": 0,
        "category": 0,
        "orderType": 0,
        "dealAvgPrice": 0.0,
        "dealVol": 0.0,
        "orderMargin": 0.0,
        "takerFee": 0.0,
        "makerFee": 0.0,
        "profit": 0.0,
        "feeCurrency": "",
        "openType": 0,
        "state": 0,
        "externalOid": "",
        "errorCode": 0,
        "usedMargin": 0.0,
        "createTime": "",
        "updateTime": "",
        "stopLossPrice": 0.0,
        "takeProfitPrice": 0.0
    }
  ]
}
```