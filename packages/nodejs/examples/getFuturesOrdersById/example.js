import { MexcBypass } from '../../src/MexcBypass.js';

const api = new MexcBypass('YOUR_API_KEY', false);

const order = await api.getFuturesOrdersById({
  ids: [
    '1337'
  ]
});

console.log(order);