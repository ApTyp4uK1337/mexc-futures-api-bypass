import { MexcClient } from './MexcClient.js';

const client = new MexcClient({ apiKey: 'YOUR_API_KEY', isTestnet: true });

const assets = await client.getAssetTransferRecords();

console.log(assets);