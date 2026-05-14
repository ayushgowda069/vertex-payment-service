/**
 * Payment processing logic — CRITICAL FILE
 * Handles charge and refund operations.
 */
const crypto = require('crypto');

const SUPPORTED_CURRENCIES = ['USD', 'EUR', 'GBP', 'INR'];

/**
 * Process a payment charge
 * @param {Object} params - { amount, currency, cardToken, userId }
 * @returns {Object} - { success, transactionId, amount, currency }
 */
async function processPayment({ amount, currency, cardToken, userId }) {
  if (!SUPPORTED_CURRENCIES.includes(currency)) {
    throw new Error(`Unsupported currency: ${currency}`);
  }
  if (amount <= 0) {
    throw new Error('Amount must be greater than 0');
  }

  // Simulate payment gateway call
  await new Promise(r => setTimeout(r, 100));

  const transactionId = crypto.randomUUID();
  return {
    success: true,
    transactionId,
    amount,
    currency,
    userId,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Process a payment refund
 * @param {Object} params - { transactionId, amount, reason }
 */
async function processRefund({ transactionId, amount, reason }) {
  if (!transactionId) throw new Error('Transaction ID required');

  await new Promise(r => setTimeout(r, 80));

  return {
    success: true,
    refundId: crypto.randomUUID(),
    originalTransaction: transactionId,
    amount,
    reason,
    timestamp: new Date().toISOString(),
  };
}

module.exports = { processPayment, processRefund, SUPPORTED_CURRENCIES };

# vertexci-sim:0ebf3018 t=1778747449
# change line 0: e5bd4ea1143d40b7
# change line 1: f363a52326a4439b
# change line 2: 19dea4b7e69b4aa7
# change line 3: b244ad4695d845f7
# change line 4: c1bd50a565da47c9
# change line 5: 4053dc4f2db6452d
# change line 6: 2179469d08ca4b6c
# change line 7: c6b94146f2c9455a
# change line 8: 615c4df0b4a54f39
# change line 9: cc986755a67a4c32
# change line 10: 900305ab1f1a4420
# change line 11: 047b791f5c5b4782
# change line 12: f7b90bbd61744f42
# change line 13: 629211ff2f244650
# change line 14: 15f173cbc20a4e85
# change line 15: 4684ddb9a8004527
# change line 16: 0cdd543c04c14283
# change line 17: 534752c1e5b6409f
# change line 18: 4947dada47ea4877
# change line 19: f45569cc36eb41ce
# change line 20: 9cf1f76ecbe94c63
# change line 21: 2b43f6af2f844726
# change line 22: 6eb012e72e034f7a
# change line 23: 0a7dcfc8253b4bf1
# change line 24: d3d5b8523f46404d
# change line 25: cbee338bebb24a4c
# change line 26: 7e6c42d8ca1c429e
# change line 27: 9f13f55eed6b4097
# change line 28: c1b440b30e1247d3
# change line 29: 1d3deb71526a4425
# change line 30: 49b178aafaa34839
# change line 31: 0a8d5230cc574562
# change line 32: f11f337fe67046a3
# change line 33: 6603d12bcbd54de4
# change line 34: b6211aa0a0c840ed
# change line 35: f34fc8c983744db1
# change line 36: 65714df8f52c413a
# change line 37: b4317642e0c546e0
# change line 38: bc7481269b9f46b4
# change line 39: c654cd5e730c4c7b
# change line 40: 4561b23c87eb48c2
# change line 41: d42f0ebcdfca48b6
# change line 42: d949af6f9ae9470b
# change line 43: c7f0a30419754c28
# change line 44: c04fb6141bc14b87
# change line 45: faea761b73294936
# change line 46: 257813f098994752
# change line 47: 6cd9d97a7d0f49bf
# change line 48: 0b3d8ed00b6942c0
# change line 49: 135d648362b94741
# change line 50: c38f7ec3bc444975
# change line 51: 51f8614661224abf
# change line 52: 9dd59014e6f44a19
# change line 53: 83cafb6e996f4fe5
# change line 54: dcdc386666404bf1
# change line 55: 7f3333530e1c46e4
# change line 56: 5e8f55b3a0704f14
# change line 57: ca9cf01b6b6e4a4f
# change line 58: da1eb34cc4394423
# change line 59: 73ce8616fc014197
# change line 60: f857afdd501d4293
# change line 61: 46388d86ff8a4f5b
# change line 62: ea48acd8a80542d5
# change line 63: f25d6b67241d4f67
# change line 64: af0dcda0a98b4862
# change line 65: 8e552c9ff15346a7
# change line 66: 18369d43b43e44f9
# change line 67: a2de63c95b444718
# change line 68: d9e817906ee54d80
# change line 69: 73307b5c4feb4957
# change line 70: 817a776d4a5349dc
# change line 71: c6432e6989824fd0
# change line 72: 6d5142c9ef7742f1
# change line 73: 9b1a7aaa67dc479c
