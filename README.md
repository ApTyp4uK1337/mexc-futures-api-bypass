<div align="center">
   <img src="/assets/mexc-logo.png" height="150" width="150">

  ![License: Proprietary](https://img.shields.io/badge/license-proprietary-red)
  ![Private Code](https://img.shields.io/badge/source-private-orange)
  ![Paid Access](https://img.shields.io/badge/subscription-available-yellow)
  ![Paid Access](https://img.shields.io/badge/access-paid-blue)
</div>

<div align="center">
  <a href="/packages/php"><img src="https://img.shields.io/badge/php-%23777BB4.svg?&logo=php&logoColor=white" alt="PHP"></a>
  <a href="/packages/python"><img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white" alt="Python"></a>
  <a href="/packages/nodejs"><img src="https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white" alt="Node.js"></a>
</div>

# 🔷 MEXC Futures API Bypass

This unofficial MEXC Futures API library bypasses current maintenance restrictions in the official endpoints, allowing full trading and account access even when some routes are marked "[Under maintenance](https://mexcdevelop.github.io/apidocs/contract_v1_en/#order-under-maintenance)".

> [!NOTE]
> The source code of the library is not distributed openly. You can get access by contacting me on Telegram: [@aptyp4uk1337_bot](https://t.me/aptyp4uk1337_bot)

### 🔴 Live Demo

You can test the opening of a position yourself: https://mexc-bypass.xyz/

<div align="center">
  <img src="/assets/preview.gif" title="Telegram">
</div>

> **Demo file:** [./demo/app.js](/main/demo/app.js)


---

## 🎖 Features

- Blazing fast
- No third-party requests
- Works on mainnet & testnet
- Multi-accounting and proxy support
- Compatible with any programming language
- Simple PHP, Python & Node.js library
- Free updates

---

### 💳 Pricing

| Option          | Price      | Duration         | Includes                        |
|-----------------|------------|------------------|----------------------------------|
| 🔓 Subscription | $45 | 30 days          | Full access to all methods + updates |
| 💾 Source Code  | $175 | Lifetime (one-time) | Full source, no limits, no expiration |

📬 [Contact me on Telegram](https://t.me/aptyp4uk1337_bot?text=%F0%9F%91%8B%20Hi%2C%20I%20am%20writing%20regarding%20the%20acquisition%20of%20MEXC%20Futures%20API.)

---

### ❓ FAQ

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
- In my experience - no. For more information on risk control, see here 🛡️ [Risk Control on MEXC](/docs/risk_control_en.md).


---

### ⏱️ Rate Limit Test

<div align="center">
  <img src="/assets/rate-limit-test.png" title="Telegram">
</div>

> **Demo file:** [./demo/rate_limit_test.js](/demo/rate_limit_test.js)

---

### 🚀 API initialization

```JS
import { MexcClient } from './MexcClient.js';

const client = new MexcClient({
  apiKey: 'YOUR_API_KEY',
  isTestnet: false,
  proxy: 'socks5://user:pass@127.0.0.1:1080', // socks5://user:pass@host:port || http://user:pass@host:port
});
```

### 💥 Create Order Example

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


### 📖 Available Methods

The library supports **30+ endpoints** including:

- Placing, modifying and cancelling orders (market, limit, trigger, stop-limit)
- Accessing wallet and asset data
- Managing open positions, leverage and margin
- Retrieving contract info and price feeds

📚 **[Full method documentation](/docs#-available-methods)** is available in `/docs/methods/`

---

### ▶ Live preview: placing and cancelling a futures order

<video src="https://github.com/user-attachments/assets/d51a6a12-a596-440e-bc3c-147ef8aad5b0" align="center">
  👀 <a href="https://www.youtube.com/shorts/wMQ-Iq3xHHQ">Watch Live Preview</a>
</video>

### 💌 Contact me

<a href="https://t.me/aptyp4uk1337_bot"><img src="https://img.shields.io/badge/Telegram-2CA5E0?logo=telegram&logoColor=white" title="Telegram"></a>
<a href="discord://-/users/841963614398578708/"><img src="https://img.shields.io/badge/Discord-%235865F2.svg?&logo=discord&logoColor=white" title="Discord"></a>
<a href="mailto:aptyp4uk1337@gmail.com?subject=MEXC API Bypass"><img src="https://img.shields.io/badge/Gmail-D14836?logo=gmail&logoColor=white" title="Email"></a>
