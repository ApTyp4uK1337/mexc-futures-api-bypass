import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const result = await client.cancelOrders({
  ids: ["101716841474621953", "108885377779302912", "108886241042563584"]
});

console.log(result);