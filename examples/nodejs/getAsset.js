import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const asset = await client.getAsset({
  currency: 'USDT'
});

console.log(asset);