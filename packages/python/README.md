# 📘 MEXC API Bypass :: Python Library

**MexcBypass** is a Python class to interact with the MEXC cryptocurrency exchange APIs with optional proxy support (HTTP/HTTPS/SOCKS5).

## 📦 Installation

```
pip install aiohttp
```

## 🛠️ Usage

```python
from MexcBypass import MexcBypass

async with MexcBypass('YOUR_API_KEY', False, 'http://username:password@host:port') as mexc:
    # Example: Get server time
    print(await mexc.get_server_time())
```

## 🌐 Proxy Support

Supports optional proxy configuration:
- HTTP/HTTPS: `http://username:password@host:port`
- SOCKS5: `socks5://username:password@host:port`

Pass the URL as the third parameter to the constructor.

## 📚 API Methods

### General Endpoints

- `get_server_time()`
- `get_customer_info()`
- `get_user_info()`
- `get_referrals_list(array $params = [])`
- `get_assets_overview(array $params = [])`

### Contract Endpoints

- `get_futures_contract_index_price(array $params)`
- `get_futures_contract_fair_price(array $params)`

### Futures Endpoints

#### Assets & Transfers

- `get_futures_assets(array $params = [])`
- `get_futures_asset_transfer_records(array $params = [])`

#### Orders

- `create_futures_order(array $params)`
- `get_futuresOrders_by_id(array $params)`
- `cancel_futures_orders(array $params)`
- `cancel_futures_order_with_external_id(array $params)`
- `cancel_allFutures_orders(array $params = [])`

#### Trigger Orders

- `create_futures_trigger_order(array $params)`
- `get_futures_trigger_orders(array $params = [])`
- `cancel_futures_trigger_orders(array $params)`
- `cancel_all_futures_trigger_orders(array $params = [])`

#### Stop-Limit Orders

- `get_futures_stop_limit_orders(array $params = [])`
- `cancel_stop_limit_orders(array $params)`
- `cancel_all_futures_stop_limit_orders(array $params = [])`

#### Positions

- `get_futures_open_positions(array $params = [])`
- `get_futures_positions_history(array $params = [])`
- `close_all_futures_positions()`
- `get_futures_position_mode()`
- `change_futures_position_mode(array $params)`

#### Leverage / Margin

- `get_futures_leverage(array $params)`
- `change_futures_position_leverage(array $params)`
- `change_futures_position_margin(array $params)`

#### Risk

- `get_futures_risk_limits(array $params = [])`

#### History

- `get_futures_orders_deals(array $params)`
- `get_futures_orders_history(array $params = [])`

#### Contracts

- `get_futures_contracts(array $params = [])`
- `get_futures_tickers(array $params = [])`