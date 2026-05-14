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

# vertexci-sim:019e3170 t=1778739807
# change line 0: ada8d38c83574158
# change line 1: 2444c3cbe47b4817
# change line 2: 7e12bc161f9f435a
# change line 3: d8a6d59f24e3414c
# change line 4: fa96b52e49a34c26
# change line 5: 3899664d9c7d4235
# change line 6: 5166288d61b74daa
# change line 7: 877b53e814444920
# change line 8: 5a007e77849e441b
# change line 9: e9b443ecce2e4e16
# change line 10: 49423c6e5868477a
# change line 11: 2723132efe214e2c
# change line 12: 9172efabf3684a9a
# change line 13: 58b8a2a5b9464c70
# change line 14: 248725d07a2f4a7b
# change line 15: 23924aed28d04c6d
# change line 16: 99bd30aaf4994007
# change line 17: 144ef8f4863a4cfc
# change line 18: 727995ca38454e0a
# change line 19: eabaa6e8cea5467b
# change line 20: d5c60a08ce7e4114
# change line 21: dc19f7d933514c99
# change line 22: 6e179c3e9f9949d1
# change line 23: c1f8e148324f4b5e
# change line 24: 3cc238f92ca646aa
# change line 25: cba190c81d2645a7
# change line 26: 20d85969ba694445
# change line 27: 8e061247ecaa4866
# change line 28: 2af1956bb80d4f34
# change line 29: ecc1dccd73f44a96
# change line 30: 1bf2e391134b4dea
# change line 31: 9e27c4c6d1fb41f6
# change line 32: 060b3d4c91ae409c
# change line 33: 7db3caa51e2f4f78
# change line 34: 1b993510346f494f
# change line 35: 4e32c54748154ae7
# change line 36: e1c23afcb07a40a1
# change line 37: dbd4634b13cf42c7
# change line 38: e39c66ef7c944026
# change line 39: 1310c048133c482a
# change line 40: 7b8af963e9f94363
# change line 41: 272c210be88c4b74
# change line 42: 46e074d1dac1417b
# change line 43: 4f2248b793fa45ac
# change line 44: e7a3f30cf3b54bca
# change line 45: 326189a490d14d2f
# change line 46: b1b423d83ee644cb
# change line 47: 6ecc3d89578a4e3c
# change line 48: 74e361e06e044f9d
# change line 49: bae7b37e64f24253
# change line 50: ae30fba3eee34ff2
# change line 51: 4fb5f40d22c04f93
# change line 52: 4f9fe39165314fca
# change line 53: 88692c2d2e384dcf
# change line 54: 7e1e590576a54d3c
# change line 55: 0be78002845f47cc
# change line 56: 2cbd772c8e574ed1
# change line 57: fbdb19705c7a47d0
# change line 58: d5bb9746a59f4d48
# change line 59: c68ead28e3f64fe9
# change line 60: 1bdece1cb3f74bdd
# change line 61: ace0d37d3a7c455a
# change line 62: 94e95a64e3b0412b
# change line 63: 8bdf0cc8674b4434
# change line 64: 4f1096ea625a41e0
# change line 65: f2472f257fa24cf8
# change line 66: ba6ec564683d46db
# change line 67: f49595c49d304ad0
# change line 68: d0232d5ac15e437f
# change line 69: 76cf8bc79dd84cac
# change line 70: ed8ef4a80b2f4ef8
# change line 71: eca2e367cb324409
# change line 72: 1e43c88efd8d48ed
# change line 73: d66a77b1e94a4042
# change line 74: c90f1ef6ee1949f5
# change line 75: bd0a949447414631
# change line 76: 280c56a31bc74aae
# change line 77: 96fa062a120549e0
# change line 78: b616511223d74c9f
# change line 79: 9c4414c478aa40ec
# change line 80: 37f2775e6db544eb
# change line 81: 36f6cbfa247d4aad
# change line 82: 2577e21fb00f4fd6
# change line 83: 0c3a60fc72034f55
# change line 84: f680064e4a6845e2
# change line 85: c0272aeab56248aa
# change line 86: 49b14b7efb5645dc
# change line 87: 67323203f74a45e2
# change line 88: f551773388e84dd5
# change line 89: 2edce482edb34e1b
# change line 90: d861afbc7ab347d9
# change line 91: bf2b269ee4474d2b
# change line 92: e747cc7a20fb4308
# change line 93: 36c62b3840ae48e0
# change line 94: 556f98b67178462e
# change line 95: 3548aaea5ef048ee
# change line 96: 294fe49e1fe9412b
# change line 97: d61d1f7def5048e9
# change line 98: 9e8c4ecdabc94f75
# change line 99: 368e65203d204c26
# change line 100: 9e224840b8ab4872
# change line 101: 0a399b5cc62748c3
# change line 102: 00ecb7a4a2824b95
# change line 103: 395ac5b5f0024bfd
# change line 104: 51e52d75b6bf425f
# change line 105: 7c81f84cd65d4105
# change line 106: 597abe2e179c41fc
# change line 107: d0928fba0b334e34
# change line 108: fc673fe0448a4e0e
# change line 109: 36d01164c5a4492e
# change line 110: 8ccb0255d0264869
# change line 111: 356fa90ad93d425e
# change line 112: ba13af063458495c
# change line 113: bbb6ace92511460a
# change line 114: 5eadf07addcb4b1f
# change line 115: feb2876d3cb54428
# change line 116: ec09ba35a9ed4f75
# change line 117: 60e1a0399c2d4549
# change line 118: ac73423d865a4ecf
# change line 119: b5fde314461c4d70
# change line 120: 428d679b4f7f4d42
# change line 121: 0d6081e494064f34
# change line 122: 16ca8806c56f48c8
# change line 123: d1d18515bbd446b3
# change line 124: 644a34fad05f4112
# change line 125: 806a9ad8eddc4223
# change line 126: 022bb7b93e8949d2
# change line 127: cc13ac6587ed4755
# change line 128: 9d9b070f310b4ba6
# change line 129: 72cf3481dffd4599
# change line 130: f25fae8e15604bb9
# change line 131: 1cf5f91b300d4d3a
# change line 132: 0c727ed2c9c942a5
# change line 133: ee719344e5c0447a
# change line 134: c388f17101de4fd9
# change line 135: 8191117e221d4fff
# change line 136: 3d82dff5d2ee4ff5
# change line 137: d602420777c64864
# change line 138: 59c950075c4f4538
# change line 139: 6cd72bb82c6d47c7
# change line 140: 9a75ce32a25043d1
# change line 141: 619833920bf94346
# change line 142: 157616b915104686
# change line 143: 26448abd22d74087
# change line 144: 243e2c270bb44a04
# change line 145: e604dbd879ca4ef4
# change line 146: 3a4bc6812cba42a5
# change line 147: 822684cb42534363
# change line 148: eac5e26ee96c424a
# change line 149: d75d13f85fca4f1e
# change line 150: c491fbca5f9c47b3
# change line 151: 1a03945330054755
# change line 152: b9b48ab690ac42a9
# change line 153: d838292d55954058
# change line 154: 9ed00144fdef4018
# change line 155: 00715da6c0f74c53
# change line 156: 7a6f542a73ab40bf
# change line 157: 9ee7772778ce4308
# change line 158: 974921245e6140c2
# change line 159: cfd5179955644ba4
# change line 160: c1126ea4d0fe4c28
# change line 161: 7ad1abb35eb24cbb
# change line 162: d5f92070d35b4963
# change line 163: 91ed470e0af34966
# change line 164: 236f7d250fe342c6
# change line 165: 27f25bf9a20046a7

