# 🚀 MEXC Bypass API

This project provides a wrapper around the MEXC Futures API with support for proxy usage, testnet/mainnet environments, and custom authorization headers. It is designed for fast and convenient access to MEXC methods without direct login.

## 🌐 Base URL

```
https://api.mexc-bypass.xyz
```

## 📌 Headers

All requests must include the following headers:

| Header                  | Required | Description                                                                 |
|-------------------------|----------|-----------------------------------------------------------------------------|
| `X-MEXC-BYPASS-API-KEY` | ✅       | Your unique API key to access the MEXC Bypass API.                          |
| `X-MEXC-WEB-KEY`        | ❌       | Optional MEXC web key. Used only in some methods.                           |
| `X-MEXC-NETWORK`        | ❌       | Network type: `TESTNET` (default) or `MAINNET`.                             |
| `X-MEXC-PROXY`          | ❌       | Optional proxy URL (supports `http://` or `socks5://`).                     |

---

## 📁 Available Methods

| Method | Category | Description |
|--------|----------|-------------|
| [**getServerTime**](/docs/methods/getServerTime.md) | General | Get the server time. |
| [**getCustomerInfo**](/docs/methods/getCustomerInfo.md) | General | Get brief information about the authenticated user. |
| [**getUserInfo**](/docs/methods/getUserInfo.md) | General | Get brief information about the authenticated user. |
| [**getReferralsList**](/docs/methods/getReferralsList.md) | General | Get referral invite list and their commission statistics. |
| [**getAssetsOverview**](/docs/methods/getAssetsOverview.md) | General | Get an overview of your asset balances. |
| [**getFuturesAssets**](/docs/methods/getFuturesAssets.md) | Futures | Get detailed balance data for your futures account. |
| [**getFuturesAssetTransferRecords**](/docs/methods/getFuturesAssetTransferRecords.md) | Futures | Get the list of asset transfer records on your futures account. |
| [**getFuturesOrdersDeals**](/docs/methods/getFuturesOrdersDeals.md) | Futures | Fetches the deal history for your futures orders. |
| [**getFuturesContracts**](/docs/methods/getFuturesContracts.md) | Futures | Get details of one or all futures contracts. |
| [**getFuturesContractIndexPrice**](/docs/methods/getFuturesContractIndexPrice.md) | Futures | Retrieve the index price of a specific futures contract. |
| [**getFuturesContractFairPrice**](/docs/methods/getFuturesContractFairPrice.md) | Futures | Fetch the fair price of a specific futures contract. |
| [**getFuturesTickers**](/docs/methods/getFuturesTickers.md) | Futures | Get the latest market ticker for a futures contract. |
| [**getFuturesPendingOrders**](/docs/methods/getFuturesPendingOrders.md) | Futures | Get a list of your open (pending) futures orders. |
| [**getFuturesOrdersHistory**](/docs/methods/getFuturesOrdersHistory.md) | Futures | Get historical futures orders (filled, cancelled, etc.) |
| [**getFuturesOpenPositions**](/docs/methods/getFuturesOpenPositions.md) | Futures | Get currently open futures positions. |
| [**getFuturesPositionsHistory**](/docs/methods/getFuturesPositionsHistory.md) | Futures | Retrieve the historical closed positions for a specific contract. |
| [**closeAllFuturesPositions**](/docs/methods/closeAllFuturesPositions.md) | Futures | Close all currently open futures positions for the account. |
| [**createFuturesOrder**](/docs/methods/createFuturesOrder.md) | Futures | Create a new futures order. |
| [**getFuturesOrdersById**](/docs/methods/getFuturesOrdersById.md) | Futures | Fetch futures order(s) by ID. |
| [**cancelFuturesOrders**](/docs/methods/cancelFuturesOrders.md) | Futures | Cancel the pending order placed before, each time can cancel up to 50 orders. |
| [**cancelFuturesOrderWithExternalId**](/docs/methods/cancelFuturesOrderWithExternalId.md) | Futures | Cancel a futures order using an external order ID. |
| [**cancelAllFuturesOrders**](/docs/methods/cancelAllFuturesOrders.md) | Futures | Cancel all open futures orders for a given symbol. |
| [**createFuturesTriggerOrder**](/docs/methods/createFuturesTriggerOrder.md) | Futures | Create a trigger (planned) futures order that executes once market conditions are met. |
| [**getFuturesTriggerOrders**](/docs/methods/getFuturesTriggerOrders.md) | Futures | Fetch the list of trigger orders (plan orders). |
| [**cancelFuturesTriggerOrders**](/docs/methods/cancelFuturesTriggerOrders.md) | Futures | Cancel one or multiple Trigger Orders. |
| [**cancelAllFuturesTriggerOrders**](/docs/methods/cancelAllFuturesTriggerOrders.md) | Futures | Cancel all open trigger (planned) futures orders. You can cancel all at once, or only for a specific symbol. |
| [**getFuturesStopLimitOrders**](/docs/methods/getFuturesStopLimitOrders.md) | Futures | Retrieve the list of Stop-Limit orders (take-profit & stop-loss). |
| [**cancelAllFuturesStopLimitOrders**](/docs/methods/cancelAllFuturesStopLimitOrders.md) | Futures | Cancel all stop-limit (stoporder) futures orders. |
| [**getFuturesPositionMode**](/docs/methods/getFuturesPositionMode.md) | Futures | Get the current position mode for the account. |
| [**getFuturesLeverage**](/docs/methods/getFuturesLeverage.md) | Futures | Get leverage and margin information for a specific futures contract. |
| [**getFuturesRiskLimits**](/docs/methods/getFuturesRiskLimits.md) | Futures | Get risk limit tiers for a specific futures contract. |
| [**changeFuturesPositionMargin**](/docs/methods/changeFuturesPositionMargin.md) | Futures | Change the margin amount of an open futures position. |
| [**changeFuturesPositionLeverage**](/docs/methods/changeFuturesPositionLeverage.md) | Futures | Change the leverage of a position. If the position does not exist yet, additional info is required. |
| [**changeFuturesPositionMode**](/docs/methods/changeFuturesPositionMode.md) | Futures | Change the position mode for your futures account. |

