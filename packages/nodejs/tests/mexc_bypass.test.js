import { MexcBypass } from '../src/MexcBypass.js';

const config = {
  apiKey: 'YOUR_API_KEY',
  isTestnet: true,
  proxyUrl: null,
  testSymbol: 'BTC_USDT'
};

function roundToStep(value, step) {
  const inverse = 1.0 / step;
  return Math.floor(value * inverse + 0.5) / inverse;
}

async function runTests() {
  const mexc = new MexcBypass(config.apiKey, config.isTestnet, config.proxyUrl);

  try {
    console.log('=== Starting MexcBypass Tests ===');

    console.log('\n1. Testing server time:');
    const serverTime = await mexc.getServerTime();
    console.log('Server Time:', serverTime);

    console.log('\n2. Testing user info:');
    const userInfo = await mexc.getUserInfo();
    console.log('User Info:', userInfo);

    console.log('\n3. Testing balance info:');
    const assets = await mexc.getFuturesAssets();
    console.log('Futures Assets:', assets);

    console.log('\n4. Testing contract info:');
    const contract = await mexc.getFuturesContracts({ symbol: config.testSymbol });
    console.log('Contract Info:', contract);

    const priceScale = contract.data?.[0]?.priceUnit || 0.1;
    const volScale = contract.data?.[0]?.volScale || 0;

    console.log('\n5. Testing current price:');
    const ticker = await mexc.getFuturesTickers({ symbol: config.testSymbol });
    console.log('Ticker:', ticker);
    const currentPrice = ticker.data?.lastPrice;

    if (!currentPrice) {
      throw new Error('Failed to get current price');
    }

    console.log('\n6. Testing limit order creation:');
    const rawOrderPrice = currentPrice * 0.9;
    const orderPrice = roundToStep(rawOrderPrice, priceScale).toFixed(volScale);
    const createOrderRes = await mexc.createFuturesOrder({
      symbol: config.testSymbol,
      price: orderPrice,
      type: 1,
      openType: 2,
      positionMode: 1,
      side: 1,
      vol: 1,
      leverage: 10
    });
    console.log('Create Order Result:', createOrderRes);

    const orderId = createOrderRes.data.orderId;
    if (!orderId) {
      throw new Error('Failed to create order');
    }

    console.log('\n7. Testing order info:');
    const orderInfo = await mexc.getFuturesOrdersById({ ids: orderId });
    console.log('Order Info:', orderInfo);

    console.log('\n8. Testing order cancellation:');
    const cancelRes = await mexc.cancelFuturesOrders({ ids: [orderId] });
    console.log('Cancel Order Result:', cancelRes);

    console.log('\n9. Testing trigger order creation:');
    const rawTriggerPrice = currentPrice * 1.1;
    const triggerPrice = roundToStep(rawTriggerPrice, priceScale).toFixed(volScale);
    const triggerOrderRes = await mexc.createFuturesTriggerOrder({
      symbol: config.testSymbol,
      price: orderPrice,
      vol: 1,
      leverage: 10,
      side: 2,
      openType: 2,
      triggerPrice: triggerPrice,
      triggerType: 1,
      executeCycle: 1,
      orderType: 1,
      trend: 1
    });
    console.log('Trigger Order Result:', triggerOrderRes);

    const triggerOrderId = triggerOrderRes.data;

    if (!triggerOrderId) {
      throw new Error('Failed to create trigger order');
    }

    console.log('\n10. Testing trigger order cancellation:');
    const cancelTriggerRes = await mexc.cancelFuturesTriggerOrders({ ids: [triggerOrderId] });
    console.log('Cancel Trigger Order Result:', cancelTriggerRes);

    console.log('\n11. Testing open positions:');
    const positions = await mexc.getFuturesOpenPositions({ symbol: config.testSymbol });
    console.log('Open Positions:', positions);

    console.log('\n12. Testing leverage change:');
    if (positions.data && positions.data.length > 0) {
      const positionId = positions.data[0].positionId;
      const changeLeverageRes = await mexc.changeFuturesPositionLeverage({
        positionId: positionId,
        leverage: 10 + 1,
        openType: 2,
        symbol: config.testSymbol,
        positionType: 1
      });
      console.log('Change Leverage Result:', changeLeverageRes);
    } else {
      console.log('No open positions to change leverage');
    }

    console.log('\n=== All tests completed successfully ===');
  } catch (error) {
    console.error('\n=== Error during testing ===');
    console.error('Error:', error.message);
    console.error('Stack:', error.stack);
  }
}

runTests();