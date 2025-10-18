# getMarketSymbols

Fetch the list of trigger orders (plan orders).

- **GET:** `/v1/getMarketSymbols`

---

## 📥 Request parameters

| Parameter     | Type   | Required | Description                                                                 |
|---------------|--------|----------|-----------------------------------------------------------------------------|
| symbol        | string | ❌       | Contract symbol (e.g. `BTC_USDT`)                                           |

---

## 📦 Example response

```json
{
    "success": true,
    "count": 1,
    "data": [
        {
            "id": "803888cc9ae04b4da0061e8289a22f57",
            "mcd": "128f589271cb4951b03e71e6323eb7be",
            "coinId": "4c50188b608749e7a532e129df0c7691",
            "currency": "RARI",
            "currencyFullName": "Rarible",
            "sortOrder": 59,
            "status": 1,
            "marketType": "NEW",
            "icon": "F20240727222208012ZZMIRvTeHuWKDj",
            "openingTime": 1600864200000,
            "categories": [
                "mc-trade-zone-innovation"
            ],
            "categories_ids": [
                51
            ],
            "priceScale": 4,
            "quantityScale": 2,
            "contractDecimalMultiplier": 0,
            "spotEnabled": 1,
            "depositStatus": 1,
            "tradingType": 1,
            "contractAddress": "0xfca59cd816ab1ead66534d82bc21e7515ce441cf",
            "currencyFullNameEn": "Rarible"
        }
    ],
    "timestamp": 1759766293
}
```

---

## 🧾 Field details

