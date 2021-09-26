Page({
  href(e) {
    let page=Number(e.currentTarget.dataset.page)
    let url = "";
    switch (page) {
      case 1:
        url = "/pages/my/userInfo/userInfo"
        break;
      case 2:
        url = "/pages/my/address/address"
        break;
      case 3:
        url = "/pages/my/notice/notice"
        break;
      case 4:
        url = "/pages/common/about/about"
        break;
      case 5:
        url = "/pages/my/feedback/feedback?page=mall"
        break;
      default:
        break;
    }
    wx.navigateTo({
      url: url
    })
  }
})