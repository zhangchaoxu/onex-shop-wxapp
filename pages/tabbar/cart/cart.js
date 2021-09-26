import tui from '../../../common/httpRequest'
Page({
  data: {
    dataList: [{
      id: "t2020003120",
      buyNum: 2,
      price: 299.5,
      selected: false
    }, {
      id: 't1020003120',
      buyNum: 1,
      price: 499,
      selected: false
    }],
    isAll: false,
    totalPrice: 0,
    buyNum: 0,
    cartIds: [], //购物车id
    actions: [{
        name: '收藏',
        width: 64,
        color: '#fff',
        fontsize: 28,
        background: '#FFC600'
      },
      {
        name: '看相似',
        color: '#fff',
        fontsize: 28,
        width: 64,
        background: '#FF7035'
      },
      {
        name: '删除',
        color: '#fff',
        fontsize: 28,
        width: 64,
        background: '#F82400'
      }
    ],
    actions2: [{
        name: '看相似',
        color: '#fff',
        fontsize: 28,
        width: 64,
        background: '#FF7035'
      },
      {
        name: '删除',
        color: '#fff',
        fontsize: 28,
        width: 64,
        background: '#F82400'
      }
    ],
    isEdit: false,
    productList: [{
        img: 1,
        name: "欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜 30ml（欧莱雅彩妆 BB霜 粉BB 遮瑕疵 隔离）",
        sale: 599,
        factory: 899,
        payNum: 2342
      },
      {
        img: 2,
        name: "德国DMK进口牛奶  欧德堡（Oldenburger）超高温处理全脂纯牛奶1L*12盒",
        sale: 29,
        factory: 69,
        payNum: 999
      },
      {
        img: 3,
        name: "【第2支1元】柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红",
        sale: 299,
        factory: 699,
        payNum: 666
      },
      {
        img: 4,
        name: "百雀羚套装女补水保湿护肤品",
        sale: 1599,
        factory: 2899,
        payNum: 236
      },
      {
        img: 5,
        name: "百草味 肉干肉脯 休闲零食 靖江精制猪肉脯200g/袋",
        sale: 599,
        factory: 899,
        payNum: 2399
      },
      {
        img: 6,
        name: "短袖睡衣女夏季薄款休闲家居服短裤套装女可爱韩版清新学生两件套 短袖粉色长颈鹿 M码75-95斤",
        sale: 599,
        factory: 899,
        payNum: 2399
      },
      {
        img: 1,
        name: "欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜",
        sale: 599,
        factory: 899,
        payNum: 2342
      },
      {
        img: 2,
        name: "德国DMK进口牛奶",
        sale: 29,
        factory: 69,
        payNum: 999
      },
      {
        img: 3,
        name: "【第2支1元】柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红",
        sale: 299,
        factory: 699,
        payNum: 666
      },
      {
        img: 4,
        name: "百雀羚套装女补水保湿护肤品",
        sale: 1599,
        factory: 2899,
        payNum: 236
      }
    ],
    pageIndex: 1,
    loadding: false,
    pullUpOn: true
  },
  calcHandle() {
    let buyNum = 0;
    let totalPrice = 0;
    let selectedNum = 0;
    this.data.dataList.map((item) => {
      if (item.selected) {
        buyNum += item.buyNum;
        totalPrice += item.price * item.buyNum;
        selectedNum++
      }
    })
    this.setData({
      isAll:selectedNum === this.data.dataList.length,
      buyNum:buyNum,
      totalPrice:totalPrice
    })
  },
  changeNum: function (e) {
    this.setData({
      [`dataList[${e.detail.index}].buyNum`]: e.detail.value
    },()=>{
      this.calcHandle()
    })
  },
  handlerButton: function (e) {
    let index = e.detail.index;
    let item = e.detail.item;
    tui.toast(`商品id：${item.id}，按钮index：${index}`);
  },
  editGoods: function () {
    this.setData({
      isEdit: !this.data.isEdit
    })
  },
  detail: function () {
    wx.navigateTo({
      url: '/pages/index/productDetail/productDetail'
    })
  },
  btnPay() {
    wx.navigateTo({
      url: '/pages/order/submitOrder/submitOrder'
    })
  },
  buyChange(e) {
    this.setData({
      cartIds: e.detail.value
    }, () => {
      let data = this.data.dataList
      data.map(item => {
        //如果购物车id为数字统一转成字符串
        if (~this.data.cartIds.indexOf(item.id)) {
          item.selected = true;
        } else {
          item.selected = false;
        }
      })
      this.setData({
        dataList: data
      }, () => {
        this.calcHandle()
      })
    })
  },
  checkAll(e) {
    this.setData({
      isAll: !this.data.isAll
    }, () => {
      let buyNum = 0;
      let totalPrice = 0;
      let data= this.data.dataList
      data.map((item) => {
        item.selected = this.data.isAll;
        if (this.data.isAll) {
          buyNum += item.buyNum;
          totalPrice += item.price * item.buyNum;
        }
      })
      this.setData({
        dataList:data,
        totalPrice: totalPrice,
        buyNum: buyNum
      })
    })
  },
  onPullDownRefresh() {
    setTimeout(() => {
      wx.stopPullDownRefresh()
    }, 200)
  },
  onPullDownRefresh: function () {
    let loadData = JSON.parse(JSON.stringify(this.data.productList));
    loadData = loadData.splice(0, 10)
    this.setData({
      productList: loadData,
      pageIndex: 1,
      pullUpOn: true,
      loadding: false
    })
    wx.stopPullDownRefresh()
  },
  onReachBottom: function () {
    if (!this.data.pullUpOn) return;
    this.setData({
      loadding: true
    })
    if (this.data.pageIndex == 4) {
      this.setData({
        loadding: false,
        pullUpOn: false
      })
    } else {
      let loadData = JSON.parse(JSON.stringify(this.data.productList));
      loadData = loadData.splice(0, 10)
      if (this.data.pageIndex == 1) {
        loadData = loadData.reverse();
      }
      this.setData({
        pageIndex: this.data.pageIndex + 1,
        loadding: false,
        productList: this.data.productList.concat(loadData)
      })
    }
  }
})