import { MexcBypass } from '../../src/MexcBypass.js';

const mexc = new MexcBypass('YOUR_API_KEY', false);

const referrals = await mexc.getReferralsList();

console.log(referrals);