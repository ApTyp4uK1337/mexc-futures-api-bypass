import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const leverage = await client.getLeverage({
  symbol: 'BTC_USDT'
});

console.log(leverage);