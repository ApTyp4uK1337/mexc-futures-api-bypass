# 🛑 Change Order Take Profit Price & Stop Loss Price

The methods that the MEXC exchange provides by default are not relevant over a long distance. Apparently, MEXC changes the order ID after changing it, but does not return a new ID. Therefore, repeated order changes are impossible.

At the same time, when receiving a list of open orders, you will see the current order with the same ID and a new TP/SL, but when calling the same order individually by ID, you will see the previous TP/SL.

To get around these limitations, we have developed our own workaround, which consists of several steps.

### 📘 Required Methods

1. [`getFuturesOpenOrders`](/docs/methods/getFuturesOpenOrders.md)  
   Returns the "valid" order ID in the MEXC system.:
   - `id`

2. [`changeFuturesOrder`](/docs/methods/changeFuturesOrder.md)  
   Allows you to update TP/SL an unlimited number of times using the real order ID.

---

### 🔢 Volume Calculation Formula

```text
vol = (usdtAmount * leverage) / (lastPrice * contractSize)
```

- `usdtAmount` — Your input amount in USDT.
- `leverage` — Desired leverage for the position.
- `lastPrice` — Current market price of the contract.
- `contractSize` — The size of one contract for the trading pair.

---

### ✅ Volume Precision & Limits

After calculating `vol`, you must ensure it adheres to the pair-specific requirements:

- **`minVol`** — Minimum allowed volume (usually `1` for most pairs).
- **`maxVol`** — Maximum allowed volume for the contract.
- **`volScale`** — Number of decimal places allowed:
  - `0` means only whole numbers (e.g. `5`, `12`)
  - `2` allows values like `0.25`, `3.50`, etc.

> ❗ Always round the `vol` to match the `volScale` and ensure it is within the `minVol`–`maxVol` range before submitting your order.