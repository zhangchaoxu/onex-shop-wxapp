Page({
  data: {
    modal: false
  },
  view() {
    wx.previewImage({
      urls: ['https://thorui.cn/images/mall/img_invoice.jpg']
    })
  },
  sendEmail() {
    this.setData({
      modal: true
    })
  },
  cancel() {
    this.setData({
      modal: false
    })
  }
})