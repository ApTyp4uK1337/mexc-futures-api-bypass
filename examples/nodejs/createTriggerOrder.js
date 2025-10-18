import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const order = await client.createTriggerOrder({
  symbol: 'BTC_USDT',
  vol: 15,
  leverage: 25,
  side: 1,
  openType: 2,
  triggerPrice: 95000.00,
  triggerType: 1,
  executeCycle: 1,
  orderType: 5,
  trend: 2
});

console.log(order);