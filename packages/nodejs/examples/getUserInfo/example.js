import { MexcBypass } from '../../src/MexcBypass.js';

const api = new MexcBypass('YOUR_API_KEY', false);

const user = await api.getUserInfo();

console.log(user);