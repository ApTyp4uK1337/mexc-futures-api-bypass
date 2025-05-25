import { createOrder } from './api-bypass.js';

try {
  const order = await createOrder({
    symbol: 'BTC_USDT',
    vol: 10,
    leverage: 15,
    side: 1,
    openType: 2,
    type: 5,
    takeProfitPrice: null,
    stopLossPrice: null,
    positionMode: 1,
    reduceOnly: false,
    is_testnet: true
  });

  console.log(order);
} catch (error) {
  console.log(error);
}