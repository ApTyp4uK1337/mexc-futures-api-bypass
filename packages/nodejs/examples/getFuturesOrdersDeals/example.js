import { MexcBypass } from '../../src/MexcBypass.js';

const mexc = new MexcBypass('YOUR_API_KEY', false);

const deals = await mexc.getFuturesOrdersDeals();

console.log(deals);