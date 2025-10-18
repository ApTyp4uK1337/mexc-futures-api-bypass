import { MexcBypass } from '../../src/MexcBypass.js';

const mexc = new MexcBypass('YOUR_API_KEY', false);

const assets = await mexc.getFuturesAssets();

console.log(assets);

const asset = await mexc.getFuturesAssets({
  currency: 'ETH'
});

console.log(asset);