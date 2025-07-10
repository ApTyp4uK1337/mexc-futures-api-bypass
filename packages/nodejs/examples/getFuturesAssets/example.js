import { MexcBypass } from '../../src/MexcBypass.js';

const api = new MexcBypass('YOUR_API_KEY', false);

const assets = await api.getFuturesAssets();

console.log(assets);

const asset = await api.getFuturesAssets({
  currency: 'ETH'
});

console.log(asset);