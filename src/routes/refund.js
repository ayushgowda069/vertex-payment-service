const { processRefund } = require('../payment');

module.exports = async (req, res) => {
  try {
    const { transactionId, amount, reason } = req.body;
    if (!transactionId) return res.status(400).json({ error: 'transactionId required' });
    const result = await processRefund({ transactionId, amount, reason });
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
