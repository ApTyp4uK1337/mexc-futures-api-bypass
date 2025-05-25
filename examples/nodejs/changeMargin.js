import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const result = await client.changeMargin({
  positionId: 1337,
  amount: 15,
  type: "ADD"
});

console.log(result);