const { processPayment, processRefund, SUPPORTED_CURRENCIES } = require('../src/payment');

describe('processPayment', () => {
  it('returns success with valid params', async () => {
    const result = await processPayment({ amount: 100, currency: 'USD', cardToken: 'tok_test', userId: 'u1' });
    expect(result.success).toBe(true);
    expect(result.transactionId).toBeDefined();
  });

  it('throws on unsupported currency', async () => {
    await expect(processPayment({ amount: 10, currency: 'XYZ', cardToken: 'tok_test' })).rejects.toThrow();
  });

  it('throws on zero amount', async () => {
    await expect(processPayment({ amount: 0, currency: 'USD', cardToken: 'tok_test' })).rejects.toThrow();
  });
});

describe('processRefund', () => {
  it('returns refund object with valid transactionId', async () => {
    const result = await processRefund({ transactionId: 'txn_123', amount: 50, reason: 'test' });
    expect(result.success).toBe(true);
    expect(result.refundId).toBeDefined();
  });
});
