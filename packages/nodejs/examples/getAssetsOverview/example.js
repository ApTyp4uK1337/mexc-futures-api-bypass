import { MexcBypass } from '../../src/MexcBypass.js';

const api = new MexcBypass('YOUR_API_KEY', false);

const overview = await api.getAssetsOverview();

console.log(overview);

const converted = await api.getAssetsOverview({
  'convert': true
});

console.log(converted);