import { MexcBypass } from '../../src/MexcBypass.js';

const mexc = new MexcBypass('YOUR_API_KEY', false);

const assets = await mexc.getFuturesAssetsTransferRecords();

console.log(assets);

const asset = await mexc.getFuturesAssetsTransferRecords({
  currency: 'ETH'
});

console.log(asset);