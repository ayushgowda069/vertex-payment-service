const { processPayment } = require('../payment');

module.exports = async (req, res) => {
  try {
    const { amount, currency, cardToken } = req.body;
    const userId = req.user?.id;
    if (!amount || !currency || !cardToken) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const result = await processPayment({ amount, currency, cardToken, userId });
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
