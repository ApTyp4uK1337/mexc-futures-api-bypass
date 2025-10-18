# getFuturesContracts

Get details of one or all futures contracts.

- **GET:** `/v1/getFuturesContracts`

---

## 📥 Request parameters

| **Parameter** | **Type** | **Required** | **Description**                                     | **Default** |
|---------------|----------|--------------|-----------------------------------------------------|-------------|
| `symbol`      | `string` | ❌           | Trading pair symbol (e.g., `BTC_USDT`). If omitted, returns all contracts. | `null`      |

---

###### Response (example with `symbol=BTC_USDT`)

```json
{
  "success": true,
  "code": 0,
  "data": [
    {
      "symbol": "BTC_USDT",
      "displayName": "BTC_USDT 永续",
      "displayNameEn": "BTC_USDT PERPETUAL",
      "positionOpenType": 3,
      "baseCoin": "BTC",
      "quoteCoin": "USDT",
      "baseCoinName": "Bitcoin",
      "quoteCoinName": "Tether",
      "futureType": 1,
      "settleCoin": "USDT",
      "contractSize": 0.001,
      "minLeverage": 1,
      "maxLeverage": 125,
      "countryConfigContractMaxLeverage": 0,
      "priceScale": 2,
      "volScale": 0,
      "amountScale": 3,
      "priceUnit": 0.1,
      "volUnit": 1,
      "minVol": 1,
      "maxVol": 1000000,
      "bidLimitPriceRate": 0.1,
      "askLimitPriceRate": 0.1,
      "takerFeeRate": 0.0005,
      "makerFeeRate": 0.0002,
      "maintenanceMarginRate": 0.005,
      "initialMarginRate": 0.01,
      "riskBaseVol": 50000,
      "riskIncrVol": 25000,
      "riskLongShortSwitch": 0,
      "riskIncrMmr": 0.0025,
      "riskIncrImr": 0.005,
      "riskLevelLimit": 4,
      "priceCoefficientVariation": 0.003,
      "indexOrigin": ["BINANCE", "OKX", "KUCOIN"],
      "state": 0,
      "isNew": false,
      "isHot": true,
      "isHidden": false,
      "isPromoted": false,
      "conceptPlate": ["main-coins"],
      "conceptPlateId": [101],
      "riskLimitType": "BY_VOLUME",
      "maxNumOrders": [200, 100],
      "marketOrderMaxLevel": 20,
      "marketOrderPriceLimitRate1": 0.2,
      "marketOrderPriceLimitRate2": 0.005,
      "triggerProtect": 0.1,
      "appraisal": 0,
      "showAppraisalCountdown": 0,
      "automaticDelivery": 0,
      "apiAllowed": true,
      "depthStepList": ["0.1", "1", "10"],
      "limitMaxVol": 5000000,
      "threshold": 0,
      "baseCoinIconUrl": "https://cdn.example.com/icons/BTC.png",
      "id": 102,
      "vid": "abc123def456gh789",
      "baseCoinId": "btc-id-0001",
      "createTime": 1620000000000,
      "openingTime": 0,
      "openingCountdownOption": 1,
      "showBeforeOpen": true,
      "isMaxLeverage": true,
      "isZeroFeeRate": false,
      "leverageTags": [10, 25, 50, 100],
      "maxLeverageTip": 100,
      "riskLimitMode": "CUSTOM",
      "riskLimitCustom": [
        {
          "lv": 1,
          "vol": 50000,
          "maintenanceMarginRate": 0.005,
          "initialMarginRate": 0.01,
          "mlev": 125
        },
        {
          "lv": 2,
          "vol": 100000,
          "maintenanceMarginRate": 0.0075,
          "initialMarginRate": 0.015,
          "mlev": 75
        }
      ],
      "isZeroFeeSymbol": false,
      "liquidationFeeRate": 0.0004,
      "feeRateMode": "NORMAL",
      "leverageFeeRates": [],
      "tieredFeeRates": [],
      "type": 1,
      "stopOnlyFair": false
    }
  ],
  "is_testnet": false
}
```

---

## 📦 Response parameters

| **Field**                     | **Type**     | **Description**                                             |
|------------------------------|--------------|-------------------------------------------------------------|
| `symbol`                     | `string`     | The name of the contract.                                   |
| `displayName`                | `string`     | Display name.                                               |
| `displayNameEn`              | `string`     | English display name.                                       |
| `positionOpenType`           | `int`        | Position open type: 1 = isolated, 2 = cross, 3 = both.      |
| `baseCoin`                   | `string`     | Base currency (e.g., BTC).                                  |
| `quoteCoin`                  | `string`     | Quote currency (e.g., USDT).                                |
| `settleCoin`                 | `string`     | Liquidation/settlement currency.                            |
| `contractSize`               | `decimal`    | Contract value.                                             |
| `minLeverage`               | `int`        | Minimum leverage.                                           |
| `maxLeverage`               | `int`        | Maximum leverage.                                           |
| `priceScale`                | `int`        | Price scale.                                                |
| `volScale`                  | `int`        | Quantity scale.                                             |
| `amountScale`               | `int`        | Amount scale.                                               |
| `priceUnit`                 | `number`     | Price unit.                                                 |
| `volUnit`                   | `number`     | Volume unit.                                                |
| `minVol`                    | `decimal`    | Minimum volume.                                             |
| `maxVol`                    | `decimal`    | Maximum volume.                                             |
| `bidLimitPriceRate`         | `decimal`    | Bid limit price rate.                                       |
| `askLimitPriceRate`         | `decimal`    | Ask limit price rate.                                       |
| `takerFeeRate`              | `decimal`    | Taker fee rate.                                             |
| `makerFeeRate`              | `decimal`    | Maker fee rate.                                             |
| `maintenanceMarginRate`     | `decimal`    | Maintenance margin rate.                                    |
| `initialMarginRate`         | `decimal`    | Initial margin rate.                                        |
| `riskBaseVol`               | `decimal`    | Base volume for risk calculation.                          |
| `riskIncrVol`               | `decimal`    | Risk increasing volume.                                     |
| `riskIncrMmr`               | `decimal`    | Increased maintenance margin rate.                          |
| `riskIncrImr`               | `decimal`    | Increased initial margin rate.                              |
| `riskLevelLimit`            | `int`        | Risk level limit.                                           |
| `priceCoefficientVariation` | `decimal`    | Fair price coefficient variation.                           |
| `indexOrigin`               | `array`      | Price index source exchanges.                               |
| `state`                     | `int`        | Status: 0=enabled, 1=delivery, 2=completed, 3=offline, 4=paused. |
| `apiAllowed`                | `boolean`    | Whether contract supports trading via API.                  |
| `conceptPlate`              | `array`      | Zone/sector identifiers (e.g., "main-coins").               |
| `riskLimitType`             | `string`     | Risk limit type: `BY_VOLUME` or `BY_VALUE`.                |
| `is_testnet`                | `boolean`    | Indicates if the server is in testnet mode.