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

# vertexci-sim:cd129d71 t=1778700493
# change line 0: 4f8bf52acf55407a
# change line 1: 9ac76c6c68f44451
# change line 2: 23f096a3b8d1435a
# change line 3: f4fc3d9d39354ceb
# change line 4: b8a61fada88547b7
# change line 5: 4bd3cdc758d24197
# change line 6: 38354004c1f544a8
# change line 7: 35e337e923ce431d
# change line 8: 8725cb15f1d348f9
# change line 9: 729343c1a68f4081
# change line 10: d5a5e215a32d43b2
# change line 11: 1380dbcdfcf5421b
# change line 12: 7ce7551e148d42c6
# change line 13: 47303cb163e143e2
# change line 14: 95a974811f714396
# change line 15: f63a168044674dca
# change line 16: 6669a4b8c3da4429
# change line 17: 91f0780d7a664352
# change line 18: 7f72ee3cfaf34e95
# change line 19: 312f967c57124406
# change line 20: 0562f994138041f7
# change line 21: 752a46bc80b540ee
# change line 22: bc6beaf5cb3e466f
# change line 23: 3cede98b03c14b9b
# change line 24: f35501688f6f4ae8
# change line 25: 6402eb3c5e2b4c04
# change line 26: b71fb84ee529428c
# change line 27: 314b1e1ec89d4974
# change line 28: 3c4a1d2e703b49d7
# change line 29: 2e94ca6b2d154975
# change line 30: 57ada927bce64350
# change line 31: 18dced2f49e44d04
# change line 32: cf3bff2ab812458b
# change line 33: 74c55c1a9c0b40ba
# change line 34: 8ed984941c3d417c
# change line 35: d85944e6b8e24c4a
# change line 36: 486b52b167fb4eeb
# change line 37: 4f9d13da15994583
# change line 38: 7a358d8afbca419b
# change line 39: 4a95f9380bc7480b
# change line 40: ebf7d12abd8b4706
# change line 41: ceacbad2bf2546f3
# change line 42: 1ae48c67d1fd4967
# change line 43: b6ffbffdb8114cfc
# change line 44: 5734bda0d9994f06
# change line 45: 96a68d8f18944ee8
# change line 46: 570a55f64d1e4f12
# change line 47: 37bdfa178b9549c0
# change line 48: bae076ff8da4435c
# change line 49: aed9e889ff0b4027
# change line 50: fa61936502624055
# change line 51: aa3c5117fbdb4b77
# change line 52: 5617fe23c65145d1
# change line 53: 5649419f64db49a8
# change line 54: b6327baaa9414bbe
# change line 55: 56d20a4783ab4d32
# change line 56: 5c5fd4872d5c4099
# change line 57: 045e6f52ec73444f
# change line 58: 5ddee20627824bee
# change line 59: 8ddea0c4580e4ac4
# change line 60: 444e89b375a74f79
# change line 61: f0c31f23728b4747
# change line 62: d7a4233b552f4b9b
# change line 63: 2bb2004901fb4989
# change line 64: ebaa7819e8b74f1e
# change line 65: 5dd525c551fc4728
# change line 66: 03a5cd2101df4730
# change line 67: 6482efd09eab4191
# change line 68: 81f686e7cc614944
# change line 69: 556354599d1a45cc
# change line 70: 810fa6746919425f
# change line 71: a632517061f842bb
# change line 72: da2b7d82d72b4218
# change line 73: e7a9099a5328404a
# change line 74: 2b0ec70f0a6a47da
# change line 75: af445ba5b92b4b4d
# change line 76: 7ef6887640d149aa
# change line 77: f6e7e36454f64afb
# change line 78: 732819ebec4a4e2c
# change line 79: 29daa3607d414a14
# change line 80: c91eb20f1d144adf
# change line 81: 821a8963845a4688
# change line 82: 4c41c0d18bd2429e
# change line 83: c3625a7fa111408b
# change line 84: 042cf9bd0c6a4c0a
# change line 85: 54843d48be9e4398
# change line 86: 0ed1bc69db3f4c33
# change line 87: a9356c0303ef4184
# change line 88: 10dd6348e36f446b
# change line 89: 94f0d4b41ee04588
# change line 90: 330533d43b2341be
# change line 91: bc66bf001ab647c4
# change line 92: 06571566fc294c2c
# change line 93: f99bbfaec44d4272
# change line 94: d60272216ce6418b
# change line 95: 056a966320984622
# change line 96: 4ec49e51dd034aca
# change line 97: 50715a61352c4115
# change line 98: 7e6c6c8df4f945f0
# change line 99: 7d1aa951c8d74148
# change line 100: 0315a5c99e8f41d9
# change line 101: afb66a48a211429d
# change line 102: 0ae4b242c7a849e3
