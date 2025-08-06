# 🚀 MEXC Bypass API

This project provides a wrapper around the MEXC Futures API with support for proxy usage, testnet/mainnet environments, and custom authorization headers. It is designed for fast and convenient access to MEXC methods without direct login.

## 🌐 Base URL

```
https://api.mexc-bypass.xyz/v1
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
curl -X GET 'https://api.mexc-bypass.xyz/v1/getServerTime' \
  -H 'X-MEXC-BYPASS-API-KEY: <your-api-key>' \
  -H 'X-MEXC-WEB-KEY: <your-mexc-web-key>' \
  -H 'X-MEXC-NETWORK: TESTNET'
```

---

## 🌍 Proxy Format

```
X-MEXC-PROXY: socks5://user:pass@127.0.0.1:9050
```

This allows you to tunnel traffic through your own proxy.


---

## 📚 Documentation & Guides

Expand your knowledge and integrate faster with these helpful articles:

| Title | Description |
|-------|-------------|
| 🔑 [Where to get MEXC token?](./mexc_token.md) | Learn how to calculate the correct `vol` value when placing futures orders using MEXC Bypass API. |
| 🔢 [Volume Calculation Guide](./volume_calculation.md) | Learn how to calculate the correct `vol` value when placing futures orders using MEXC Bypass API. |
| 🛡️ [What is Risk Control?](./risk_control_en.md) | Understand how MEXC’s internal risk control systems might affect your orders and how to handle it. |

---

## 📥 Postman Collection

Want to test the API easily?

- **Download collection:** [postman_collection.json](./assets/postman_collection.json)
- **Importing into Postman:**
  1. Open Postman
  2. Click **Import**
  3. Choose **Link** or **Upload File**
  4. Paste the link above or select the file