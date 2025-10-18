import { MexcBypass } from '../../src/MexcBypass.js';

const mexc = new MexcBypass('YOUR_API_KEY', false);

const customer = await mexc.getCustomerInfo();

console.log(customer);