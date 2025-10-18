# 📘 MEXC API Bypass :: NodeJS Library

**MexcBypass** is a Node.js class to interact with the MEXC cryptocurrency exchange APIs with optional proxy support (HTTP/HTTPS/SOCKS5).

## 📦 Installation

```
npm install axios crypto https-proxy-agent socks-proxy-agent
```

## 🛠️ Usage

```js
import { MexcBypass } from './MexcBypass.js';

const mexc = new MexcBypass('YOUR_API_KEY', false, 'http://username:password@host:port');

// Example: Get server time
mexc.getServerTime().then(console.log);
```

## 🌐 Proxy Support

Supports optional proxy configuration:
- HTTP/HTTPS: `http://username:password@host:port`
- SOCKS5: `socks5://username:password@host:port`

Pass the URL as the third parameter to the constructor.

## 📚 API Methods

### General Endpoints

- `getServerTime()`
- [`getCustomerInfo()`](./examples/getCustomerInfo/)
- [`getUserInfo()`](./examples/getUserInfo/)
- `getReferralsList(params)`
- [`getAssetsOverview(params)`](./examples/getAssetsOverview/)

### Contract Endpoints

- `getFuturesContractIndexPrice(params)`
- `getFuturesContractFairPrice(params)`

### Futures Endpoints

#### Assets & Transfers

- [`getFuturesAssets(params)`](./examples/getFuturesAssets/)
- `getFuturesAssetTransferRecords(params)`

#### Orders

- `createFuturesOrder(params)`
- [`getFuturesOrdersById(params)`](./examples/getFuturesOrdersById/)
- `cancelFuturesOrders(params)`
- [`cancelFuturesOrderWithExternalId(params)`](./examples/getFuturesOrdersByExternalId/)
- `cancelAllFuturesOrders(params)`

#### Trigger Orders

- `createFuturesTriggerOrder(params)`
- `getFuturesTriggerOrders(params)`
- `cancelFuturesTriggerOrders(params)`
- `cancelAllFuturesTriggerOrders(params)`

#### Stop-Limit Orders

- `getFuturesStopLimitOrders(params)`
- `cancelStopLimitOrders(params)`
- `cancelAllFuturesStopLimitOrders(params)`

#### Positions

- `getFuturesOpenPositions(params)`
- `getFuturesPositionsHistory(params)`
- `closeAllFuturesPositions()`
- `getFuturesPositionMode()`
- `changeFuturesPositionMode(params)`

#### Leverage / Margin

- `getFuturesLeverage(params)`
- `changeFuturesPositionLeverage(params)`
- `changeFuturesPositionMargin(params)`

#### Risk

- `getFuturesRiskLimits(params)`

#### History

- `getFuturesOrdersDeals(params)`
- `getFuturesOrdersHistory(params)`

#### Contracts

- `getFuturesContracts(params)`
- `getFuturesTickers(params)`