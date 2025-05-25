<h1>MEXC Futures API bypass</h1>

This API is for making requests that have been marked as `Under maintenance` in [MEXC API docs](https://mexcdevelop.github.io/apidocs/contract_v1_en/#order-under-maintenance).


---


<h2>FAQ</h2>

> Does it fully support placing, cancelling, and tracking all types of futures orders (market, limit, stop-limit, etc.)?
- Yes. For more info, look at [available methods](#available-methods) section.

> Can the bypass API fetch account info, open positions, and adjust leverage/margin?
- Yes. For more info, look at [available methods](#available-methods) section.

> Is the library provided as open source or as compiled/obfuscated code?
- Currently, everything is open-sourced, nothing is obfuscated.

> Can the library be used with multiple accounts, or is the authentication tied to a single one?
- No limitation on number of accounts.

> Does it use anything third-party to make those requests?
- No.


---


<h2>Available Methods</h2>

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
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/createOrder.md"><strong>createOrder (Bypassed)</strong></a></td>
      <td>Create order</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/cancelOrders.md"><strong>cancelOrders (Bypassed)</strong></a></td>
      <td>Cancel the orders</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/cancelAllOrders.md"><strong>cancelAllOrders (Bypassed)</strong></a></td>
      <td>Cancel all uncompleted orders under a contract</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/cancelOrderWithExternalId.md"><strong>cancelOrderWithExternalId (Bypassed)</strong></a></td>
      <td>Cancel the uncompleted order under a contract according to the specified externalOid, only 1 order for each cancellation.</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/getTriggerOrders.md"><strong>getTriggerOrders</strong></a></td>
      <td>Gets the trigger order list</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/createTriggerOrder.md"><strong>createTriggerOrder (Bypassed)</strong></a></td>
      <td>Trigger order</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/cancelTriggerOrders.md"><strong>cancelTriggerOrders (Bypassed)</strong></a></td>
      <td>Cancel the trigger order</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/cancelAllTriggerOrders.md"><strong>cancelAllTriggerOrders (Bypassed)</strong></a></td>
      <td>Cancel all trigger orders</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/getStopLimitOrders.md"><strong>getStopLimitOrders (Bypassed)</strong></a></td>
      <td>Get the Stop-Limit order list</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/cancelStopLimitOrders.md"><strong>cancelStopLimitOrders (Bypassed)</strong></a></td>
      <td>Cancel the Stop-Limit trigger order</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/docs/cancelAllStopLimitOrders.md"><strong>cancelAllStopLimitOrders (Bypassed)</strong></a></td>
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


<img src="https://github.com/ApTyp4uK1337/mexc-futures-api-bypass/blob/main/assets/preview.gif?raw=true" align="center"/>


## Questions?
<a href="https://t.me/aptyp4uk1337"><img src="https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" title="Telegram"></a>