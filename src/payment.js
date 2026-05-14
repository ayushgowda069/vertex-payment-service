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

# vertexci-sim:a3e01fd0 t=1778747766
# change line 0: fbf0e7e493c642c5
# change line 1: e09522b7e08f46e0
# change line 2: 70e2dbd0e4a24d59
# change line 3: 22a96455ef2a46a8
# change line 4: b0d5340a36d24395
# change line 5: 88358a0369a94ddf
# change line 6: cf52fe46809b44e5
# change line 7: 3c1cef6e342e42e5
# change line 8: a8cc58cfa127484f
# change line 9: d943e3e4d3f24766
# change line 10: 34571e65e4fc4ad3
# change line 11: 86c04146cec74784
# change line 12: 9887024b0a4e46ef
# change line 13: 5c58a07e73bb4ebc
# change line 14: 9ee631433cee4b47
# change line 15: 24e2cc947a9b4d1b
# change line 16: bcc93a576e2e48ea
# change line 17: fb1f9151d65340eb
# change line 18: 747e63367637466e
# change line 19: 6e8045f90b244ddd
# change line 20: 34dfff151ac949fc
# change line 21: fd3d6e977cfb4d64
# change line 22: cbb5c097768841a1
# change line 23: 762564380b874c9a
# change line 24: 11df6445e37642b1
# change line 25: 6b767777e635482c
# change line 26: b4547ed774ce4557
# change line 27: 80a4ce3c75f940df
# change line 28: 2c22653df146421b
# change line 29: 7ad87bfcddb34cc1
# change line 30: c6bcbc7c787b4322
# change line 31: 86d19a9fb0af47a0
# change line 32: 663ad9392c4749df
# change line 33: 38ef53ed28b64057
# change line 34: 91897f5446054870
# change line 35: acbf82ee07ef4c8d
# change line 36: 7b34195833b0480e
# change line 37: 37f9f038a2354b8c
# change line 38: 43c07c6eda6e4875
# change line 39: bb4af80e17654153
# change line 40: fa3e9957ce1242ca
# change line 41: 8f65e7dcd1ba4b1c
# change line 42: 18c1e9730dcc4052
# change line 43: 4a03b131cb4a488c
# change line 44: c4465cfdb8154f3d
# change line 45: 1cbf4067b6574bcd
# change line 46: 1c61e6fc847d4f61
# change line 47: 8f1b3c765f004885
# change line 48: 2441fa0b4e8e4e1a
# change line 49: 7d8e444fe82e4795
# change line 50: 57f38cb6d15b4046
# change line 51: e8bedaebb14c492e
# change line 52: c689e9776ab041c2
# change line 53: 9b297dd8804142db
# change line 54: 652165932c484d96
# change line 55: 4deec6b5b40848db
# change line 56: e8a693d23dd944c6
# change line 57: 252bb3d30e9644d3
# change line 58: 52873c0ead554f66
# change line 59: a1d418c36fe74b79
# change line 60: 9aae355e5ac24aac
# change line 61: 8e7c8ddcad8a45bd
# change line 62: aaaba89cfb2844cd
# change line 63: 7fc22e9e030a454a
# change line 64: c98160299d314ab7
# change line 65: 4733e8baa56445f9
# change line 66: 1460bd3f104c499a
# change line 67: cb358430c5bb495a
# change line 68: d99a559ffdc64f07
# change line 69: a2b7f37f7a494bd6
# change line 70: 602b006ab921492f
# change line 71: 1d5a36e7bf0b4718
# change line 72: b1589b60a1bf43f2
# change line 73: 5f4629805b6f4a3a
# change line 74: 4bf1bcb6940b467c
# change line 75: 83f8cf57a721454e
# change line 76: b96df19a90a4462f
# change line 77: c76c43c1d6434797
# change line 78: 4093bc35903b4cbb
# change line 79: 7c39744fdfa048bf
# change line 80: 6df7333d5fd04b28
# change line 81: f1801ff507a041b7
# change line 82: c527821747da45bd
# change line 83: 097a75959b39410a
# change line 84: 8ad6642f56344022
# change line 85: 71efc2c5632644ef
# change line 86: e6e6be1944214147
# change line 87: 5e50bed44584484c
# change line 88: f020b0fe8dc2482c
# change line 89: a39ed2e0f33c42d8
# change line 90: 6a19286e0e0e4bd7
# change line 91: 91f2af79f9a94e64
# change line 92: f3100a157d884e5a
# change line 93: 322eeafd16f84572
# change line 94: 2c5379fbfbb1429a
# change line 95: ad76f1802c224e6b
# change line 96: f8a267b21b77472b
# change line 97: f516f93aec8143ef
# change line 98: ee148addca444aea
# change line 99: 6602cc12f3dd4b37
# change line 100: ba67ee0d3a024e25
# change line 101: 42aef3b2c1d043d7
# change line 102: cc235cbac45b43f2
# change line 103: 7c0c7a32d7c54891
# change line 104: dfdaeaf3554d45dc
# change line 105: 1a2aa8bf712c4340
# change line 106: 7c86fb73b63f46d3
# change line 107: a4bed04f7d70424a
# change line 108: 7da40d0abccb425f
# change line 109: 1815a7ee24c4449f
# change line 110: a1941ff399e54716
# change line 111: 2eff7e5551874701
# change line 112: f19f14c0c5af4feb
# change line 113: d217883aeefb45a8
# change line 114: 2534e8d9ef0a458b
# change line 115: b416791ccb7a4129
# change line 116: 32689a0979754f35
# change line 117: 45d53a7f7f5e425d
# change line 118: 8cc5d9b8534e47e2
# change line 119: 811a47c90ba54e9a
# change line 120: 4b9493d6aae74108
# change line 121: e919f7793c5e4951
# change line 122: 4d2cdcacca1f4c22
# change line 123: a65e64a6158b4b4a
# change line 124: 38b4183887714170
# change line 125: cf6d2b0bb9414c3e
# change line 126: ffd6dcc2fc504e15
# change line 127: 4b3259e95c6345c5
# change line 128: f9b7bb5e5dfc4c23
# change line 129: 03506046a231436d
# change line 130: 62282270708046fc
# change line 131: cb9c9d9ef57e4cfb
# change line 132: d2f3d2ba11fd4560
# change line 133: 93ed12002aa541f8
