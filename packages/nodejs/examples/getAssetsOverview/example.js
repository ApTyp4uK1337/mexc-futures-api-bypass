import { MexcBypass } from '../../src/MexcBypass.js';

const mexc = new MexcBypass('YOUR_API_KEY', false);

const overview = await mexc.getAssetsOverview();

console.log(overview);

const converted = await mexc.getAssetsOverview({
  'convert': true
});

console.log(converted);