# vertexci-sim:e5892e79 t=1778747478
# change line 0: 148dce5777424ae5
# change line 1: 22ea2c1bf72c4e36
# change line 2: c81b96b7fa8b46a0
# change line 3: 7a63a54651434854
# change line 4: 994ab86018534135
# change line 5: 02e761553920483d
# change line 6: e4662a95ffd44a94
# change line 7: 2c1f2610055b4564
# change line 8: 7d9e9c5c0b874d3e
# change line 9: 6c5951540b2b46e7
# change line 10: 861dea3d999d4a92
# change line 11: e13204ddb2c84765
# change line 12: 5af617a334ff4781
# change line 13: d43e253b387047e3
# change line 14: 7921847899f04f25
# change line 15: 8b816f272ab14f97
# change line 16: 68961432fbce4e3b
# change line 17: ec435673570b4d89
# change line 18: 3dec298a776f4f57
# change line 19: f559429cf5c64ef8
# change line 20: 7b115e7a21a44f81
# change line 21: e68047d761e94b96
# change line 22: 6004f7ff4eaf4a6c
# change line 23: 980572350f094eae
# change line 24: 45b687c1706c4e4d
# change line 25: ae86153aa5ca44a6
# change line 26: b6cef1a4b5c64eac
# change line 27: 97073255bd5243e1
# change line 28: 68cccea28de44d09
# change line 29: e8f8251616664120
# change line 30: a922f24d9b5347b9
# change line 31: 055cdb6ada1444eb
# change line 32: 8782dfe7e9114c7d
# change line 33: be301d64207a4e73
# change line 34: 629ea1513289444d
# change line 35: 60b7562daae441e6
# change line 36: 98813cd1e9db4e69
# change line 37: 628d509bb0634de7
# change line 38: eb201fa6333f49f6
# change line 39: f42d3d7236ae4e0d
# change line 40: 8df01e9a2f104f3a
# change line 41: 4e4e9bf313f2495d
# change line 42: 51f0725e88e8457d
# change line 43: 422d42213f2b49ea
# change line 44: 14bce5fdf04a4935
# change line 45: 86dcfa89ad8c40c4
# change line 46: 4d1ce93b2bf54319
# change line 47: 0178e76aacc94fb6
# change line 48: 16eefeb195c64dbb
# change line 49: 68d51ed111c6459d
# change line 50: 81b4173bd8074005
# change line 51: 15492f5705b642ac
# change line 52: 0506944069a34821
# change line 53: ba94fea87c284af9
# change line 54: cb378f5bda524528
# change line 55: 125f3e071cc643be
# change line 56: 06b85c7ed2e84c82
# change line 57: e6cb2c0feb7441b8
# change line 58: 172e683b71a741e2
# change line 59: a6fde220abc640d8
# change line 60: a78509c8e01d4a76
# change line 61: a7acf2b638364bb1
# change line 62: 56b3788afaec4e1e
# change line 63: 1f6d23b2e6304fc1
# change line 64: a4c64a6f6a03480c
# change line 65: d81902546ddf4cbb
# change line 66: 7772e94369ae46d1
# change line 67: 5d42b7e03c06442a
# change line 68: 13bd9191d35c44eb
# change line 69: ba4954f6540f4eb3
# change line 70: fb852aadadb340a8
# change line 71: f5d4a17f6ec94f62
# change line 72: 2fb5e890f9254929
# change line 73: 566b19a8c85445a5
# change line 74: 6a9f891ac6cd4563
# change line 75: 7a23f1a94b0d4a60
# change line 76: a881812c49704143
# change line 77: 7cd49c491ddd4887
# change line 78: 1e38d3c447ed476e
# change line 79: 6202ef9b33af4eec
# change line 80: 0dd4215efc5449b5
# change line 81: ff1b182e61c748d1
# change line 82: e723627f8c734cfa
# change line 83: 4da503710f9942aa
# change line 84: edaad491858b4f9f
# change line 85: 8d4ffd0ea4a94193
# change line 86: d32cf04f0de34af7
# change line 87: 7565a400c25d43ad
# change line 88: 637d4286a4c645bf
# change line 89: 2abacd9cb0f4442d
# change line 90: 1302b3cc71f14da9
# change line 91: a3051d90d7b04b18
# change line 92: 0e94a11efb3f408f
# change line 93: ba22b6deddee461c
# change line 94: f9b1eb05df984db9
# change line 95: c63ffe4a79774968
# change line 96: ba8221d08b034f28
# change line 97: c6e907b10b144659
# change line 98: 079c2d6a14fb45c9
# change line 99: 020093e9ef794524
# change line 100: 0d60ec7ae96b49ad
# change line 101: 78b688ef19cf4abc
# change line 102: 7831646049d64219
