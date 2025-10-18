import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const result = await client.cancelStopLimitOrders({
  ids: ["1", "2"]
});

console.log(result);