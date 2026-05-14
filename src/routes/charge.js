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

# vertexci-sim:3b22f38b t=1778739793
# change line 0: 65dbcb465a6c4143
# change line 1: 6f14aa7e8b424bb1
# change line 2: 7fd07240121347ea
# change line 3: 7c66c2889ddd42d2
# change line 4: 833a50815daf424f
# change line 5: 7cb8ed537d2a45a0
# change line 6: 9a3065053ded49f8
# change line 7: 6a5633d2e7ba4de3
# change line 8: f57ac87ad4dd42cd
# change line 9: a2d2ae8009e348e9
# change line 10: c1053e9392204582
# change line 11: 2b6af4f3226b49fc
# change line 12: c07b03ef08fb4153
# change line 13: da8cd347ada740da
# change line 14: f38ce455f9374e1b
# change line 15: 7e54348a9131470a
# change line 16: ffc44a530cf5489e
# change line 17: 576eefc9343c4844
# change line 18: e4943432b38b45cb
# change line 19: da05925484e44f3c
# change line 20: e9a839d9e1084a66
# change line 21: c33b0f02f0244a28
# change line 22: 4b74ae679b8b45a4
# change line 23: 34b4242ad32e4cb6
# change line 24: 746e78e93e414f77
# change line 25: 612a6e9f470b47fe
# change line 26: 90b1aef4849c465c
# change line 27: 5010f36d889f4294
# change line 28: b143238cb8cc4f49
# change line 29: eaf0b0f83cc64c7f
# change line 30: da8eac542c304391
# change line 31: f95deac566b4439e
# change line 32: fc8436b00c4546aa
# change line 33: 62b27b18a8444a5e
# change line 34: 2126d2e3be494240
# change line 35: c677d831dd1d4559
# change line 36: 9835c7b6bbde47e7
# change line 37: 4b75e52a770c4043
# change line 38: b5f72d556af745af
# change line 39: d98aaea959e74c47
# change line 40: dc9175a30224434e
# change line 41: 1afbd60d8e8c4eb5
# change line 42: c80cca8004214fa4
# change line 43: 794e514af8144336
# change line 44: f10f6a2c105f411c
# change line 45: acf714ad2d84402b
# change line 46: 41bdd1f150b34d41
# change line 47: a0685f9a3ea14278
# change line 48: bde644ac16df47c9
# change line 49: ddbc13f0d6cf482c
# change line 50: 50131226667f461d
# change line 51: f9f63809fc564955
# change line 52: 0df5395a764141fc
# change line 53: 873d691370874832
# change line 54: 4a969fef2189420a
# change line 55: 94dedb598d9144e6
# change line 56: 87d07a600eef49f2
# change line 57: bbdb866eb7564013
# change line 58: db654e35cf8b4629
# change line 59: 28440d1ad6984df9
# change line 60: 81563334b3a7453b
# change line 61: 5850cc570d734f81
# change line 62: 751ffe7104f94a28
# change line 63: 3c4c06be8ef14ee8
# change line 64: 61e04f6477c447b6
# change line 65: 98299603d4ef48c0
# change line 66: 09b5a3d80462477a
# change line 67: cd278c44d6794fe0
# change line 68: f358e116e46d4fdc
# change line 69: d553456013124605
# change line 70: 10f02fb6bb024982
# change line 71: e1482e0cf72b4aeb
# change line 72: ff7581ea6aa14064
# change line 73: c903ff4c6aea4048
# change line 74: 0a68bc7d3d4c41d6
# change line 75: 43fdf79eca614bb9
# change line 76: 3148f7f27d204b44
# change line 77: ebf92da7efd8422b
# change line 78: d0c39d76576c4f77
# change line 79: 28c4adc0526848d8
# change line 80: c87f81ff591e4f66
# change line 81: 94e7889fbca24391
# change line 82: 5868a4c092b0454c
# change line 83: aa7147858eab4b00
# change line 84: f5ca8565b47449d7
