import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const result = await client.changeLeverage({
  positionId: 1337,
  leverage: 15
});

console.log(result);