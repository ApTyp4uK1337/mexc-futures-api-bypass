# getFuturesOpenOrders

Get currently open futures orders.

- **GET:** `/v1/getFuturesOpenOrders`

---

## 📥 Request parameters

This endpoint does not require any parameters.

---

###### Response

```json
{
    "success": true,
    "code": 0,
    "data": [
        {
            "orderId": "1337",
            "symbol": "BTC_USDT",
            "positionId": 0,
            "price": 115000,
            "priceStr": "115000",
            "vol": 1,
            "leverage": 1,
            "side": 3,
            "category": 1,
            "orderType": 1,
            "dealAvgPrice": 0,
            "dealAvgPriceStr": "0",
            "dealVol": 0,
            "orderMargin": 1337.50675901,
            "takerFee": 0,
            "makerFee": 0,
            "profit": 0,
            "feeCurrency": "USDT",
            "openType": 1,
            "state": 2,
            "externalOid": "_m_1337",
            "errorCode": 0,
            "usedMargin": 0,
            "createTime": 1762005000000,
            "updateTime": 1762005000000,
            "positionMode": 1,
            "version": 1,
            "showCancelReason": 0,
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
