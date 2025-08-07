import { MexcBypass } from '../../src/MexcBypass.js';

const mexc = new MexcBypass('YOUR_API_KEY', false);

const contract = await mexc.getFuturesContracts({
  symbol: 'BTC_USDT'
});

console.log(contract);