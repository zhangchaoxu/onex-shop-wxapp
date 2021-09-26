import tui from '../../../common/httpRequest'
Page({
  go(e) {
    let page=e.currentTarget.dataset.page
    if (page == 1) {
      wx.switchTab({
        url: "/pages/tabbar/index/index"
      })
    } else {
       tui.href("/pages/my/myOrder/myOrder")
    }
  }

})