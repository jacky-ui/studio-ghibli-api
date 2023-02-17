const rateLimit = require('express-rate-limit');

const rateLimiterUsingThirdParty = rateLimit({
  windowMs: 15 * 60 * 60 * 1000, // 24 hrs in milliseconds
  max: 2,
  message: 'You have exceeded the 100 requests in 24 hrs limit!', 
  standardHeaders: true,
  legacyHeaders: false,
});

// export { default as errorHandler } from './errorHandler';
// export { rateLimiterUsingThirdParty } from './rateLimiter';
module.exports = rateLimiterUsingThirdParty;