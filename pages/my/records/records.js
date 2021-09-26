
Page({
  data: {
    tabs: ["全部", "收入", "支出"],
    currentTab: 0,
    recordsList: [{
      loading: false,
      pullUpOn: true,
      pageIndex: 1,
      noData: false,
      data: []
    }, {
      loading: false,
      pullUpOn: true,
      pageIndex: 1,
      noData: false,
      data: []
    }, {
      loading: false,
      pullUpOn: true,
      pageIndex: 1,
      noData: false,
      data: []
    }],
    //模拟请求返回数据
    requestData: [{
      type: 1, //1-收入 2-支出
      title: "充值收入",
      time: "2019-05-12 11:53:06",
      balance: '3006.50',
      amount: '2000.00',
      icon: 'icon_income_3x.png'
    }, {
      type: 1, 
      title: "充值收入",
      time: "2019-05-12 11:53:06",
      balance: '3006.50',
      amount: '2000.00',
      icon: 'icon_income_3x.png'
    }, {
      type: 2,
      title: "交易支出",
      time: "2019-05-12 11:53:06",
      balance: '4206.50',
      amount: '2500.00',
      icon: 'icon_expend_3x.png'
    }, {
      type: 1,
      title: "充值收入",
      time: "2019-05-12 11:53:06",
      balance: '3006.50',
      amount: '2000.00',
      icon: 'icon_income_3x.png'
    }, {
      type: 1,
      title: "充值收入",
      time: "2019-05-12 11:53:06",
      balance: '3006.50',
      amount: '2000.00',
      icon: 'icon_income_3x.png'
    }, {
      type: 2,
      title: "交易支出",
      time: "2019-05-12 11:53:06",
      balance: '4206.50',
      amount: '2500.00',
      icon: 'icon_expend_3x.png'
    }, {
      type: 2,
      title: "交易支出",
      time: "2019-05-12 11:53:06",
      balance: '4206.50',
      amount: '2500.00',
      icon: 'icon_expend_3x.png'
    }, {
      type: 1,
      title: "充值收入",
      time: "2019-05-12 11:53:06",
      balance: '3006.50',
      amount: '2000.00',
      icon: 'icon_income_3x.png'
    }, {
      type: 1,
      title: "充值收入",
      time: "2019-05-12 11:53:06",
      balance: '3006.50',
      amount: '2000.00',
      icon: 'icon_income_3x.png'
    }, {
      type: 2,
      title: "交易支出",
      time: "2019-05-12 11:53:06",
      balance: '4206.50',
      amount: '2500.00',
      icon: 'icon_expend_3x.png'
    }]
  },
  onLoad: function (options) {
    this.getRecordsList(this.data.currentTab)
  },
  change(e) {
    this.setData({
      currentTab:e.detail.index
    })
    if (this.data.recordsList[this.data.currentTab].pageIndex == 1) {
      this.getRecordsList(this.data.currentTab)
    }
  },
  getRecordsList(index, refresh) {
    let item = this.data.recordsList[index]
    if (!refresh) {
      item.loading = true;
    }
    setTimeout(() => {
      refresh && wx.stopPullDownRefresh();
      let recordsList = [...this.data.requestData];
      if (this.data.currentTab > 0) {
        recordsList = recordsList.filter(item => item.type === this.data.currentTab)
      }
      if (item.pageIndex == 1) {
        item.data = recordsList;
      } else {
        item.data = item.data.concat(recordsList);
      }
      if (item.pageIndex > 2 || recordsList.length < 10) {
        item.pullUpOn = false;
      }
      item.pageIndex++;
      item.loading = false;
      this.setData({
        [`recordsList[${index}]`]:item
      })
    }, 0)
  },
  onPullDownRefresh() {
    let index = this.data.currentTab
    let item = this.data.recordsList[index]
    item.pageIndex = 1;
    item.loading = false;
    item.pullUpOn = true;
    item.noData = false;
    this.setData({
      [`recordsList[${index}]`]:item
    },()=>{
      this.getRecordsList(index, true)
    })
  },
  onReachBottom() {
    let index = this.data.currentTab
    if (!this.data.recordsList[index].pullUpOn) return;
    this.getRecordsList(index)
  }
})