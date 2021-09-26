Page({
  data: {
    tabs: [{
      name: "未使用"
    }, {
      name: "已使用"
    }, {
      name: "已过期"
    }],
    currentTab: 0,
    scrollTop: 0,
    //如果tabs数据是请求返回，则动态生成tabs数据
    couponList: [{
      loading: false,
      pullUpOn: true,
      pageIndex: 1,
      noData: false, //如果使用自定义无数据提示，则使用
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
      type: 1, //1-折扣 2-面值
      range: "拼团券",
      rangeDesc: "限拼团可用",
      condition: "满38元可用",
      value: 9
    }, {
      type: 1,
      range: "全场券",
      rangeDesc: "全部商品可用",
      condition: "满200元可用",
      value: 5
    }, {
      type: 2,
      range: "全场券",
      rangeDesc: "全部商品可用",
      condition: "满200元可用",
      value: 100
    }, {
      type: 2,
      range: "品牌券",
      rangeDesc: "指定品牌可用",
      condition: "满200元可用",
      value: 200
    }, {
      type: 2,
      range: "品类券",
      rangeDesc: "指定品类可用",
      condition: "满8000元可用",
      value: 10000
    }, {
      type: 1,
      range: "拼团券",
      rangeDesc: "限拼团可用",
      condition: "满100元可用",
      value: 9
    }, {
      type: 1,
      range: "全场券",
      rangeDesc: "全部商品可用",
      condition: "满800元可用",
      value: 8
    }, {
      type: 2,
      range: "全场券",
      rangeDesc: "全部商品可用",
      condition: "满200元可用",
      value: 30
    }, {
      type: 2,
      range: "品牌券",
      rangeDesc: "指定品牌可用",
      condition: "满100元可用",
      value: 20
    }, {
      type: 2,
      range: "品类券",
      rangeDesc: "指定品类可用",
      condition: "满500元可用",
      value: 100
    }],
    webURL: "https://www.thorui.cn/wx"
  },
  onLoad: function (options) {
    this.getCouponList(this.data.currentTab)
  },
  change(e) {
    let val=Number(e.detail.index)
    this.setData({
      currentTab:val
    },()=>{
      if (this.data.couponList[val].pageIndex == 1) {
        this.getCouponList(val)
      }
    })
  },
  getCouponList(index, refresh) {
    let item = this.data.couponList[index]
    //请求参数  用信息默认header中加token
    let postData = {
      pageIndex: item.pageIndex,
      status: index + 1 //1-未使用 2-已使用 3-已过期
    }
    if (!refresh) {
      item.loading = true;
    }
    setTimeout(() => {
      refresh && wx.stopPullDownRefresh();
      let couponsList = [...this.data.requestData];
      if (item.pageIndex == 1) {
        item.data = couponsList;
      } else {
        item.data = item.data.concat(couponsList);
      }
      if (item.pageIndex > 2) {
        item.pullUpOn = false;
      }
      item.pageIndex++;
      item.loading = false;
      this.setData({
        [`couponList[${index}]`]:item
      })
    }, 400)
  },
  onPullDownRefresh() {
    let index = this.data.currentTab
    let item = this.data.couponList[index]
    item.pageIndex = 1;
    item.loading = false;
    item.pullUpOn = true;
    item.noData = false;
    this.setData({
      [`couponList[${index}]`]:item
    },()=>{
      this.getCouponList(index, true)
    })
    
  },
  onReachBottom() {
    let index = this.data.currentTab
    if (!this.data.couponList[index].pullUpOn) return;
    this.getCouponList(index)
  },
  onPageScroll(e) {
    this.setData({
      scrollTop: e.scrollTop
    })
  }
})