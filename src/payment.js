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

# vertexci-sim:f9cc2981 t=1778747607
# change line 0: dccfc251cd064d25
# change line 1: 039b1fe1119d44ef
# change line 2: 0d754200bb394c3d
# change line 3: 902d3785ff5c4725
# change line 4: 8e311d17e1ad4234
# change line 5: 6ea9a46a224b45fe
# change line 6: 006cdd3d5d4d4072
# change line 7: a1ae71e283414608
# change line 8: 95e6cc32df9a4d22
# change line 9: c32ea78b04474e80
# change line 10: 145b088b74ba42f4
# change line 11: 3d819267e4384257
# change line 12: d32d6c2fabac4ca7
# change line 13: 087ac489e7824601
# change line 14: 2380cf8fe3ef4209
# change line 15: 7860b5982ce74b24
# change line 16: c4f856beea244f70
# change line 17: 2e5a2e1036d2467d
# change line 18: b041382833584e19
# change line 19: 6a5a93170cde4087
# change line 20: c3d1343e39e04d34
# change line 21: b1d9d8fddd8a4218
# change line 22: 8201931218214296
# change line 23: 69a87eccc8e54c3e
# change line 24: fbfd7dff379a4968
# change line 25: e5fc097c7c094c9a
# change line 26: e3ad60f2a07143ba
# change line 27: 37635292afaf441e
# change line 28: 78fb45654a414353
# change line 29: 556708969cb64aad
# change line 30: f93718aba6904283
# change line 31: ec67cfa7ff734aab
# change line 32: 896493be0ea44f98
# change line 33: 208cc1c411da48bd
# change line 34: 4fcb5d8991c546b7
# change line 35: e23d95e302584c57
# change line 36: 7429554011774885
# change line 37: 942c290ff32d4172
# change line 38: 071b17362a034bc8
# change line 39: bf6772a2356246cf
# change line 40: b48ae4942e17478d
# change line 41: 2932812b9cc14478
# change line 42: 6a3c0d6556d545d3
# change line 43: 483d80e704dc4622
# change line 44: 4a4d8a1b27bf4b99
# change line 45: c5a20a1d748140e2
# change line 46: a8aaee0ce60849f4
# change line 47: e09cecc7cc214d78
# change line 48: 7f36400e217a4e07
# change line 49: c2ba5ea83dbc465d
# change line 50: b3f80db0e7fd466f
# change line 51: ce9415ba1c114dfa
# change line 52: 6545072044934961
# change line 53: 09967f9373c34999
# change line 54: 0091eec9f99342d6
# change line 55: e2323ae96ba146f9
# change line 56: 0fe182a5313e48c1
# change line 57: fa9829023b4b4e5e
# change line 58: 486425f9c18b4729
# change line 59: 6d9d34b3a96c4578
# change line 60: 94401e71de9a419c
# change line 61: e8955413d6ae4803
# change line 62: 0a8ee4be899d4e35
# change line 63: 83776e5d644b451d
# change line 64: f28e92f81eba4a4e
# change line 65: a4d5441bf63f463d
# change line 66: 02c04061409848ca
# change line 67: 695e7f9eb3264446
# change line 68: 966dbeab09ab4687
# change line 69: 50438a3fca1143f3
# change line 70: f8b6261906814a75
# change line 71: 36ae90c183a94d08
# change line 72: 282f6767cb8a4b7f
# change line 73: 0a3ee14e5a234acb
# change line 74: b38c2eb1861b4d8b
# change line 75: aa461ce2198644a5
# change line 76: fca64368b403415f
# change line 77: 42df3cb4923a42d2
# change line 78: 94ff642a30ef4862
# change line 79: 9d05e412ca684991
# change line 80: 97df9bac1f9949d9
# change line 81: 7ccde31f11254a47
# change line 82: b9aa4aa8b6d04373
# change line 83: 228a99fe9ea04f0c
# change line 84: be5db89a8855484c
# change line 85: aaf4879a3da74b85
# change line 86: 14ed908b4e4b424d
# change line 87: 28ead14187c74277
# change line 88: daf76e350a2e4800
# change line 89: 0b20b7d66a2d4ff9
# change line 90: bfcf638886e04805
# change line 91: e5777f18a3b74b1c
# change line 92: af69a454c423497c
# change line 93: b309edd4d3f54973
# change line 94: e7f71b578de448f1
# change line 95: b9251cd227e94a78
# change line 96: 3f28c681f61a486b
# change line 97: d346cb0b46894727
# change line 98: a0fdd9cf87574e5a
# change line 99: 3663ee2e7dec4e26
# change line 100: 55d321415c4e4d6b
# change line 101: 4812cc850c5c4847
# change line 102: 52594958c42a4b65
# change line 103: fa645e96bc4a4fc6
# change line 104: 0afc577566eb4247
# change line 105: 863e9978aada4fc1
# change line 106: e4d6b15ce32c4ebc
# change line 107: ba8667b413b847ca
# change line 108: 4b0a0fe88d2649df
# change line 109: 7ef3d73552bb43e2
# change line 110: 714ddd601991429a
# change line 111: 2f57202722ca48cb
# change line 112: db2300be1e5e4f27
# change line 113: 2c47e5acc1584a69
# change line 114: 4513f6269f8b40da
# change line 115: 560db17e57fe4ca5
# change line 116: 9918688f0c3245f1
# change line 117: 8ad2592853b94f7a
# change line 118: 16a039155c6d4810
# change line 119: 0b9e3d7f3fce4d67
# change line 120: d200af41336542e4
# change line 121: 8fd7eb3184d94501
# change line 122: a412faeecd954f97
# change line 123: 371bc0badf20480e
# change line 124: 78df8d6e40da483c
# change line 125: 49e059324cd547d9
# change line 126: 9761d0905fd4435a
# change line 127: e48f52793d4547d1
# change line 128: 0d5c8c12bbff4012
# change line 129: 5d636e3506d347c9
# change line 130: 4499cdd120d14f50
# change line 131: 556121a4b36a4fab
# change line 132: 1a310feeade04f81
# change line 133: 59fbda0dcf904500
# change line 134: f0ee5f825cc047b1
# change line 135: 247fd68cc59a4a1e
# change line 136: 4b1fa143bb344a0e
# change line 137: 1c7263368dcc487c
# change line 138: aa30cb0f0e484403
# change line 139: 0eeb5910134a48a9
# change line 140: 38447e12de834d54
# change line 141: cd40bef26b794c89
# change line 142: b9498bc289fa4816
# change line 143: 92dc086fb3594ce1
# change line 144: 87ebd5a71fd94f59
# change line 145: 61097293bd4a4d0d
# change line 146: 12b5a5c23cb444d3
# change line 147: 67f3522aa88b454f
# change line 148: ac5fdbb0b9aa4d57
# change line 149: 86ea9bf8c60d41e3
# change line 150: c0405b6179da4af6
# change line 151: dc14b3dfa91f4f2d
# change line 152: 965e546936c043b3
# change line 153: 595a977e340b4f64
# change line 154: 02f26242f89e4181
# change line 155: 18795e07c16a401e
# change line 156: 3c7395eb6b684727
# change line 157: 88456d14fb134e43
# change line 158: 92f89301ed7b4a19
# change line 159: e796ce55eada4779
# change line 160: ca6c936b9bbd4871
# change line 161: 34c10fa276fe48d4
# change line 162: 2b4106724d654ef8
# change line 163: a7083ae1749c47ab
# change line 164: 0865f103a4e640cb
# change line 165: a11fc086dae94311
# change line 166: 9b6efd891e2e4673
# change line 167: f9de4ea8c85b46bf
# change line 168: 002c9c14932144d1
# change line 169: 87f5844a81894c98
# change line 170: 8414c0cbea0440a3
# change line 171: e72d33a038d24d94
# change line 172: a51108a625f547e7
# change line 173: 3d83e69d5db3477a
# change line 174: 4cd4ed567f2d4db2
# change line 175: ebc3ee19e43144e0
# change line 176: 4dcadd0fc4b04384
# change line 177: 736ed65929de4dd5
# change line 178: 2b935bee0035401d
# change line 179: b7c36c2a6bc84e19
# change line 180: 36421f5897cf4625
# change line 181: 0dd1ae7ec31f4a54
# change line 182: e3bfbb8573cf42b3
