import { MexcBypass } from '../../src/MexcBypass.js';

const api = new MexcBypass('YOUR_API_KEY', false);

const customer = await api.getCustomerInfo();

console.log(customer);