---

## 📦 Quick Example (with cURL)

```bash
curl -X GET 'https://api.mexc-bypass.xyz/getServerTime' \
  -H 'X-MEXC-BYPASS-API-KEY: <your-api-key>' \
  -H 'X-MEXC-NETWORK: TESTNET'
```

---

## 🌍 Proxy Format

```
X-MEXC-PROXY: socks5://user:pass@127.0.0.1:9050
```

This allows you to tunnel traffic through your own proxy or TOR node for added security.


---



## Available Methods (Deprecated)

| Method | Description |
|--------|-------------|
| [**getAssets**](/docs/methods_deprecated/getAssets.md) | Get all informations of user's asset |
| [**getAsset**](/docs/methods_deprecated/getAsset.md) | Get the user's single currency asset information |
| [**getAssetTransferRecords**](/docs/methods_deprecated/getAssetTransferRecords.md) | Get the user's asset transfer records |
| [**getPositionsHistory**](/docs/methods_deprecated/getPositionsHistory.md) | Get the user’s history position information |
| [**getOpenPositions**](/docs/methods_deprecated/getOpenPositions.md) | Get the user's current holding position |
| [**getOpenOrders**](/docs/methods_deprecated/getOpenOrders.md) | Get the user's current pending order |
| [**getOrdersHistory**](/docs/methods_deprecated/getOrdersHistory.md) | Get all of the user's historical orders |
| [**createOrder**](/docs/methods_deprecated/createOrder.md) | Create order |
| [**cancelOrders**](/docs/methods_deprecated/cancelOrders.md) | Cancel the orders |
| [**cancelAllOrders**](/docs/methods_deprecated/cancelAllOrders.md) | Cancel all uncompleted orders under a contract |
| [**cancelOrderWithExternalId**](/docs/methods_deprecated/cancelOrderWithExternalId.md) | Cancel the order according to the external order ID |
| [**getTriggerOrders**](/docs/methods_deprecated/getTriggerOrders.md) | Gets the trigger order list |
| [**createTriggerOrder**](/docs/methods_deprecated/createTriggerOrder.md) | Trigger order |
| [**cancelTriggerOrders**](/docs/methods_deprecated/cancelTriggerOrders.md) | Cancel the trigger order |
| [**cancelAllTriggerOrders**](/docs/methods_deprecated/cancelAllTriggerOrders.md) | Cancel all trigger orders |
| [**getStopLimitOrders**](/docs/methods_deprecated/getStopLimitOrders.md) | Get the Stop-Limit order list |
| [**cancelStopLimitOrders**](/docs/methods_deprecated/cancelStopLimitOrders.md) | Cancel the Stop-Limit trigger order |
| [**cancelAllStopLimitOrders**](/docs/methods_deprecated/cancelAllStopLimitOrders.md) | Cancel all Stop-Limit price trigger orders |
| [**getRiskLimits**](/docs/methods_deprecated/getRiskLimits.md) | Get risk limits |
| [**changeMargin**](/docs/methods_deprecated/changeMargin.md) | Increase or decrease margin |
| [**getLeverage**](/docs/methods_deprecated/getLeverage.md) | Get leverage |
| [**changeLeverage**](/docs/methods_deprecated/changeLeverage.md) | Switch leverage |
| [**getPositionMode**](/docs/methods_deprecated/getPositionMode.md) | Get position mode |
| [**changePositionMode**](/docs/methods_deprecated/changePositionMode.md) | Change position mode |
| [**closeAllPositions**](/docs/methods_deprecated/closeAllPositions.md) | Close all positions |