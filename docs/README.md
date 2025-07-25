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

| Method | Description |
|--------|-------------|
| [**getServerTime**](/docs/methods/getServerTime.md) | Get the server time. |
| [**getCustomerInfo**](/docs/methods/getCustomerInfo.md) | Get brief information about the authenticated user. |
| [**getUserInfo**](/docs/methods/getUserInfo.md) | Get brief information about the authenticated user. |
| [**getReferralsList**](/docs/methods/getReferralsList.md) | Get referral invite list and their commission statistics. |
| [**getAssetsOverview**](/docs/methods/getAssetsOverview.md) | Get an overview of your asset balances. |
| [**getFuturesAssets**](/docs/methods/getFuturesAssets.md) | Get detailed balance data for your futures account. |
| [**getFuturesAssetTransferRecords**](/docs/methods/getFuturesAssetTransferRecords.md) | Get the list of asset transfer records on your futures account. |
| [**getFuturesContracts**](/docs/methods/getFuturesContracts.md) | Get details of one or all futures contracts. |
| [**getFuturesTickers**](/docs/methods/getFuturesTickers.md) | Get the latest market ticker for a futures contract. |
| [**getFuturesPendingOrders**](/docs/methods/getFuturesPendingOrders.md) | Get a list of your open (pending) futures orders. |
| [**getFuturesOrdersHistory**](/docs/methods/getFuturesOrdersHistory.md) | Get historical futures orders (filled, cancelled, etc.) |
| [**getFuturesOpenPositions**](/docs/methods/getFuturesOpenPositions.md) | Get currently open futures positions. |
| [**getFuturesPositionsHistory**](/docs/methods/getFuturesPositionsHistory.md) | Retrieve the historical closed positions for a specific contract. |
| [**closeAllFuturesPositions**](/docs/methods/closeAllFuturesPositions.md) | Close all currently open futures positions for the account. |
| [**createFuturesOrder**](/docs/methods/createFuturesOrder.md) | Create a new futures order. |
| [**getFuturesOrdersById**](/docs/methods/getFuturesOrdersById.md) | Create a new futures order. |
| [**cancelFuturesOrders**](/docs/methods/cancelFuturesOrders.md) | Cancel the pending order placed before, each time can cancel up to 50 orders. |
| [**cancelAllFuturesOrders**](/docs/methods/cancelAllFuturesOrders.md) | Cancel all open futures orders for a given symbol. |
| [**getFuturesPositionMode**](/docs/methods/getFuturesPositionMode.md) | Get the current position mode for the account. |
| [**getFuturesLeverage**](/docs/methods/getFuturesLeverage.md) | Get leverage and margin information for a specific futures contract. |
| [**getFuturesRiskLimits**](/docs/methods/getFuturesRiskLimits.md) | Get risk limit tiers for a specific futures contract. |
| [**changeFuturesPositionMargin**](/docs/methods/changeFuturesPositionMargin.md) | Change the margin amount of an open futures position. |
| [**changeFuturesPositionLeverage**](/docs/methods/changeFuturesPositionLeverage.md) | Change the leverage of a position. If the position does not exist yet, additional info is required. |
| [**changeFuturesPositionMode**](/docs/methods/changeFuturesPositionMode.md) | Change the position mode for your futures account. |

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