# 🧮 Futures Volume Calculation Guide

This guide explains how to calculate the volume (`vol`) for placing a futures order on MEXC using the **MEXC Futures API Bypass**.  
It combines data from the following API methods:

### 📘 Required Methods

1. [`getFuturesContracts`](/docs/methods/getFuturesContracts.md)  
   Returns key trading information for each contract, including:
   - `contractSize`
   - `volScale`
   - `minVol`
   - `maxVol`

2. [`getFuturesTickers`](/docs/methods/getFuturesTickers.md)  
   Provides real-time market data, including:
   - `lastPrice`
   - `indexPrice`
   - `fairPrice`

> 💡 In most cases, `lastPrice` is used for volume calculations.

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