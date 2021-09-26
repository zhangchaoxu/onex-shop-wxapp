import tui from '../../../common/httpRequest'
Page({
  data: {
    top: 100
  },
  onLoad() {
    //请求数据成功之后执行
    setTimeout(() => {
      const query = wx.createSelectorQuery().in(this);
      query.select('.tui-scroll__box').boundingClientRect((res) => {
        if (res) {
          this.setData({
            top: res.top
          })
        }
      }).exec()
    }, 1000)
  },
  reply() {
    tui.href('/pages/index/evaluateReply/evaluateReply')
  },
  scrollToReply() {
    wx.pageScrollTo({
      scrollTop: this.data.top,
      duration: 100
    })
  }
})