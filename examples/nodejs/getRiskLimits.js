import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const riskLimits = await client.getRiskLimits();

console.log(riskLimits);