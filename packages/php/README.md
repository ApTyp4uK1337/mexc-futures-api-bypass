# 📘 MEXC API Bypass :: PHP Library

**MexcBypass** is a PHP class to interact with the MEXC cryptocurrency exchange APIs with optional proxy support (HTTP/HTTPS/SOCKS5).

## 🛠️ Usage

```php
require 'MexcBypass.php';

$mexc = new MexcBypass('YOUR_API_KEY', false, null);

$response = $mexc->getServerTime();

print_r($response);
```

## 🌐 Proxy Support

Supports optional proxy configuration:
- HTTP/HTTPS: `http://username:password@host:port`
- SOCKS5: `socks5://username:password@host:port`

Pass the URL as the third parameter to the constructor.

## 📚 API Methods

### General Endpoints

- `getServerTime()`
- `getCustomerInfo()`
- `getUserInfo()`
- `getReferralsList(array $params = [])`
- `getAssetsOverview(array $params = [])`

### Contract Endpoints

- `getFuturesContractIndexPrice(array $params)`
- `getFuturesContractFairPrice(array $params)`

### Futures Endpoints

#### Assets & Transfers

- `getFuturesAssets(array $params = [])`
- `getFuturesAssetTransferRecords(array $params = [])`

#### Orders

- `createFuturesOrder(array $params)`
- `getFuturesOrdersById(array $params)`
- `cancelFuturesOrders(array $params)`
- `cancelFuturesOrderWithExternalId(array $params)`
- `cancelAllFuturesOrders(array $params = [])`

#### Trigger Orders

- `createFuturesTriggerOrder(array $params)`
- `getFuturesTriggerOrders(array $params = [])`
- `cancelFuturesTriggerOrders(array $params)`
- `cancelAllFuturesTriggerOrders(array $params = [])`

#### Stop-Limit Orders

- `getFuturesStopLimitOrders(array $params = [])`
- `cancelStopLimitOrders(array $params)`
- `cancelAllFuturesStopLimitOrders(array $params = [])`

#### Positions

- `getFuturesOpenPositions(array $params = [])`
- `getFuturesPositionsHistory(array $params = [])`
- `closeAllFuturesPositions()`
- `getFuturesPositionMode()`
- `changeFuturesPositionMode(array $params)`

#### Leverage / Margin

- `getFuturesLeverage(array $params)`
- `changeFuturesPositionLeverage(array $params)`
- `changeFuturesPositionMargin(array $params)`

#### Risk

- `getFuturesRiskLimits(array $params = [])`

#### History

- `getFuturesOrdersDeals(array $params)`
- `getFuturesOrdersHistory(array $params = [])`

#### Contracts

- `getFuturesContracts(array $params = [])`
- `getFuturesTickers(array $params = [])`