import tui from '../../../common/httpRequest'
Page({
  data: {
    customShare: false
  },
  product() {
    tui.href('/pages/index/productList/productList');
  },
  qrcode() {
    wx.previewImage({
      urls: ['https://thorui.cn/img/reward.jpg']
    });
  }
})