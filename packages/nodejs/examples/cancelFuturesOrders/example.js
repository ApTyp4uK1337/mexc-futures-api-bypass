import { MexcBypass } from '../../src/MexcBypass.js';

const mexc = new MexcBypass('YOUR_API_KEY', false);

const result = await mexc.cancelFuturesOrders({
  ids: [
    1337,
    7331
  ]
});

console.log(result);