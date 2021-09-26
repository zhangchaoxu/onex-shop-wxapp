Page({
  data: {
    tabs: [{
      name: "全部"
    }, {
      name: "待付款"
    }, {
      name: "待发货"
    }, {
      name: "待收货"
    }, {
      name: "待评价"
    }],
    currentTab: 0,
    pageIndex: 1,
    loadding: false,
    pullUpOn: true,
    scrollTop: 0
  },
  change(e) {
    this.setData({
      currentTab:e.detail.index
    })
  },
  detail() {
    wx.navigateTo({
      url: '/pages/my/orderDetail/orderDetail'
    })
  },
  invoiceDetail(){
    wx.navigateTo({
      url: '/pages/my/invoiceDetail/invoiceDetail'
    })
  },
  addEvaluate(){
    wx.navigateTo({
      url: '/pages/my/addEvaluate/addEvaluate'
    })
  },
  onPullDownRefresh() {
    setTimeout(() => {
      wx.stopPullDownRefresh()
    }, 200);
  },
  onReachBottom() {
    //只是测试效果，逻辑以实际数据为准
    this.setData({
      loadding:true,
      pullUpOn:true
    })
    setTimeout(() => {
      this.setData({
        loadding:false,
        pullUpOn:false
      })
    }, 1000)
  },
  onPageScroll(e) {
    this.setData({
      scrollTop:e.scrollTop
    })
  }
})