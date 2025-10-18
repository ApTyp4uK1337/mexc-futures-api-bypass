import { MexcBypass } from '../../src/MexcBypass.js';

const mexc = new MexcBypass('YOUR_API_KEY', false);

const order = await mexc.getFuturesOrdersById({
  ids: [
    '1337'
  ]
});

console.log(order);