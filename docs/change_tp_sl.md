# 🛑 Change Order Take Profit Price & Stop Loss Price

The methods that the MEXC exchange provides by default are not relevant over a long distance. Apparently, MEXC changes the order ID after changing it, but does not return a new ID. Therefore, repeated order changes are impossible.

At the same time, when receiving a list of open orders, you will see the current order with the same ID and a new TP/SL, but when calling the same order individually by ID, you will see the previous TP/SL.

To get around these limitations, we have developed our own workaround, which consists of several steps.

### 📘 Required Methods

1. [`getFuturesOpenOrders`](/docs/methods/getFuturesOpenOrders.md)  
   Returns the "valid" order ID in the MEXC system.:
   - `id`

2. [`changeFuturesOrderTargets`](/docs/methods/changeFuturesOrderTargets.md)  
   Allows you to update TP/SL an unlimited number of times using the real order ID.