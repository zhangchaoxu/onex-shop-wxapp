Page({
  data: {
    loadding: false,
    pullUpOn: true,
    couponList: [1, 2, 3, 4, 5],
    webURL: "https://www.thorui.cn/wx"
  },
  onPullDownRefresh() {
    setTimeout(() => {
      this.setData({
        pullUpOn: true
      })
      wx.stopPullDownRefresh()
    }, 200);
  },
  onReachBottom() {
    //只是测试效果，逻辑以实际数据为准
    if (!this.data.pullUpOn) return;
    this.setData({
      loadding: true
    })
    setTimeout(() => {
      this.setData({
        loadding: false,
        pullUpOn: false
      })
    }, 1000)
  }
})