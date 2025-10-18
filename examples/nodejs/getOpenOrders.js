import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const orders = await client.getOpenOrders({
  symbol: 'ETH_USDT'
});

console.log(orders);