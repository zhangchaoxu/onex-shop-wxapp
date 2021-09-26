Page({
  data: {
    addressList: [1,2,3]
  },
  editAddr(e) {
    wx.navigateTo({
      url: "/pages/my/editAddress/editAddress"
    })
  }
})