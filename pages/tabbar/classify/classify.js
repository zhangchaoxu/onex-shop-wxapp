Page({
  data: {
    tabbar: [
      '推荐分类',
      '进口超市',
      '国际名牌',
      '奢侈品',
      '海囤全球',
      '男装',
      '女装',
      '男鞋',
      '女鞋',
      '钟表珠宝',
      '手机数码',
      '电脑办公',
      '家用电器',
      '玩具乐器',
      '运动户外',
      '宠物生活',
      '特产馆'
    ],
    height: 0, //scroll-view高度
    currentTab: 0, //预设当前项的值
    scrollViewId: "id_0"
  },
  onLoad: function (options) {
    setTimeout(() => {
      wx.getSystemInfo({
        success: res => {
          this.setData({
            height: res.windowHeight - res.windowWidth / 750 * 92
          });
        }
      });
    }, 50);
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    let cur = e.currentTarget.dataset.current;
    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.setData({
        currentTab:cur
      },()=>{
        this.checkCor();
      })
     
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 6) {
      this.setData({
        scrollViewId:`id_${this.data.currentTab - 2}`
      })
    } else {
      this.setData({
        scrollViewId:'id_0'
      })
    }
  },
  detail(e) {
    wx.navigateTo({
      url: '/pages/index/productDetail/productDetail'
    });
  },
  productList(e) {
    let key = e.currentTarget.dataset.key;
    wx.navigateTo({
      url: '/pages/index/productList/productList?searchKey=' + key
    });
  },
  search: function () {
    wx.navigateTo({
      url: '/pages/common/search/search'
    });
  }

})