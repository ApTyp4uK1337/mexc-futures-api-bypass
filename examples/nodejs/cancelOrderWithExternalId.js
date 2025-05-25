import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const result = await client.cancelOrderWithExternalId({
  symbol: "BTC_USDT",
  externalOid: "mexc-a-001"
});

console.log(result);