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

# vertexci-sim:7ddf667c t=1778747589
# change line 0: 9c6337c208034f5d
# change line 1: 3e537272e0a14a44
# change line 2: 30d6e9b84cc64f5e
# change line 3: 1187e730a64a403f
# change line 4: 503ac352d0464042
# change line 5: 1ef472e13e714281
# change line 6: 77aef2f0b49a408f
# change line 7: c687dc24df6d4ea3
# change line 8: ac151dfaab964248
# change line 9: 429065fe7f6b40a4
# change line 10: 70721beef63b449d
# change line 11: e04122a4f2524a85
# change line 12: 05a70c7224f14b5e
# change line 13: 48c4d89837fa4d1f
# change line 14: d65ff25411a64b0b
# change line 15: a5c4f150454f4390
# change line 16: 1b0f31a6eaa3498a
# change line 17: 4dfb0073b7c947db
# change line 18: c2e72bb2e4ab4314
# change line 19: 9e18576b68b94470
# change line 20: b7b9079d4cd748b8
# change line 21: e79030ab3c304524
# change line 22: b13d0db4f02f470c
# change line 23: 832081fabc534b47
# change line 24: 3bc26f96187440e3
# change line 25: 793a6b09f1e149a8
# change line 26: ccdb416415144b46
# change line 27: 336f442482424a77
# change line 28: 2e4e167c2b4e415e
# change line 29: d35d0f8512764617
# change line 30: 1ca1b5fae6424131
# change line 31: 3f3f39f6d8b94758
# change line 32: 936c9a3ca68a4ab4
# change line 33: fb4be05385eb4d9b
# change line 34: 296b93b305584161
# change line 35: 96aa36ea0d1944ef
# change line 36: 2b3fec322baf4863
# change line 37: 2b49036a60a8473d
# change line 38: 9f6d94b5df754632
# change line 39: bec92454644b409f
# change line 40: bf9862b56348465e
# change line 41: a8e9d4caac904156
# change line 42: b002f55d54574b1a
# change line 43: 88d68ac25c974588
# change line 44: bb4999bf63c243bd
# change line 45: e0ec0cdeec7c4be8
# change line 46: e5ae854bf0354d4b
# change line 47: d6faf00fe5a34ade
# change line 48: e79d6bc252b549e2
# change line 49: 0243edc4b3ee4bf5
# change line 50: 625cc99e6f264c6b
# change line 51: d83df17445fa4d1b
# change line 52: 2a21682e2a264bac
# change line 53: 0bd5f24288fa4c6b
# change line 54: b5af20b3c4264006
# change line 55: 268453b8e36b46b4
# change line 56: 8cf9165a07bc4d96
# change line 57: adc28bf5545f4e52
# change line 58: 364d06351b864e3a
# change line 59: 92ab605ca6254070
# change line 60: b400f4becb7d48ac
# change line 61: 2a6c16dec8184d83
# change line 62: c703d7c39bed4a9d
# change line 63: c4c0d1204a6e49dc
# change line 64: a3033fd3386e4634
# change line 65: 7041d86a239849ab
# change line 66: 17a167f1540f4a20
# change line 67: 39c7f62f1eb34df1
# change line 68: 2d7a1ba838b34792
# change line 69: 74f49d6c630f453f
# change line 70: cd0f3b1a1c074a9d
# change line 71: d6ba0818bb4f4518
# change line 72: f2d2e7697fe84045
# change line 73: a674105060e34eb5
# change line 74: 2dcaec115076458f
# change line 75: 05cf3f06832b4eec
# change line 76: 4820567e7d704f29
# change line 77: 4c310a385694486b
# change line 78: b9f47d3f14214379
# change line 79: d3ab8d05d6da421c
# change line 80: f908bfe1b310426d
# change line 81: e5403e81ebeb4de8
# change line 82: 9c4bf951974945f2
# change line 83: 624075000b0c4d08
