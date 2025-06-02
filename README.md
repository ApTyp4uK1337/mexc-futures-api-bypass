<div align="center">
   <img src="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/assets/mexc-logo.png?raw=true" height="150" width="150">

  ![License: Proprietary](https://img.shields.io/badge/license-proprietary-red)
  ![Private Code](https://img.shields.io/badge/source-private-orange)
  ![Paid Access](https://img.shields.io/badge/access-paid-blue)
</div>

<h1>🔷 MEXC Futures API Bypass</h1>

This unofficial MEXC Futures API library bypasses current maintenance restrictions in the official endpoints, allowing full trading and account access even when some routes are marked "[Under maintenance](https://mexcdevelop.github.io/apidocs/contract_v1_en/#order-under-maintenance)".

> ⚠️ **Note:** The source code of the library is not distributed openly. You can get access by contacting me on Telegram: [@aptyp4uk1337_bot](https://t.me/aptyp4uk1337_bot)

<div align="center">
  <img src="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/assets/preview.gif?raw=true" title="Telegram">
</div>

> **Demo file:** [./demo/app.js](https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/demo/app.js)

---

<h2>🎖 Features</h2>

- Blazing fast
- No third-party requests
- Works on mainnet & testnet
- Fully open source
- Compatible with any programming language
- Simple Python & Node.js library

---

<h2>❓ FAQ</h2>

> Does it fully support placing, cancelling, and tracking all types of futures orders?
- Yes, including market, limit, stop-limit, and trigger orders.

> How many orders can be sent per second, per minute, per day?
- See the [Results of the Rate Limit Test](#-rate-limit-test) for 200 queries.

> Can the bypass API fetch account info, open positions, and adjust leverage/margin?
- Yes. For more info, look at [available methods](#-available-methods) section.

> Is the library provided as open source or as compiled/obfuscated code?
- Currently, everything is open-sourced, nothing is obfuscated.

> Can the library be used with multiple accounts, or is the authentication tied to a single one?
- No limitation on number of accounts.

> Does it use anything third-party to make those requests?
- No.

> Will I get a risk control ban for using the library?
- In my experience - no. But if you get banned, write to me so I can update this point.


---

<h2>⏱️ Rate Limit Test</h2>

<div align="center">
  <img src="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/assets/rate-limit-test.png?raw=true" title="Telegram">
</div>

> **Demo file:** [./demo/rate_limit_test.js](https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/demo/rate_limit_test.js)

---

<h2>💥 Create Order Example</h2>

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


<h2>💼 Available Methods</h2>

<table style="width:100%">
  <thead>
    <tr>
      <th align="left">Name</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/getAssets.md"><strong>getAssets</strong></a></td>
      <td>Get all informations of user's asset</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/getAsset.md"><strong>getAsset</strong></a></td>
      <td>Get the user's single currency asset information</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/getAssetTransferRecords.md"><strong>getAssetTransferRecords</strong></a></td>
      <td>Get the user's asset transfer records</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/getPositionsHistory.md"><strong>getPositionsHistory</strong></a></td>
      <td>Get the user’s history position information</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/getOpenPositions.md"><strong>getOpenPositions</strong></a></td>
      <td>Get the user's current holding position</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/getOpenOrders.md"><strong>getOpenOrders</strong></a></td>
      <td>Get the user's current pending order</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/getOrdersHistory.md"><strong>getOrdersHistory</strong></a></td>
      <td>Get all of the user's historical orders</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/createOrder.md"><strong>createOrder</strong></a></td>
      <td>Create order</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/cancelOrders.md"><strong>cancelOrders</strong></a></td>
      <td>Cancel the orders</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/cancelAllOrders.md"><strong>cancelAllOrders</strong></a></td>
      <td>Cancel all uncompleted orders under a contract</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/cancelOrderWithExternalId.md"><strong>cancelOrderWithExternalId</strong></a></td>
      <td>Cancel the order according to the external order ID</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/getTriggerOrders.md"><strong>getTriggerOrders</strong></a></td>
      <td>Gets the trigger order list</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/createTriggerOrder.md"><strong>createTriggerOrder</strong></a></td>
      <td>Trigger order</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/cancelTriggerOrders.md"><strong>cancelTriggerOrders</strong></a></td>
      <td>Cancel the trigger order</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/cancelAllTriggerOrders.md"><strong>cancelAllTriggerOrders</strong></a></td>
      <td>Cancel all trigger orders</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/getStopLimitOrders.md"><strong>getStopLimitOrders</strong></a></td>
      <td>Get the Stop-Limit order list</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/cancelStopLimitOrders.md"><strong>cancelStopLimitOrders</strong></a></td>
      <td>Cancel the Stop-Limit trigger order</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/cancelAllStopLimitOrders.md"><strong>cancelAllStopLimitOrders</strong></a></td>
      <td>Cancel all Stop-Limit price trigger orders</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/getRiskLimits.md"><strong>getRiskLimits</strong></a></td>
      <td>Get risk limits</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/changeMargin.md"><strong>changeMargin</strong></a></td>
      <td>Increase or decrease margin</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/getLeverage.md"><strong>getLeverage</strong></a></td>
      <td>Get leverage</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/changeLeverage.md"><strong>changeLeverage</strong></a></td>
      <td>Switch leverage</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/getPositionMode.md"><strong>getPositionMode</strong></a></td>
      <td>Get position mode</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/changePositionMode.md"><strong>changePositionMode</strong></a></td>
      <td>Change position mode</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/closeAllPositions.md"><strong>closeAllPositions</strong></a></td>
      <td>Close all positions</td>
    </tr>
  </tbody>
</table>


---

## ▶ Live preview: placing and cancelling a futures order

<video src="https://github.com/user-attachments/assets/d51a6a12-a596-440e-bc3c-147ef8aad5b0" align="center">
  <a href="https://github.com/user-attachments/assets/d51a6a12-a596-440e-bc3c-147ef8aad5b0">👀 Watch Live Preview</a>
</video>

## 💌 Contact me

<a href="https://t.me/aptyp4uk1337_bot"><img src="https://img.shields.io/badge/Telegram-2CA5E0?logo=telegram&logoColor=white" title="Telegram"></a>
