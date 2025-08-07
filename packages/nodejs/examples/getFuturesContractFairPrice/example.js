import { MexcBypass } from '../../src/MexcBypass.js';

const mexc = new MexcBypass('YOUR_API_KEY', false);

const price = await mexc.getFuturesContractFairPrice({
  symbol: 'BTC_USDT'
});

console.log(price);