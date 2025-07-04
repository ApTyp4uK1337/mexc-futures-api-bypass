<div align="center">
   <img src="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/assets/mexc-logo.png?raw=true" height="150" width="150">

  ![License: Proprietary](https://img.shields.io/badge/license-proprietary-red)
  ![Private Code](https://img.shields.io/badge/source-private-orange)
  ![Paid Access](https://img.shields.io/badge/access-paid-blue)
</div>

<div align="center">
  <img src="https://img.shields.io/badge/php-%23777BB4.svg?&logo=php&logoColor=white" alt="PHP">
  <img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white" alt="Node.js">
</div>

# 🔷 MEXC Futures API Bypass

This unofficial MEXC Futures API library bypasses current maintenance restrictions in the official endpoints, allowing full trading and account access even when some routes are marked "[Under maintenance](https://mexcdevelop.github.io/apidocs/contract_v1_en/#order-under-maintenance)".

> [!NOTE]
> The source code of the library is not distributed openly. You can get access by contacting me on Telegram: [@aptyp4uk1337_bot](https://t.me/aptyp4uk1337_bot)

## 🔴 Live Demo

You can test the opening of a position yourself: https://mexc-bypass.xyz/

<div align="center">
  <img src="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/assets/preview.gif?raw=true" title="Telegram">
</div>

> **Demo file:** [./demo/app.js](https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/demo/app.js)


---

## 🎖 Features

- Blazing fast
- No third-party requests
- Works on mainnet & testnet
- Fully open source
- Multi-accounting and proxy support
- Compatible with any programming language
- Simple PHP, Python & Node.js library
- Free updates

---

## ❓ FAQ

> Does it fully support placing, cancelling, and tracking all types of futures orders?
- Yes, including market, limit, stop-limit, and trigger orders.

> How many orders can be sent per second, per minute, per day?
- See the [results of the Rate Limit Test](#-rate-limit-test) for 200 requests.

> Can the bypass API fetch account info, open positions, and adjust leverage/margin?
- Yes. For more info, look at [available methods](#-available-methods) section.

> Is the library provided as open source or as compiled/obfuscated code?
- Currently, everything is open-sourced, nothing is obfuscated.

> Can the library be used with multiple accounts, or is the authentication tied to a single one?
- No limitation on number of accounts.

> Does it use anything third-party to make those requests?
- No.

> Will I get a risk control ban for using the library?
- In my experience - no. For more information on risk control, see here [🛡️ Risk Control on MEXC](/docs/risk_control_en.md).


---

## ⏱️ Rate Limit Test

<div align="center">
  <img src="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/assets/rate-limit-test.png?raw=true" title="Telegram">
</div>

> **Demo file:** [./demo/rate_limit_test.js](https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/demo/rate_limit_test.js)

---

## 🚀 API initialization

```JS
import { MexcClient } from './MexcClient.js';

const client = new MexcClient({
  apiKey: 'YOUR_API_KEY',
  isTestnet: false,
  proxy: 'socks5://user:pass@127.0.0.1:1080', // socks5://user:pass@host:port || http://user:pass@host:port
});
```

## 💥 Create Order Example

```JS
import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const order = await client.createOrder({
  symbol: 'BTC_USDT',
  type: 5,
  side: 1,
  openType: 2,
  vol: 15,
  leverage: 25
});
```

---


## 💼 Available Methods

| Method | Description |
|--------|-------------|
| [**getAssets**](/docs/methods/getAssets.md) | Get all informations of user's asset |
| [**getAsset**](/docs/methods/getAsset.md) | Get the user's single currency asset information |
| [**getAssetTransferRecords**](/docs/methods/getAssetTransferRecords.md) | Get the user's asset transfer records |
| [**getPositionsHistory**](/docs/methods/getPositionsHistory.md) | Get the user’s history position information |
| [**getOpenPositions**](/docs/methods/getOpenPositions.md) | Get the user's current holding position |
| [**getOpenOrders**](/docs/methods/getOpenOrders.md) | Get the user's current pending order |
| [**getOrdersHistory**](/docs/methods/getOrdersHistory.md) | Get all of the user's historical orders |
| [**createOrder**](/docs/methods/createOrder.md) | Create order |
| [**cancelOrders**](/docs/methods/cancelOrders.md) | Cancel the orders |
| [**cancelAllOrders**](/docs/methods/cancelAllOrders.md) | Cancel all uncompleted orders under a contract |
| [**cancelOrderWithExternalId**](/docs/methods/cancelOrderWithExternalId.md) | Cancel the order according to the external order ID |
| [**getTriggerOrders**](/docs/methods/getTriggerOrders.md) | Gets the trigger order list |
| [**createTriggerOrder**](/docs/methods/createTriggerOrder.md) | Trigger order |
| [**cancelTriggerOrders**](/docs/methods/cancelTriggerOrders.md) | Cancel the trigger order |
| [**cancelAllTriggerOrders**](/docs/methods/cancelAllTriggerOrders.md) | Cancel all trigger orders |
| [**getStopLimitOrders**](/docs/methods/getStopLimitOrders.md) | Get the Stop-Limit order list |
| [**cancelStopLimitOrders**](/docs/methods/cancelStopLimitOrders.md) | Cancel the Stop-Limit trigger order |
| [**cancelAllStopLimitOrders**](/docs/methods/cancelAllStopLimitOrders.md) | Cancel all Stop-Limit price trigger orders |
| [**getRiskLimits**](/docs/methods/getRiskLimits.md) | Get risk limits |
| [**changeMargin**](/docs/methods/changeMargin.md) | Increase or decrease margin |
| [**getLeverage**](/docs/methods/getLeverage.md) | Get leverage |
| [**changeLeverage**](/docs/methods/changeLeverage.md) | Switch leverage |
| [**getPositionMode**](/docs/methods/getPositionMode.md) | Get position mode |
| [**changePositionMode**](/docs/methods/changePositionMode.md) | Change position mode |
| [**closeAllPositions**](/docs/methods/closeAllPositions.md) | Close all positions |

---

## ▶ Live preview: placing and cancelling a futures order

<video src="https://github.com/user-attachments/assets/d51a6a12-a596-440e-bc3c-147ef8aad5b0" align="center">
  <a href="https://www.youtube.com/shorts/wMQ-Iq3xHHQ">👀 Watch Live Preview</a>
</video>

## 💌 Contact me

<a href="https://t.me/aptyp4uk1337_bot"><img src="https://img.shields.io/badge/Telegram-2CA5E0?logo=telegram&logoColor=white" title="Telegram"></a>
<a href="mailto:aptyp4uk1337@gmail.com?subject=MEXC API Bypass"><img src="https://img.shields.io/badge/Gmail-D14836?logo=gmail&logoColor=white" title="Email"></a>
