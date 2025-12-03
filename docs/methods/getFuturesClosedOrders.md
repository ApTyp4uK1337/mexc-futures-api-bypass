# getFuturesClosedOrders

Get futures closed orders.

- **GET:** `/v1/getFuturesClosedOrders`

---

## 📥 Request parameters

| **Parameter**    | **Type**   | **Required** | **Description**                                                                 |
|------------------|------------|--------------|---------------------------------------------------------------------------------|
| `symbol`    | `string`     | ❌          | Orders symbol.                                      |
| `category`         | `int`  | ❌          | Order category: `1` - limit, `2` - liquidation custody, `3` - custody close, `4` - ADL reduction        |
| `page_num`           | `int`      | ❌          | Current page, default: `1`                                            |
| `page_size`           | `int`      | ❌          | Page size, default: `20`, max: `100`                                            |

---

###### Response

```json
{
  "success": true,
  "code": 0,
  "data": [
    {
      "orderId": "739113577038255616",
      "symbol": "DOGE_USDT",
      "positionId": 1109997350,
      "price": 0.18537,
      "priceStr": "0.185370000000000000",
      "vol": 1,
      "leverage": 20,
      "side": 3,
      "category": 1,
      "orderType": 5,
      "dealAvgPrice": 0.18537,
      "dealAvgPriceStr": "0.185370000000000000",
      "dealVol": 1,
      "orderMargin": 0.92685,
      "takerFee": 0,
      "makerFee": 0,
      "profit": 0,
      "feeCurrency": "USDT",
      "openType": 1,
      "state": 3,
      "externalOid": "_m_5adebccaaf58438185c1e5a56bd8330c",
      "errorCode": 0,
      "usedMargin": 0.92685,
      "createTime": 1761888809000,
      "updateTime": 1761888809000,
      "positionMode": 1,
      "version": 2,
      "showCancelReason": 1,
      "showProfitRateShare": 0,
      "bboTypeNum": 0,
      "totalFee": 0,
      "zeroSaveTotalFeeBinance": 0,
      "zeroTradeTotalFeeBinance": 0
    }
  ]
}
```

---

## 📦 Response parameters

| **Field**                      | **Type**    | **Description**                                                       |
|--------------------------------|-------------|-----------------------------------------------------------------------|
| `success`                      | `boolean`   | Whether the request was successful.                                   |
| `code`                         | `number`    | Status code.                                                          |
| `data`                         | `array`     | List of open orders.                                               |
| `is_testnet`                  | `boolean`   | Whether the environment is testnet.                                   |
