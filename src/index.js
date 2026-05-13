const express = require('express');
const cors = require('cors');
const { processPayment, processRefund } = require('./src/payment');
const chargeRouter = require('./src/routes/charge');
const refundRouter = require('./src/routes/refund');
const { authMiddleware } = require('./src/middleware/auth');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/payment/charge', authMiddleware, chargeRouter);
app.use('/payment/refund', authMiddleware, refundRouter);

app.get('/health', (req, res) => res.json({ status: 'ok', service: 'vertex-payment-service' }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Payment service running on port ${PORT}`));

module.exports = app;
