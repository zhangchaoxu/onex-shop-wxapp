import tui from '../../../common/httpRequest'
Page({
  data: {
    isLogin: false,
    webURL: "https://www.thorui.cn/wx",
    top: 0, //标题图标距离顶部距离
    opcity: 0,
    scrollTop: 0.5,
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
  href(e) {
    let page = Number(e.currentTarget.dataset.page)
    let url = "";
    switch (page) {
      case 2:
        url = "/pages/my/set/set"
        break;
      case 3:
        url = "/pages/my/userInfo/userInfo"
        break;
      case 4:
        url = "/pages/my/myOrder/myOrder"
        break;
      case 6:
        url = "/pages/index/coupon/coupon"
        break;
      case 7:
        url = "/pages/my/message/message"
        break;
      case 8:
        url = "/pages/my/myCoupon/myCoupon"
        break;
      case 9:
        url = '/pages/my/myGroup/myGroup';
        break;
      case 10:
        url = '/pages/my/refundList/refundList';
        break;
      case 11:
        url = '/pages/my/wallet/wallet';
        break;
      default:
        break;
    }
    if (url) {
      if (page == 3 && !this.data.isLogin) {
        this.login()
      }else{
        tui.href(url);
      }
    } else {
      tui.toast("功能尚未完善~")
    }
  },
  detail: function () {
    wx.navigateTo({
      url: '/pages/index/productDetail/productDetail'
    })
  },
  initNavigation(e) {
    this.setData({
      opcity: e.detail.opacity,
      top: e.detail.top
    })
  },
  opcityChange(e) {
    this.setData({
      opcity: e.detail.opacity
    })
  },
  login() {
    this.setData({
      isLogin:true
    })
    tui.toast('模拟登录成功~')
  },
  onPageScroll(e) {
    this.setData({
      scrollTop: e.scrollTop
    })
  },
  onPullDownRefresh() {
    setTimeout(() => {
      wx.stopPullDownRefresh()
    }, 200)
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
        productList: this.data.productList.concat(loadData),
        pageIndex: this.data.pageIndex + 1,
        loadding: false
      })
    }
  }
})