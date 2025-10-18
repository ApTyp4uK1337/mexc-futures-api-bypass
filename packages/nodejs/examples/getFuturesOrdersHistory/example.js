import { MexcBypass } from '../../src/MexcBypass.js';

const mexc = new MexcBypass('YOUR_API_KEY', false);

const orders = await mexc.getFuturesOrdersHistory({
  symbol: null
});

console.log(orders);